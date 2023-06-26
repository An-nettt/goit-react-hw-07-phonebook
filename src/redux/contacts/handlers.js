export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
