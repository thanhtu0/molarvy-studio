import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Section from '~/components/common/Section';
import { contactLinks } from '~/data/contactsData';

const cx = classNames.bind(styles);

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
