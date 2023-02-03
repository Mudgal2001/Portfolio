
import "./topbar.css";

function Topbar() {
  return (
    <div className='top'>
        <div className="topLeft">
          <p>Portfolio</p>
        </div>
        <div className="topCenter">
         <ul className="topList">
            <li className="topListItem">About Me</li>
            <li className="topListItem">Skills & Certifications</li>
            <li className="topListItem">Portfolio</li>
         </ul>
        </div>
        <div className="topRight">
          <button>Contact Me</button>
        </div>
    </div>
  )
}

export default Topbar