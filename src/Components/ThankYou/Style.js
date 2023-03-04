import styled from 'styled-components'

export const ContainerThank = styled.section`
  margin: 35px auto;
  max-width: 1400px;
  width: 100%;
  height: 77vh;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  background-color: #ffe4e1;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1048px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BoxConfirmation = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1048px) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: 860px) {
    height: 45%;
  }

  @media (max-width: 380px) {
    height: 40%;
  }
`

export const TextTank = styled.div`
  width: 80%;
  height: auto;
  margin-top: -15px;
  color: #fffaf0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  border-radius: 30px;
  background-color: rgba(255, 20, 147);
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  padding: 15px;

  @media (max-width: 1048px) {
    margin-bottom: 280px;
    font-size: 24px;
  }

  @media (max-width: 860px) {
    height: auto;
    font-size: 22px;
    margin-bottom: 150px;
  }

  @media (max-width: 380px) {
    height: auto;
    font-size: 14px;
  }
`

export const Image = styled.img`
  width: 29%;
  border-radius: 8%;

  @media (max-width: 1048px) {
    margin-top: 150px;
    width: 35vh;
  }

  @media (max-width: 860px) {
    width: 35vh;
    margin-top: 48px;
    margin-left: 18px;
  }

  @media (max-width: 380px) {
    width: 40%;
    margin-left: 5px;
  }
`

export const ImageBor = styled.img`
  width: 20%;
  margin-left: 400px;
  transform: scaleX(-1);

  @media (max-width: 1048px) {
    width: 20vh;
    margin-left: 0;
    margin-top: 20px;
    position: relative;
    left: 40%;
    bottom: 1%;
  }

  @media (max-width: 860px) {
    width: 20vh;
    position: relative;
    left: 35%;
    bottom: 1%;
  }

  @media (max-width: 380px) {
    width: 18%;
    position: relative;
    left: 35%;
    bottom: 1%;
  }
`
