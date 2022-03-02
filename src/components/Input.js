import { useState } from 'react';
import { StyledInput, InputForm, InputButton } from './styles/Input.styled';

import { useDataState, fetchData, filterData } from '../DataContext';

const Input = () => {
  const [inputVal, setInputVal] = useState('');
  const { setData } = useDataState();

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
