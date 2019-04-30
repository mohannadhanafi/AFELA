import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Card, Button } from 'antd';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import Logo from '../Logo';
import Social from '../Social';
import Footer from '../Footer';
import ContactUs from '../ContactUs';
import General from '../General';
import OpenningHours from '../Hours';
import Additional from '../Additional/index';
import './style.css';

const { TabPane } = Tabs;

class index extends Component {
    state = {}

goToHome = () => {
  this.props.history.push('/admin/main');
}

onSave = () => {
  const { values } = this.props;

  axios
    .post('/api/v1/option', values)
    .then((result) => {
      const {
        data: { message },
        statusText,
      } = result;

      if (result.status === 200) {
        NotificationManager.success(message, 'SUCCESS', 2000);
        setTimeout(() => {
          this.setState({ disable: false });
        }, 3000);
      } else {
        NotificationManager.error(message || statusText, 'ERROR', 2000);
        setTimeout(() => {
          this.setState({ disable: false });
        }, 2000);
      }
    })
    .catch((error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      NotificationManager.error(message, 'ERROR', 2000);
      setTimeout(() => {
        this.setState({ disable: false });
      }, 2000);
    });
}

render() {
  const { role } = this.props;
  return (
    <Card className="gx-card" title="Settings">
      <div className="buttons">
        <Button className="spec--button" onClick={this.goToHome}>Cancel</Button>
        <Button className="spec--button" onClick={this.onSave}>Save</Button>
      </div>
      <Tabs>

        {role !== 'admin' ? (
          <TabPane disabled tab="General Settings" key="1" style={{ color: 'red' }} className="sticky-tab">
            <General />
          </TabPane>
        ) : (
          <TabPane tab="General Settings" key="1" style={{ color: 'red' }} className="sticky-tab">
            <General />
          </TabPane>
        )}

        <TabPane tab="Contact Us" key="2" style={{ color: 'red' }} className="sticky-tab">
          <ContactUs />
        </TabPane>

        <TabPane tab="Social Media" key="3" className="sticky-tab">
          <Social />
        </TabPane>

        <TabPane tab="Style" key="4" className="sticky-tab">
          <Logo />
        </TabPane>

        {role !== 'admin' ? (
          <TabPane disabled tab="Additional Codes" key="5" className="sticky-tab">
            <Additional />
          </TabPane>
        ) : (
          <TabPane tab="Additional Codes" key="5" className="sticky-tab">
            <Additional />
          </TabPane>
        )}

        <TabPane tab="Footer" key="6" className="sticky-tab">
          <Footer />
        </TabPane>

        <TabPane tab="Hours" key="7" className="sticky-tab">
          <OpenningHours />
        </TabPane>

      </Tabs>
      <NotificationContainer />
    </Card>
  );
}
}

const mapStateToProps = ({ auth, form }) => {
  const { role } = auth;
  const { values } = form;
  return {
    role,
    values,
  };
};
export default connect(mapStateToProps)(index);
