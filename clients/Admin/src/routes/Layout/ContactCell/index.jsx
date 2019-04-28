import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import './style.css';
import { Popconfirm, Icon } from 'antd';

const DragHandle = SortableHandle(({ onDelete, show, id }) => (
  <div className="handle">
    <span className="gx-draggable-icon gx-pt-2">

      <Popconfirm title="Are you sure ？" icon={<Icon type="question-circle-o" style={{ color: 'red' }} />} onConfirm={onDelete}>

        <i
          className="fas fa-trash-alt"
          style={{
            fontSize: 18,
            color: 'red',
            margin: 10,
            cursor: 'pointer',
          }}
        />
      </Popconfirm>
      <i
        className={`fas ${!show ? 'fa-eye-slash' : 'fa-eye'}`}
        style={{
          fontSize: 18,
          color: !show ? 'red' : 'green',
          margin: 10,
          cursor: 'pointer',
        }}
        onClick={() => this.props.changeState(id)}
      />
      <i
        className="icon icon-expand"
        style={{ fontSize: 18, color: 'green', margin: 10 }}
      />

    </span>
  </div>
));

class ContactCell extends React.Component {
  constructor() {
    super();
    this.state = {
      addContactState: false,
    };
  }

  render() {
    const { contact, onDelete } = this.props;
    const { show, id, name } = contact;
    return (
      <>
        <div className="gx-contact-item gx-dragndrop-item item-drag-drop">
          {contact.type === 'category' ? (
            <>
              <img
                className="layout-image-small"
                alt=""
                src={require(`../layouts/${contact.layout_number}.JPG`)}
              />
              {' '}

            </>
          )
            : null}

          <span className="title-drag">{name}</span>


          {contact.type === 'category' ? (
            <>
              <DragHandle contact={contact} onDelete={() => onDelete(contact)} id={id} show={show} />
            </>
          )
            : null}
        </div>
      </>
    );
  }
}


export default SortableElement(ContactCell);
