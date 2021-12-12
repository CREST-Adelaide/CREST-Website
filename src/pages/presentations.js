import React from 'react'
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import ServicesArea from '../containers/it-solutions/services-area'

const TabsPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Our Presentations" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Our Presentations"
            />
            <main className="site-wrapper-reveal">
                <ServicesArea />
            </main>
            <Footer />
        </Layout>
    )
}

export default TabsPage
