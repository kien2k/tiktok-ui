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

const cx = classNames.bind(styles);

function Sidebar() {
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
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
