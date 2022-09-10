import classNames from 'classnames/bind';
import Button from '~/components/Button';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662602400&x-signature=QiFu19QyO2IC5vABO0fYgmZQX%2F4%3D"
                    alt="avatar"
                    className={cx('avatar')}
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nick-name')}>
                    <strong>Levantrungkien</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <p className={cx('user-name')}>Lê Văn Trung Kiên</p>
            </div>
            <div className={cx('analytics')}>
                <strong className={cx('value')}>7.1M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>467.8M </strong>
                <span className={cx('label')}>Likes</span>
            </div>
        </div>
    );
}

export default AccountPreview;
