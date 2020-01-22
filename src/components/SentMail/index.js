import React from 'react';
import { connect } from 'react-redux';
import Envelop from '../../assets/illustrations/envelop.png';

import { EmailSent } from './sentMail.styled';

function SentMail({ sent }) {
  if (sent === true) {
    return (
      <EmailSent>
        <h1>Thank you!</h1>
        <p>You will hear from us soon. Please check your e-mail!</p>
        <img src={Envelop} alt="" />
      </EmailSent>
    );
  }
  return <></>;
}

export default connect(state => ({
  sent: state.sentMail,
}))(SentMail);
