import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 2rem 1rem;
  header {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width:580px){
      flex-direction: column;
    }
    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 0.5rem;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;
          @media(max-width:580px){
            margin-top: 2rem;
          }

          .text {
            padding: 1rem 2rem;
          }

          .icon {
            display: flex;
            padding: 1rem;
            background: #41c900;
            border-radius: 0 0.5rem 0.5rem 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
