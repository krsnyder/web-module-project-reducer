export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEM1 = "MEM1";
export const MEM2 = "MEM2";
export const MEM3 = "MEM3";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload: operation})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const mem1 = () => {
    return({type:MEM1})
}

export const mem2 = () => {
    return({type:MEM2})
}

export const mem3 = () => {
    return({type:MEM3})
}
