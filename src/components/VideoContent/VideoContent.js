import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faPause, faPlay, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

import styles from './VideoContent.module.scss';
import { useElementOnScreen } from '~/hooks/';

const cx = classNames.bind(styles);
function VideoContent({ data }) {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(true);

    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    //custom video auto playing
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };
    const isVisibile = useElementOnScreen(options, videoRef);

    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisibile]);

    return (
        <div className={cx('video-item')} onClick={handleVideo}>
            <video ref={videoRef} loop src={data.file_url} className={cx('video')}></video>
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
    );
}

export default VideoContent;
