import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
    return (
        <>
            <ul className="Nav">
                <li onClick={() => setCurrentPage('home')}><i className="nav-icon fa-solid fa-house"></i></li>
                <li onClick={() => setCurrentPage('resume')}><i className="nav-icon fa-solid fa-briefcase"></i></li>
                <li onClick={() => setCurrentPage('projects')}><i className="nav-icon fa-solid fa-code"></i></li>
                <li><a href="mailto:alexehouston@gmail.com" target="_blank" rel="noreferrer"><i className="nav-icon fa-solid fa-envelope"></i></a></li>
                <li><a href="https://www.linkedin.com/in/alexehouston/" target="_blank" rel="noreferrer"><i className="nav-icon fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://github.com/alexehouston" target="_blank" rel="noreferrer"><i className="nav-icon fa-brands fa-github"></i></a></li>
            </ul>
        </>
    );
}