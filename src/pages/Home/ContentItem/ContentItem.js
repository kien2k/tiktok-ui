import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faCommentDots,
    faHeart,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './ContentItem.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import LinkShareList from '~/components/LinkShareList';
import VideoContent from "~/components/VideoContent"

const cx = classNames.bind(styles);
function ContentItem() {
    const renderLinkShare = (attrs) => (
        <div className={cx('share-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <LinkShareList />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <div className={cx('wrapper')}>
                <Image
                    src="https://rs.n1info.com/wp-content/uploads/2020/11/lionel-mesi-345492-960x625.jpeg"
                    alt="avatar"
                    className={cx('avatar')}
                ></Image>
                <div className={cx('content')}>
                    <div className={cx('info')}>
                        <Link to={'user'} className={cx('info-link')}>
                            <h3 className={cx('nick-name')}>
                                <strong>Levantrungkien</strong>
                                <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                            </h3>
                            <h4 className={cx('user-name')}>Le Van Trung Kien</h4>
                        </Link>
                        <Button outline small className={cx('btn')}>
                            Follow
                        </Button>
                        <div className={cx('caption')}>hello everyone</div>
                        <h4 className={cx('video-music')}>
                            <a src="#">
                                <div className="music-icon"></div>
                                Break angel - Music
                            </a>
                        </h4>
                    </div>
                    <div className={cx('video-wrapper')}>
                        <VideoContent/>
                        <div className={cx('interaction')}>
                            <div className={cx('interaction-item')}>
                                <div className={cx('interaction-btn')}>
                                    <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                                </div>
                                <strong>130K</strong>
                            </div>
                            <div className={cx('interaction-item')}>
                                <div className={cx('interaction-btn')}>
                                    <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                                </div>
                                <strong>500</strong>
                            </div>
                            <Tippy interactive delay={[0, 500]} placement="top-end" render={renderLinkShare}>
                                <div className={cx('interaction-item')}>
                                    <div className={cx('interaction-btn')}>
                                        <FontAwesomeIcon icon={faShare} className={cx('icon')} />
                                    </div>
                                    <strong>200</strong>
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;
