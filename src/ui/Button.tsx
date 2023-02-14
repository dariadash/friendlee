import React from "react";
import './Button.scss'

type Props = {
    onClick?: () => void,
    disabled?: boolean,
    children?: React.ReactNode,
    type?: "button" | "reset" | "submit" | undefined;
}

export const Button: React.FC<Props> = ({ children, onClick, disabled, type }) => {
    return (
        <button
            type={type}
            onClick={disabled ? () => { } : onClick}
            disabled={disabled}>
            {children}
        </button>
    )
}