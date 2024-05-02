
import './Mainbody.css'
import heroImg from '../ladies.webp'

const Mainbody = () => {
  return (
    <div className='mainbody' >
    <img src={heroImg} alt="heroImg" />
    <div className="maroonDiv">
        <div className="inner">
            <h1>Think Health. Think Massage.</h1>
            <p>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
            <div className="btnDiv">
                <button>LEARN MORE ABOUT US</button>
                <button>CONTACT US TODAY</button>
            </div>
        </div>
    </div>

    <div className="details">
        <p style={{
            color:'#991f48'}} >Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
        <p>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
        <p>We welcome you to come explore all the benefits you’ll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
        <hr />

        <div className="addressDiv">
            <h3 >Family Wellness Massage Therapy</h3>
            <span>888 Griffiths Way, Mainland ML 12345</span>
            <br />
            <span>Tel: 987.654.3210</span>
            <br />
            <span>Email: info@yoursite.com</span>
        </div>
    </div>


    </div>
  )
}

export default Mainbody