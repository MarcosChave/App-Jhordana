import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`

export const SocialIcons = styled.div`
  display: flex;
`

export const SocialLink = styled.a`
  font-size: 20px;
  margin-left: 15px;
  color: #333;

  &:hover {
    color: #5f5f5f;
  }
`
