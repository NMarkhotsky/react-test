import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  width: 300px;
  border: 3px solid #045b69;
`;

export const Control = styled.div`
  display: flex;
  gap: 10px;
`;

export const Value = styled.span`
  font-size: 60px;
  color: #045b69;
`;

export const Button = styled.button`
  display: block;
  /* width: 80px; */
  /* height: 25px; */
  padding: 10px;
  background-color: #045b69;
  color: #ffffff;
  outline: none;

  cursor: pointer;
`;
