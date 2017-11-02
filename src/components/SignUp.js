import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Form, Input, Button } from 'native-base';

function SignUp(props) {
  return (
    <Container>
      <Form>
        <Input />
        <Button>Sign Up</Button>
      </Form>
    </Container>
  );
}

export default SignUp;