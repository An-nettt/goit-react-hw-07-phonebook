import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';
import { fetchContacts } from './thunks';
import { handleFulfilled, handlePending, handleRejected } from './handlers';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  // reducers: {
  //   addToContacts(state, action) {
  //     state.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     return state.filter(contact => contact.id !== action.payload);
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected);
  },
});

export const { addToContacts, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
