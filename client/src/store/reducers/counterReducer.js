import { createReducer } from "@reduxjs/toolkit";
import {
  increment,
  decrement,
  setStep,
  resetCounter,
} from "../actions/actionCreators";

// початковий стан для редюсера
const initialState = {
  count: 0,
  step: 1,
};

// базовий редаксівський редюсер
// початковий стан передаємо як значення за замовчанням для state
// export default function counterReducer(state = initialState, action) {
//   // по типу екшену визначаємо його логіку
//   switch (action.type) {
//     case increment.type: {
//       // створюємо новий стан та повертаємо як результат редюсера
//       const newIncrementState = {
//         ...state,
//         count: state.count + state.step,
//       };

//       return newIncrementState;
//     }
//     case decrement.type: {
//       const newLesionState = {
//         ...state,
//         count: state.count - state.step,
//       };

//       return newLesionState;
//     }
//     case setStep.type: {
//       const newStep = isNaN(+action.payload) ? state.step : +action.payload;
//       const newStepState = {
//         ...state,
//         step: newStep,
//       };

//       return newStepState;
//     }
//     // якщо тип екшена невідомий або відсутній то повертаємо старий стан
//     default:
//       return state;
//   }
// }

/*
  createReducer - утіліти для створення редюсера
    приймає початковий стан та коллбек як аргументи
*/
const counterReducer = createReducer(initialState, (builder) => {
  // кейс створюємо через builder.addCase, перший аргумент екшн тайп або екшн креатор створений через createAction
  // 2 аргумент - мініредюсер в якому можна писати мутабельний код
  builder.addCase(increment.type, (state, action) => {
    // state.count = state.count + state.step;
    state.count += state.step;
  });

  builder.addCase(decrement, (state) => {
    state.count -= state.step;
  });

  builder.addCase(setStep, (state, action) => {
    state.step = !isNaN(action.payload) ? +action.payload : state.step;
  });

  // скидання стейту до початкового
  builder.addCase(resetCounter, () => {
    return initialState;
  });
});

export default counterReducer;
