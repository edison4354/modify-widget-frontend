import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  border-radius: 15px;
  background: black;
  white-space: nowrap;
  padding: 14px 48px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`