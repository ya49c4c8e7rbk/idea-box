import firebase from 'firebase/app';

export interface UserState {
  userInfo: firebase.UserInfo | null;
}
