import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    const accountPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive delay={[900, 300]} placement="bottom" offset={[-22, 0]} render={accountPreview}>
                <div className={cx('account-item')}>
                    <Image
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662602400&x-signature=QiFu19QyO2IC5vABO0fYgmZQX%2F4%3D"
                        alt="avatar"
                        className={cx('avartar')}
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('nick-name')}>
                            <strong>Levantrungkien</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </h4>
                        <p className={cx('user-name')}>Lê Văn Trung Kiên</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
