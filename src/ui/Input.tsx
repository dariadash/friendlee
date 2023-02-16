import { clampValue, splitValue } from '@/features/helpers'
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
    label
}) => {

    const getBackgroundSize = () => {
        return { backgroundSize: `${((Number(splitValue(value)) - min) * 100) / (max - min)}% 100%` }
    };

    const [v, setV] = React.useState(value)
    React.useEffect(() => handleChange(value), [value])


    const handleChange = (val: string) => {
        setV(splitValue(val))
        onChange(val)
    }

    return (
        <div className='input__wrapper' aria-disabled={disabled}>
            <p className='input__label'>{label}</p>
            <div onMouseLeave={() => setV(clampValue(parseInt(v), min, max))}>
                <input
                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                    value={v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    onChange={(e) => handleChange(e.target.value)}
                    className='input__element'
                />
                <div className='input__children'>
                    {children}
                </div>
                <div className='input__slide-container'>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={splitValue(value)}
                        onChange={(e) => handleChange(e.target.value)}
                        style={getBackgroundSize()}
                    />
                </div>
            </div>
        </div>
    )
}
