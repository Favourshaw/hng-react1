
import './App.css';

function App() {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (

    <div className="body">

      <div className="topnav" id="myTopnav">


        <a className="share"><img src="images/share.svg" alt="Avatar" className="avatar" /></a>

        <a href="javascript:void(0);" className="icon" onClick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>


      </div>

      <img src="images/logo.svg" alt="Avatar" className="avatar" /><br />


      <h1 className="hname">Annette Black</h1><br />
      <div className="tabs">

        
        <div className='mainy'><button className="btn success"><p className="text">Twitter Link</p></button></div><br />
        <div className='mainy'><button className="btn success"><p className="text">Zuri Team</p></button></div><br />
        <div className='mainy'><button className="btn success"><p className="text">Zuri Books</p></button></div><br />
        <div className='mainy'><button className="btn success"><p className="text">Python Books</p></button></div><br />
        <div className='mainy'><button className="btn success"><p className="text">Background Check for Coders</p></button></div><br />
        <div className='mainy'><button className="btn success"><p className="text">Design Books</p></button></div><br />
      </div>

      
        <div className="btimg" >
          <img src="images/slack.svg" alt="Avatar" /><img src="images/git.svg" alt="Avatar" />
        </div>

     
      <footer className="footer">
        <div className="footer-container">
          <div className="flex"><img className="fimg" src="images/zintern.svg" alt="Avatar" /></div>
          <div className="flex"><p className="footertext">HNG Internship 9 Frontend Task</p></div>
          <div className="flex"><img className="fimg" src="images/i4g.svg" alt="Avatar" /></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
