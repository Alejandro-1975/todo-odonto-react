//   https://www.youtube.com/watch?v=q00ldTrywLU  38:07


import React,{useRef,useEffect,useCallback} from 'react';
import styled from 'styled-components';
import {ReactComponent as FlechaIzquierda} from '/icons/arrow_back_.svg';
import {ReactComponent as FlechaDerecha} from '/icons/arrow_forward_.svg';



const Slideshow = ({children,controles = true, autoplay = true,  velocidad="500", intervalo="5000"
  })=> {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);
  const siguiente = useCallback(() => {
  // funcion para que la primer imagen que se estra mostrando vaya hacia atras y se vea nuevamente
    //Comprobamos que el slideshow tenga elementos
    if(slideshow.current.children.length > 0){
      //Obtenemos el primer elemento del slideshow
      const primerElemento = slideshow.current.children[0];
      //Establecemos la transicion para el slideshow
      slideshow.current.style.transition = `${velocidad}ms ease-out all`;
     // para hacer una constante para que se haga el calculo del tamaños del slide automaticamente
     const tamañoSlide = slideshow.current.children[0].offsetWidth;
     
      //Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
      //Como el codigo de abajo sobre escribe debemos crear una EVENTO con una constante primero para que este paso posterior se produzca despues del anterior, entonces metemos los 2 codigos de slideshow dentro del EVENTO
      const transicion = () => {
        // Reiniciamos la posicion del Slideshow
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;
      //Tomamos el primer elemento y lo mandamos al final
        slideshow.current.appendChild(primerElemento);
        
        slideshow.current.removeEventListener('transitionend', transicion);
    }

      // EventListener para cuando termina la animacion
      slideshow.current.addEventListener('transitionend', transicion);
     
    }
  }, [velocidad]);
  

  const anterior = () => {
    console.log('Anterior');
    if(slideshow.current.children.length > 0){
      //obtenemos el ultimo elemento del slideshow.
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
      
      slideshow.current.style.transition = 'none';

      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
   
      setTimeout(() => {
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
   
    }
  }
  
  useEffect(() => {
    if(autoplay)  {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
    }, intervalo); // 5000 son milisegundos
    //Eliminamos los intervalos en el caso que el usuario clickee
    slideshow.current.addEventListener('mouseenter', () => {clearInterval(intervaloSlideshow.current);
    });
    
    //Volvemos a poner el intervalo cuando saquen el cursor del slideshow
    slideshow.current.addEventListener('mouseleave', () => {intervaloSlideshow.current = setInterval(() => {
      siguiente();
  },intervalo);
  
    });

    }  
  }, [autoplay, intervalo, siguiente]);
  
 
  return (
    <ContenedorPrincipal >
        <ContenedorSlideshow ref={slideshow}>
          {children}
        </ContenedorSlideshow>
        {controles && <Controles> 
          <Boton onClick={anterior}>
            <FlechaIzquierda />
          </Boton>
          <Boton derecho onClick={siguiente}>
            <FlechaDerecha />
          </Boton>
        </Controles>}

    </ContenedorPrincipal>
  );
}

const ContenedorPrincipal = styled.div`
  position:relative;
`;

const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width:100%;
  overflow: hidden;
  transition: .3s ease all;
  z-index: 9;
  max_height: 500 px;
  position: relative;

  img {
    width:100%;
    vertical-align:top;
  }

`;

const TextoSlide = styled.div`
  background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
  color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
  width:100%;
  padding:10px 60px;
  text-align: center;
  position: absolute;
  bottom:0;

  @media screen and (max-width: 700px) {
    position: relative;
    background: black;
  }   
`;

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: .3s ease all;
  // &:hover {
  //   background: rgba(0,0,0,.2);
  //   path {
  //     fill: #fff;
  //   }
  // }

  path {
    filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
  }

  ${props => props.derecho ? 'right:0': 'left:0'}
`;


export  {Slideshow, Slide, TextoSlide};

//para importar en donde lo vamos a usar
// import {Slideshow, Slide, TextoSlide} from './componentes/Slideshow'
//   https://www.youtube.com/watch?v=q00ldTrywLU  38:07