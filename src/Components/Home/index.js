import { ContainerHome, BoxHome, IconWpp } from './Styled'
import Work from '../Work'

import LogoJho from '../../assets/Jhordana-Logo.png'
import Whats from '../../assets/whats.png'

function Home() {
  return (
    <ContainerHome>
      <BoxHome>
        <img data-aos="fade-down" src={LogoJho}></img>
        <IconWpp src={Whats}></IconWpp>
      </BoxHome>
      <Work />
    </ContainerHome>
  )
}

export default Home
