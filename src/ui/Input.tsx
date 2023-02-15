import { splitValue } from '@/features/helpers'
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

    const clampVal = (val, min, max) => {
        return val < min ?
            min : val > max ?
                max : val
    }

    const handleChange = (val: string) => {
        setV(splitValue(val))
    }

    return (
        <div className='wrapper' aria-disabled={disabled}>
            <p className='input_label'>{label}</p>
            <div onMouseLeave={() => setV(clampVal(parseInt(v), min, max))}>
                <input
                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                    value={v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    onChange={(e) => handleChange(e.target.value)}
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
        </div>
    )
}
