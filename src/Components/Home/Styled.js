import styled from 'styled-components'
import Background from '../../assets/Fundo-home.png'

export const ContainerHome = styled.section`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: 93vh;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  
  @media (max-width: 768px) {
    height: auto;
  }
`

export const BoxHome = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 35px;
  background: linear-gradient(
      rgba(250, 250, 250, 0.7),
      rgba(250, 250, 250, 0.8)
    ),
    url('${Background}');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: end;
  display: flex;
  justify-content: center;

  @media (max-width: 380px) {
    width: 100%;
  }
`

export const H1 = styled.h1`
  font-family: 'Satisfy', cursive;
  color: #ffe4e1;
  text-shadow: -2px -2px 0px #ff69b4;
  font-size: 300%;
  font-weight: 600;
  margin: 8% 8%;

  @media (max-width: 370px) {
    font-size: 250%;
    margin: 15% 8%;
  }
`

export const IconWpp = styled.img`
  width: 4%;
  margin: 33% 0 0 82%;
  position: fixed;
  border-radius: 60px;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
  @media (max-width: 890px) {
    margin: 80% 0 0 80%;
    width: 6%;
  }

  @media (max-width: 370px) {
    margin: 80% 0 0 80%;
    width: 12%;
  }
`
