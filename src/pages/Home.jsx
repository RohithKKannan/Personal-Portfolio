import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'
import "../styles/Home.css"

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, My Name is Rohith</h2>
                <div className='prompt'>
                    <p>I am a Game Developer</p>
                </div>
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
            </div>
            <div className='skills'>
                <ol className='list'>
                    <li className='item'>
                        <h4>Game Engines</h4>
                        <span>Unity</span>
                    </li>
                    <li className='item'>
                        <h4>Languages</h4>
                        <span>C#, C++, Javascript (Intermediate)</span>
                    </li>
                    <li className='item'>
                        <h4>Version Control</h4>
                        <span>Git</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home