import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import { graphql } from 'gatsby'
import { trataLink } from '../components/Utils'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = ({data}) => (
    <Layout>
        <Helmet>
            <title></title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2> Sed amet aliquam</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section>
            <section id="two" className="spotlights">

              {data.allContentfulCursos.nodes.map(curso => (
                  
                  <section key={`curso-${curso.slug}`}> 
                      <Link to={"/" + trataLink(curso.nome)} className="image">
                          <img src={pic08} alt="" />
                      </Link>
                      <div className="content">
                          <div className="inner">
                              <header className="major">
                                  <h3>{curso.nome}</h3>
                              </header>
                            
                              <p>{curso.introducao.introducao.toString()}</p>

                              <ul className="actions">
                                  <li><Link to={"/" + trataLink(curso.nome)} className="button">Veja mais</Link></li>
                              </ul>
                          </div>
                      </div>
                  </section>

              ))}
            
            </section>
        </div>

    </Layout>
)

export const query = graphql`
  query HomePageQuery {
    allContentfulCursos {
      nodes {
        nome
        introducao {
            introducao
        }
      }
    }
  }
`

export default Landing