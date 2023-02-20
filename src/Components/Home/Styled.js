import styled from 'styled-components'
import Background from '../../assets/Fundo-home.png'

export const ContainerHome = styled.section`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: 93vh;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
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
`

export const H1 = styled.h1`
  font-family: 'Satisfy', cursive;
  color: #ffe4e1;
  text-shadow: -2px -2px 0px #ff69b4;
  font-size: 300%;
  font-weight: 600;
  margin: 8% 8%;
`
export const IconWpp = styled.img`
  width: 5%;
  margin: 33% 0 0 82%;
  position: fixed;
  border-radius: 60px;
  cursor: pointer;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`
