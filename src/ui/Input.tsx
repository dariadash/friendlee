import React from 'react'
import style from './Input.module.css'

type Props = {
    onChange: (s: string) => void,
    value: string,
    placeholder?: string,
    type?: string
    disabled?: boolean
    onClick?: () => void,
    min?: string,
    max?: string
}

export const Input: React.FC<Props> = ({
    type,
    onChange,
    value,
    placeholder,
    disabled,
    onClick,
    min,
    max
}) => {
    const containerRef = React.useRef<HTMLInputElement>(null)
    const handleFocus = () => {
        if (onClick) {
            onClick()
        }
        containerRef.current?.focus()
    }
    return (
        <div className={style.wrapper}>
            <div
                ref={containerRef}
                onClick={handleFocus}
                className={style.container}
            >
                <input
                    disabled={disabled}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={style.input_element}
                />
                <div className={style.slidecontainer}>
                    <input type="range" min={min} max={max} value={value} className={style.slider} id="myRange"></input>
                </div>
            </div>
        </div>
    )
}
