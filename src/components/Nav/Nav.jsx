import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
    return (
        <>
            <ul className="Nav">
                <li onClick={() => setCurrentPage('home')}><span className="material-symbols-outlined size-40">home</span></li>
                <li onClick={() => setCurrentPage('resume')}><span className="material-symbols-outlined size-40">work</span></li>
                <li onClick={() => setCurrentPage('projects')}><span className="material-symbols-outlined size-40">code_blocks</span></li>
                <li className="dropdown">
                    <div className="dropbtn">
                        <span className="material-symbols-outlined size-40" id="dropbtn">mail</span>
                    </div>
                <div className="dropdown-content">
                    <a href="https://www.linkedin.com/in/alexehouston/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/alexehouston" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                    <a href="https://twitter.com/alexehouston" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                    <a href="mailto:alex@alexehouston.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a>
                </div>
                </li>
            </ul>
        </>
    );
}