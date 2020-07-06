import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
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
  }
  > button {
    width: 100%;
    height: 44px;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    margin: 10px 0 0;
    font-size: 16px;
    background: #f64c75;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#F64C75')};
    }
  }
`;
