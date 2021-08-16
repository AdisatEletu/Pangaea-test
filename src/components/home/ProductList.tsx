import { FC, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import useProducts from "../../hooks/useProducts";
import Loader from "../../loader/Loader";
import { createIndexedArray } from "../../utils/helpers";
import Product from "./Product";

const ProductList: FC<{}> = () => {
  const { loadingProducts, products, doFetchProducts } = useProducts();
  useEffect(() => {
    doFetchProducts();
  }, [doFetchProducts]);

  return (
    <StyledProductList>
      <div className="product-list-holder">
        <div className="p-grid">
          {loadingProducts
            ? createIndexedArray(6).map((item) => {
                return <Loader key={item} />;
              })
            : products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </div>
      </div>
    </StyledProductList>
  );
};

const productListAnimKF = keyframes`
   from {
        top: 0;
        opacity: 0
    }

    to {
        top: 100px;
        opacity: 1
    }
}

`;

const StyledProductList = styled.div`
  background: #e2e6e3;
  overflow: hidden;
  .product-list-holder {
    animation: 0.6s ease-in-out 0s 1 normal none running ${productListAnimKF};

    .p-grid {
      flex-wrap: wrap;
      padding-right: 1rem;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      max-width: 1300px;
      padding-left: 1rem;
      width: 100%;
      @media screen and (min-width: 768px) {
        padding-left: 0rem;
        padding-right: 0rem;
      }

      & > div,
      & > article {
        flex-direction: column;
        display: flex;
        text-align: center;
        background: rgb(226, 230, 227);
        padding: 2.5rem 0.5rem;
        width: 50%;
        @media screen and (min-width: 768px) {
          padding: 3rem 2rem;
          width: 33.3333%;
        }
        @media screen and (min-width: 992px) {
          padding: 3rem 2rem;
        }
      }
    }
  }
`;

export default ProductList;
