import classNames from 'classnames/bind';
import styles from './LogoAndIcon.module.scss';
import Section from '~/components/common/Section';

import { logo } from '~/utils/images';

const cx = classNames.bind(styles);

function LogoAndIcon() {
    return (
        <Section title="Logo & Icon">
            {/* //FIXME - Chưa thực hiện chức năng tải được. */}
            <a href="/downloads/logo.jpg" className={cx('download-link')}>
                download logo files as .zip (1MB)
            </a>
            <img src={logo} alt="Molarvy Logo" className={cx('logo-image')} />
        </Section>
    );
}

export default LogoAndIcon;
