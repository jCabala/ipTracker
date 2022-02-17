import { createContext, useContext, useEffect, useState } from 'react';

const Data = createContext();

const DataContext = ({ children }) => {
  const [data, setData] = useState({});

  return <Data.Provider value={{ data, setData }}>{children}</Data.Provider>;
};

export const useDataState = () => useContext(Data);
export default DataContext;
