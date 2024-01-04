import { PayloadAction } from "@reduxjs/toolkit";
import { takeLeading } from "redux-saga/effects";
import { authActions } from "../slices";
import { logOutService, loginAuthService, postRefreshTokenService, signUpAuthService } from "../../services/auth";
import { AxiosResponse } from "axios";
import { TSignIn, TSignUp } from "../../types/auth";
import { IDataN } from "../../types/global";
import { store } from "../store";

function* signInSagas({ payload }: PayloadAction<IDataN<TSignIn>>) {
  yield;
  try {
    // store.dispatch(authActions.setBtnLoading(true));
    const result: AxiosResponse = yield loginAuthService(payload.data);
    localStorage.setItem("accessToken" , result.data.token.access)
    localStorage.setItem("refreshToken" , result.data.token.refresh)
    store.dispatch(authActions.setUser(result.data.user))
    payload.navigate("/dashboard")
  } catch (error) {
    // store.dispatch(authActions.setBtnLoading(false));
    console.log(error);
  }
}
function* signUpSagas({ payload }: PayloadAction<IDataN<TSignUp>>) {
  yield;
  try {
    // store.dispatch(authActions.setBtnLoading(true));
    const result: AxiosResponse = yield signUpAuthService(payload.data);
    payload.navigate("/sign-in")
  } catch (error) {
    // store.dispatch(authActions.setBtnLoading(false));
    console.log(error);
  }
}
function* postRefreshTokenSagas({ payload }: PayloadAction<{refresh: string}>) {
  yield;
  try {
    // store.dispatch(authActions.setBtnLoading(true));
    const result: AxiosResponse = yield postRefreshTokenService(payload);
  } catch (error) {
    // store.dispatch(authActions.setBtnLoading(false));
    console.log(error);
  }
}
function* logOutSagas({ payload }: PayloadAction<IDataN<{refresh: string}>>) {
  yield;
  try {
    // store.dispatch(authActions.setBtnLoading(true));
    const result: AxiosResponse = yield logOutService(payload.data);
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("persist:root")
    payload.navigate("/sign-in")
  } catch (error) {
    // store.dispatch(authActions.setBtnLoading(false));
    console.log(error);
  }
}

const authSagas = [
  takeLeading(authActions.signIn.toString(), signInSagas),
  takeLeading(authActions.signUp.toString(), signUpSagas),
  takeLeading(authActions.postRefreshToken.toString(), postRefreshTokenSagas),
  takeLeading(authActions.logOut.toString(), logOutSagas),
];
export default authSagas;
