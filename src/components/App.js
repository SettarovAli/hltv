import { GlobalStyle } from "../GlobalStyles";

import Header from "./header/Header";
import MainContent from "./main-content/MainContent";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent />
    </>
  );
};

export default App;
