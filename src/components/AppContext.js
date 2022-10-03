import React, { createContext } from 'react';

//Crear un Context he inicializar con un objeto vacio
export const AppContext = createContext({});

export const AppContextProvider = ({ children, value }) => {
  return (
    <AppContext.Provider value={value}>
      <div>{children}</div>
    </AppContext.Provider>
  );
};
