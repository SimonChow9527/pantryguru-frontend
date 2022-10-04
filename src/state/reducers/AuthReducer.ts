
interface initialState {}



interface AuthAction {
  type: String,
  payload:any,
}
const reducer = (state: initialState, action: AuthAction) => {
  switch (action.type) {
    case "start":
  }
};

export default reducer;
