import { PayloadAction, createSlice} from '@reduxjs/toolkit';
import { TCategoryList, TPost, TPostCreate, TPostEdit, TPostList } from '../../types/post';
import { IDataN } from '../../types/global';


const initialState: {posts: TPostList | null, categories: TCategoryList[], postEdit: TPost | null} = {
    posts: null,
    categories: [],
    postEdit: null
};

export const { actions: postActions, reducer: postReducer } = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    getPosts: (state ,{ payload }: PayloadAction<string | undefined>) => {},
    getCategories: () => {},
    postPost: (state, { payload }: PayloadAction<IDataN<TPostCreate>>) => {},
    deletePost: (state, { payload }: PayloadAction<number>) => {},
    editPost: (state, { payload }: PayloadAction<IDataN<TPostEdit>>) => {},
    setPost: (state, { payload }: PayloadAction<TPostList>) => {
      state.posts = payload
    },
    setCategories: (state, { payload }: PayloadAction<TCategoryList[]>) => {
      state.categories = payload
    },
    setPostEdit: (state, { payload }: PayloadAction<TPost | null>) => {
      state.postEdit = payload
    },
  }
});
