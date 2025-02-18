import ACTION_TYPES from "../actions/actionTypes";

// початковий стан для редюсера
const initialState = {
  count: 0,
  step: 1,
};

// базовий редаксівський редюсер
// початковий стан передаємо як значення за замовчанням для state
function counterReducer(state = initialState, action) {
  // по типу екшену визначаємо його логіку
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      // створюємо новий стан та повертаємо як результат редюсера
      const newIncrementState = {
        ...state,
        count: state.count + state.step,
      };

      return newIncrementState;
    }
    case ACTION_TYPES.DECREMENT: {
      const newLesionState = {
        ...state,
        count: state.count - state.step,
      };

      return newLesionState;
    }
    case ACTION_TYPES.SET_STEP: {
      const newStep = isNaN(+action.payload) ? state.step : +action.payload;
      const newStepState = {
        ...state,
        step: newStep,
      };

      return newStepState;
    }
    // якщо тип екшена невідомий або відсутній то повертаємо старий стан
    default:
      return state;
  }
}

export default counterReducer;
