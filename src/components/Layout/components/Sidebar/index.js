import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { menuItems } from '~/data/menuItems';

const cx = classNames.bind(styles);

const Sidebar = ({ activeSection, onNavItemClick }) => {
    const createId = (str) => str.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

    return (
        <div className={cx('sidebar-container')}>
            <header className={cx('sidebar-header')}>
                <h1>Molarvy Studio</h1>
                <a href="https://www.molarvystudio.com" target="_blank" rel="noopener noreferrer">
                    https://www.molarvystudio.com
                </a>
            </header>
            <nav>
                <ul>
                    {menuItems.map((item, index) => {
                        const itemId = createId(item);
                        const isActive = activeSection === itemId;

                        return (
                            <li key={index}>
                                <a
                                    href={`#${itemId}`}
                                    className={cx({ active: isActive })}
                                    onClick={() => onNavItemClick(itemId)}
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
