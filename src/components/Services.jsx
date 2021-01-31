import React from "react"
import Fade from 'react-reveal/Fade'
import Section from "../components/Common/Section"
import Title from "../components/Common/Title"

function Services(props) {
    return (
        <Section className={'services bg-gray py-5'}>
        <Title className="pb-5" title={props.data.title} />
        <Fade up>
          <div className="services-wrapper">
            {props.data.projects.map((key, index) =>
              <div className="item3 mb-5" key={index}>
                <img className="mx-auto d-block my-3" src={key.image.publicURL} alt={key.alt} />
                <h4 className="text-center">{key.name}</h4>
                <ul className="description">
                  {key.type.split('\n').map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>)}
          </div>
          <div className="d-flex w-100 justify-content-center">
            <button className="btn btn--primary my-3 mr-4">
              <a href="https://wa.me/34630563184" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> Contactános</a>
            </button>
          </div>
        </Fade>
      </Section>
    )
}

export default Services