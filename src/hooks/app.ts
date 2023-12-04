import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { RootState, AppDispatch } from '@/store';

// TypedUseSelectorHook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const appShallowEqual = shallowEqual;
