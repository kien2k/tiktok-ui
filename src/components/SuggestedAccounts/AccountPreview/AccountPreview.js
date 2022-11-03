import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image src={data.avatar} alt={data.nickname} className={cx('avatar')} />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nick-name')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                </h4>
                <p className={cx('user-name')}>{`${data.first_name} ${data.last_name}`}</p>
            </div>
            <div className={cx('analytics')}>
                <strong className={cx('value')}>{data.followings_count} </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>{data.likes_count} </strong>
                <span className={cx('label')}>Likes</span>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
