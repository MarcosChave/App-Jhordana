import {
  ContainerThank,
  BoxConfirmation,
  Image,
  ImageBor,
  TextTank
} from './Style'
import JhordanaThanks from '../../assets/Jhordana-thanks.jpeg'
import Borboleta from '../../assets/borboleta.png'
function Thank() {
  return (
    <ContainerThank>
      <Image data-aos="fade-down-right" src={JhordanaThanks}></Image>
      <BoxConfirmation>
        <ImageBor data-aos="fade-up" src={Borboleta}></ImageBor>
        <TextTank data-aos="fade-up-left">
          <p>
            Seu horário foi confirmado com sucesso! <br />
            Muito obrigada pela preferência!
          </p>
        </TextTank>
      </BoxConfirmation>
    </ContainerThank>
  )
}

export default Thank
