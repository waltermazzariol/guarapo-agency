import React from "react"
import Fade from 'react-reveal/Fade'
import Title from "../components/Common/Title"
import Section from "../components/Common/Section"
import Col from 'react-bootstrap/Col'

function ClientType(props) {
    return (
        <Section className="project mb-5">
            <div className="d-flex flex-wrap justify-content-around">
                <Title title={props.data.title} />
                {props.data.services.map((key, index) =>
                    <div className="item1 mb-3 p-3 bg--70" key={index}>
                        <div className="d-flex">
                            <Fade up>
                                <div className="item2 p-3" >
                                    <img className="img-fluid" src={key.image.publicURL} alt={key.name} />
                                </div>
                                <div className="item2 p-2" >
                                    <h4>
                                        {key.name}
                                    </h4>
                                    <span className="small-text">
                                        {key.type}
                                    </span>
                                </div>
                            </Fade>
                        </div>
                    </div>)}
                <Col className="text-center">
                    <button className="btn btn--primary my-3 mr-4">
                        <a href="https://wa.me/34630563184" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i> Contactános</a>
                    </button>
                </Col>
            </div>
        </Section>
    )
}

export default ClientType