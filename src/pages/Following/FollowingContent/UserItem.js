import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import styles from "./FollowingContent.module.scss"
import Button from "~/components/Button";

const cx = classNames.bind(styles)
function UserItem() {
    return ( 
         <div className={cx('recommemd-user')}>
            <Link to={""} className={cx('info-link')}>
                <div className={cx('video-item')}>
                    <video src=""></video>
                </div>
                <div className={cx('info')}>
                    <h4 className={cx('user-name')}>Lê Văn Trung Kiên</h4>
                    <h3 className={cx('nick-name')}>
                        <strong>trungkien</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                    </h3>
                    <Button primary large_width className={cx('btn')} >Follow</Button>
                </div>
            </Link>
        </div>
     );
}

export default UserItem;