export const incNumber = () => {
    return{
        type: 'INCREMENT'
        }
    }

export const decNumber = (num) => {
    return{
        type: 'DECREMENT',
        payload: num
        }
}

export const mult = (num) => {
    return{
        type : 'MULTI',
        payload: num
    }
}

export const divide = (num) => {
    return{
        type : 'DIVI',
        payload: num
    }
}