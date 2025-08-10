import React from 'react';
import './primaryButton.css';

function PrimaryButton({ label, icon, singleWidth }) {
    return (
        <button className='primary-button' style={{ width: singleWidth}}>
            {icon} {label}
        </button>
    )
}

export default PrimaryButton;