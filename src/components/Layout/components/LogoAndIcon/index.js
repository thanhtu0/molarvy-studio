import classNames from 'classnames/bind';
import styles from './LogoAndIcon.module.scss';
import Section from '~/components/common/Section';

import { logo } from '~/utils/images';

const cx = classNames.bind(styles);

function LogoAndIcon() {
    return (
        <Section title="Logo & Icon">
            <a href="/downloads/logo.rar" download className={cx('download-link')}>
                download logo files (.rar)
            </a>
            <img src={logo} alt="Molarvy Logo" className={cx('logo-image')} />
        </Section>
    );
}

export default LogoAndIcon;
