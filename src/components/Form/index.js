import React, { Component } from 'react';

import { FormComponent } from './Form.styled';
import { Button } from '../Button/Button.styled';
import Label from '../Label';
import Input from '../Input';

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
      <FormComponent>
        <h1>Nice pick!</h1>
        <p>
          Tell us your name and e-mail and we will get in touch regarding your
          order ;)
        </p>
        <Label text="Name" labelFor="name" />
        <Input placeholder="Crazy Plant Person" type="text" />
        <Label text="E-mail" />
        <Input placeholder="plantperson@email.com" type="email" />
        <Button>send</Button>
      </FormComponent>
    );
  }
}
