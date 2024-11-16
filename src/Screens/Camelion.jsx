import React, { useEffect, useRef } from 'react'
import './camelion.css'

function Camelion() {
  const imgTrackRef  = useRef();
  let mouseAt = 0;
  let preMouseAt = 0;
  let _parcent = 0;
  const onMouseDown = (e)=>{
    mouseAt = e?.clientX
  }
  const onMouseMove = (e)=>{
    if(mouseAt == 0) return
    const _imageTrack = document.getElementById('imageTrack');
    const _Allimage = document.querySelectorAll("#image")
    const mouseDelte =( (parseFloat(mouseAt))  - e?.clientX)
    const maxDelta = (window.innerWidth) / 2
    const percentage = (mouseDelte / maxDelta) * -100
    let nextpercentage = parseFloat(preMouseAt) + percentage;
    nextpercentage = Math.max(nextpercentage,-100);
    nextpercentage = Math.min(nextpercentage,0);
    _parcent = nextpercentage
    // _imageTrack.style.transform = `translate(${(nextpercentage)}%, -50%)`;
    
    _imageTrack.animate({
        transform :`translate(${(nextpercentage)}%, -50%)`
    },{duration:1100,fill:"forwards",easing:"ease"})
    
    for(const _image of _Allimage){
        _image.animate({
            objectPosition : `${nextpercentage + 100}% 50%`
        },{duration:1400,fill:"both",easing:"ease"
      })
    } 
  }

  const onMouseUp = ()=>{
    mouseAt = 0;
    preMouseAt = _parcent;
  }
  
  return (
    <div className={"camelionContainer"}>
        <div onMouseDown={onMouseDown} onMouseUp={onMouseUp} id='imageTrack' onMouseMove={onMouseMove} ref={imgTrackRef} >
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        <img className={"image"} id='image' src={"https://images.pexels.com/photos/28428589/pexels-photo-28428589/free-photo-of-abstract-3d-spherical-geometric-pattern-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} draggable={false} />
        </div>
    </div>
  )
}
export default Camelion