
import './Header.css'


const Header = () => {
  return (
    <div className='header' >
      <h2>Family Wellness</h2>
      <p style={{
        fontWeight:'200',
        color:'#333',
        letterSpacing: '4px',
        fontSize:'14px'
      }} >MASSAGE THERAPY</p>
      <button style={{
        backgroundColor:'#991f48'
      }} >HOME</button>
      <button>ABOUT</button>
      <button>SERVICES</button>
      <button>FAQ</button>
      <button>CONTACT</button>
    </div>
  )
}

export default Header