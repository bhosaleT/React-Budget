import { login, logout } from "../../actions/auth";

test("Should generate login action object", () => {
  const uid = "abc";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid: uid
  });
});

test("Should generate logout actio object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
