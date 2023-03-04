import styled from 'styled-components'

export const ContainerNav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffe4e1;
  box-shadow: 0 0 15px 1px rgb(0 0 0 / 60%);
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    padding-bottom: 32px;
  }
`

export const H1 = styled.h1`
  font-family: 'Satisfy', cursive;
  font-size: 35px;
  font-weight: 500;
  margin-left: 2%;
  color: #ff56c0;
  text-shadow: -2px -2px 0px #dfa2df;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 0;
    text-align: center;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #f08080;
  }
`

export const Ul = styled.ul`
  height: 25px;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Li = styled.li`
  cursor: pointer;
  list-style: none;

  a {
    font-size: 20px;
    text-decoration: none;
    color: #f08080;
    margin-right: 30px;

    @media screen and (max-width: 768px) {
      margin: 0;
      margin-bottom: 0.5rem;
    }
  }

  &:hover {
    text-decoration: underline;
  }
`
