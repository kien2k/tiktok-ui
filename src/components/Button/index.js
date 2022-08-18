import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    text = false,
    outline = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Compt = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        text,
        outline,
        rounded,
        disabled,
        small,
        large,
    });
    const props = {
        onClick,
        leftIcon,
        rightIcon,
        ...passProps,
    };

    //delete event when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Compt = Link;
    } else if (href) {
        props.href = href;
        Compt = 'a';
    }

    return (
        <Compt className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Compt>
    );
}

export default Button;
