import { type AppDispatch } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

export const useAppDispatch = (): any => useDispatch<AppDispatch>();
