import classNames from 'classnames';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './ContentItem.modules.scss';

const cx = classNames.bind(styles);
function ContentItem() {
    return (
        <div className="">
            <div className={cx('wrapper')}>
                <Image
                    src="https://rs.n1info.com/wp-content/uploads/2020/11/lionel-mesi-345492-960x625.jpeg"
                    alt="avatar"
                    className="avatar"
                ></Image>
                <div className={cx('content')}>
                    <div className={cx('info')}>
                        <a src="" className={'info-link'}>
                            <h3 className={cx('nick-name')}>
                                <strong>Levantrungkien</strong>
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
                                Break angel
                            </a>
                        </h4>
                    </div>
                    <div className={cx('video-wrapper')}>
                        <div className={cx('video-item')}>
                            <video
                                className={cx('video')}
                                src="https://v16-webapp.tiktok.com/c13c2260d7982fb94f79aadb1a5e505c/636439f7/video/tos/useast2a/tos-useast2a-pve-0037-aiso/cf4142acf74441f18ccbfb039e32e27a/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2474&bt=1237&cs=0&ds=3&ft=WgGbvNM6VQ9wUZ-_C1W.CSpxatk3hdxwi4F5Vrl8eC_O&mime_type=video_mp4&qs=0&rc=Z2c6O2Y5OjdlNmU5Z2VlZUBpM3FsNDU6ZjY0ZzMzZjgzM0A2MWEvNmBfXzQxMDBfNGEvYSNgLi40cjRvZTRgLS1kL2Nzcw%3D%3D&l=202211031600120102452472031F106834&btag=80000"
                            ></video>
                        </div>
                        <div className={cx('interaction-item')}>
                            <div className="heart">130K</div>
                            <div className="comment">500</div>
                            <div className="share">200</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;
