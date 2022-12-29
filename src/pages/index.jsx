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
import BannerPhone from "../components/BannerPhone"
import ClientType from "../components/ClientType"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Portfolio from "../components/Portfolio/Portfolio"

// import Form from "../components/Form"

function IndexPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const blogJson = props.data.allWorkJson.edges
  return (
    <Layout nav={contentJson.navigation}>
      <Hero data={contentJson.hero} />
      <About data={contentJson.about} />
      <Banner data={contentJson.banner} />
      <BannerPlant data={contentJson.banner_2} />
      <ClientType data={contentJson.client_type} />
      <BannerPhone data={contentJson.banner_3} />
      <Services data={contentJson.services} />
      <Section anchor={'portfolio'} className={'portfolio bg-gray '} fluid={true} noGutters={true}>
        <Title title={contentJson.portfolio.title} />
        <Portfolio data={blogJson} />
      </Section>
      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true} noGutters={true}>
        <Contact data={contentJson.contact} />
      </Section>
      <CookiesProvider>
        <CookiesConsent data={contentJson.tags} />
      </CookiesProvider>
    </Layout>
  )
}

export default IndexPage

export function Head(props) {
  return (
    <Seo
        page={'inicio'}
        metas={props.data.allDataJson.edges[0].node.general}
      />
  )
}

export const imageData = graphql`
  query{
    allDataJson(filter: {general: {path: {eq: "/"}}}) {
      edges {
        node {
        ...aboutFields
        ...contactFields
        ...generalFields
        ...heroFields
        ...navigationFields
        ...servicesFields
        ...clientTypeFields
        ...tagsFields
        ...bannerFields
        ...banner2Fields
        ...banner3Fields
        ...portfolioFields
        }  
      }
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
