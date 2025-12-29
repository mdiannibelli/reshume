import { configureStore } from "@reduxjs/toolkit";
import formValueReducer from "./slices/form-value.slice";
import { saveStateToLocalStorage } from "./storage/form-value.storage";
import uiReducer from "./slices/ui.slice";

export const formStore = configureStore({
  reducer: {
    form: formValueReducer,
    ui: uiReducer,
  },
});

formStore.subscribe(() => {
  const state = formStore.getState();
  saveStateToLocalStorage(state.form);
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof formStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof formStore.dispatch;
