import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import jsonBannerOfertas  from '../paginas/jsonBannerOfertas '
import { Update } from "@material-ui/icons";



export default function SimpleSlider() {
    var settings = {
     
      autoplay: true,
      autoplaySpeed: 10000,  
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 3,
      slidesToScroll: 3,
   
    };
    return (
      
      <div className="componenteBannerHead">
      <Slider {...settings}>
        {jsonBannerOfertas.map(function(dato,index){
                            return (
                                                                     
                        <div className="bannerHead" key={index} >                                                
                        
                            <div className="ofertaImgBanner">             
                                 <img src={dato.imagen} />
                            </div>   
                           
                            <div className="ofertaDatoBanner">
                                <h4>{dato.name}</h4>                                    
                               
                            </div>                              
                       
                    </div> 
                    ) 
                    
                    }
                   
                 )}       
          
      </Slider>
      <Slider {...settings}>
        {jsonBannerOfertas.map(function(dato,index){
                            return (
                                                                     
                        <div className="bannerHead" key={index} >                                                
                        
                            <div className="ofertaImgBanner">             
                                 <img src={dato.imagen} />
                            </div>   
                           
                            <div className="ofertaDatoBanner">
                                <h4>{dato.name}</h4>                                    
                               
                            </div>                              
                       
                    </div> 
                    ) 
                    
                    }
                   
                 )}       
          
      </Slider>
      
     </div>
    );
  }
