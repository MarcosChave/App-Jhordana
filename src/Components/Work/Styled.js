import styled from 'styled-components'

export const ContainerWork = styled.section`
  margin: 60px auto;
  max-width: 1400px;
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap:  wrap;

  @media (max-width: 850px) {
    width: 80%;
  }

  @media (max-width: 380px) {
    min-width: 100%;

  }
`

export const BoxWork = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 15px 0 0 15px;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  .Splide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 850px) {
    width: 80%;
  }

  @media (max-width: 380px) {
    width: 80%;
  }
`

export const BoxArrow = styled.div`
  width: 120%;
  height: 100%;
  margin-left: 0.3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  .splide__arrow--prev,
  .splide__arrow--next {
    height: 74.8%;
    border: none;
    font-style: normal;
    font-size: 45px;
    color: rgba(255, 105, 180);
    background-color: transparent;

    cursor: pointer;
  }

  @media (max-width: 850px) {
    width: 100%;
  }

  @media (max-width: 380px) {
    width: 80%;
  }
`

export const BoxHorário = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0 15px 15px 0;
  background-color: #ffd3ff;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);

  .Button {
    
    height: 7%;
    margin-top: 25%;
  }

  @media (max-width: 850px) {
    width: 100%;
    border-radius: 15px;
  }

  @media (max-width: 380px) {
    width: 100%;

  }
`

export const Text = styled.p`
  font-family: 'Satisfy', sans-serif;
  font-size: 45px;
  font-weight: 500;
  text-align: justify;

  @media (max-width: 850px) {
    font-size: 36px;
    padding: 2px;
    text-align: center;
  }

  @media (max-width: 380px) {
    font-size: 22px;
    padding: 5px;
    text-align: center;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 25px;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  color: #fffaf0;
  background-color: rgba(255, 105, 180);
  padding: 0 26px;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 15px rgb(255, 20, 147, 0.9);
    cursor: pointer;
  }

  @media (max-width: 850px) {
    font-size: 20px;
    padding: 12px;
  }

  @media (max-width: 380px) {
    width: 100%;
    font-size: 16px;
    margin: 8px;
  }
`

export const Img = styled.img`
  width: 100%;
  height: min-content;
  display: flex;
  justify-content: center;

  @media (max-width: 850px) {
    width: 100%;
    height: 100%;   
  }

  @media (max-width: 380px) {
    width: 100%;
    height: 760px;
  }
`

export const Video = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  video {
    height: 650px;

  @media (max-width: 850px) {
    height: 500px;
  }

  @media (max-width: 380px) {
    height: 80%;
    
  }
  }
`;