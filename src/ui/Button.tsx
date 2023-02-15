import React from "react";
import './Button.scss'

type Props = {
    onClick?: () => void,
    disabled?: boolean,
    loading?: boolean,
    children?: React.ReactNode,
    type?: "button" | "reset" | "submit" | undefined;
}

export const Button: React.FC<Props> = ({ children, onClick, disabled, type, loading }) => {
    return (
        <button
            type={type}
            onClick={disabled ? () => { } : onClick}
            disabled={disabled}>
            {loading
                ? <div className="lds-ring" ><div /><div /><div /><div /></div>
                : children
            }
        </button >
    )
}