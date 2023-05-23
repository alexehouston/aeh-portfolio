import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Title from '../../components/Title/Title';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import 'animate.css';
import './App.css';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    // matrix canvas
    const cv_box = document.getElementById('matrix-box')
    const ctx_box = cv_box.getContext('2d')

    cv_box.width = window.innerWidth
    cv_box.height = window.innerHeight

    const alphabets = "ꦲꦤꦕꦫꦏꦢꦠꦱꦮꦭꦥꦝꦗꦪꦚꦩꦒꦧꦛꦔ1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    const fontSize = 16
    const cellSize = fontSize * 1.5
    const columns = cv_box.width / cellSize

    const rainDrops = []

    for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
    }

    ctx_box.fillStyle = 'rgb(10, 10, 10)'
    ctx_box.fillRect(0,0,cv_box.width,cv_box.height)

    const draw = () => {
    ctx_box.fillStyle = 'rgba(10, 10, 10, 0.1)'
    ctx_box.fillRect(0,0,cv_box.width,cv_box.height)
    
    ctx_box.fillStyle = '#0F0'
    ctx_box.font = fontSize + 'px monospace'
    ctx_box.textAlign = 'center'
    
    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabets.charAt(Math.floor(Math.random() * alphabets.length))
        ctx_box.fillText(text, i * cellSize, rainDrops[i] * cellSize)
        
        if (rainDrops[i] * cellSize > cv_box.height && Math.random() > 0.975) {
        rainDrops[i] = 0
        }
        rainDrops[i]++
    }
    }

    setInterval(draw,50)

    return (
        <div className="App">
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {currentPage === 'resume' ? ( <Resume /> ) : currentPage === 'projects' ? ( <Projects /> ) : ( <Title /> )}
        </div>
    );
}
