import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlise";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
