import styled from 'styled-components';

export const InfoContainer = styled.div`
  background: white;
  min-height: 120px;
  min-width: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 12px;
  display: flex;
  z-index: 3;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    width: 90vw;
  }
`;

export const InfoCard = styled.div`
  margin-left: 40px;
  margin-top: 40px;
  max-width: 15vw;
  border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: none;

    width: 90vw;
    max-width: 10000px;
  }

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  &:nth-of-type(4) {
    border: none;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 20px;
    text-overflow: clip;
    word-break: break-word;
    @media (max-width: ${({ theme }) => theme.media.laptop}) {
      font-size: 1rem;
      word-break: normal;
    }
    padding-right: 5px;
  }
`;
