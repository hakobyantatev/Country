import './Header.scss'

export default function Header() {
  return (
    <div className='Header'>
      <div className="container">
        <div className="info">
          <p className='title'>This is a title of the website</p>
          <p className='subtitle'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
          <button>Button</button>
        </div>
        <div className="picture">
          <img src="Image.png" alt="pic" />
        </div>
      </div>
    </div>
  )
}
