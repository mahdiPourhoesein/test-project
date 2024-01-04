import { PayloadAction } from "@reduxjs/toolkit";
import { takeLeading } from "redux-saga/effects";
import { postActions } from "../slices";
import { AxiosResponse } from "axios";
import { IDataN } from "../../types/global";
import { store } from "../store";
import { deletePostsServices, editPostsServices, getCategoreisServices, getPostsServices, postPostsServices } from "../../services/post";
import { TPostCreate, TPostEdit } from "../../types/post";

function* getPostsSagas({ payload } : PayloadAction<string>) {
  yield;
  try {
    // store.dispatch(authActions.setBtnLoading(true));
    const result: AxiosResponse = yield getPostsServices(payload);
    store.dispatch(postActions.setPost(result.data))
  } catch (error) {
    // store.dispatch(authActions.setBtnLoading(false));
    console.log(error);
  }
}
function* getCategoriesSagas() {
  yield;
  try {
    // store.dispatch(authActions.setBtnLoading(true));
    const result: AxiosResponse = yield getCategoreisServices();
    store.dispatch(postActions.setCategories(result.data))
  } catch (error) {
    // store.dispatch(authActions.setBtnLoading(false));
    console.log(error);
  }
}

function* postPostsSagas({ payload }: PayloadAction<IDataN<TPostCreate>>) {
  yield;
  try {
    // store.dispatch(authActions.setBtnLoading(true));
    const result: AxiosResponse = yield postPostsServices(payload.data);
    payload.navigate("/dashboard")
  } catch (error) {
    // store.dispatch(authActions.setBtnLoading(false));
    console.log(error);
  }
}

function* editPostsSagas({ payload }: PayloadAction<IDataN<TPostEdit>>) {
  yield;
  try {
    // store.dispatch(authActions.setBtnLoading(true));
    const result: AxiosResponse = yield editPostsServices(payload.data);
    payload.navigate("/dashboard")
  } catch (error) {
    // store.dispatch(authActions.setBtnLoading(false));
    console.log(error);
  }
}

function* deletePostSagas({ payload }: PayloadAction<number>) {
  yield;
  try {
    // store.dispatch(authActions.setBtnLoading(true));
    const result: AxiosResponse = yield deletePostsServices(payload);
    store.dispatch(postActions.getPosts())
  } catch (error) {
    // store.dispatch(authActions.setBtnLoading(false));
    console.log(error);
  }
}

const postSagas = [
  takeLeading(postActions.getPosts.toString(), getPostsSagas),
  takeLeading(postActions.getCategories.toString(), getCategoriesSagas),
  takeLeading(postActions.postPost.toString(), postPostsSagas),
  takeLeading(postActions.editPost.toString(), editPostsSagas),
  takeLeading(postActions.deletePost.toString(), deletePostSagas),
];
export default postSagas;
