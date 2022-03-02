import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DOMAIN_DATA } from './api.config';

const Data = createContext();

export const fetchData = async val => {
  try {
    const { data } = await axios.get(DOMAIN_DATA(val));
    console.log(data);
    return data;
  } catch (err) {
    alert('Please add a valid IP address or domain name.');
  }
};

export const filterData = data => ({
  'IP Address': data.ip,
  Timezone: data.location.timezone,
  Location: `${data.location.country}, ${data.location.region}, ${data.location.city}`,
  ISP: data.isp,
  lat: data.location.lat,
  lang: data.location.lng,
});

const DataContext = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const f = async () => {
      const data = await fetchData('facebook.com');

      const filteredData = filterData(data);

      setData(filteredData);
    };

    f();
  }, []);

  return <Data.Provider value={{ data, setData }}>{children}</Data.Provider>;
};

export const useDataState = () => useContext(Data);
export default DataContext;
