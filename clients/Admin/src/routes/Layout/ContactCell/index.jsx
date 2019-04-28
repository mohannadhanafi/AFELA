import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import './style.css';
import { Popconfirm, Icon } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const DragHandle = SortableHandle(({
  name, onDelete, show, id, changeState,
}) => (
  <div className="handle">
    <span className="gx-draggable-icon gx-pt-2">


      <i
        className={`fas ${!show ? 'fa-eye-slash' : 'fa-eye'}`}
        style={{
          fontSize: 18,
          color: !show ? 'red' : 'green',
          margin: 10,
          cursor: 'pointer',
        }}
        onClick={() => changeState(id)}
      />
      {name !== 'trending' ? (
        <>
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
            className="icon icon-expand"
            style={{ fontSize: 18, color: 'green', margin: 10 }}
          />

        </>
      ) : null}

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
    const {
      show, id, name, threecats, type, layout_number,
    } = contact;
    return (
      <>

        <div className="gx-contact-item gx-dragndrop-item item-drag-drop">
          {type === 'category' ? (
            <>
              <img
                className="layout-image-small"
                alt=""
                src={require(`../layouts/${layout_number}.JPG`)}
              />
              {' '}

            </>
          )
            : name === 'three' ? (
              <>
                {' '}
                <img
                  className="layout-image-small"
                  alt=""
                  src={require('../layouts/threeC.jpg')}
                />

              </>
            ) : null}
          {name === 'three' ? (
            <div className="title-drag no-space">

              { threecats.map(cat => (
                <span style={{ marginLeft: 10 }}>{cat}</span>))
            }

            </div>

          ) : <span className="title-drag">{name}</span>
              }


          <DragHandle contact={contact} name={name} onDelete={() => onDelete(contact)} id={id} show={show} changeState={this.props.changeState} />

        </div>

      </>
    );
  }
}


export default SortableElement(ContactCell);
