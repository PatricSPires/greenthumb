import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';

import { FormContainer, Error, Input } from './Form.styled';
import { SmallButton } from '../Button/Button.styled';
import Label from '../Label';
import SentMail from '../SentMail';

class GreenThumbForm extends Component {
  handleSendMail = sent => {
    const { dispatch } = this.props;

    dispatch({
      type: 'SEND_MAIL',
      sent,
    });
  };

  render() {
    return (
      <>
        <FormContainer>
          <h1>Nice pick!</h1>
          <p>
            Tell us your name and e-mail and we will get in touch about your
            order ;)
          </p>
          <Formik
            initialValues={{ name: '', email: '' }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(10, 'Name and surname')
                .max(70, 'Too Long')
                .required('Your name is required'),
              email: Yup.string()
                .email()
                .required('Please provide a valid e-mail.'),
            })}
            onSubmit={async values => {
              const { name, email } = values;
              const plant = localStorage.getItem('plant');

              await api
                .post({
                  name,
                  email,
                  id: plant,
                })
                .then(this.handleSendMail(true));
            }}
          >
            {({ errors, touched, handleSubmit }) => {
              return (
                <>
                  <Form name="contact" method="post" onSubmit={handleSubmit}>
                    <Label text="Name" htmlFor="name" />
                    <Input
                      placeholder="Crazy Plant Person"
                      type="text"
                      name="name"
                      error={touched.name && errors.name}
                    />
                    <Error>
                      <ErrorMessage name="name" />
                    </Error>
                    <Label text="E-mail" />
                    <Input
                      placeholder="plantperson@email.com"
                      type="text"
                      name="email"
                      error={touched.email && errors.email}
                    />
                    <Error>
                      <ErrorMessage name="email" />
                    </Error>
                    <SmallButton type="submit">send</SmallButton>
                  </Form>
                </>
              );
            }}
          </Formik>
          <SentMail />
        </FormContainer>
      </>
    );
  }
}

export default connect()(GreenThumbForm);
