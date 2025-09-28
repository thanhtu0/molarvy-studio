import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import Section from '~/components/common/Section';

import { poster } from '~/utils/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const imageList = [
    {
        src: poster,
        alt: 'molarvy-studio team photo one',
    },
    {
        src: poster,
        alt: 'molarvy-studio team photo two',
    },
];

function Images() {
    return (
        <Section title="Images">
            <div className={cx('image-grid')}>
                {imageList.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} className={cx('grid-image')} />
                ))}
            </div>
            <p className={cx('image-caption')}>
                There are far more images available for molarvy-studio, but these are the ones we felt would be most
                useful to you. If you have specific requests, please{' '}
                <Link to="mailto:contact@molarvy-studio.ch">contact us!</Link>
            </p>
        </Section>
    );
}

export default Images;
