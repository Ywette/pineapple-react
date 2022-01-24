import './SocialContacts.scss';

const socialIcons = [
  { name: 'facebook' },
  { name: 'instagram' },
  { name: 'twitter' },
  { name: 'youtube-play' },
];

const SocialContacts = () => (
  <>
    {socialIcons.map((icon) => (
      <div
        className={`form__social-icon center fa fa-${icon.name}`}
        key={icon.name}
      />
    ))}
  </>
);
export default SocialContacts;
