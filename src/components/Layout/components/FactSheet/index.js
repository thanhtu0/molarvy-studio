import classNames from 'classnames/bind';
import styles from './FactSheet.module.scss';

import InfoItem from '~/components/InfoItem';
import { Link } from 'react-router-dom';
import Section from '~/components/common/Section';

const cx = classNames.bind(styles);

const FactSheet = () => {
    return (
        <div className={cx('factsheet-container')}>
            <Section title="FactSheet">
                <InfoItem label="Developer:">
                    <Link to="">Molarvy Studio</Link>
                    <p>Hue, VietNam</p>
                </InfoItem>

                <InfoItem label="Website:">
                    <a href="https://www.molarvy-studiocom" target="_blank" rel="noopener noreferrer">
                        https://www.molarvy-studio.com
                    </a>
                </InfoItem>

                <InfoItem label="Press / Business contact:">
                    <a href="molarvy@gmail.com">molarvy@gmail.com</a>
                </InfoItem>

                <InfoItem label="Social:">
                    <a href="https://x.com/MolarvyStudio" target="_blank" rel="noopener noreferrer">
                        x.com/MolarvyStudio
                    </a>

                    <a href="https://reddit.com/MolarvyStudioFirstGame" target="_blank" rel="noopener noreferrer">
                        reddit.com/MolarvyStudioFirstGame
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61579850623704"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        facebook.com/MolarvyStudio
                    </a>
                </InfoItem>

                <InfoItem label="Releases:">
                    <Link to="">The Ghost of Lake </Link>
                </InfoItem>

                <InfoItem label="Address:">
                    <p>Molarvy Studio</p>
                    <p>304 Bach Dang, Hue, VietNam</p>
                </InfoItem>

                <InfoItem label="Phone:">
                    <p>+84 378 214 843</p>
                </InfoItem>
            </Section>
        </div>
    );
};

export default FactSheet;
