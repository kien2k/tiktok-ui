import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';

const cx = classNames.bind(styles);
function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4cfaa5c14950b5d6fea7def263c50c7e~c5_300x300.webp?x-expires=1660726800&x-signature=uZ4dFunKqFTox%2BfgtLnEc7%2FQFUo%3D"
                alt="kien"
                className={cx('avatar')}
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Lê văn Trung Kiên
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>tkien_simle</p>
            </div>
        </div>
    );
}

export default AcountItem;
