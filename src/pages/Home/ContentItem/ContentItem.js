import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './ContentItem.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import LinkShareList from '~/components/LinkShareList';
import VideoContent from '~/components/VideoContent';

const cx = classNames.bind(styles);
function ContentItem({ data }) {
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
                <Image src={data.user.avatar} alt="avatar" className={cx('avatar')}></Image>
                <div className={cx('content')}>
                    <div className={cx('info')}>
                        <Link to={'@user'} className={cx('info-link')}>
                            <h3 className={cx('nick-name')}>
                                <strong>{data.user.nickname}</strong>
                                <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                            </h3>
                            <h4 className={cx('user-name')}>{`${data.user.first_name}${data.user.last_name}`}</h4>
                        </Link>
                        <Button outline small className={cx('btn')}>
                            Follow
                        </Button>
                        <div className={cx('caption')}>{data.description}</div>
                        <h4 className={cx('video-music')}>
                            <a src="#">
                                <div className="music-icon"></div>
                                {data.music}
                            </a>
                        </h4>
                    </div>
                    <div className={cx('video-wrapper')}>
                        <VideoContent data={data} />
                        <div className={cx('interaction')}>
                            <div className={cx('interaction-item')}>
                                <div className={cx('interaction-btn')}>
                                    <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                                </div>
                                <strong>{data.likes_count}</strong>
                            </div>
                            <div className={cx('interaction-item')}>
                                <div className={cx('interaction-btn')}>
                                    <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                                </div>
                                <strong>{data.comments_count}</strong>
                            </div>
                            <Tippy interactive delay={[0, 500]} placement="top-end" render={renderLinkShare}>
                                <div className={cx('interaction-item')}>
                                    <div className={cx('interaction-btn')}>
                                        <FontAwesomeIcon icon={faShare} className={cx('icon')} />
                                    </div>
                                    <strong>{data.shares_count}</strong>
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
