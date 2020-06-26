import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Menu from "antd/es/menu";
import "antd/lib/menu/style/index.css";
import Layout from "antd/es/layout";
import {Icon} from "@ant-design/compatible";
import {Link} from "react-router-dom";

import {Input} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import LanguageSelector from "./../common/LaguageSelector/index";
const {Search} = Input;
const {Header} = Layout;
const PageHeader = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <StyledHeader className="row">
      <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 py-2  d-flex align-items-center ">
        <Icon
          style={{
            fontSize: "26px",
            padding: "0 4px",
            outline: "none",
            boxShadow: "none"
          }}
          className="trigger btn btn-sm text-light"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggle}
        />
        <StyleLogoArea className="logoArea pl-3">
          <Link to="/chaldal">
            <img
              className="logo-img"
              src={"/logo/aggLogo.png"}
              alt="logo-img"
            />
          </Link>
        </StyleLogoArea>
        <div className="w-100 pl-5 ">
          <Search
            placeholder="Search for products (e.g. eggs, milk, alu)"
            onSearch={(value) => console.log(value)}
            size="large"
          />
        </div>
      </div>
      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12  d-flex  right-menu p-0">
        <ul className="nav w-100 h-100 align-items-center justify-content-between">
          <li className=" flex-grow-1">
            <Link to="/help">
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span className="px-2">Help & More</span>
            </Link>
          </li>
          <li className="flex-grow-1">
            <div className="language">
              <LanguageSelector />
            </div>
          </li>
          <li className="flex-grow-1">
            <Link to="/register" className="signin">
              <span className="px-2">Sign In</span>
            </Link>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default PageHeader;

const StyleLogoArea = styled.div`
  width: 154px;
  img {
    max-width: 100%;
    height: auto;
  }
`;
const StyledHeader = styled(Header)`
    border: 1px solid #DFB547;
    border-top:none;
  .right-menu  {
    ul {
      li:first-child{
        transition: all 300ms ease-in-out;

        a{
          border: 1px solid #fdd670;
          border: 1px solid #DFB547;
          border-top: none;
          border-bottom: none;
        }
      :hover{
        background:#eeb529
      }
    }
    li:last-child{
      a{
        background: #ff686e;
      color: #fff;
      border: 1px solid #ff4e56;
      :hover{
        background:#e04f54;
      }
      }
      
    }
    }
    
    a {
      padding: 20px 16px; 
      font-weight: bold;
      color: #615e58;
      padding: 20px 16px;
    display: block;
    text-align: center;
      font-size: 15px;
      transition: all 300ms ease-in-out;
    }
    }
  }
  &&&.ant-menu-overflowed-submenu {
    display: none;
  }

  &.ant-layout-header {
    background: #fdd670;
    height: auto;
    padding: 0 15px;
    line-height: inherit;
  }

  @media screen and (max-width: 720px) {
    .logoArea {
      display: none !important;
    }
    userpanel {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  @media screen and (max-width: 640px) {
    .col-sm-7 {
      padding-left: 0px;
      justify-content: center;
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (max-width: 380px) {
    .anticon {
      font-size: 16px !important;
    }
    .col-sm-7 {
      padding-right: 0px;
    }
  }

  .ant-menu-horizontal > .ant-menu-item,
  .ant-menu-horizontal > .ant-menu-submenu {
    border: 0 !important;
    top: 0;

    margin-top: 0;
  }
  .ant-menu-horizontal > .ant-menu-overflowed-submenu {
    display: none;
  }
  .ant-menu-horizontal > .ant-menu-item > a::before {
    bottom: 0;
  }
`;
