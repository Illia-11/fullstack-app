import {increment, decrement, setStep} from "../actions/actionCreators";


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
    case increment.type: {
      // створюємо новий стан та повертаємо як результат редюсера
      const newIncrementState = {
        ...state,
        count: state.count + state.step,
      };

      return newIncrementState;
    }
    case decrement.type: {
      const newLesionState = {
        ...state,
        count: state.count - state.step,
      };

      return newLesionState;
    }
    case setStep.type: {
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
