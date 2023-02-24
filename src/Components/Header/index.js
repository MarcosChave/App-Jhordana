import { ContainerNav, H1, Ul, Li } from './styled'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <ContainerNav>
      <H1>
        <Link to="/">Jhordana Inácia</Link>
      </H1>
      <Ul>
        <Li>
          <Link to="/sobre">Sobre mim</Link>
        </Li>
        <Li>
          <Link to="/work">Trabalhos</Link>
        </Li>
      </Ul>
    </ContainerNav>
  )
}

export default Header
