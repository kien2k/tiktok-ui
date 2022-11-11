import classNames from "classnames/bind";
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import {
    faPause,
    faPlay,
    faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';

import styles from "./VideoContent.module.scss"


const cx = classNames.bind(styles)
function VideoContent() {
    return (
        <div className={cx('video-item')}>
            <video src="" className={cx('video')}> 
            </video>
            <p className={cx('video-report')}>
                <FontAwesomeIcon icon={faFlag} className={cx('report-icon')} />
                Report
            </p>
            <p className={cx('toggle-play-btn')}>
                <FontAwesomeIcon icon={faPlay} className={cx('play-icon')} />
                <FontAwesomeIcon icon={faPause} className={cx('pause-icon')} />
            </p>
            <p className={cx('volume-btn')}>
                <FontAwesomeIcon icon={faVolumeHigh} className={cx('volume-icon')} />
            </p>
        </div>
    )
}

export default VideoContent;