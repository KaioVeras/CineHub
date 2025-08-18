import React from 'react';
import './primaryButton.css';

import { Link } from 'react-router-dom';

function PrimaryButton({ label, icon, singleWidth, onClick, link }) {
    return (
        <Link to={link}>
            <button className='primary-button' onClick={onClick} style={{ width: singleWidth }}>
                {icon} {label}
            </button>
        </Link>
    )
}

export default PrimaryButton;