import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    UsersGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UsersGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import * as followService from '~/services/followService';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUsers, getSuggestedUsers] = useState([]);
    const [followingUsers, getFollowingUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: 5 })
            .then((data) => {
                getSuggestedUsers(data);
            })
            .catch(() => console.log('error'));

        followService
            .getFollowing({ page: 1 })
            .then((data) => {
                console.log(data);
            })
            .catch(() => console.log('error'));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" icon={<HomeIcon />} to={config.routes.home} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    icon={<UsersGroupIcon />}
                    to={config.routes.following}
                    activeIcon={<UsersGroupActiveIcon />}
                />
                <MenuItem title="LIVE" icon={<LiveIcon />} to={config.routes.live} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
