import logoDesktop from './images/banner.jpg';
import logoMobile from './images/logo.png';
import logoText from './images/logo_text.jpeg';
import handshake from './images/handshake.png';
import rating from './images/rating.png';
import electricity from './images/electricity.png';
import './App.scss';
import React from 'react';
import instagram from './images/instagram.svg';
import phone from './images/phone.png';
import ContactForm from './components/ContactForm';
import ContentCards from './components/ContentCards';
import ImageGallery from './components/ImageGallery';


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
            <ContentCards />
          {/* <ul>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Domestic Renovations</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Rewiring</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Electric Vehicle Charging Points</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Smart Lighting</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Electric and Storage Heating</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />Fire Alarm Installations</li>
            <li><img className="list-logo" src={logoMobile} alt="logo" />EICRs</li>
          </ul> */}
          </FadeInSection>

        </div>

        <FadeInSection>
        <div className="service-block">
        <h2 className="blue-text">Our Guarantees</h2>
          <div className="service-wrapper">
          <div className="service-icon-wrapper">
              <img className="service-icon" src={rating} alt="description of image" />
            </div>
            <div className="service-text">
              <h3>STANDARD OF EXCELLENCE</h3>
              <p>We hold ourselves to a very high professional standard. Accordingly, customer satisfaction is paramount to us. To ensure that we are doing our best work for you, we require our electricians to be punctual and respectful, and we always encourage perfectionism. At the end of the day, we do not consider a job as finished until you consider it as such.</p>
              </div>
          </div> 

          <div className="service-wrapper">
            <div className="service-icon-wrapper">
              <img className="service-icon margin" src={electricity} alt="description of image"/>
            </div>
            <div className="service-text">
              <h3>FREE QUOTATIONS</h3>
              <p>We want to foster a long-term relationship with our clients where they can trust that we have their best interests at heart. This begins with our promise of free quotations because you deserve to know the full plan before you choose to work with us.</p>
             </div>
          </div> 

          <div className="service-wrapper">
            <div className="service-icon-wrapper">
              <img className="service-icon margin" src={handshake} alt="description of image"/>
            </div>
            <div className="service-text desktop-padding-top">
              <h3>LICENSING AND INSURANCE</h3>
              <p>All our licences and insurances are updated and checked on a regular basis so that our work is in line with legal standards. </p>
            </div>
          </div> 
        </div> 
        </FadeInSection>

        <div className="contact-modal">
          <div id="cta-buttons" class="box">
            <a class="button" href="#popup1">Contact Us</a>
            <a class="button" href="#popup2">See Our Gallery</a>
          </div>

          <div id="popup1" class="overlay">
            <div class="popup">
              <h2>Contact Us</h2>
              <a class="close" href="#cta-buttons">&times;</a>
              <div class="content">
                <ContactForm />
              </div>
            </div>
          </div>

          <div id="popup2" class="overlay">
            <div class="popup-gallery">
              <h2>Our Gallery</h2>
              <a class="close" href="#cta-buttons">&times;</a>
              <div class="content image-gallery">
                <ImageGallery />
              </div>
            </div>
          </div>
        </div>

        <div className="contact-div">
          <div className="contact-footer">
            <div className="social-icons">
            <a target="_blank" href="https://www.instagram.com/yeats_electrical_ltd/">
              <img className="social-icon" src={instagram} />
            </a>
            <a href="tel:07395810679">
              <img className="social-icon" src={phone} />
            </a>
            </div>
          </div>
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



