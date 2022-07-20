import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Portfolio() {
  // comment
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">Some of my projects</p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/meme generator.png" className="portfolio-image" />

                <h4 className="portfolio-name">Meme Generator</h4>
              </div>
              <div className="portfolio-item">
                <img
                  src="/travel Full Stack Web Site.png"
                  className="portfolio-image"
                />
                <img src="/travel login.png" className="portfolio-image" />

                <h4 className="portfolio-name">
                  Travel Agency Full Stack Web Site
                </h4>
                <div className="portfolio-category">Web Site</div>
              </div>

              <div className="portfolio-item">
                <img
                  src="/transport web site.png"
                  className="portfolio-image"
                />

                <h4 className="portfolio-name">Transport Web Site</h4>
              </div>

              <div className="portfolio-item">
                <img src="/ecoomerce.png" className="portfolio-image" />
                <br></br>
                <img src="/products.png" className="portfolio-image" />

                <h4 className="portfolio-name">Ecommerce Store</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
