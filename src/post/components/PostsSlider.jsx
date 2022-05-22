import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PostsSlider.css';

const PostsSlider = props => {
    const calcSlides = (i) => {
        const items = i.length;
        if(items < 3){
          return items
        }
        return 3
    }
  
    const calcMobileSlides = (i) => {
      const items = i.length;
      if(items < 1){
        return items
      }
  
      return 1
    }
      const Settings = {
          infinite: true,
          slidesToShow: calcSlides(props.items),
          slidesToScroll: 1,
          autoplay: true,
          speed: 600,
          autoplaySpeed:8000,
          prevArrow: false,
      nextArrow: false,
          cssEase: "linear",
          responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: calcSlides(props.items),
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: calcMobileSlides(props.items),
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: calcMobileSlides(props.items),
                  slidesToScroll: 1
                }
              }
            ]
  
      }
    const createSlides = (data, index) => {
        return(
            <div key={index} id={data.id} onClick={props.onClick} className="post-slider__slide">
                <div id={data.id} className="post-slider__slide-inner">
                <div>
                    <img id={data.id} src={data.image} alt={data.title} />
                </div>
                <h2 id={data.id} >{data.title}</h2>
                </div>
            </div>
        )
    }    
    return(
        <div>
            <h2>More Posts</h2>
            <Slider {...Settings}>
                {props.items.map(createSlides)}
            </Slider>
        </div>
    )
}

export default PostsSlider;