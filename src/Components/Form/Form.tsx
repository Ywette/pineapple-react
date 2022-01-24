import './Form.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import SubscribeButton from '../Button/SubscribeButton';

const initialErrors = {
  email: '',
  checkBox: '',
};

const initialInputs = {
  email: '',
  checkBox: false,
};

interface FormProps {
  setSubscribe: ()=> void,
}

const Form = ({ setSubscribe }: FormProps) => {
  const [inputs, setInputs] = useState(initialInputs);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);

  const validation = () => {
    const emailValidation = (/^\w+([.-]?\w+)*@\w+([s.-]?\w+)*(\.\w{2,3})+$/);
    let message = '';
    let checkBoxError = '';

    if (inputs.email === '') {
      message = 'Email address is required';
    } else if (inputs.email.slice(inputs.email.length - 3) === '.co') {
      message = 'We are not accepting subscription from Colombia mails';
    } else if (!emailValidation.test(inputs.email)) {
      message = 'Please provide a valid e-mail address';
    }

    if (!inputs.checkBox) {
      checkBoxError = 'You must accept the terms and conditions';
    }
    setFormErrors({ email: message, checkBox: checkBoxError });

    if (message === '' && checkBoxError === '') {
      setFormErrors(initialErrors);
      setDisabled(false);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    validation();
    if (formErrors === initialErrors) {
      setSubscribe();
      setInputs(initialInputs);
    }
  };

  useEffect(() => {
    if (inputs !== initialInputs) {
      validation();
    }
  }, [inputs]);

  useEffect(() => {
    setDisabled(true);
  }, []);

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <div
          className="form__input-wrapper mtb-10"
        >
          <Input
            className="form__input-email"
            autocomplete="off"
            type="text"
            name="email"
            placeholder="Type your email address here..."
            value={inputs.email || ''}
            onChange={(e) => {
              setInputs({ ...inputs, email: e.target.value });
            }}
          />
          <SubscribeButton
            type="submit"
            disabled={disabled}
            className="form__submit"
            value=""
          />
          <span className="form__error">{formErrors.email}</span>
        </div>

        <div className="form__checkbox-wrapper mtb-10">
          <label className="form__checkbox-label" htmlFor="form__checkbox">
            <span className={`form__checkbox-span ${inputs.checkBox && 'checked'}`} />
            <Input
              id="form__checkbox"
              className="form__checkbox"
              name="checkbox"
              type="checkbox"
              onChange={() => {
                setInputs({ ...inputs, checkBox: !inputs.checkBox });
              }}
            />
            I agree to
            <Link to="/howItWorks">
              <u className="navigation__link form__terms-link"> terms of service</u>
            </Link>
          </label>
          <span className="form__error">{formErrors.checkBox}</span>
        </div>
      </form>
    </div>

  );
};

export default Form;
