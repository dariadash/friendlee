import React from 'react'
import './Input.scss'

type Props = {
    onChange: (s: string) => void,
    value: string,
    placeholder?: string,
    type?: string
    disabled?: boolean
    min: number,
    max: number
}

export const Input: React.FC<Props> = ({
    type,
    onChange,
    value,
    placeholder,
    disabled,
    min,
    max
}) => {

    const getBackgroundSize = () => {
        return { backgroundSize: `${Math.ceil((Number(value) * 100) / max)}% 100%` };
    };

    return (
        <div className='wrapper'>
            <input
                disabled={disabled}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='input_element'
            />
            <div className='slidecontainer'>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    style={getBackgroundSize()}
                />
            </div>
        </div>
    )
}
