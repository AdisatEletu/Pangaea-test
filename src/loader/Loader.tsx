import Skeleton from "react-loading-skeleton";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type ProductShimmerProps = {
  className?: string;
  children?: ReactNode;
};

const Loader: FC<ProductShimmerProps> = (props) => {
  return (
    <Wrapper>
      <Skeleton duration={5} height={"150px"} className="product" />
      <Skeleton duration={5} height={"35px"} className="product" />
      <Skeleton duration={5} height={"25px"} className="product" />
      <Skeleton duration={5} height={"40px"} className="product" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  .product {
    @media screen and (min-width: 992px) {
      margin-left: 1.25rem;
      margin-right: 1.25rem;
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
export default Loader;
