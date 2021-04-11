import Link from 'next/link';
import { Fragment } from 'react';
import classes from './Main-Header.module.css';

const Mainheader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">Next Events</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li><Link href="/events">All Events</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Mainheader;
