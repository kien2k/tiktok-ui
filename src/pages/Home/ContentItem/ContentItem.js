import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faCommentDots,
    faHeart,
    faPause,
    faPlay,
    faShare,
    faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './ContentItem.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import LinkShareList from '~/components/LinkShareList';

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
                        <a src="" className={'info-link'}>
                            <h3 className={cx('nick-name')}>
                                <strong>Levantrungkien</strong>
                                <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                            </h3>
                            <h4 className={cx('user-name')}>Le Van Trung Kien</h4>
                        </a>
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
                                src="https://v16-webapp.tiktok.com/f0632f79ab14de08acb1d957f7de76dd/63676fe7/video/tos/maliva/tos-maliva-ve-0068c799-us/4c69a8dac0ac41528eca10fbf85e4a2f/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3096&bt=1548&cs=0&ds=2&ft=kLO5qy-gZmo0PPm83BkVQ1sxDiHKJdmC0&mime_type=video_mp4&qs=0&rc=OjU4OjM3ZTtnZmUzNTRoZUBpajtpdTU6ZjprZjMzZzczNEBeNl5fYzI0XmAxMl9hLTYtYSMtMDVocjQwMWNgLS1kMS9zcw%3D%3D&l=20221106022713010245242205151AC08F&btag=80000"
                            ></video>
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
