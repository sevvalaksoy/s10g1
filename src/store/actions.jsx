export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const SHOW_TOTAL = 'SHOW_TOTAL';
export const CLEAR_MEMORY = 'CLEAR_MEMORY';
export const ADD_MEMORY = 'ADD_MEMORY';
export const SHOW_NUMBER = 'SHOW_NUMBER';
export const MEMORY_RECALL = 'MEMORY_RECALL';

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY, payload: 0 };
};

export const showTotal = () => {
  return { type: SHOW_TOTAL };
};

export const clearMemory = () => {
  return { type: CLEAR_MEMORY, payload: 0 };
};

export const memoryAdd = () => {
  return { type: ADD_MEMORY };
};

export const showNumber = (number) => {
  return { type: SHOW_NUMBER, payload: number.toString() };
};

export const recallMemory = () => {
  return { type: MEMORY_RECALL };
};
