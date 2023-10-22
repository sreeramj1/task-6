import './App.css';

function App() {
  const imageUrl1 = process.env.PUBLIC_URL + 'WhatsApp Image 2023-10-15 at 15.49.06_929d2bcf.jpg';
  const imageUrl2 = process.env.PUBLIC_URL + 'web-developer-logo-design-29b5d4.png';
  const imageUrl3 = process.env.PUBLIC_URL + 'Java-Logo.png';
  const imageUrl4 = process.env.PUBLIC_URL + 'download.png';

  return (
    <>
      <div className='container-fluid' id='portfolio'>
        <div id='header'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'><h1 id='logo'>Portfolio</h1></div>
              <div className='col-md-8'>
                <ul className='d-flex justify-content-md-end' id='menu'>
                  <li><a href='#home'>Home</a></li>
                  <li><a href='#skills'>Skills</a></li>
                  <li><a href='#projects'>Projects</a></li>
                  <li><a href='#contactus'>Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id='home'>
        <div id='banner' className='py-5'>
          <div className='container'>
            <div className='row mt-5'>
              <div className='col-lg-6'>
                <div className='banner-title'>
                  <h1 className='title'>Sreeramjvp</h1>
                  <p className='lead'>I'm a learning developer driven by curiosity and a passion for technology, constantly exploring and innovating in the ever-evolving world of coding.</p>
                </div>
              </div>
              <div className='col-lg-6' id='img'>
                <img src={imageUrl1} alt="Me" className="img-fluid rounded-circle" id='myimg' />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='container section' id='skills'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='section-head'>Skills</h2>
            </div>
            <div className='col-md-4' id='cards'>
              <div className="card" >
                <img src={imageUrl2} alt="web" className="img-fluid" id='web' />
                <div className="card-body">
                  <h5 className="card-title">Web developer</h5>
                  <p className="card-text">HTML, CSS, JavaScript, PHP<br></br>
• Database: MySQL, red shift, mongo-db<br></br>
• Data science: Standard ML algorithms <br></br>
(regression, classification, clustering) <br></br>
• Data Analysis: R,NumPy, Pandas,Matplotlib</p>
                </div>
              </div>
            </div>
            <div className='col-md-4' id='cards'>
              <div className="card" >
                <img src={imageUrl3} alt="java" className="img-fluid" id='java' />
                <div className="card-body">
                  <h5 className="card-title">Python</h5>
                  <p className="card-text">Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. <br></br>Docker and linux</p>
                </div>
              </div>
            </div>
            <div className='col-md-4' id='cards'>
              <div className="card" >
                <img src={imageUrl4} alt="python" className="img-fluid" id='python' />
                <div className="card-body">
                  <h5 className="card-title">Python</h5>
                  <p className="card-text">High-level programming language. Ideal for web, data analysis, AI, automation. And Machine Learning algorithms, deep learnig algorihtms. Libraries like numpy, pandas, tensorflow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='projects' className='container section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='section-head'>Projects</h2>
              </div>
              <div className='container' id='projects-details'>
                <div className='col'>
                  <ul>
                    <li className='mt-3'><h4>Detecting hand signs</h4></li>
                    <p className='lead'>Data Preprocessing | VGG19|ALEC NET | PYTOTCH| KERAS | Image Classification<br></br>
                      Created a deep learning model essential to recognise hand gestures using pytorch with keras.</p>
                    <li className='mt-3'><h4>pREDICTING WEATHER PATTERNS BASED ON CONDITIONAL PROBABILITIES</h4></li>
                    <p className='lead'> Machine Learning Algorithms<br></br>
                     Used best practices to optmise machine learning algorithms.</p>
                    <li className='mt-3'><h4>Automatic waste segregation module</h4></li>
                    <p className='lead'>Arduino UNO | ESP32 | Face Recognition<br></br>
                     Made a custom helmet that only lets you start a bike when worn.</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container section' id='contactus'>
        <div className='col-md-12'>
          <h2 className='contact-head text-dark'>Contact-Us</h2>
        </div>
        <ul className='contact'>
          <li className='details'>Phone Number: -xxxxxxxxxxx</li>
          <li className='details'>Gmail: -frenzywallflower@gmail.com</li>
          <li className='details'>Address: -Kurnool, Andhra Pradesh, India, 518002</li>
        </ul>
      </div>
    </>
  );
}

export default App;
