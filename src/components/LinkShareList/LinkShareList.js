import classNames from 'classnames/bind';
import { faFacebook, faFacebookF, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./LinkShareList.module.scss"
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {EmbedIcon} from "~/components/Icons"

const cx = classNames.bind(styles)
function LinkShareList() {
    return (
        <div className={cx('wrapper')}>
            <a href='#' className={cx('share-item')}>
                <FontAwesomeIcon icon={faFacebook} className={cx('share-icon','black')}/>
                <p className={cx('share-text')}>Embed</p>
            </a>
            <a href='#' className={cx('share-item')}>
                <FontAwesomeIcon icon={faPaperPlane} className={cx('share-icon','pink')}/>
                <p className={cx('share-text')}>Send to friends</p>
            </a>
            <a href='#' className={cx('share-item')}>
                <FontAwesomeIcon icon={faFacebook} className={cx('share-icon','blue')}/>
                <p className={cx('share-text')}>Share to Facebook</p>
            </a>
            <a href='#' className={cx('share-item')}>
                <FontAwesomeIcon icon={faSquareWhatsapp} className={cx('share-icon','green')}/>
                <p className={cx('share-text')}>Share to WhatsApp</p>
            </a>
            <a href='#' className={cx('share-item')}>
                <FontAwesomeIcon icon={faFacebook} className={cx('share-icon','pink')}/>
                <p className={cx('share-text')}>Copy Link</p>
            </a>
        </div> 
    )
}

export default LinkShareList ;