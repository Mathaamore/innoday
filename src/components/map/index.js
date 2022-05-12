import React, { useState } from 'react';
import Hero from '../character'
import TeamPop from '../TeamPop';
import Carte from '../../images/new_bg.png'
import Conf from '../../images/conf.png'
import MuseeBM from '../../images/musee.png'
import Voyage from '../../images/centre.png'
import Vingt from '../../images/vingtmille.png'
import Terrelune from '../../images/lune.png'
import Ilemyst from '../../images/mysterieuse.png'
import Tour80 from '../../images/80jours.png'


import {
  Camera,
  Map,
}
  from './WorldElement'
import Tutorial from '../Tutorial';

  var x = 265;
  var y = 190;
  var counter = 0;

const World = ({
  dir
}) => {
  const [isClose, setisClose] = useState(false);
  const [Index, setIndex] = useState(0);

  /*
    0 - Conf 
    1 - Musée
    2 - voyage
    3 - vingt mille
    4 - terre lune
    5 - ile myst
    6 - tour du monde
  */

  if (-6 < x && x < 210 &&  -16 < y && y < 178){
    /* Conference */
    if(!isClose){
      document.getElementById("world").style.backgroundImage=`url(${Conf}), url(${Carte})`;
      setisClose(true);
      setIndex(0);
    }
  }
  else if (118 < x && x < 337 &&  289 < y && y < 469) {
    /* Conference */
    if(!isClose){
      document.getElementById("world").style.backgroundImage=`url(${MuseeBM}), url(${Carte})`;
      setisClose(true);
      setIndex(1);
    }
  }
  else if (343 < x && x < 529 &&  46 < y && y < 190) {
    /* Conference */
    if(!isClose){
      document.getElementById("world").style.backgroundImage=`url(${Voyage}), url(${Carte})`;
      setisClose(true);
      setIndex(2);
    }
  }
  else if (463 < x && x < 631 &&  202 < y && y < 364) {
    /* Conference */
    if(!isClose){
      document.getElementById("world").style.backgroundImage=`url(${Vingt}), url(${Carte})`;
      setisClose(true);
      setIndex(3);
    }
  }
  else if (640 < x && x < 757 &&  16 < y && y < 184) {
    /* Conference */
    if(!isClose){
      document.getElementById("world").style.backgroundImage=`url(${Terrelune}), url(${Carte})`;
      setisClose(true);
      setIndex(4);
    }
  }
  else if (763 < x && x < 907 &&  226 < y && y < 406) {
    /* Conference */
    if(!isClose){
      document.getElementById("world").style.backgroundImage=`url(${Ilemyst}), url(${Carte})`;
      setisClose(true);
      setIndex(5);
    }
  }
  else if (859 < x && x < 1009 &&  40 < y && y < 190) {
    /* Conference */
    if(!isClose){
      document.getElementById("world").style.backgroundImage=`url(${Tour80}), url(${Carte})`;
      setisClose(true);
      setIndex(6);
    }
  }
  else{
    if(isClose){
      document.getElementById("world").style.backgroundImage=`url(${Carte})`;
      setisClose(false);
    }
  }
  console.log(dir + " " + counter);
  counter +=1;
  //start in the middle of the map
  var pixelSize = 2;
  var speed = 5; //How fast the character moves in pixels per frame

  if (dir) {
    if (dir === 'right') { x += speed; }
    if (dir === 'left') { x -= speed; }
    if (dir === 'down') { y += speed; }
    if (dir === 'up') { y -= speed; }
  }

    //Limits (gives the illusion of walls)
    var leftLimit = -8;
    var rightLimit = (16 * 11 * 6.2) - 8*8;
    var topLimit = -16;
    var bottomLimit = (16 * 10) * 3;
    console.log(x,y);
    if (x < leftLimit) { x = leftLimit; }
    if (x > rightLimit) { x = rightLimit; }
    if (y < topLimit) { y = topLimit; }
    if (y > bottomLimit) { y = bottomLimit; }


    var camera_left = pixelSize * 135;
    var camera_top = pixelSize * 50;
    
    return (
      <>
      <Camera>
        <Tutorial id="Tutorial" />
        <TeamPop isClose={isClose} Index={Index}/>
        <Map id="world" style={{transform: `translate3d( ${-x * pixelSize + camera_left}px, ${-y * pixelSize + camera_top}px, 0 )`}}>
          <Hero dir={dir} style={{transform: `translate3d( ${x * pixelSize}px, ${y * pixelSize}px, 0 )`}}/>
        </Map>
      </Camera>
      </>
      
    )
  }

  export default World