import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const accountPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview data={data} />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive delay={[900, 300]} placement="bottom" offset={[-22, 0]} render={accountPreview}>
                <div className={cx('account-item')}>
                    <Image src={data.avatar} alt={data.nickname} className={cx('avartar')} />
                    <div className={cx('info')}>
                        <h4 className={cx('nick-name')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                        </h4>
                        <p className={cx('user-name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
