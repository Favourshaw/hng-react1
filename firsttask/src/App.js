
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
         
     {/*<a href="javascript:void(0);" className="icon" onClick="myFunction()">
          <i className="fa fa-bars"></i>
  </a>*/}<a className="icon"><img src="images/mobile.svg" alt="Avatar" className="avatar" /></a>


      </div>

      <img src="images/logo.svg" alt="Avatar" className="avatar" id="profile__img"/><br />


      <h1 className="hname">Annette Black</h1><br />
      <div className="tabs">

        
        <div className='mainy'><a className="btn" id="twitter"><p className="text">Twitter Link</p></a></div><br />
        <div className='mainy'><a className="btn" id="btn__zuri"><p className="text">Zuri Team</p></a></div><br />
        <div className='mainy'><a className="btn" id="books"><p className="text">Zuri Books</p></a></div><br />
        <div className='mainy'><a className="btn" id="book__python"><p className="text">Python Books</p></a></div><br />
        <div className='mainy'><a className="btn" id="pitch"><p className="text">Background Check for Coders</p></a></div><br />
        <div className='mainy'><a className="btn" id="book__design"><p className="text">Design Books</p></a></div><br />
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
