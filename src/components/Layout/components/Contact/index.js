import React from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Section from '~/components/Section';

const cx = classNames.bind(styles);

const contactLinks = [
    {
        label: 'Inquiries',
        link: 'molarvy@gmail.com',
        displayText: 'contact.molarvy@gmail.com',
    },
    {
        label: 'X',
        link: 'https://x.com/MolarvyStudio',
        displayText: 'x.com/MolarvyStudio',
    },
    {
        label: 'Facebook',
        link: 'https://www.facebook.com/profile.php?id=61579850623704',
        displayText: 'https://www.facebook.com/profile.php?id=61579850623704',
    },
    {
        label: 'Web',
        link: 'https://www.molarvy-studio.com',
        displayText: 'https://www.molarvy-studio.com',
    },
];

function Contact() {
    return (
        <Section title="Contact">
            <div className={cx('contact-list')}>
                {contactLinks.map((contact, index) => (
                    <div key={index} className={cx('contact-item')}>
                        <p className={cx('contact-label')}>{contact.label}</p>
                        <a href={contact.link} className={cx('contact-link')} target="_blank" rel="noopener noreferrer">
                            {contact.displayText}
                        </a>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Contact;
