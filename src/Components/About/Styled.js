import styled from 'styled-components';

export const ContainerSobre = styled.section`
  margin: 20px auto;
  max-width: 1400px;
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 768px) {
    height: auto;
  }
`;

export const BoxOne = styled.div`
  width: 50%;
  height: 100%;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 15px 15px 0 0;
  }
`;

export const Image = styled.img`
  width: 53%;
  border-radius: 8%;
  
  @media(max-width: 768px) {
    width: 100%;
    border-radius: 15px 15px 0 0;
  }
`;

export const BoxTwo = styled.div`
  font-family: 'Roboto Slab', sans-serif;
  width: 50%;
  height: 100%;
  padding: 50px;
  font-size: 20px;
  font-weight: 300;
  text-align: justify;
  background-color: #ffd3ff;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  border-radius: 0 15px 15px 0;
  display: flex;
  align-items: center;
  
  @media(max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 0 0 15px 15px;
  }
`;
