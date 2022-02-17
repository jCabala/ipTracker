import { useState } from 'react';
import { StyledInput, InputForm, InputButton } from './styles/Input.styled';
import axios from 'axios';
import { DOMAIN_DATA } from '../api.config';
import { useDataState } from '../DataContext';

const filterData = data => ({
  'IP Address': data.ip,
  Timezone: data.location.timezone,
  Location: `${data.location.country}, ${data.location.region}, ${data.location.city}`,
  ISP: data.isp,
  lat: data.location.lat,
  lang: data.location.lng,
});

const Input = () => {
  const [inputVal, setInputVal] = useState('');
  const { setData } = useDataState();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(DOMAIN_DATA(inputVal));
      console.log(data);
      return data;
    } catch (err) {
      alert('Please add a valid IP address or domain name.');
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await fetchData(inputVal);

    const filteredData = filterData(data);
    console.log(filteredData);

    setData(filteredData);
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <StyledInput
        placeholder='Search for any IP address or domain'
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
      />
      <InputButton>
        {' '}
        <img src='./images/icon-arrow.svg' alt='' />
      </InputButton>
    </InputForm>
  );
};

export default Input;
