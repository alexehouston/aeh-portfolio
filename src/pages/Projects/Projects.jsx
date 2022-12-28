import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Projects.css';

export default function Projects() {
  return (
    <div className="Projects">
        <div className="project">
            <h1 className="project-title">Squiz</h1>
            <h1 className="description">MERN-Stack Quiz Application</h1>
            <a className="project-link" href="https://squiz.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/squiz" target="_blank" rel="noreferrer">Repo</a>
            <Slider className="slider" autoplay={3000}>
                <img src="assets/squiz/gameplay.gif" alt="" />
                <img src="assets/squiz/categories.gif" alt="" />
                <img src="assets/squiz/leaderboard.gif" alt="" />
            </Slider>
        </div>
        <div className="project">
            <h1 className="project-title">KP Hair Color</h1>
            <h1 className="description">React.js Web Application</h1>
            <a className="project-link" href="https://squiz.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/squiz" target="_blank" rel="noreferrer">Repo</a>
            <Slider className="slider" autoplay={3000}>
                <img src="assets/kphaircolor/kp-desktop-home.png" alt="" />
                <img src="assets/kphaircolor/kp-desktop-booking.png" alt="" />
                <img src="assets/kphaircolor/kp-desktop-services.png" alt="" />
                <img src="assets/kphaircolor/kp-desktop-about.png" alt="" />
                <img src="assets/kphaircolor/kp-desktop-testimonials.png" alt="" />
                <img src="assets/kphaircolor/kp-desktop-contact.png" alt="" />
            </Slider>
        </div>
        <div className="project">
            <h1 className="project-title">Daniel 성훈 Kim</h1>
            <h1 className="description">React.js Web Application</h1>
            <a className="project-link" href="https://squiz.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/squiz" target="_blank" rel="noreferrer">Repo</a>
            <Slider className="slider" autoplay={3000}>
                <img src="assets/danielsunghoonkim/dsk-desktop-home.gif" alt="" />
                <img src="assets/danielsunghoonkim/dsk-desktop-dates.gif" alt="" />
                <img src="assets/danielsunghoonkim/dsk-desktop-about.gif" alt="" />
            </Slider>
        </div>
        <div className="project">
            <h1 className="project-title">KP x AEH</h1>
            <h1 className="description">React.js Web Application</h1>
            <a className="project-link" href="https://squiz.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/squiz" target="_blank" rel="noreferrer">Repo</a>
            <Slider className="slider" autoplay={3000}>
                <img src="assets/kpxaeh/desktop-home.png" alt="" />
                <img src="assets/kpxaeh/desktop-dates.png" alt="" />
                <img src="assets/kpxaeh/desktop-contact.png" alt="" />
            </Slider>
        </div>
        <div className="project">
            <h1 className="project-title">Cinéflix</h1>
            <h1 className="description">Full-Stack Django Web Application</h1>
            <a className="project-link" href="https://cineflixapp.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/cineflix" target="_blank" rel="noreferrer">Repo</a>
            <Slider className="slider" autoplay={3000}>
                <img src="assets/cineflix/home-screenshot.gif" alt="" />
                <img src="assets/cineflix/topmovies-screenshot.png" alt="" />
                <img src="assets/cineflix/comingsoon-screenshot.png" alt="" />
                <img src="assets/cineflix/details-screenshot.png" alt="" />
                <img src="assets/cineflix/profile-screenshot.png" alt="" />
            </Slider>
        </div>
        <div className="project">
            <h1 className="project-title">Hamstera</h1>
            <h1 className="description">Full-Stack Django Web Application</h1>
            <a className="project-link" href="https://github.com/alexehouston/hamstera" target="_blank" rel="noreferrer">Repo</a>
            <Slider className="slider" autoplay={3000}>
                <img src="assets/hamstera/home.png" alt="" />
                <img src="assets/hamstera/hamsters.png" alt="" />
                <img src="assets/hamstera/hamster-details.png" alt="" />
                <img src="assets/hamstera/toys.png" alt="" />
            </Slider>
        </div>
        <div className="project">
            <h1 className="project-title">PokéBank</h1>
            <h1 className="description">Full-stack Node.js Web Application</h1>
            <a className="project-link" href="https://poke-bank.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/pokebank" target="_blank" rel="noreferrer">Repo</a>
            <Slider className="slider" autoplay={3000}>
                <img src="assets/pokebank/home.png" alt="" />
                <img src="assets/pokebank/pokedex.png" alt="" />
                <img src="assets/pokebank/popup.png" alt="" />
                <img src="assets/pokebank/games.png" alt="" />
                <img src="assets/pokebank/gamedetails.png" alt="" />
                <img src="assets/pokebank/details.png" alt="" />
                <img src="assets/pokebank/error.png" alt="" />
                <img src="assets/pokebank/login.png" alt="" />
            </Slider>
        </div>
        <div className="project">
            <h1 className="project-title">Concentration</h1>
            <h1 className="description">JavaScript-based Browser Game</h1>
            <a className="project-link" href="https://alexehouston.github.io/concentration/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/concentration" target="_blank" rel="noreferrer">Repo</a>
            <Slider className="slider" autoplay={3000}>
                <img src="assets/concentration/home-screen.png" alt="" />
                <img src="assets/concentration/before-screen.png" alt="" />
                <img src="assets/concentration/after-screen.png" alt="" />
                <img src="assets/concentration/win-screen.png" alt="" />
                <img src="assets/concentration/lose-screen.png" alt="" />
            </Slider>
        </div>
    </div>
  );
}