import React from "react";

const NotFoundContext = React.createContext({
  isNotFound: false,
});

export const notFoundProvider = (props) => {
  const isNotFound = false;

  const contextValue = {
    isNotFound: isNotFound,
  };
  return (
    <NotFoundContext.Provider value={contextValue}>
      {props.children}
    </NotFoundContext.Provider>
  );
};

export default NotFoundContext;
