import styled from 'styled-components'

export const ContainerNav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffe4e1;
  box-shadow: 0 0 15px 1px rgb(0 0 0 / 60%);
`

export const H1 = styled.h1`
  font-family: 'Satisfy', cursive;
  font-size: 35px;
  font-weight: 500;
  margin-left: 42%;
  color: #ff56c0;
  text-shadow: -2px -2px 0px #dfa2df;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #f08080;
  }
`

export const Ul = styled.ul`
  height: 25px;
  display: flex;
`

export const Li = styled.li`
  margin-right: 30px;
  cursor: pointer;
  list-style: none;

  a {
    font-size: 20px;
    text-decoration: none;
    color: #f08080;
  }
  &:hover {
    text-decoration: underline;
  }
`
