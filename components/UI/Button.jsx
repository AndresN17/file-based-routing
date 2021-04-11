import Link from 'next/link';
import classes from './Button.module.css';

const Button = (props) => {

    if (props.link) {
        const { link } = props;
        return (
            <Link href={link}>
                <a className={classes.btn}>
                    {props.children}
                </a>
            </Link>
        )
    }

    return (
        <button
            className={classes.btn}
            onClick={props.onClick}>
            {props.children}
        </button>
    )

}

export default Button;