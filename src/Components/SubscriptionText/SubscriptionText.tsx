import './SubscriptionText.scss';
import winner from '../../assets/Union.png';

export interface SubscriptionStatus {
  subscriptionStatus: boolean,
}

const SubscriptionText = ({ subscriptionStatus }: SubscriptionStatus) => (
  <>

    {(subscriptionStatus)
      ? (
        <div className="subscribe__name-wrapper">
          <img className="subscribe__winnerImg" src={winner} alt="thanks for subscribing" />
          <h1 className="subscribe__name mtb-10">Thanks for subscribing!</h1>
          <span className="subscribe__text mtb-10">
            You have successfully subscribed to our email listing. Check your email for the discount code.
          </span>
        </div>
      )
      : (
        <div className="subscribe__name-wrapper">
          <h1 className="subscribe__name">Subscribe to newsletter</h1>
          <span className="subscribe__text">
            Subscribe to our newsletter and get 10% discount on pineapple glasses.
          </span>
        </div>
      )}
  </>
);

export default SubscriptionText;
