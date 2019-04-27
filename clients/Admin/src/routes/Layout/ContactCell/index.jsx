import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import './style.css';

const DragHandle = SortableHandle(({ onDelete }) => (
  <div className="handle">
    <span className="gx-draggable-icon gx-pt-2">
      <i
        className="fas fa-trash-alt"
        onClick={onDelete}
        style={{
          fontSize: 20, color: 'red', margin: 10, cursor: 'pointer',
        }}
      />
      <i className="icon icon-expand" style={{ fontSize: 20, color: 'green', margin: 10 }} />


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
          <span className="title-drag">{name}</span>
          <DragHandle onDelete={() => onDelete(contact)} />
          <i
            className={`fas ${!show ? 'fa-eye-slash' : 'fa-eye'}`}
            style={{
              fontSize: 20, color: !show ? 'red' : 'green', margin: 10, cursor: 'pointer',
            }}
            onClick={() => this.props.changeState(id)}
          />
        </div>
      </>
    );
  }
}

export default SortableElement(ContactCell);
