import styled from 'styled-components';

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  cursor: pointer;

  width: 100px;
  margin-bottom: 20px;
  padding: 10px;

  color: #bfc0c0;
  background-color: inherit;
  border: 2px solid #4f5d75;
  transition: all 0.45s ease-Out;

  :hover {
    color: #ef8354;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -200px;

    width: 100%;
    height: 2.5px;
    margin-top: 15px;
    align-self: flex-end;

    background: #ef8354;
    transition: all 0.45s ease-Out;
  }

  :hover::after {
    left: 0;
  }
`;
