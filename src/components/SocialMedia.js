// src/components/SocialMedia.js
import React from 'react';
import { motion } from 'framer-motion';
import './SocialMedia.css'; // Import the CSS file for styling
import revolverImage from './images/revolver.png'; // Import the revolver image
import leetcodeImage from './images/leetcode1.png'; // Import the leetcode image
import kaggleImage from './images/kaggle1.png'; // Import the kaggle image
import spotifyImage from './images/spotify1.png'; // Import the spotify image
import gitImage from './images/git1.png'; // Import the git image
import instagramImage from './images/instagram1.png'; // Import the instagram image
import linkdinImage from './images/linkdin1.png'; // Import the linkedin image

const ICON_SIZE = 50; // Size of the icons

const socialMediaLinks = [
  { url: 'https://www.linkedin.com/in/vasileios-kapsalis1999-/', image: linkdinImage, angle: 2, distance: 153 },
  { url: 'https://github.com/yourprofile', image: gitImage, angle: 65, distance: 157 },
  { url: 'https://open.spotify.com/playlist/6HrPNAYoeLGkv8TyL29Cxr?si=09379625d8db4718', image: spotifyImage, angle: 125, distance: 167 },
  { url: 'https://leetcode.com/u/kapsalisvasilis/', image: leetcodeImage, angle: 182, distance: 168 },
  { url: 'https://www.kaggle.com/kaps13', image: kaggleImage, angle: 240, distance: 165 },
  { url: 'https://www.instagram.com/kapsaliis', image: instagramImage, angle: 299, distance: 154 },
];

function SocialMedia() {
  return (
    <section id="social-media">
      <h2>links that should give you a hint about me.</h2>
      <div className="revolver-container">
        
        {/* Revolver image rotating around itself */}
        <motion.img
          src={revolverImage}
          alt="Revolver"
          className="revolver-image"
          animate={{ rotate: 360 }} // Makes the revolver rotate around itself
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        />

        {/* Orbiting Social Media Links */}
        <motion.ul
          className="revolver-chamber"
          initial={{ rotate: -40 }} // Start rotation at 0 degrees
          animate={{ rotate: 360 }} // Rotate 360 degrees
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }} // Sync with revolver rotation
        >
          {socialMediaLinks.map((link, index) => (
            <motion.li
              key={index}
              className="revolver-bullet"
              style={{
                transform: `rotate(${link.angle}deg) translate(${link.distance}px)`, //
              }}
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={link.image}
                  alt={link.name}
                  style={{
                    width: `${ICON_SIZE}px`,
                    height: `${ICON_SIZE}px`,
                  }}
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default SocialMedia;