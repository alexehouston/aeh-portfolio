import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './Projects.css';

export default function Projects() {
    
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    });

    return (
        <div className="Projects">
            <div className="project">
                <h1 className="project-title">Squiz</h1>
                <h1 className="description">MERN-Stack Quiz Application</h1>
                <a className="project-link" href="https://squiz.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/squiz" target="_blank" rel="noreferrer">Repo</a>
                <div className="swiper">
                    <div className ="swiper-wrapper">
                        <img className="swiper-slide" src="assets/squiz/gameplay.gif" alt="" />
                        <img className="swiper-slide" src="assets/squiz/categories.gif" alt="" />
                        <img className="swiper-slide" src="assets/squiz/leaderboard.gif" alt="" />
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div className="project">
                <h1 className="project-title">KP Hair Color</h1>
                <h1 className="description">React.js Web Application</h1>
                <a className="project-link" href="https://squiz.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/squiz" target="_blank" rel="noreferrer">Repo</a>
                <div className="swiper">
                    <div className ="swiper-wrapper">
                        <img className="swiper-slide" src="assets/kphaircolor/kp-desktop-home.png" alt="" />
                        <img className="swiper-slide" src="assets/kphaircolor/kp-desktop-booking.png" alt="" />
                        <img className="swiper-slide" src="assets/kphaircolor/kp-desktop-services.png" alt="" />
                        <img className="swiper-slide" src="assets/kphaircolor/kp-desktop-about.png" alt="" />
                        <img className="swiper-slide" src="assets/kphaircolor/kp-desktop-testimonials.png" alt="" />
                        <img className="swiper-slide" src="assets/kphaircolor/kp-desktop-contact.png" alt="" />
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div className="project">
                <h1 className="project-title">Daniel 성훈 Kim</h1>
                <h1 className="description">React.js Web Application</h1>
                <a className="project-link" href="https://squiz.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/squiz" target="_blank" rel="noreferrer">Repo</a>
                <div className="swiper">
                    <div className ="swiper-wrapper">
                        <img className="swiper-slide" src="assets/danielsunghoonkim/dsk-desktop-home.gif" alt="" />
                        <img className="swiper-slide" src="assets/danielsunghoonkim/dsk-desktop-dates.gif" alt="" />
                        <img className="swiper-slide" src="assets/danielsunghoonkim/dsk-desktop-about.gif" alt="" />
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div className="project">
                <h1 className="project-title">KP x AEH</h1>
                <h1 className="description">React.js Web Application</h1>
                <a className="project-link" href="https://squiz.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/squiz" target="_blank" rel="noreferrer">Repo</a>
                <div className="swiper">
                    <div className ="swiper-wrapper">
                        <img className="swiper-slide" src="assets/kpxaeh/desktop-home.png" alt="" />
                        <img className="swiper-slide" src="assets/kpxaeh/desktop-dates.png" alt="" />
                        <img className="swiper-slide" src="assets/kpxaeh/desktop-contact.png" alt="" />
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div className="project">
                <h1 className="project-title">Cinéflix</h1>
                <h1 className="description">Full-Stack Django Web Application</h1>
                <a className="project-link" href="https://cineflixapp.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/cineflix" target="_blank" rel="noreferrer">Repo</a>
                <div className="swiper">
                    <div className ="swiper-wrapper">
                        <img className="swiper-slide" src="assets/cineflix/home-screenshot.gif" alt="" />
                        <img className="swiper-slide" src="assets/cineflix/topmovies-screenshot.png" alt="" />
                        <img className="swiper-slide" src="assets/cineflix/comingsoon-screenshot.png" alt="" />
                        <img className="swiper-slide" src="assets/cineflix/details-screenshot.png" alt="" />
                        <img className="swiper-slide" src="assets/cineflix/profile-screenshot.png" alt="" />
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div className="project">
                <h1 className="project-title">Hamstera</h1>
                <h1 className="description">Full-Stack Django Web Application</h1>
                <a className="project-link" href="https://github.com/alexehouston/hamstera" target="_blank" rel="noreferrer">Repo</a>
                <div className="swiper">
                    <div className ="swiper-wrapper">
                        <img className="swiper-slide" src="assets/hamstera/home.png" alt="" />
                        <img className="swiper-slide" src="assets/hamstera/hamsters.png" alt="" />
                        <img className="swiper-slide" src="assets/hamstera/hamster-details.png" alt="" />
                        <img className="swiper-slide" src="assets/hamstera/toys.png" alt="" />
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div className="project">
                <h1 className="project-title">PokéBank</h1>
                <h1 className="description">Full-stack Node.js Web Application</h1>
                <a className="project-link" href="https://poke-bank.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/pokebank" target="_blank" rel="noreferrer">Repo</a>
                <div className="swiper">
                    <div className ="swiper-wrapper">
                        <img className="swiper-slide" src="assets/pokebank/home.png" alt="" />
                        <img className="swiper-slide" src="assets/pokebank/pokedex.png" alt="" />
                        <img className="swiper-slide" src="assets/pokebank/popup.png" alt="" />
                        <img className="swiper-slide" src="assets/pokebank/games.png" alt="" />
                        <img className="swiper-slide" src="assets/pokebank/gamedetails.png" alt="" />
                        <img className="swiper-slide" src="assets/pokebank/details.png" alt="" />
                        <img className="swiper-slide" src="assets/pokebank/error.png" alt="" />
                        <img className="swiper-slide" src="assets/pokebank/login.png" alt="" />
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div className="project">
                <h1 className="project-title">Concentration</h1>
                <h1 className="description">JavaScript-based Browser Game</h1>
                <a className="project-link" href="https://alexehouston.github.io/concentration/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/concentration" target="_blank" rel="noreferrer">Repo</a>
                <div className="swiper">
                    <div className ="swiper-wrapper">
                        <img className="swiper-slide" src="assets/concentration/home-screen.png" alt="" />
                        <img className="swiper-slide" src="assets/concentration/before-screen.png" alt="" />
                        <img className="swiper-slide" src="assets/concentration/after-screen.png" alt="" />
                        <img className="swiper-slide" src="assets/concentration/win-screen.png" alt="" />
                        <img className="swiper-slide" src="assets/concentration/lose-screen.png" alt="" />
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </div>
    );
}