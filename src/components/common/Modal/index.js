import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Modal = ({ show, onClose, title, children }) => {
    if (!show) {
        return null;
    }

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={cx('overlay')} onClick={onClose}>
            <div className={cx('modal-content')} onClick={handleContentClick}>
                <div className={cx('modal-header')}>
                    <h2 className={cx('modal-title')}>{title}</h2>
                    <Button closeIcon onClick={onClose}>
                        {<i class="fa-solid fa-xmark"></i>}
                    </Button>
                </div>
                <div className={cx('modal-body')}>{children}</div>
                <div className={cx('modal-footer')}>
                    <Button closeBtn onClick={onClose}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
