import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 5px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      color: #fff;
    }

    button {
      height: 44px;
      border: 0;
      border-radius: 5px;
      font-weight: bold;
      margin: 5px 0 0;
      font-size: 16px;
      background: #3b9eff;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 15px;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }

    span {
      color: #fb6f91;
      align-self: center;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }
`;
