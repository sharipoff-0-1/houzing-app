import { createContex } from "react";
import PropertiesProvider from "../context/properties";

const Root = createContex();
const RootContext = ({ children }) => {
  return (
    <Root.Provider>
      <PropertiesProvider>{children} </PropertiesProvider>
    </Root.Provider>
  );
};

export default RootContext;
