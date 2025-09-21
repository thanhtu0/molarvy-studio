import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PressKitLayout.module.scss';
import { Sidebar } from '../components';

const cx = classNames.bind(styles);

function PressKitLayout({ children }) {
    const [activeSection, setActiveSection] = useState('factsheet');
    const handleNavItemClick = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div className={cx('pressKit-container')}>
            <div className={cx('sidebar-wrapper')}>
                <Sidebar activeSection={activeSection} onNavItemClick={handleNavItemClick} />
            </div>
            <div className={cx('main-content')}>{children}</div>
        </div>
    );
}

export default PressKitLayout;
