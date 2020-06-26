import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProductCategories = () => {
  const products = useSelector((state) => state.appState.products);
  let productItems = [];
  for (const [key, value] of Object.entries(products)) {
    productItems.push(
      <Link to="/" key={key}>
        Link
      </Link>
    );
  }
  return (
    <StyledDiv className="mainContainer">
      <div className="product-categories">
        <div className="initialLabel">
          <h2>Our Product Categories</h2>
        </div>
        <div className="mainTitle">{productItems}</div>
      </div>
    </StyledDiv>
  );
};

export default ProductCategories;

const StyledDiv = styled.div`
  ax-width: 1170px;
  margin: auto;
  padding: 0 15px;
  .product-categories {
    margin-bottom: 40px;
  }
`;
