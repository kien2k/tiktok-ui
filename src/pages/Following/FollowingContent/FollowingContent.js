import classNames from "classnames/bind";

import styles from "./FollowingContent.module.scss"
import UserItem from "./UserItem"

const cx = classNames.bind(styles)

function FollowingContent() {
    return ( 
        <div className={cx('wrapper')}>
            <UserItem/>
        </div>
     );
}

export default FollowingContent;