import { useDispatch } from 'react-redux';

import { type AppDispatch } from '@/app/providers/StoreProvider';

export const useAppDispatch = (): any => useDispatch<AppDispatch>();
