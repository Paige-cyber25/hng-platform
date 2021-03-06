import React from 'react';

const Input = ({type, name, value, placeholder, onChange, required }) => {
    return (
        <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required} 
        />
    )
}

export default Input;
