import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  SHOW_TOTAL,
  CLEAR_MEMORY,
  ADD_MEMORY,
  SHOW_NUMBER,
  MEMORY_RECALL,
} from '../store/actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  display: '0',
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        total: state.display,
        display: '0',
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        display: initialState.display,
      };

    case SHOW_TOTAL:
      return {
        ...state,
        display: calculateResult(
          state.total,
          Number(state.display),
          state.operation
        ),
        total: 0,
      };

    case ADD_MEMORY:
      return {
        ...state,
        memory: state.display,
      };

    case CLEAR_MEMORY:
      return {
        ...state,
        memory: action.payload,
      };

    case SHOW_NUMBER:
      return {
        ...state,
        display:
          state.display === '0'
            ? action.payload
            : state.display + action.payload,
      };
    case MEMORY_RECALL:
      return {
        ...state,
        display: state.memory,
      };

    default:
      return state;
  }
};

export default reducer;
