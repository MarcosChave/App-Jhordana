import styled from 'styled-components'

export const ContainerWork = styled.section`
  margin: 20px auto;
  max-width: 1400px;
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxWork = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 15px 0 0 15px;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  .Splide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 60%;
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
    width: 30%;
    height: 7%;
    margin-top: 25%;
  }

  @media (max-width: 768px) {
    width: 40%;
    border-radius: 15px;
    margin-left: 20px;
  }

  @media (max-width: 380px) {
    width: 70%;
    margin-left: 5%;
  }
`

export const Text = styled.p`
  font-family: 'Satisfy', sans-serif;
  font-size: 45px;
  font-weight: 500;
  text-align: justify;
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

  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 15px rgb(255, 20, 147, 0.9);
    cursor: pointer;
  }
`

export const Img = styled.img`
  width: 480px;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`

export const Video = styled.div`
  display: flex;
  justify-content: center;
  video {
    height: 650px;

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 380px) {
    height: 350px;
  }
}
`;