
import './App.css';
import './style.css';
import srcImage from "./imgSrc/manhattan.jpg";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div style={{border:'solid 1px black', maxWidth:2000 }}>
       <h1 className='titleRred'>
         Your name here
         </h1>
         <br/>
         <img src={srcImage} alt='imageSrc'/>
         <br/>
         <img src="/imgPublic/newYork.jpg" alt="imagePublic" />
       </div>
       <br/>
      <video width='1000' height='500' controls>
      <source src="/video/video.mp4" type="video/mp4"/>
      </video>
      
    </div>
  );
}

export default App;
