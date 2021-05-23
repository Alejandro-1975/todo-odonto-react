import {Slideshow, Slide, TextoSlide} from '../componentes/Slideshow';
import styled from 'styled-components';





const ofertasApp = () => {
    return (
        <main>
            <Titulo>Productos Destacados</Titulo>
            <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="5000">
                <Slide>               
                    <a href="https://www.falconmaters.com">
                    <img src="./images/ofertas/oferta.jpg" alt=""/>
                    </a>
                    <TextoSlide colorFondo="#ff8800" colorTexto="#000">
                    <p>15% de descuentos en productos</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="https://www.falconmaters.com">
                    <img src="./images/ofertas/oferta1.jpg" alt=""/>
                    </a>
                    <TextoSlide>
                    <p>15% de descuentos en productos</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="https://www.falconmaters.com">
                    <img src="./images/ofertas/oferta2.jpg" alt=""/>
                    </a>
                    <TextoSlide>
                    <p>15% de descuentos en productos</p>
                    </TextoSlide>
                </Slide>
              
                
            </Slideshow> 
        </main>
    );
}

const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10 px;
  `;

  export default ofertasApp;