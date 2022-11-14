import ContentItem from './ContentItem';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Home.module.scss';

import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);
function Home() {
    const [videos, getVideos] = useState([]);
    useEffect(() => {
        videoService
            .getVideo({ type: 'for-you', page: 5 })
            .then((data) => getVideos(data))
            .catch(() => console.log('error'));
    }, []);

    return (
        <div id="Home" className={cx('wrapper')}>
            {videos.map((video, index) => (
                <ContentItem key={index} data={video} />
            ))}
        </div>
    );
}

export default Home;
