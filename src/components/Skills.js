import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { useState } from "react";
import { useEffect } from "react";

export const Skills = () => {

  //https://api.appdul.com/api/skills?populate=thumnail_images
  const [Skill, setSkill] = useState([])

  const fetchData = ()=>{
     
    let BASE_URL = 'https://api.appdul.com'
    let MODUL = '/api/skills'
    let ENDPOINT = BASE_URL+MODUL+`?populate=thumnail_images`

    fetch(ENDPOINT)
    .then(async (response) => {
        const result = await response.json()
        return [response.status, result]
    })
    .then(([statusCode, result])=>{
        // const {rates} = result
        const temp = result.data.map((item) => {
            const title = item.attributes.skill_name
            const img = BASE_URL+item.attributes.thumnail_images.data.attributes.url

            return {
                title,
                img,
            }
        })

        setSkill(temp)
    })
    .catch(err=>{
        console.log(err)
    })
  }

  useEffect(()=>{
      fetchData()
  }, [])


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Knowledge</h2>
                        <p>I have learned different programming languages & frameworks ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={400} focusOnSelect={true} className="owl-carousel owl-theme skill-slider">
                            
                            {
                              Skill.map(e => {
                                return(
                                  <div key={e.title} className="item">
                                    <img src={e.img} alt="Image" />
                                    <h5>{e.title}</h5>
                                </div>
                                )
                              })
                            }
                            {/* <div className="item">
                                <img src="https://assets.stickpng.com/images/58480e35cef1014c0b5e4920.png" alt="Image" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <img src="https://miro.medium.com/max/320/0*ObJbOfJnx4QIPUq9.png" alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Unity.png" alt="Image" />
                                <h5>Unity</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="Image" />
                                <h5>Vue</h5>
                            </div>
                            <div className="item">
                                <img src="https://download.blender.org/branding/community/blender_community_badge_orange.png" alt="Image" />
                                <h5>Blender 3D</h5>
                            </div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/DaVinci_Resolve_17_logo.svg/1200px-DaVinci_Resolve_17_logo.svg.png" alt="Image" />
                                <h5>Davinci Resolve</h5>
                            </div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/1024px-The_GIMP_icon_-_gnome.svg.png" alt="Image" />
                                <h5>GIMP</h5>
                            </div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Inkscape_Logo.svg/2048px-Inkscape_Logo.svg.png" alt="Image" />
                                <h5>Inkscape</h5>
                            </div> */}

                            
                            

                            
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
