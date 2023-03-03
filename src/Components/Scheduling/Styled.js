import styled from 'styled-components'

export const ConteinerScheduling = styled.section`
  margin: 35px auto;
  max-width: 1400px;
  width: 100%;
  height: 77vh;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  background-color: #ffe4e1;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`

export const Label = styled.label`
  height: 50%;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 140%;
  margin-right: 50px;
  color: #ff56c0;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
    text-align: center;
    font-size: 120%;
  }
`

export const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-top: 20px;
  padding: 0 25px;
  text-align: start;
  border-style: solid;
  border-color: #ff56c0;
  border-radius: 14px;
  outline: none;
  box-shadow: 0 0 30px rgb(0 0 0 / 12%);

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto 20px;
  }
`

export const Span = styled.span`
  font-size: 15px;
  margin-top: 10px;
`

export const Button = styled.button`
  margin-top: 15%;
  width: 10%;
  height: 6%;
  font-size: 22px;
  border-radius: 25px;
  border: none;
  color: #fffaf0;
  position: absolute;
  background-color: rgba(255, 105, 180);

  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 15px rgb(255, 20, 147, 0.9);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 40%;
    margin: 30px auto 0;
    position: relative;
    margin-top: 20px;
  }
`

export const BoxConfirmation = styled.div`
  width: 30%;
  height: 30%;
  margin-top: 7%;
  padding-top: 5%;
  color: #fffaf0;
  text-align: center;
  font-size: 26px;
  border-radius: 30px;
  background-color: #ff0000;
  box-shadow: 0 0 30px rgb(0 0 0 / 20%);

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    font-size: 22px;
  }
`

export const IconWpp = styled.img`
  width: 5%;
  margin-top: 28%;
  margin-left: 80%;
  border-radius: 60px;
  position: absolute;
  cursor: pointer;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 60%;
    height: auto;
    margin-left: 20px;
    position: static;
  }

  @media (max-width: 380px) {
    margin-top: 30px;
    width: 80%;
    height: auto;
    margin-left: 20px;
    position: static;
  }
`;
