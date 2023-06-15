import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addToContacts(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addToContacts, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
