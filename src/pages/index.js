import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import curso_thetahealing from '../assets/images/curso_thetahealing.webp'
import atendimento_thetahealing from '../assets/images/atendimento_thetahealing.jpg'
import metodo_melk from '../assets/images/metodo_melk.jpg'
import mesa_radionica from '../assets/images/mesa-radionica.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${curso_thetahealing})`}}>
                            <header className="major">
                                <h3>Cursos de ThetaHealing</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/cursos" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${atendimento_thetahealing})`}}>
                            <header className="major">
                                <h3>Atendimento de ThetaHealing</h3>
                                <p>feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${mesa_radionica})`}}>
                            <header className="major">
                                <h3>Atendimento de Mesa Radiônica</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${metodo_melk})`}}>
                            <header className="major">
                                <h3>Atendimento Método Melchizedek</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex