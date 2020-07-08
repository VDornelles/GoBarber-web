import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
    }
    span {
      display: block;
    }
    a {
      margin-top: 2px;
      font-size: 12px;
      color: #999;

      & + a {
        font-weight: bold;
        color: rgba(255, 0, 0, 0.8);
        margin-left: 5px;
        padding-left: 5px;
        border-left: 1px solid #eee;
      }
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #7159c1;
  }
`;
