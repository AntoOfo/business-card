export default function Info() {
    return (
        <header>
            <img src="src/assets/placeholder.jpg" alt="placeholder image"/>
            <h1>Antonio Ofodile</h1>
            <p>Junior Front End Developer</p>
            <div className="buttons-div">
            <button className="email-btn"><img src="src/assets/email.png" alt="email icon" className="btn-icon" />
                Email
            </button>
            <button className="link-btn"><img src="src/assets/linkedin.png" alt="email icon" className="btn-icon" />
                LinkedIn
            </button>
            </div>
        </header>
    )
}