import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import './Projects.css';

export default function Projects() {
    return (
        <div className="Projects">
            <div className="project">
                <h1 className="project-title" id="title">Squiz</h1>
                <h1 className="description">MERN-Stack Quiz Application</h1>
                <a className="project-link" href="https://squiz.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/squiz" target="_blank" rel="noreferrer">Repo</a>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                >
                    <SwiperSlide><img src="assets/squiz/gameplay.gif" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="assets/squiz/categories.gif" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="assets/squiz/leaderboard.gif" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="project">
                <h1 className="project-title" id="title">Elia Gal</h1>
                <h1 className="description">React.js Web Application</h1>
                <a className="project-link" href="https://eliagal.com" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/elia-gal" target="_blank" rel="noreferrer">Repo</a>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                      }}
                >
                    <SwiperSlide><img src="assets/eliagal/eg-desktop-home.gif" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="assets/eliagal/eg-desktop.gif" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="project">
                <h1 className="project-title" id="title">KP Hair Color</h1>
                <h1 className="description">React.js Web Application</h1>
                <a className="project-link" href="https://kphaircolor.netlify.app/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/kphaircolor" target="_blank" rel="noreferrer">Repo</a>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                >
                        <SwiperSlide><img src="assets/kphaircolor/kp-desktop-home.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/kphaircolor/kp-desktop-booking.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/kphaircolor/kp-desktop-services.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/kphaircolor/kp-desktop-about.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/kphaircolor/kp-desktop-testimonials.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/kphaircolor/kp-desktop-contact.png" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="project">
                <h1 className="project-title" id="title">Daniel 성훈 Kim</h1>
                <h1 className="description">React.js Web Application</h1>
                <a className="project-link" href="https://danielsunghoonkim.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/danielsunghoonkim" target="_blank" rel="noreferrer">Repo</a>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                >
                        <SwiperSlide><img src="assets/danielsunghoonkim/dsk-desktop-home.gif" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/danielsunghoonkim/dsk-desktop-dates.gif" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/danielsunghoonkim/dsk-desktop-about.gif" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="project">
                <h1 className="project-title" id="title">KP x AEH</h1>
                <h1 className="description">React.js Web Application</h1>
                <a className="project-link" href="https://kpxaeh.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/kpxaeh" target="_blank" rel="noreferrer">Repo</a>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                >
                        <SwiperSlide><img src="assets/kpxaeh/desktop-home.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/kpxaeh/desktop-dates.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/kpxaeh/desktop-contact.png" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="project">
                <h1 className="project-title" id="title">Cinéflix</h1>
                <h1 className="description">Full-Stack Django Web Application</h1>
                <a className="project-link" href="https://cineflixapp.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/cineflix" target="_blank" rel="noreferrer">Repo</a>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                >
                        <SwiperSlide><img src="assets/cineflix/home-screenshot.gif" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/cineflix/topmovies-screenshot.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/cineflix/comingsoon-screenshot.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/cineflix/details-screenshot.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/cineflix/profile-screenshot.png" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="project">
                <h1 className="project-title" id="title">Hamstera</h1>
                <h1 className="description">Full-Stack Django Web Application</h1>
                <a className="project-link" href="https://github.com/alexehouston/hamstera" target="_blank" rel="noreferrer">Repo</a>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                >
                        <SwiperSlide><img src="assets/hamstera/home.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/hamstera/hamsters.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/hamstera/hamster-details.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/hamstera/toys.png" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="project">
                <h1 className="project-title" id="title">PokéBank</h1>
                <h1 className="description">Full-stack Node.js Web Application</h1>
                <a className="project-link" href="https://poke-bank.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/pokebank" target="_blank" rel="noreferrer">Repo</a>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                >
                        <SwiperSlide><img src="assets/pokebank/home.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/pokebank/pokedex.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/pokebank/popup.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/pokebank/games.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/pokebank/gamedetails.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/pokebank/details.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/pokebank/error.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/pokebank/login.png" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="project">
                <h1 className="project-title" id="title">Concentration</h1>
                <h1 className="description">JavaScript-based Browser Game</h1>
                <a className="project-link" href="https://alexehouston.github.io/concentration/" target="_blank" rel="noreferrer">Demo</a><span>|</span><a className="project-link" href="https://github.com/alexehouston/concentration" target="_blank" rel="noreferrer">Repo</a>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                >
                        <SwiperSlide><img src="assets/concentration/home-screen.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/concentration/before-screen.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/concentration/after-screen.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/concentration/win-screen.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/concentration/lose-screen.png" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}