import { ContainerSobre, BoxOne, Image, BoxTwo } from './Styled'
import Jhordana from '../../assets/Jhordana-About.jpeg'

function Sobre() {
  return (
    <ContainerSobre>
      <BoxOne>
        <Image data-aos="fade-right" src={Jhordana} alt="Jhordana-img" />
      </BoxOne>

      <BoxTwo>
        <p data-aos="fade-left">
          Me chamo Jhordana, tenho 23 anos, sou de nacionalidade brasileira e
          atualmente moro em Portugal. Atuo na área das sobrancelhas e pestanas
          desde o final de 2021, foi quando eu realmente consegui perceber que
          era o caminho que queria prosseguir. Desde criança sempre estive perto
          da estética pois minha mãe trabalha na área, até então nunca tinha
          percebido o quão próxima eu estava deste mundo da beleza e que
          acabaria tornando minha paixão também. Trabalho desde os meus 14 anos,
          sempre fui uma menina/mulher, já trabalhei com call center, já
          estagiei em duas escolas em quanto fazia faculdade de pedagogia, já
          vendi doces, já vendi bijuteria, trabalhei em hotel, restaurantes e
          fábricas. Hoje meu maior prazer é poder deixar minhas princesas com um
          olhar empoderado, lindo e elevar a autoestima de todas elas. Se você
          procura acordar, se olhar no espelho e se sentir um arraso de mulher
          aqui é o seu lugar! Vem que vou te ajudar nisso. 👑💗
        </p>
      </BoxTwo>
    </ContainerSobre>
  )
}

export default Sobre
