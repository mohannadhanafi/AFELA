import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, notification, Icon } from 'antd';
import { Link } from 'react-router-dom';

import CustomScrollbars from 'util/CustomScrollbars';
import Auxiliary from 'util/Auxiliary';

import SidebarLogo from './SidebarLogo.jsx';

import AppsNavigation from './AppsNavigation.jsx';
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from '../../constants/ThemeSetting';
import IntlMessages from '../../util/IntlMessages';

const { SubMenu } = Menu;

class SidebarContent extends Component {
  getNoHeaderClass = (navStyle) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR
      || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return 'gx-no-header-notifications';
    }
    return '';
  };

  getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return 'gx-no-header-submenu-popup';
    }
    return '';
  };

  render() {
    const {
      themeType, navStyle, pathname, role, authUser,
    } = this.props;


    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    return (
      <Auxiliary>
        <SidebarLogo />
        <div className="gx-sidebar-content">
          <CustomScrollbars className="gx-layout-sider-scrollbar">
            <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
              mode="inline"
            >
              <Menu.Item key="main">
                <Link to="/admin/main">
                  <i className="icon icon-home" />
                  <IntlMessages id="sidebar.main" />
                </Link>
              </Menu.Item>
              {role === 'admin' ? (
                <SubMenu
                  key="users"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={(
                    <span>
                      {' '}
                      <i className="icon icon-user" />
                      <IntlMessages id="sidebar.users" />
                    </span>
)}
                >
                  <Menu.Item key="users/view">
                    <Link to="/admin/users/view">
                      <i className="icon icon-user-o" />
                      <IntlMessages id="sidebar.viewusers" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="users/adduser">
                    <Link to="/admin/users/adduser">
                      <i className="icon icon-add" />
                      <IntlMessages id="sidebar.adduser" />
                    </Link>
                  </Menu.Item>
                </SubMenu>
              ) : null}

              <SubMenu
                key="posts"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    <i className="icon icon-product-list" />
                    <IntlMessages id="sidebar.posts" />
                  </span>
)}
              >

                <Menu.Item key="Posts/viewPosts">
                  <Link to="/admin/Posts/viewPosts/all">
                    <i className="icon icon-table" />
                    <IntlMessages id="sidebar.posts.view" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="Posts/pending">
                  <Link to="/admin/Posts/addPost">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.posts.add" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="Posts/addPost">
                  <Link to="/admin/Posts/viewPosts/notApproved">
                    <i className="icon icon-close-circle" />
                    <IntlMessages id="sidebar.posts.Pending" />
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="hero"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={(
                    <span>
                      <i className="icon icon-product-list" />
                      <IntlMessages id="sidebar.hero" />
                    </span>
)}
                >
                  <Menu.Item key="hero/view">
                    <Link to="/admin/hero/view">
                      <i className="icon icon-table" />
                      <IntlMessages id="sidebar.viewhero" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="hero/add">
                    <Link to="/admin/hero/add">
                      <i className="icon icon-add" />
                      <IntlMessages id="sidebar.addhero" />
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="categories"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-apps" />
                    <IntlMessages id="sidebar.categories" />
                  </span>
)}
              >
                <Menu.Item key="Categories/Main">
                  <Link to="/admin/Categories/Main">
                    <i className="icon icon-product-list" />
                    <IntlMessages id="sidebar.mainCategories" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="Categories/Add">
                  <Link to="/admin/Categories/Add">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.addCategory" />
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="layout">
                <Link to="/admin/layout">
                  <i className="icon icon-product-list" />
                  <IntlMessages id="sidebar.layout" />
                </Link>
              </Menu.Item>
              <SubMenu
                key="services"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-widgets" />
                    <IntlMessages id="sidebar.services" />
                  </span>
)}
              >
                <Menu.Item key="services/addService">
                  <Link to="/admin/services/addService">
                    <i className="icon icon-chat" />
                    <IntlMessages id="sidebar.addService" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="services/viewServices">
                  <Link to="/admin/services/viewServices">
                    <i className="icon icon-chat" />
                    <IntlMessages id="sidebar.viewServices" />
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="comments">
                <Link to="/admin/comments/all">
                  <i className="icon icon-chat" />
                  <IntlMessages id="sidebar.comments" />
                </Link>
              </Menu.Item>
              <Menu.Item key="Gallery">
                <Link to="/admin/gallery">
                  <i className="icon icon-chat" />
                  <IntlMessages id="sidebar.gallery" />
                </Link>
              </Menu.Item>
              {/* { role === 'admin' ? (
                <SubMenu
                  key="layouts"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={(
                    <span>
                      {' '}
                      <i className="icon icon-card" />
                      <IntlMessages id="sidebar.layouts" />
                    </span>
)}
                >
                  <Menu.Item key="layouts/Home">
                    <Link to="/admin/layouts/Home/view">
                      <i className="icon icon-chat" />
                      <IntlMessages id="sidebar.homePage" />
                    </Link>
                  </Menu.Item>
                </SubMenu>
              ) : null} */}
              <SubMenu
                key="teams"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    <i className="icon icon-team" />
                    <IntlMessages id="sidebar.teams" />
                  </span>
)}
              >
                <Menu.Item key="teams/view">
                  <Link to="/admin/teams/view">
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.teams.view" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="teams/add">
                  <Link to="/admin/teams/add">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.teams.add" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="teams/settings">
                  <Link to="/admin/teams/settings">
                    <i className="icon icon-setting" />
                    <IntlMessages id="sidebar.settings" />
                  </Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="testimonials"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.testimonials" />
                  </span>
)}
              >
                <Menu.Item key="testimonials/view">
                  <Link to="/admin/testimonials/view">
                    <i className="icon icon-plain-list-divider" />
                    <IntlMessages id="sidebar.testimonials.view" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="testimonials/add">
                  <Link to="/admin/testimonials/add">
                    <i className="icon icon-add" />
                    <IntlMessages id="sidebar.testimonials.add" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="testimonials/settings">
                  <Link to="/admin/testimonials/settings">
                    <i className="icon icon-setting" />
                    <IntlMessages id="sidebar.settings" />
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="ads"
                className={this.getNavStyleSubMenuClass(navStyle)}
                title={(
                  <span>
                    {' '}
                    <i className="icon icon-apps" />
                    <IntlMessages id="sidebar.ads" />
                  </span>
)}
              >
                <Menu.Item key="ads/add">
                  <Link to="/admin/ads/add">
                    <i className="icon icon-chat" />
                    <IntlMessages id="sidebar.addads" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="ads/view">
                  <Link to="/admin/ads/view">
                    <i className="icon icon-chat" />
                    <IntlMessages id="sidebar.viewads" />
                  </Link>
                </Menu.Item>
              </SubMenu>
              {role === 'admin' ? (
                <SubMenu
                  key="options"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={(
                    <span>
                      {' '}
                      <i className="icon icon-setting" />
                      <IntlMessages id="sidebar.options" />
                    </span>
)}
                >
                  <Menu.Item key="options/main">
                    <Link to="/admin/options/main">
                      <i className="icon icon-product-list" />
                      <IntlMessages id="sidebar.main" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="options/social">
                    <Link to="/admin/options/social">
                      <i className="icon icon-product-list" />
                      <IntlMessages id="sidebar.social" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="options/footer">
                    <Link to="/admin/options/footer">
                      <i className="icon icon-product-list" />
                      <IntlMessages id="sidebar.footer" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="options/about">
                    <Link to="/admin/options/about">
                      <i className="icon icon-product-list" />
                      <IntlMessages id="sidebar.about" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="options/contact">
                    <Link to="/admin/options/contact">
                      <i className="icon icon-product-list" />
                      <IntlMessages id="sidebar.Contact" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="options/social_statistic">
                    <Link to="/admin/options/social_statistic">
                      <i className="icon icon-product-list" />
                      <IntlMessages id="sidebar.socialStatistic" />
                    </Link>
                  </Menu.Item>
                </SubMenu>
              ) : null}
              {/* {role === 'admin' ? (
                <SubMenu
                  key="newsletter"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={(
                    <span>
                      {' '}
                      <i className="icon icon-feedback" />
                      <IntlMessages id="sidebar.newsletter" />
                    </span>
)}
                >
                  <Menu.Item key="newsletter/view">
                    <Link to="/admin/newsletter/view">
                      <i className="icon icon-chat" />
                      <IntlMessages id="sidebar.viewNews" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="newsletter">
                    <Link to="/admin/newsletter/add">
                      <i className="icon icon-chat" />
                      <IntlMessages id="sidebar.addNews" />
                    </Link>
                  </Menu.Item>
                </SubMenu>
              ) : null} */}
              {/* {role === 'admin' ? (
                <Menu.Item key="MailBox">
                  <Link to="/admin/mailBox">
                    <i className="icon icon-email" />
                    <IntlMessages id="sidebar.MailBox" />
                  </Link>
                </Menu.Item>
              ) : null} */}
            </Menu>
          </CustomScrollbars>
        </div>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};
const mapStateToProps = ({ settings, auth }) => {
  const {
    navStyle, themeType, locale, pathname,
  } = settings;
  const { role, authUser } = auth;
  return {
    navStyle,
    themeType,
    locale,
    pathname,
    role,
    authUser,
  };
};
export default connect(mapStateToProps)(SidebarContent);
