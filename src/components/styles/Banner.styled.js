import styled from 'styled-components';

export const StyledBanner = styled.div`
  background-image: url('./images/pattern-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  position: relative;

  h1 {
    margin-top: 25px;
    color: white;
  }
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: -75px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    bottom: -150px;
  }
`;
