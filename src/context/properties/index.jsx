import { createContex, useReducer } from "react";
import { reducer } from "./reducer";

const PropertiesContex = createContex();

const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <PropertiesContex.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContex.Provider>
  );
};

export default PropertiesProvider;
