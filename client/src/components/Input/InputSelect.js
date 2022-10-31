import React from 'react';
import './inputSelect.scss';

const InputSelect = (props) => {
    
    const handleChange = (e) => {
		// event handler
		console.log(e.target.value);
	};
    
	return (
        <div className="InputSelect">
            <label className='labels'>{props.label}</label>
            <select name={props.name} onChange={props.onChange} className="selects">
                
                {props.options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        defaultValue={props.defaultValue === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
		
	);
};

export default InputSelect;
