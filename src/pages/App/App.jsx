import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Title from '../../components/Title/Title';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import 'animate.css';
import './App.css';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');


    return (
        <div className="App">
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {currentPage === 'resume' ? ( <Resume /> ) : currentPage === 'projects' ? ( <Projects /> ) : ( <Title /> )}
        </div>
    );
}
