import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormContainer, Error, EmailSent, Input } from './Form.styled';
import { Button } from '../Button/Button.styled';
import Label from '../Label';
import Envelop from '../../assets/illustrations/envelop.png';

function GreenThumbForm() {
  return (
    <FormContainer>
      <h1>Nice pick!</h1>
      <p>
        Tell us your name and e-mail and we will get in touch about your order
        ;)
      </p>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long')
            .required('Your name is required'),
          email: Yup.string()
            .email()
            .required('Please provide a valid e-mail.'),
        })}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
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
                <Button type="submit">send</Button>
                <EmailSent>
                  <h1>Thank you!</h1>
                  <p>You will hear from us soon. Please check your e-mail!</p>
                  <img src={Envelop} alt="" />
                </EmailSent>
              </Form>
            </>
          );
        }}
      </Formik>
    </FormContainer>
  );
}

export default GreenThumbForm;
