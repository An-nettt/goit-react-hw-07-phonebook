import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';
import { addContact, deleteContact, fetchContacts } from './thunks';
import {
  AddHandleFulfilled,
  AllHandleFulfilled,
  DelHandleFulfilled,
  handlePending,
  handleRejected,
} from './handlers';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, AllHandleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, AddHandleFulfilled)
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, DelHandleFulfilled)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
