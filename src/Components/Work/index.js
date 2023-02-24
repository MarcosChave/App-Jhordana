import {
  ContainerWork,
  BoxWork,
  BoxHorário,
  Text,
  Button,
  Img,
  BoxArrow,
  Video
} from './styled'
import { Link } from 'react-router-dom'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import CiliosOne from '../../assets/CiliosOne.jpeg'
import CiliosTwo from '../../assets/CiliosTwo.jpeg'
import CiliosThree from '../../assets/CiliosThre.jpeg'
import '@splidejs/react-splide/css/core'
import VideoOne from '../../assets/VideoOne.mp4'
import VideoTwo from '../../assets/VideoTwo.mp4'

function Work() {
  return (
    <ContainerWork id="/trabalhos">
      <BoxWork>
        <Splide
          className="Splide"
          hasTrack={false}
          options={{
            rewind: true,
            width: 500,
            gap: '10rem',
            pagination: false
          }}
        >
          <SplideTrack>
            <SplideSlide>
              <Img src={CiliosOne} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <Video>
                <video autoPlay loop muted src={VideoOne}></video>
              </Video>
            </SplideSlide>
            <SplideSlide>
              <Img src={CiliosTwo} alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
              <Video>
                <video autoPlay loop muted src={VideoTwo}></video>
              </Video>
            </SplideSlide>
            <SplideSlide>
              <Img src={CiliosThree} alt="Image 3" />
            </SplideSlide>
          </SplideTrack>
          <BoxArrow className="splide__arrows">
            <button className="splide__arrow--prev">❮</button>
            <button className="splide__arrow--next">❯</button>
          </BoxArrow>
        </Splide>
      </BoxWork>

      <BoxHorário>
        <Text>
          Tire um dia para si ! <br />
          Venha realçar ainda mais <br />a princesa que há aí dentro.
        </Text>
        <Link className="Button" to="/agendamento">
          <Button>Agendamento</Button>
        </Link>
      </BoxHorário>
    </ContainerWork>
  )
}

export default Work
