import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I am from Serbia,but I' living in Vienna since 2016. I stydied
              Economics in Serbia,and now I am student Upleveded academy. I
              enjoy skiing,gym-time and travelling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
