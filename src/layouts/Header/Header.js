import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <iframe
                className="header__backgroundVideo"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Background Video"
            ></iframe>
            {/* ...existing code... */}
        </header>
    );
};

export default Header;
