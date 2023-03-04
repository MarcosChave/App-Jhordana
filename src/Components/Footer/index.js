import { ContainerFooter, FooterContent, SocialIcons, SocialLink } from './Styled'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <ContainerFooter>
      <FooterContent>
        <p>&copy; 2023 Jhordana Sobrancelhas e Pestanas</p>
        <SocialIcons>
          <SocialLink href="https://www.facebook.com" target="_blank"><FaFacebook /></SocialLink>
          <SocialLink href="https://www.twitter.com" target="_blank"><FaTwitter /></SocialLink>
          <SocialLink href="https://www.instagram.com" target="_blank"><FaInstagram /></SocialLink>
          <SocialLink href="https://www.linkedin.com" target="_blank"><FaLinkedin /></SocialLink>
        </SocialIcons>
      </FooterContent>
    </ContainerFooter>
  )
}

export default Footer
