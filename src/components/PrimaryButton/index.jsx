import React from 'react';
import './primaryButton.css';

function PrimaryButton({ label, icon }) {
    return (
        <button className='primary-button'>
            {icon} {label}
        </button>
    )
}

export default PrimaryButton;