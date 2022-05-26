import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 1rem;
  margin-top: -140px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap:1rem;
  @media(max-width:1200px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width:768px){
    grid-template-columns: repeat(1, 1fr);
  }
  @media(max-width:375px){
    padding: 40px 0rem;
  }
`;
