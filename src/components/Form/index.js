import React, { Component } from 'react';

import { FormContainer, FormComponent, EmailSent } from './Form.styled';
import { Button } from '../Button/Button.styled';
import Label from '../Label';
import Input from '../Input';
import Envelop from '../../assets/illustrations/envelop.png';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
  }

  render() {
    return (
      <FormContainer>
        <FormComponent>
          <h1>Nice pick!</h1>
          <p>
            Tell us your name and e-mail and we will get in touch about your
            order ;)
          </p>
          <Label text="Name" labelFor="name" />
          <Input placeholder="Crazy Plant Person" type="text" />
          <Label text="E-mail" />
          <Input placeholder="plantperson@email.com" type="email" />
          <Button type="button">send</Button>
        </FormComponent>
        <EmailSent>
          <h1>Thank you!</h1>
          <p>You will hear from us soon. Please check your e-mail!</p>
          <img src={Envelop} alt="" />
        </EmailSent>
      </FormContainer>
    );
  }
}
