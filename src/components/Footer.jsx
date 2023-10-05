import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YoutubeIcon from '@mui/icons-material/Youtube'
import GithubIcon from '@mui/icons-material/GitHub'
import "../styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div>
                <LinkedInIcon />
                <YoutubeIcon />
                <GithubIcon />
            </div>
            <p> &copy; 2023 rohithkannan.github.io </p>
        </div>
    )
}

export default Footer