import React from 'react';
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter-7vb.png';
import instagram from '../assets/instagram.png';

function Header() {
  return (
    <div className="auto-group-reh1-iWf">
      <p className="aura-339">AURA</p>
      <div className="social-accounts-LH9">
        <img className="facebook-RJb" src={facebook} alt="Facebook"/>
        <img className="twitter-Y8K" src={twitter} alt="Twitter"/>
        <img className="instagram-58F" src={instagram} alt="Instagram"/>
      </div>
    </div>
  );
}

export default Header;
