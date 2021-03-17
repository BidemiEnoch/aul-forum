import { ReactElement, FC } from 'react';
import { Link } from 'react-router-dom';
import ParentResizeListener from '../reusable/ParentResizeListener';
import anchorLogo from '../../assets/images/anchor-logo.png';
import styles from './NavigationBar.module.scss';

const RouteButton: FC<{ route: string }> = ({ route }): ReactElement => {
    const slashIndex = route.indexOf('/');
    const end = slashIndex === -1 ? route.length : slashIndex;
    const name = route.charAt(0).toUpperCase() + route.slice(1, end);

    return (
        <ParentResizeListener>
            <div>
                <Link to={`/${route}`}>{name}</Link>
            </div>
        </ParentResizeListener>
    );
};

const Routes: FC = (): ReactElement => (
    <div id={styles.routes}>
        <RouteButton route='home/most-recent' />
        <RouteButton route='login' />
        <RouteButton route='register' />
        <RouteButton route='team' />
    </div>
);

export const NavBar: FC = (): ReactElement => (
    <nav id={styles.navbar}>
        <div id={styles.logo}>
            <div>
                <img src={anchorLogo} />
            </div>
            <div>AUL Forum</div>
        </div>
        <Routes />
    </nav>
);
