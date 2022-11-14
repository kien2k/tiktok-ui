import classNames from "classnames/bind";

import styles from "./Following.module.scss"
import FollowingContent from "./FollowingContent";

const cx = classNames.bind(styles)
function Following() {
    return (
        <div className={cx('wrapper')}>
            <FollowingContent/>
        </div>
    );
}

export default Following;
