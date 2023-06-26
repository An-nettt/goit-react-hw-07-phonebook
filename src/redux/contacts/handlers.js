export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledAll = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
};

export const handleFulfilledDel = (state, { payload }) => {
  state.isLoading = false;
  state.items.filter(contact => contact.id !== payload);
};
