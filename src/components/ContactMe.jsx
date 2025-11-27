import '../styles/ContactMe.css'
import Email from '/Social/email-svgrepo-com.svg'
import linkedIn from '/Social/linkedin-161-svgrepo-com.svg'
import gitHub from '/Social/github-142-svgrepo-com.svg'


export default function ContactMe() {
  return (
    <section id="ContactMe">
        <h2 className="titles">Contact Me</h2>
        <div className="contact">
          <form action="https://formsubmit.co/05f67182e614be2524937bbd31e6abfa" method="POST" className="sendMessage" autoComplete="off">
            <h2>Send A Message</h2>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name" required/>
            <label htmlFor="email"  >Your Email</label>
            <input type="email" name="email" id="email" required/>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
            <button className='sendInfo' type='submit'>Send</button>
          </form>
          <div className="socialInfo">
            <h2>Contact Info</h2>
            <span className='social'>
                <a href='mailto:ingjuanlozano98@gmail.com' target='_blank'><img src={Email} alt="Email"/></a>
                <span>
                    <h4>Email</h4>
                    <p>ingjuanlozano98@gmail.com</p>
                </span>
            </span>
             <span className='social'>
                <a href='https://www.linkedin.com/in/ingjuanlozano98/' target='_blank'><img src={linkedIn} alt="LinkedIn" /></a>
                <span>
                    <h4>Let's connect</h4>
                    <p>on LinkedIn</p>
                </span>
            </span>
             <span className='social'>
                <a href="https://github.com/Juan-LozanoDev" target='_blank'><img src={gitHub} alt="GitHub" /></a>                
                <span>
                    <h4>GitHub</h4>
                    <p>@Juan-LozanoDev</p>
                </span>
            </span>
          </div>
        </div>
      </section>
  )
}

