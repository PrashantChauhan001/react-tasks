import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <figure className="hero">
        <img
          className="hero-img"
          src="assets/images/home_image.svg"
          alt="Building website"
        />
        <figcaption className="hero-caption">
          Individually, we are one drop.{" "}
          <span className="focus-text">Together,</span> we are{" "}
          <span className="focus-text">ocean</span>
        </figcaption>
      </figure>
      {/* <!-- <aside>The <span>awesome</span> web developer</aside> --> */}
      <section className="section">
        <div className="container">
          <h1 className="hero-caption">technologies</h1>
          <p>
            I'm familiar with HTML5, CSS3, JavaScript, ReactJS and Web Hosting
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container ow">
          <h1 className="hero-caption">projects</h1>
          <p>
            I am happy to showcase my work and thus, you can see it hosted
            online
          </p>
          <Link to="/projects" className="link button button-secondary">
            See projects
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="hero-caption">blogs</h1>
          <p>
            I have also written some technical and non-technical blogs. You can
            see it via below button.
          </p>
          <Link to="/blogs" className="link button button-primary">
            Read Blogs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
