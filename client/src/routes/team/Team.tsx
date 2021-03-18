import { ReactElement, FC } from 'react';
import TeamMember from './TeamMember';
import styles from './Team.module.scss';

export const Team: FC = (): ReactElement => {
    const fetchAvatarURL = (assetName: string): string => require(`../../assets/avatars/team/${assetName}`).default;

    return (
        <div>
            <div className={styles.pinnedLinks}>
                <a className={styles.githubLink} href='https://github.com/Tekipeps/aul-forum' target='_blank'>
                    Check out this project on Github
                </a>
            </div>
            <div id={styles.heading}>Meet The Awesome Crew That Contributed To This Project.</div>
            <div id={styles.teamList}>
                <TeamMember
                    name='Tekena Solomon'
                    avatarURL={fetchAvatarURL('tekipeps.jpeg')}
                    bio=' Software developer from Port Harcourt, Nigeria. Loves building
          software to solve real world problems.'
                    role='Lead backend developer'
                    githubURL='https://github.com/Tekipeps'
                />
                <TeamMember
                    name='Koledoye Abidemi'
                    avatarURL={fetchAvatarURL('bidex.jpg')}
                    bio='  Frontend developer experienced with Java, TypeScript and
        Reactjs, develops web games with webcanvas, hates cats!'
                    role='Lead Frontend developer'
                    githubURL='https://github.com/BidemiEnoch'
                />
                <TeamMember
                    name='Emmanuel Itighise'
                    avatarURL={fetchAvatarURL('emedit.jpeg')}
                    bio='Freelance Frontend
        Developer, familiar with Reactjs, loves learning. Addicted to political issues.'
                    role='Frontend support'
                    githubURL='https://github.com/EmeditWeb'
                />

                <TeamMember
                    name='Osinowo Seun'
                    avatarURL={fetchAvatarURL('seun.jpeg')}
                    bio={'Loves to write PHP for serverside development, freelancer, big nerd...fine!! medium nerd.'}
                    role='Frontend support'
                    githubURL='https://github.com/seunosinowo'
                />
            </div>
        </div>
    );
};