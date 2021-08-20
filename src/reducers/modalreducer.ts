
const initialState = {
  show: false,
};

export const modalReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case "HIDE_MODAL": {
      return { show: false };
    }
    case "SHOW_MODAL": {
      return { show: true, data: action.payload };
    }
    default:
      return state;
  }
};

