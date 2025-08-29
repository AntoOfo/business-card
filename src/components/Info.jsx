export default function Info() {
    return (
        <header>
            <img src="/placeholder.jpg" alt="placeholder image"/>
            <h1>Antonio Ofodile</h1>
            <p>Junior Front End Developer</p>
            
            <div className="buttons-div">

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=antonioofodileuk@gmail.com">
            <button className="email-btn"><img src="/email.png" alt="email icon" className="btn-icon" />
                Email
            </button>
            </a>

            <a href="https://www.linkedin.com/in/antonioofodile/">
            <button className="link-btn"><img src="/linkedin.png" alt="email icon" className="btn-icon" />
                LinkedIn
            </button>
            </a>

            </div>
        </header>
    )
}