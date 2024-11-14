import styled from "styled-components";

export const ButtonLogin = styled.button`
  margin: 20px 0 10px 0;
  background-color: ${({ theme }) => theme.colors.primary};;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
`;


export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: white;
  background-color: #151717;
  cursor: pointer;
  margin: 20px 0;
`;

export const OAuthButton = styled(Button)`
  background-color: white;
  color: #151717;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid #ededef;
  transition: border 0.2s ease-in-out;

  &:hover {
    border-color: #2d79f3;
  }
`;