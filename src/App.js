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
                  <h1 className='title'>Guru SaiNath</h1>
                  <p className='lead'>I'm a passionate learner and creative thinker, dedicated to growth, knowledge, and positive impact in a dynamic world.</p>
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
• Database: MySQL<br></br>
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
                  <h5 className="card-title">Java</h5>
                  <p className="card-text">Java is a high-level, class-based, object-oriented programming langugae that is designed to have as few implementation dependencies as possible<br></br>Proficient in problem solving skills and DSA</p>
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
                    <li className='mt-3'><h4>Detecting flying objects</h4></li>
                    <p className='lead'>Data Preprocessing | VGG19 | LeNet | Image Classification<br></br>
                      Developed a model with a three-person team that will categorise flying objects using CNN architectures.</p>
                    <li className='mt-3'><h4>Conditional Predictive Maintenance of vehicles from Electrical and Mechanical faults.</h4></li>
                    <p className='lead'>Random Forest | Logistic Regression | Other Machine Learning Algorithms<br></br>
                      By using different Machine learning algorithms analysed and optimised the working of the algorithms and
                      with best algorithm prepared the best model with good accuracy.</p>
                    <li className='mt-3'><h4>Smart Door Lock with Facial Recognition and Thermal Screening</h4></li>
                    <p className='lead'>Arduino UNO | ESP32 | Face Recognition<br></br>
                      Created a smart door lock system with facial recognition and Thermal Screening using Arduino UNO which
                      helps to detect the face, temperature of a person and open the door lock.</p>
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
          <li className='details'>Phone Number: -7901005830</li>
          <li className='details'>Gmail: -gurusai62003@gmail.com</li>
          <li className='details'>Address: -Kurnool, Andhra Pradesh, India, 518004</li>
        </ul>
      </div>
    </>
  );
}

export default App;
