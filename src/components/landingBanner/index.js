import React from "react";
import styled from "styled-components";
import {Input} from "antd";
const LandingBanner = () => {
  return (
    <StyledDiv className="row m-0">
      <div className="floatingSearchbar">
        <div className="searchbarContainer">
          <h2 className="mb-1">Groceries delivered in 1 hour</h2>
          <Input.Search
            size="large"
            placeholder="Search for products (e.g. eggs, milk, alu)"
          />
        </div>
      </div>
    </StyledDiv>
  );
};

export default LandingBanner;

const StyledDiv = styled.div`
  background: url(https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-992/Default/stores/chaldal/components/landingPage2/LandingPage/images/landingBanner.jpg)
    no-repeat center;
  background-size: cover;
  height: 325px;
  padding-top: 100px;
  .floatingSearchbar {
    position: relative;
    width: 100%;
    text-align: center;
    color: #fff;
    margin-left: auto;
    margin-right: auto;
    .searchbarContainer {
      margin: 0 auto;
      display: table;
      width: 45%;
      font-family: "Krona One";
      h2 {
        color: #000;
        font-size: 40px;
        font-weight: 700;
      }
    }
  }
  .ant-input-affix-wrapper {
    font-size: 17px;
    border-radius: 6px;
    border: 0.5px solid #c8c8c8;
  }
`;
