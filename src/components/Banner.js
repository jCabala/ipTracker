import { StyledBanner, InfoContainer } from './styles/Banner.styled';
import Input from './Input';
import Info from './Info';

const Banner = () => {
  return (
    <StyledBanner>
      <h1>IP Address Tracker</h1>
      <Input />

      <InfoContainer>
        {' '}
        <Info />
      </InfoContainer>
    </StyledBanner>
  );
};

export default Banner;
