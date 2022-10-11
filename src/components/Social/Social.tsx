import styles from './styles.module.scss';
import Facebook from 'assets/images/fb.svg';
import Instagram from 'assets/images/insta.svg';
import Twitter from 'assets/images/twitter.svg';
import Youtube from 'assets/images/youtube.svg';
import { SocialLink } from './SocialLink';
import { ISocial } from 'interfaces';

const social = [
  { name: Facebook, address: 'https://www.facebook.com/' },
  { name: Instagram, address: 'https://www.twitter.com/' },
  { name: Twitter, address: 'https://www.twitter.com/'  },
  { name: Youtube, address: 'https://www.youtube.com/' },
] as ISocial[];

export function Social() {
  return (
    <div className={ styles.socialContainer }>
      {social.map((icon, idx) => (
        <SocialLink
          icon={icon}
          key={idx}
        />
      ))}
    </div>
  );
}
