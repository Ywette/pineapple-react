import './Subscribe.scss';
import { useState } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Form from '../../Components/Form/Form';
import SocialContacts from '../../Components/SocialContacts/SocialContacts';
import logoImage from '../../assets/image_summer.png';
import SubscriptionText from '../../Components/SubscriptionText/SubscriptionText';

const Subscribe = () => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="subscribe">
      <div className="subscribe__info">
        <Navigation />
        <SubscriptionText subscriptionStatus={subscribed} />
        {!subscribed
        && (
        <Form
          setSubscribe={() => setSubscribed(true)}
        />
        )}
        <div className="form__social-icon-wrapper mtb-10">
          <SocialContacts />
        </div>

      </div>
      <div className="subscribe__image-wrapper" />
    </div>
  );
};
export default Subscribe;
