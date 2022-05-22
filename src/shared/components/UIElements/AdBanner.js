import * as React from 'react'
import Slider from 'react-slick';
import {useWindowSize} from '../../hooks/size-hook';
import './AdBanner.css';
const AdBanner = (props) => {
    const[hideAds, setHideAds] =  React.useState(false);
    const size = useWindowSize();
   
    const Settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        autoplaySpeed:8000,
        prevArrow: false,
        nextArrow: false,
        cssEase: "linear",
        fade:true
    }

    const createAds = (data, index) => {
        return(<>
                        <a target="_blank" rel="noreferrer" className="ad-link" href={data.content} key={index} id={data.id}><img src={data.image} alt={data.title} /><span onClick={adsHandler}>X</span></a>
        </>
                
        )
    }
   const adsHandler =()=>{
       setHideAds(true);
   }
return(
    <>
{!hideAds && <Slider className="ad-slider" {...Settings}>
        {size.width < 420 && props.mobileAds.map(createAds)}
        {size.width > 420 && props.desktopAds.map(createAds)}
    </Slider>}
    </>
)
}
export default AdBanner;