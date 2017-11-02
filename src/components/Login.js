import React from 'react';
import { Container, Form, Input, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import Styles from '../styles/Styles';

function Login(props) {
  return (
    <Container style={Styles.container}>
      <Form>
        <Input label="Username" />
        <Input label="Password" />
        <Button style={{ marginBottom: 20 }} primary>
          <Text>Login</Text>
        </Button>
      </Form>
    </Container>
  );
};

export default connect(undefined, {

})(Login);