import React from 'react'
import './Input.scss'

type Props = {
    onChange: (s: string) => void,
    value: string,
    placeholder?: string,
    type?: string
    disabled?: boolean
    min: number,
    max: number,
    percent?: number,
    label?: string,
}

export const Input: React.FC<Props> = ({
    type,
    onChange,
    value,
    placeholder,
    disabled,
    min,
    max,
    children,
    percent,
    label
}) => {

    const getBackgroundSize = () => {
        return { backgroundSize: percent ? `${percent}% 100%` : `${100 / (max / (Number(value)))}% 100%` };
    };

    return (
        <div className='wrapper' aria-disabled={disabled}>
            <p className='input_label'>{label}</p>
            <input
                disabled={disabled}
                type={type}
                placeholder={placeholder}
                min={min}
                // max={max}
                value={value.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
                onChange={(e) => onChange(e.target.value)}
                className='input_element'
            />
            <div className='children'>{children}</div>
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
