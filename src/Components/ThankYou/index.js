import { ContainerThank, BoxConfirmation, Image, ImageBor } from './style'
import JhordanaThanks from '../../assets/Jhordana-thanks.jpeg'
import Borboleta from '../../assets/borboleta.png'
function Thank() {
  return (
    <ContainerThank>
      <Image data-aos="fade-down-right" src={JhordanaThanks}></Image>
      <ImageBor data-aos="fade-up" src={Borboleta}></ImageBor>
      <BoxConfirmation data-aos="fade-up-left">
        Seu horário foi confirmado com sucesso! <br />
        Muito obrigada pela preferência!
      </BoxConfirmation>
    </ContainerThank>
  )
}

export default Thank
