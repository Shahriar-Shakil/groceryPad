import styled, {css} from "styled-components";
import Menu from "antd/es/menu";
import Sider from "antd/es/layout/Sider";
import Button from "antd/es/button";
import "antd/lib/button/style/index.css";
import Badge from "antd/es/badge";
import "antd/lib/badge/style/index.css";

const StyledMenu = styled(Menu)`
  background-color: #683392 !important;
  margin: 0 15px 0 25px !important;
  font-size: 16px !important;
  border-bottom: none !important;
  line-height: 32px !important;
  .ant-menu-item {
    padding: 0;
    border-bottom: 0;
    top: 0;
    border-right: 1px solid rgba(255, 255, 255, 0.7);
    max-height: 32px;
    overflow: hidden;
  }

  .ant-menu-item > a.active,
  .ant-menu-item:hover,
  .ant-menu-item:hover > a {
    border-bottom: 0;
    background-color: #c63927;
    color: #fff !important;
  }
  .ant-menu-item:nth-child(10) {
    float: right;
  }
  .ant-menu-item:nth-child(10):hover {
    background-color: #d7b0f7;
  }
  .ant-menu-item:nth-child(10):hover a {
    color: #fff !important;
  }
  .ant-menu-item > a {
    color: #fff !important;
    background: #2d8f3c;
    padding: 0px 15px;
    text-decoration: none;
  }
  .svg-inline--fa {
    color: #fff;
    font-size: 1.2rem;
    vertical-align: -0.25em;
  }
  svg + span {
    margin: 0 0.5rem;
    font-size: 16px;
  }
  @media only screen and (max-width: 760px) {
    .ant-menu-item:nth-child(10) {
      float: none;
    }
    &&&li.ant-menu-item.menuitem-overflowed {
      display: inline-block;
    }
  }

  @media screen and (max-width: 640px) {
    margin: 0 !important;
  }
  @media screen and (max-width: 380px) {
    .ant-menu-item > a {
      padding: 0px 8px;
      font-size: 14px;
    }
  }
`;

export {StyledMenu};
