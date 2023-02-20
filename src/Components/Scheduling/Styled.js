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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Form = styled.form`
  width: 100%;
  height: 50%;
  display: flex;
  padding: 30px;
`
export const Label = styled.label`
  font-family: 'Roboto Slab', sans-serif;
  font-size: 140%;
  margin-top: 50px;
  margin-right: 50px;
  color: #ff56c0;
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
`
export const Span = styled.span`
  font-size: 15px;
`
export const Button = styled.button`
  margin-top: 15%;
  margin-left: 39%;
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
`
