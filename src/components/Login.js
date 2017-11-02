import React from 'react';
import { Container, Content, Form, Input, Button, Text, Item, H1 } from 'native-base';
import { connect } from 'react-redux';
import Styles from '../styles/Styles';

function Login(props) {
  return (
    <Form style={Styles.loginForm}>
      <Item>
        <H1>Login</H1>
      </Item>
      <Item>
        <Input placeholder="Username" />
      </Item>
      <Item last>
        <Input placeholder="Password" />
      </Item>
      <Button style={{ marginBottom: 20 }} primary block>
        <Text>Login</Text>
      </Button>
    </Form>
  );
};

export default connect(undefined, {

})(Login);