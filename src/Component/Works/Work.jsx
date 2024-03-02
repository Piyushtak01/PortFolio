import React, { useRef } from 'react'
import { projects } from '../../utils/data'
import { ProjectCard } from './ProjectCard/ProjectCard'
import Slider from 'react-slick';
import "./Work.css";

export const Work = () => {
   const sliderRef = useRef();
   const settings = {
    dots:false,
    infinity:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,
    arrows:false,
    responsive:[
      {
        breakpoint:769,
        settings: {
          slidesToShow : 1,
          slidesToScroll:1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  }
   
  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };


  return (
   
   <section id='Project-container'>
     <h5 className="text-[1.5rem] font-semibold mb-12 font-Gilroy" >MY WORKS</h5>
    
    <div id="work-content" >
      <div id="arrow-right" onClick={slideRight}>
      <span class='material-symbols-outlined'>chevron_right</span>
      </div>
      
      <div id="arrow-left" onClick={slideLeft}>
        <span class="material-symbols-outlined">chevron_left</span>
      </div>


      <Slider ref={sliderRef}{...settings}>
         {projects.map((item) => (
          <ProjectCard 
           imgUrl={item.image}
           title={item.title}
           description={item.description}
           technology={item.technology}
           Giturl={item.Git}
           Lookout={item.Lookout}
          />
         ))}
     </Slider>
    </div>    
   </section>
   
  )
}
