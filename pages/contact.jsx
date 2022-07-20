import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">You can contact me anytime.</p>
            <ul className="contact-links">
              <li className="contact-item">Email: astojanovic1900@gmail.com</li>
              <li className="contact-item">Phone: +436503309400</li>
              <li className="contact-item">
                LinkedIn Profile: &nbsp;
                <a href="https://www.linkedin.com/in/andjelina-stojanovic-489885228/">
                  LinkedIn:
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
