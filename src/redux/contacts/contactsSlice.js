import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';
import { addContact, fetchContacts } from './thunks';
import {
  handleFulfilledAdd,
  handleFulfilledAll,
  handlePending,
  handleRejected,
} from './handlers';

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

      .addCase(fetchContacts.fulfilled, handleFulfilledAll)
      .addCase(addContact.fulfilled, handleFulfilledAdd)

      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const { addToContacts, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
