/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import {
  Col, Row, Card, Button, Spin,
} from 'antd';
import './style.css';
import axios from 'axios';

import { arrayMove, SortableContainer } from 'react-sortable-hoc';
import Modal from './Modal';

import ContactCell from './ContactCell/index.jsx';

const Contacts = SortableContainer(
  ({
    contacts, changeState, openModal, handleSave, onDelete,
  }) => (
    <Col span={24}>
      {contacts.map((contact, index) => (
        <ContactCell
          disabled={contact.name === 'trending'}
          key={index}
          index={index}
          contact={contact}
          changeState={changeState}
          onDelete={onDelete}
        />
      ))}
    </Col>
  ),
);

class DragNDrop extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      contacts: [],
      layout_number: '',
      category: '',
      catName: '',
      layout_number: '',
      type: '',
      loading: true,

    };
  }

  componentWillMount() {
    axios.get('/api/v1/home/layouts').then((result) => {
      const { data: contacts } = result;
      this.setState(() => ({ contacts, loading: false }));
    });
  }

  onDelete = (element) => {
    const { id } = element;
    const { contacts } = this.state;
    contacts.map((e, index) => {
      if (e.id === id) {
        return contacts.splice(index, 1);
      }
    });
    axios.delete('/api/v1/home/layouts', { data: { id } }).then(() => {
      this.setState(() => ({ contacts }));
    });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { contacts } = this.state;
    const newContacts = arrayMove(contacts, oldIndex, newIndex);
    newContacts.map((contact, index) => (contact.position = index));
    this.setState({
      contacts: newContacts,
    });
  };

  handleSave = () => {
    const { contacts } = this.state;
    axios.post('/api/v1/home/layouts', contacts).then((r) => {});
  };

  handleCancel = () => {
    this.setState(() => ({ visible: false }));
  };

  handleOk = () => {
    const { catName, layout_number, type } = this.state;
    const obj = {
      catName,
      layout_number,
      type,
    };
    const { contacts } = this.state;
    axios.post('/api/v1/home/layout/create', { obj }).then((result) => {
      const { data } = result;
      contacts.push(data);
      this.setState({ contacts, visible: false });
    });
  };

  handleChange = (value) => {
    this.setState(() => ({ type: value }));
  };

  openModal = () => {
    this.setState(() => ({
      visible: true,
    }));
  };

  changeState = (id) => {
    const { contacts } = this.state;
    contacts.map((element) => {
      if (element.id === id) {
        return (element.show = !element.show);
      }
    });
    this.setState(() => ({ contacts }));
  };

  setCatName = (value) => {
    this.setState(() => ({ catName: value }));
  };

  radioChange = (e) => {
    this.setState({
      layout_number: e.target.value,
    });
  };

  render() {
    const {
      contacts, visible, category, type, loading,
    } = this.state;
    return (
      <>
        <Card loading={loading}>
          <div className="gx-main-content gx-mb-4">
            <Button
              type="primary"
              className="layout-button"
              onClick={this.openModal}
              style={{ width: '30%', height: 40, margin: '0 auto' }}
            >
              {' '}
Create New Section in Home Page

            </Button>

            <Row>
              {/* <Col span={5}>
              <Card style={{ marginTop: 20 }}>
              </Card>
            </Col> */}
              {contacts.length ? (
                <Contacts
                  contacts={contacts}
                  onSortEnd={this.onSortEnd}
                  useDragHandle
                  changeState={this.changeState}
                  openModal={this.openModal}
                  handleSave={this.handleSave}
                  onDelete={this.onDelete}
                />
              ) : null}
            </Row>
          </div>
          <Button type="primary" className="layout-button" onClick={this.handleSave} style={{ float: 'right' }}>SAVE</Button>

        </Card>
        <Modal
          visible={visible}
          handleCancel={this.handleCancel}
          onSubmit={this.handleOk}
          category={category}
          setCatName={this.setCatName}
          radioChange={this.radioChange}
          handleChange={this.handleChange}
          type={type}
        />
      </>
    );
  }
}

export default DragNDrop;
