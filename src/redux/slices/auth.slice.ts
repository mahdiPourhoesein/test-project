import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSignIn, TSignUp, TUser } from '../../types/auth';
import { IDataN } from '../../types/global';


const initialState: {user: TUser} = {
  user: {
      id: 0,
      email: "",
      first_name: "",
      last_name: "",
      is_active: false,
      image: ""
  }
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    // setProfile: (
    //   state,
    //   { payload }: PayloadAction<IauthInformation["auth"]>
    // ) => {
    //   state.information.auth = payload;
    //   state.isLoading = false;
    // },
    setUser: (state, { payload }: PayloadAction<TUser>) => {
      state.user = payload
    },
    signIn: (state, { payload }: PayloadAction<IDataN<TSignIn>>) => {},
    signUp: (state, { payload }: PayloadAction<IDataN<TSignUp>>) => {},
    postRefreshToken: (state, { payload }: PayloadAction<{refresh: string}>) => {},
    logOut: (state, { payload }: PayloadAction<IDataN<{refresh: string}>>) => {},
  }
});
