import authReducer from "../../reducers/auth";

test("should set state with login", () => {
  const action = {
    type: "LOGIN",
    uid: "abc"
  };
  //ALWAYS PASS IN STATE AND THEN ACTION
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should remove state with logout", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid: "action" }, action);
  expect(state).toEqual({});
});
