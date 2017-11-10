import React from 'react';
import { Form, Input, Button, Label, InputGroup } from 'native-base';

function AccountMain() {
  return (
    <Form>
      <InputGroup>
        <Label>Name</Label>
        <Input />
      </InputGroup>
      <InputGroup>
        <Label>Description</Label>
        <Input />
      </InputGroup>
      <Button>Save</Button>
    </Form>
  );
}

export default AccountMain;
