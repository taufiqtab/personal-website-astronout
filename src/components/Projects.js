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
        "title" : "iBOX Queue",
        "img" : "data:image/png;base64,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",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Dealer Portal",
        "img" : "data:image/png;base64,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",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Ticketing",
        "img" : "https://ps.w.org/ticket-help-desk-system-lite/assets/icon-256x256.png?rev=2290882",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "eReporting",
        "img" : "https://cdn-icons-png.flaticon.com/512/2235/2235790.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Company Dashboard",
        "img" : "https://cdn-icons-png.flaticon.com/512/6821/6821002.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "DEP",
        "img" : "https://1.bp.blogspot.com/-2KZFH08aYPY/Wt0-c0R9Y0I/AAAAAAAARG8/_LSNETwy9zUmH9OQDIEcjDzKXzBlKRvfwCPcBGAYYCw/s320/blogger-image--1378281783.jpg",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Warehouse Portal",
        "img" : "https://cdn-icons-png.flaticon.com/512/407/407775.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "EMA",
        "img" : "https://cdn1.iconfinder.com/data/icons/web-app-developer/48/web__app_developer_-_code_modul-512.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Vendor Portal",
        "img" : "https://cdn-icons-png.flaticon.com/512/4866/4866608.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "RDA",
        "img" : "https://cdn-icons-png.flaticon.com/512/9308/9308921.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "ERAVERSARY",
        "img" : "data:image/jpeg;base64,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",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Report Generator",
        "img" : "https://cdn-icons-png.flaticon.com/512/10328/10328754.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Digital Receipt",
        "img" : "https://cdn-icons-png.flaticon.com/512/1509/1509496.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "ERCAS",
        "img" : "https://static.vecteezy.com/system/resources/previews/005/187/412/original/risk-analysis-flat-outline-concept-icon-showing-risk-evaluation-vector.jpg",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "SAP Password Reset Portal",
        "img" : "https://cdn-icons-png.flaticon.com/512/882/882701.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Audit Monitoring System",
        "img" : "https://media.istockphoto.com/id/1165492485/id/vektor/ikon-pencarian-di-papan-laporan-tinjauan-audit-periksa-ikon-daftar.jpg?s=612x612&w=0&k=20&c=XkI3Cr0rYIINfsH8hTHGN9N6oYYhB_XlToGT-TJXEc0=",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Donation Website",
        "img" : "https://cdn-icons-png.flaticon.com/512/2913/2913091.png",
        "category" : "Web",
        "link" : "",
        "createdAt" : ""
      },
      
    ]

    const dataMobile = [
      {
        "title" : "Simpelin POS",
        "img" : "https://play-lh.googleusercontent.com/M6nlQhNJjFJstq-bBkm2qnhHsOhaCJhSBGHqJ9hAwOXUo1tGyjkQg0xsXG-x3QCZSlbt=w5120-h2880-rw",
        "category" : "Mobile",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "Simpelin Customer",
        "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXtJtEyC7of6mkAwWNdugF9S-h9pJQZ7X7mQ&usqp=CAU",
        "category" : "Mobile",
        "link" : "",
        "createdAt" : ""
      },
      {
        "title" : "eHRM PUPR",
        "img" : "https://drive.google.com/file/d/1FIuXne_gBZlIzh7GvZvfzCUQLHGuQgou/preview",
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
                <Tab.Container id="projects-tabs" defaultActiveKey="Web">
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
