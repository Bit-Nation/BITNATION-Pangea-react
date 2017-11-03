import React from 'react';
import { Container, Content, Form, Input, Button, Text, Item } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Styles from '../styles/Styles';
import { login } from '../actions/auth';

function Login(props) {
  let username = null;
  let password = null;

  return (
    <Form style={Styles.loginForm}>
      <Item style={Styles.formInputItem}>
        <Input onEndEditing={(e) => { username = e.nativeEvent.text; }} style={Styles.formInput} placeholder="Username" />
      </Item>
      <Item style={Styles.formInputItem}>
        <Input onEndEditing={(e) => { password = e.nativeEvent.text; }} style={Styles.formInput} placeholder="Password" secureTextEntry />
      </Item>
      <Button onPress={() => props.login(username, password)} style={{ marginTop: 20, backgroundColor: '#3EA8F4' }} rounded primary block small badge>
        <Text>Login</Text>
      </Button>
    </Form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(undefined, {
  login,
})(Login);