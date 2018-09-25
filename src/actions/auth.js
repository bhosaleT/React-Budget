import {
  firebase,
  googleAuthProvider,
  githubAuthProvider
} from "../firebase/firebase";

export const login = (uid) =>({
  type: 'LOGIN',
  uid
});

export const logout = () =>({
  type: 'LOGOUT'
});

export const startLoginWithGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLoginWithGithub = () => {
  return () => {
    return firebase.auth().signInWithPopup(githubAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
