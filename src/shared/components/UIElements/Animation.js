import {useLottie} from 'lottie-react';

const Animation = (props) => {
  const style = {
    height: props.height,
    width: props.width
  };
  const options = {
    animationData: props.data,
    loop:true,
    autoplay:true,
    speed: props.speed
   
    
  };

  const {View} = useLottie(options, style);

  return View;
}

export default Animation;