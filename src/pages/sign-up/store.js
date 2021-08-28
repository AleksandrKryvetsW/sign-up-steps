import { createAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  currentStepId: 0,
};

const STORE_NAME = '@signup';

const signupStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setCurrentStepId(state, action) {
      state.currentStepId = action.payload;
    },
  },
});

export const NEXT_STEP = `${STORE_NAME}/nextStep`;

export const signupActions = {
  ...signupStore.actions,
  nextStep: createAction(NEXT_STEP)
};

export const signupReducer = signupStore.reducer;
