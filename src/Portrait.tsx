import straightPortrait from './assets/portraits/straight.jpg';
import downPortrait from './assets/portraits/down.jpg';
import upPortrait from './assets/portraits/up.jpg';
import leftPortrait from './assets/portraits/left.jpg';
import rightPortrait from './assets/portraits/right.jpg';
import upleftPortrait from './assets/portraits/upleft.jpg';
import uprightPortrait from './assets/portraits/upright.jpg';
import downleftPortrait from './assets/portraits/downleft.jpg';
import downrightPortrait from './assets/portraits/downright.jpg';
import React, { useRef, useState, useEffect } from "react";

export function Portrait() {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const rectRef = useRef<DOMRect | null>(null);
    let [portrait, setPortrait] = useState(straightPortrait);

    const updateRect = () => {
        const el = imgRef.current;
        if (!el) return;
        rectRef.current = el.getBoundingClientRect();
    };
  useEffect(() => {

    window.addEventListener('resize', updateRect);
    window.addEventListener('load', updateRect);

    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
    if(event.clientY > rectRef.current!.top &&
      event.clientY < rectRef.current!.bottom &&
      event.clientX > rectRef.current!.left &&
      event.clientX < rectRef.current!.right
    )
    {
      setPortrait(straightPortrait);
    }
    else if(event.clientY < rectRef.current!.top){
      if(event.clientX < rectRef.current!.left){
        setPortrait(upleftPortrait); //NOTE: Users will rarely be in corners - just move the eyess
      }
      else if(event.clientX > rectRef.current!.right){
        setPortrait(uprightPortrait); 
      }
      else{
        setPortrait(upPortrait);
      }
    }
    else if(event.clientY > rectRef.current!.bottom){
      if(event.clientX < rectRef.current!.left){
        setPortrait(downleftPortrait);
      }
      else if(event.clientX > rectRef.current!.right){
        setPortrait(downrightPortrait);
      }
      else{
        setPortrait(downPortrait);
      }
    }
    else{
      if(event.clientX < rectRef.current!.left){
        setPortrait(leftPortrait);
      }
      else if(event.clientX > rectRef.current!.right){
        setPortrait(rightPortrait);
      }
    }
    };

    // Attach the event listener to the window object
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('load', updateRect);
    };
  }, []);

  return <img ref={imgRef} src={portrait} alt="a drawing of me!"  />;
}

export default Portrait;