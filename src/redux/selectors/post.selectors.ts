import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const usePost = () => {
  return useSelector((state: RootState) => state.post);
};
