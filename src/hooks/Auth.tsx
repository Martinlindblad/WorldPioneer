import {firebase, FirebaseAuthTypes} from '@react-native-firebase/auth';
import React from 'react';
import {useState, useContext, PropsWithChildren, useMemo} from 'react';

export const Context = React.createContext<{
  // logout: () => void;
  // showTokenExpiredScreenOnLoggedOut: boolean;
  // setShowTokenExpiredScreenOnLoggedOut: (val: boolean) => void;
  // authenticate: () => void;
  initializing: boolean;
  isLoggedIn: boolean;
  // customerId?: string;
  // loginWithEmailPassword: (params: {
  //   email: string;
  //   password: string;
  // }) => Promise<void>;
}>({
  // logout: async () => {},
  // showTokenExpiredScreenOnLoggedOut: false,
  // setShowTokenExpiredScreenOnLoggedOut: () => {},
  // authenticate: async () => {},
  initializing: true,
  isLoggedIn: false,
  // customerId: undefined,
  // loginWithEmailPassword: () => Promise.reject(),
});

export type Auth = typeof Context extends React.Context<infer P> ? P : never;

export const useAuth = (): Auth => useContext(Context);

export function Provider<T>({children}: PropsWithChildren<T>): JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [currentUser, setUser] = useState<FirebaseAuthTypes.User>();

  const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUser(user);
      setInitializing(false);
    } else {
      console.log(unsubscribe, 'Not Authurized');
    }
  });
  console.log(unsubscribe);

  const authState = useMemo(
    () => ({
      initializing,
      isLoggedIn: Boolean(currentUser),
    }),
    [initializing, currentUser],
  );

  return (
    <Context.Provider value={authState}>
      {initializing ? null : children}
    </Context.Provider>
  );
}
