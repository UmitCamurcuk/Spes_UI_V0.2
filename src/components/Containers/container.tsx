import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  transition: border 0.2s ease-in-out; 
  &:focus-within {
    border-color: #2d79f3;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Span = styled.span`
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
`;