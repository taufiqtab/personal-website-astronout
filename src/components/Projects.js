import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/forth project.jpg";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";
import { useEffect } from "react";

export const Projects = () => {

  const [Project, setProject] = useState([])

  //https://api.appdul.com/api/projects?populate=%2A
  //https://api.appdul.com/api/project-categories

  const fetchData = ()=>{
     
    let BASE_URL = 'https://api.appdul.com'
    let MODUL = '/api/project-categories'
    let ENDPOINT = BASE_URL+MODUL

    fetch(ENDPOINT)
    .then(async (response) => {
        const result = await response.json()
        return [response.status, result]
    })
    .then(([statusCode, result])=>{
        // const {rates} = result
        const categories = result.data.map(e => e.attributes.category_name)

        MODUL = '/api/projects'
        ENDPOINT = BASE_URL+MODUL+'?populate=%2A'

        fetch(ENDPOINT)
          .then(async (response) => {
              const result = await response.json()
              return [response.status, result]
          })
          .then(([statusCode, result])=>{
              const temp = result.data.map((item) => {
                const title = item.attributes.project_name
                const img = BASE_URL+item.attributes.project_thumbnail.data.attributes.url
                const category = item.attributes.project_category.data.attributes.category_name
                const link = item.attributes.project_link
                const createdAt = item.attributes.createdAt
                

                return {
                    title,
                    img,
                    category,
                    link,
                    createdAt
                }
              })

              const final = categories.map((fil) => {

                const listProject = temp.filter(e => e.category === fil)
                listProject.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                
                return {
                  category : fil,
                  data:listProject
                }
              })

              console.log(final)
              setProject(final)
          })
          .catch(err=>{
              console.log(err)
          })
        

        // setSkill(temp)
    })
    .catch(err=>{
        console.log(err)
    })
  }

  const fetchOfflineData = ()=>{

    const dataWeb = [
      {
        "title" : "iBOX CSO",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Dealer Portal",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Ticketing",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "eReporting",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Erajaya Dashboard",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "DEP",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Warehouse Portal",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "EMA",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Vendor Portal",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "RDA",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "ERAVERSARY",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Report Generator",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Digital Receipt",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "ERCAS",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "SAP Password Reset Portal",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Audit Monitoring System",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Donation Website",
        "img" : "https://cdn-icons-png.flaticon.com/512/3988/3988014.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      
    ]

    const dataMobile = [
      {
        "title" : "Simpelin POS",
        "img" : "https://cdn-icons-png.flaticon.com/512/4477/4477610.png",
        "category" : "Mobile",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Simpelin Customer",
        "img" : "https://cdn-icons-png.flaticon.com/512/4477/4477610.png",
        "category" : "Mobile",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "eHRM PUPR",
        "img" : "https://cdn-icons-png.flaticon.com/512/4477/4477610.png",
        "category" : "Mobile",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "APASI - DJP Batam",
        "img" : "https://cdn-icons-png.flaticon.com/512/4477/4477610.png",
        "category" : "Mobile",
        "link" : "",
        "createdAt" : ""
      },
    ]

    const dataGames = [
      {
        "title" : "SWAF - Second World Adventure Freeroam",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Balloon Bender",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "ReaLato - Lato Lato Simulator",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Bedug 3D Lebaran",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Warkop TheGame",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Ayo Telolet",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "No Ngetem !",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Ngepet TheGame",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Juragan Wayang",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Juragan Kota",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Juragan Hotel",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Legend War",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Tactical Robot",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Gunners.io",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Robot Evolved",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Hero War",
        "img" : "https://cdn-icons-png.flaticon.com/512/3408/3408506.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
    ]

    const dataEdu = [
      {
        "title" : "FlonAR - Augmented Reality Flora Fauna",
        "img" : "https://cdn-icons-png.flaticon.com/512/2038/2038157.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "BIDO Educational Series",
        "img" : "https://cdn-icons-png.flaticon.com/512/2038/2038157.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "KuRU - Ular Tangga Pintar",
        "img" : "https://cdn-icons-png.flaticon.com/512/2038/2038157.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Trashformers - Gemastik 8 Finalist",
        "img" : "https://cdn-icons-png.flaticon.com/512/2038/2038157.png",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
    ]

    const dataMultimedia = [
      {
        "title" : "Youtube Tutorial Series",
        "img" : "https://i.ytimg.com/vi/tEFkS_Ksdto/maxresdefault.jpg",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      
    ]

    const dataOther = [
      {
        "title" : "FITKOM Instagram Filter",
        "img" : "https://images.squarespace-cdn.com/content/v1/5df28c9371b0a51d1faed62b/1581028465726-7EU1CYU2N2H6DU89TQOJ/NSN-021020-how-to-use-instagram-filters-01.png?format=2500w",
        "category" : "Games",
        "link" : "",
        "createdAt" : ""
      },
      
    ]

    const final = [
      {
        "category" : "Web",
        "data" : dataWeb
      },
      {
        "category" : "Mobile",
        "data" : dataMobile
      },
      {
        "category" : "Games",
        "data" : dataGames
      },
      {
        "category" : "Educational",
        "data" : dataEdu
      },
      {
        "category" : "Multimedia",
        "data" : dataMultimedia
      },
      {
        "category" : "Other",
        "data" : dataOther
      }
    ]
    
    setProject(final)
  }

  useEffect(()=>{
    //fetchData()
    fetchOfflineData()
  }, [])

  const projects = [
    {
      
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I show you to all the big and small Projects I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="Games">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {
                      Project.map(pro => {
                        return(
                          <Nav.Item key={pro.category}>
                            <Nav.Link eventKey={pro.category}>{pro.category}</Nav.Link>
                          </Nav.Item>
                        )
                      })
                    }
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Games</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {
                      Project.map(pro => {
                        return(
                          <Tab.Pane eventKey={pro.category} key={pro.category}>
                            <Row>
                              {
                                pro.data.map((project, index) => {
                                  return (
                                    <>
                                      <ProjectCard
                                      key={index}
                                        {...project}
                                      />
                                    </>
                                  )
                                })
                              }
                            </Row>
                          </Tab.Pane>
                        )
                      })
                    }
                    {/* <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
