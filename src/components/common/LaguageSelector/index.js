import React from "react";
import styled from "styled-components";
import "antd/lib/tooltip/style/index.css";
import {useTranslation} from "react-i18next";
const LanguageSelector = () => {
  const {t, i18n} = useTranslation();
  const activeLanguage = "en";

  const selectBangla = () => {
    let systemConfig = JSON.parse(localStorage.getItem("systemConfig"));
    systemConfig = {...systemConfig, language: "bn"};
    localStorage.setItem("systemConfig", JSON.stringify(systemConfig));
    i18n.changeLanguage("bn");
  };
  const selectEnglish = () => {
    let systemConfig = JSON.parse(localStorage.getItem("systemConfig"));
    systemConfig = {...systemConfig, language: "en"};
    localStorage.setItem("systemConfig", JSON.stringify(systemConfig));
    i18n.changeLanguage("en");
  };
  return (
    <StyledDiv className="text-light text-center">
      <p
        className={`lang pr-1 ${activeLanguage === "bn" && "active"}`}
        onClick={selectBangla}
      >
        BN
      </p>
      <p
        className={`lang pr-1 ${activeLanguage === "en" && "active"}`}
        onClick={selectEnglish}
      >
        EN
      </p>
    </StyledDiv>
  );
};

export default LanguageSelector;

const StyledDiv = styled.div`
  padding-left: 20px;
  height: 10px;
  display: table;
  .active {
    color: gray;
  }
  p:first-child {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
  }
  p {
    cursor: pointer;
    padding: 2px;
    font-weight: bold;
    width: 2rem;
    display: table-cell;
    vertical-align: middle;
  }
  @media only screen and (max-width: 640px) {
    padding-left: 10px !important;
  }
`;
