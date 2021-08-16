
import { createGlobalStyle } from "styled-components";
import BackDrop from "../../components/common/backdrop/BackDrop";
import Drawer from "../../components/common/drawer/Drawer";
import Header from "../../components/common/header/Header";
import Content from "../../components/home/Content";
import useConfig from "../../hooks/useConfig";
const GeneralStyle = createGlobalStyle<{ isOpen: boolean }>`
    body {
      overflow: ${({ isOpen }) => (isOpen ? "hidden" : "visible")};
    }`;

const Home = () => {
  const { isOpen } = useConfig();

  return (
    <>
      <Header />
      <Content />
      {isOpen && <BackDrop />}
      <Drawer isOpen={isOpen} />
      <GeneralStyle isOpen={isOpen} />
    </>
  );
};

export default Home;
