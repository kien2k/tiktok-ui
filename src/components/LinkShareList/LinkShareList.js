import classNames from 'classnames/bind';

import styles from './LinkShareList.module.scss';
import { CopyLinkIcon, EmbedIcon, FacebookIcon, SendToIcon, WhatsAppIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function LinkShareList() {
    return (
        <div className={cx('wrapper')}>
            <a href="#" className={cx('share-item')}>
                <EmbedIcon className={cx('share-icon')} />
                <p className={cx('share-text')}>Embed</p>
            </a>
            <a href="#" className={cx('share-item')}>
                <SendToIcon className={cx('share-icon')} />
                <p className={cx('share-text')}>Send to friends</p>
            </a>
            <a href="#" className={cx('share-item')}>
                <FacebookIcon className={cx('share-icon')} />
                <p className={cx('share-text')}>Share to Facebook</p>
            </a>
            <a href="#" className={cx('share-item')}>
                <WhatsAppIcon className={cx('share-icon')} />
                <p className={cx('share-text')}>Share to WhatsApp</p>
            </a>
            <a href="#" className={cx('share-item')}>
                <CopyLinkIcon className={cx('share-icon')} />
                <p className={cx('share-text')}>Copy Link</p>
            </a>
        </div>
    );
}

export default LinkShareList;
