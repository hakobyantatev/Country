import { Link } from 'react-router-dom'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='Footer'>
      <hr />
      <div className="container">
        <div className="left">
          <div className="top">
            <ul>
              <li>
                <Link to="/">Logo</Link>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <ul>
              <li>© Logo 2022</li>
              <li>Privacy policy</li>
              <li>Cookies policy</li>
              <li>Terms of use</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <p>Updates right to your Inbox</p>
          <div className="email">
            <input type="text" placeholder='Email Address'/>
            <button>Send</button>
          </div>
        </div>
      </div>

      <div className="containerSmall">
        <div className="top">
          <ul>
            <li>
              <Link to="/">Logo</Link>
            </li>
          </ul>
        </div>
        <div className="middle">
          <p>Updates right to your Inbox</p>
          <div className="email">
            <input type="text" placeholder='Email Address'/>
            <button>Send</button>
          </div>
        </div>
        <div className="bottom">
            <ul>
              <li>Terms of use</li>
              <li>Cookies policy</li>
              <li>Privacy policy</li>
              <li>© Logo 2022</li>
            </ul>
          </div>
      </div>
    </div>
  )
}