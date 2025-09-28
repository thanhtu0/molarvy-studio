import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    fill = false,
    outline = false,
    viewMore = false,
    disabledButton = false,
    iconSize = '2.8rem',
    iconMargin = '16px',
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabledButton) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('button-styles', {
        [className]: className,
        fill,
        outline,
        disabledButton,
        viewMore,
    });

    delete props.icon;

    return (
        <Comp className={classes} {...props}>
            <span className={cx('title_button')}>{children}</span>
        </Comp>
    );
}

export default Button;
