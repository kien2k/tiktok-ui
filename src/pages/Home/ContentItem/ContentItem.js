import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faHeart, faPause, faPlay, faShare, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './ContentItem.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import LinkShareList from '~/components/LinkShareList';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function ContentItem() {
    const renderLinkShare = (attrs) => (
        <div className={cx('share-list')} tabIndex="-1" {...attrs} >
            <PopperWrapper>
                <LinkShareList/>
            </PopperWrapper>
        </div>
    )
    
    return (
        <div >
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
                        <div className={cx('video-item')}>
                            <video
                                className={cx('video')}
                                src="https://v16-webapp.tiktok.com/a5660843eb5e9ef92b8d0632a8c26805/6364c836/video/tos/alisg/tos-alisg-pve-0037/ooIbUQBZVVfWAXnjj8BDbeZAEb3ChDCgQN1xBt/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1196&bt=598&cs=0&ds=3&ft=kLO5qy-gZmo0Pz2E3BkVQQjwDiHKJdmC0&mime_type=video_mp4&qs=0&rc=ZDk1NmZkOmdlaTVpNjk2ZEBpM3h4Zmc6ZnJvZzMzODgzNEAtYS01NTM0Xl8xMDFfNC5gYSMvYS5wcjRfYWFgLS1kLy1zcw%3D%3D&l=20221104020645010251065124101B50DD&btag=80000"
                            ></video>
                            <p className={cx('video-report')}>
                                <FontAwesomeIcon icon={faFlag} className={cx('report-icon')}/>  
                                Report
                            </p>
                            <p className={cx('toggle-play-btn')}>
                                <FontAwesomeIcon icon={faPlay} className={cx('play-icon')}/>  
                                <FontAwesomeIcon icon={faPause} className={cx('pause-icon')}/>  
                            </p>
                            <p className={cx('volume-btn')}>
                                <FontAwesomeIcon icon={faVolumeHigh} className={cx('volume-icon')}/>  
                            </p>
                        </div>
                        <div className={cx('interaction')}>
                            <div className={cx('interaction-item')}>
                                <div className={cx('interaction-btn')}>
                                    <FontAwesomeIcon icon={faHeart} className={cx("icon")}/>
                                </div>
                                <strong>130K</strong>
                            </div>
                            <div className={cx('interaction-item')}>
                                <div className={cx('interaction-btn')}>
                                    <FontAwesomeIcon icon={faCommentDots} className={cx("icon")}/>
                                </div>
                                <strong>500</strong>
                            </div>
                            <Tippy
                                 interactive
                                 delay={[0, 500]}
                                 placement="bottom-end"
                                render={renderLinkShare}
                                >
                                <div className={cx('interaction-item')}>
                                    <div className={cx('interaction-btn')}>
                                        <FontAwesomeIcon icon={faShare} className={cx("icon")}/>
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
