const defaultState = {
  value: 0,
  result: ''
};

const CHANGE_VALUE = 'CHANGE_VALUE';
const CHANGE_RESULT = 'CHANGE_RESULT';

export const updateCalculateValue = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        value: action.payload,
      };
    }

    case CHANGE_RESULT: {
      return {
        ...state,
        result: action.payload,
      };
    }

    default:
      return state;
  }
};

export const updateCalculateValueAction = (payload) => {
  return { type: CHANGE_VALUE, payload };
}

export const updateCalculateResultAction = (payload) => {
  return { type: CHANGE_RESULT, payload };
}