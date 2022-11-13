import PropertiesProvider from "../context/properties";

const RootContext = ({ children }) => {
  return (
    <>
      <PropertiesProvider>{children} </PropertiesProvider>
    </>
  );
};

export default RootContext;
