import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = false;
          state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
          state.isLoading = false;
          state.error = true;
        })
        .addCase(addContact.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = false;
          state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
          state.isLoading = false;
          state.error = true;
        })
        .addCase(deleteContact.pending, state => {
          state.isLoading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = false;
          const index = state.items.findIndex(
            contact => contact.id === action.payload.id
          );
          state.items.splice(index, 1);
        })
        .addCase(deleteContact.rejected, (state, action) => {
          state.isLoading = false;
          state.error = true;
        });
    },
  
  // {
  //   addContact: {
  //     reducer(state, action) {
  //       state.items = [...state.items, action.payload];
  //     },
  //     prepare(value) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name: value.name,
  //           number: value.number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     state.items = action.payload;
  //   },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
