export const splitValue = (value) => value.split(/\s+/).join('')

export const stringRoundValue = (value) => String(Math.ceil(value))


export const clampValue = (val, min, max) => {
    return val < min ?
        min : val > max ?
            max : val
}
