const initialState = [];
const dataPhotos = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      state = [...action.payload];
  }
  return state;
};
export default dataPhotos;
