import logoDesktop from './images/banner.jpg';
import logoMobile from './images/logo.png';
import logoText from './images/logo_text.jpeg';
import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="app-logo-desktop">
          <img src={logoDesktop} alt="logo" />
        </div>
        <div className="app-logo-mobile">
          <img src={logoMobile} alt="logo" />
          <img src={logoText} alt="logo" />
        </div>
        <div class="contentDiv">
            <img class="arrow" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png" />
        </div>
      </header>
      <body>
        <div className="introduction">
        <FadeInSection>
          <h3>In a time where value for money has never been so important, Yeats Electrical passionately believes in providing you with an excellent, reliable, and efficient service. </h3>
          <h3>With extensive experience in the South-East, across a multitude of tasks and work environments, we are adapted and suited to any requirements that you may have. Whether it’s a full rewiring or a brief consultation to plan future work, then Yeats Electrical are the team for the job. </h3>
        </FadeInSection>
        </div>      
        <div className="our_services"> 
          <FadeInSection>
            <h2 className="blue-text">Our Services</h2>
          <ul>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Domestic Renovations</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Rewiring</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Electric Vehicle Charging Points</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Smart Lighting</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Electric and Storage Heating</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Fire Alarm Installations</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />EICRs</li>
          </ul>
          </FadeInSection>

        </div>
      </body>
    </div>
  );
}

export default App;

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}