import React, { Component } from 'react';
import {
  Col, Row, Card, Button,
} from 'antd';
import './style.css';
import axios from 'axios';

import { arrayMove, SortableContainer } from 'react-sortable-hoc';
import Modal from './Modal';


import ContactCell from './ContactCell/index.jsx';

const Contacts = SortableContainer(({
  contacts, changeState, openModal, handleSave,
}) => (
  <Row>
    <Col span={5}>
      <Card style={{ marginTop: 20 }}>
        <Button type="primary" className="layout-button" onClick={openModal}> ADD CATEGORY</Button>
        <Button type="primary" className="layout-button" onClick={handleSave}>SAVE</Button>
      </Card>
    </Col>
    <Col span={19}>
      {contacts.map((contact, index) => (
        <ContactCell key={index} index={index} contact={contact} changeState={changeState} />
      ))}
    </Col>
  </Row>
));

class DragNDrop extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      contacts: [],
    };
  }

  componentWillMount() {
    axios.get('/api/v1/home/layouts').then((result) => {
      const { data: contacts } = result;
      this.setState(() => ({ contacts }));
    });
  }

onSortEnd = ({ oldIndex, newIndex }) => {
  const { contacts } = this.state;
  const newContacts = arrayMove(contacts, oldIndex, newIndex);
  newContacts.map((contact, index) => contact.position = index);
  this.setState({
    contacts: newContacts,
  });
};

handleSave = () => {
  const { contacts } = this.state;
  axios.post('/api/v1/home/layouts', contacts).then((r) => {

  });
}

handleCancel = () => {
  this.setState(() => ({ visible: false }));
}

openModal = () => {
  this.setState(() => ({
    visible: true,
  }));
}

changeState = (id) => {
  const { contacts } = this.state;
  contacts.map((element) => {
    if (element.id === id) {
      return element.show = !element.show;
    }
  });
  this.setState(() => ({ contacts }));
}

render() {
  const { contacts, visible } = this.state;
  return (
    <>
      <Card title="HOME PAGE CONTENT">
        <div className="gx-main-content gx-mb-4">
          {contacts.length ? (
            <Contacts
              contacts={contacts}
              onSortEnd={this.onSortEnd}
              useDragHandle
              changeState={this.changeState}
              openModal={this.openModal}
              handleSave={this.handleSave}
            />
          ) : null}
        </div>

      </Card>
      <Modal visible={visible} handleCancel={this.handleCancel} />
    </>
  );
}
}

export default DragNDrop;
