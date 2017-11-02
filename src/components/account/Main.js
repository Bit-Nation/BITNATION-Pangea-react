import React from 'react';
import { Container, Form, Input, Button, Label } from 'native-base';

function AccountMain(props) {
  return (
    <Container>
      <Form>
        <Label>Name</Label>
        <Input />
        <Button>Save</Button>
      </Form>
    </Container>
  );
}

export default AccountMain;