import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

// Genneric Component
import Section from "../components/Common/Section"
import Title from "../components/Common/Title"
import CookiesConsent from "../components/Cookies"

// Core components
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/About"
import Banner from "../components/Banner"
import BannerPlant from "../components/BannerPlant"
import ClientType from "../components/ClientType"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Portfolio from "../components/Portfolio/Portfolio"

function WebPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson
  const blogJson = props.data.allWorkJson.edges

  return (
    <Layout nav={contentJson.navigation}>
      <Hero data={contentJson.hero} />
      <About data={contentJson.about} />
      <Banner data={contentJson.banner} />
      <BannerPlant data={contentJson.banner_2} />
      <ClientType data={contentJson.client_type} />
      <Services data={contentJson.services} />
      <Section anchor={'portfolio'} className={'portfolio bg-gray '} fluid={true} noGutters={true}>
        <Title title={generalJson.portfolio.title} />
        <Portfolio data={blogJson} />
      </Section>
      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true} noGutters={true}>
        <Contact data={generalJson.contact} />
      </Section>
      <CookiesProvider>
        <CookiesConsent data={generalJson.tags} />
      </CookiesProvider>
    </Layout>
  )
}

export default WebPage

export function Head(props) {
  return (
    <Seo
        page={'web'}
        metas={props.data.allDataJson.edges[0].node.general}
      />
  )
}

export const imageData = graphql`
  query{
    allDataJson(filter: {general: {path: {eq: "/desarrollo-web"}}}) {
      edges {
        node {
        ...generalFields
        ...navigationFields
        ...heroFields
        ...aboutFields
        ...bannerFields
        ...clientTypeFields
        ...banner2Fields
        ...servicesFields
        }  
      }
    }
    dataJson(general: {path: {eq: "/"}}) {
      ...contactFields
      ...tagsFields
      ...portfolioFields
    }
    allWorkJson(sort: {date: DESC}) {
      edges {
        node {
          id
        client
        alt
        cat
        city
        date
        tags
        image{
          publicURL
        }
        thumbnail{
          publicURL
        }
        url
        year
        description
          parent {
            ... on File {
              relativeDirectory
              name
            }
          }
        }
      }
    }
  }
`
