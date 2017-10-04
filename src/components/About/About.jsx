import React from 'react';
import FormTitle from '../Form/FormTitle';

const About = () => {
  return (
    <div className="about-container">
      <FormTitle formTitle="About This" />
      <p className="about-text tk-europa">
        Created using ReactJS, D3js, ES6, HTML5, and SCSS.
        <br/><br/>
        SVGs created by me with the exception of the Docker logo.
        <br/><br/>
        Source code can be found on <a className="about-text" href="https://github.com/calebpollman/svg-manipulation">github</a>.
      </p>
    </div>
  );
}

export default About;
