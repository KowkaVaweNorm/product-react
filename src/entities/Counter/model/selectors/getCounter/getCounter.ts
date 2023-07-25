import { type StateSchema } from 'app/providers/StoreProvider';
import { type CounterSchema } from '../../types/CounterSchema';

export const getCounter = (state: StateSchema): CounterSchema => state.counter;
