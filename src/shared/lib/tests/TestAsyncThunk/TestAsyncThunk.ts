import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  MyActionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
  consrtuctor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>): void {
    this.MyActionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk (arg: Arg): Promise<any> {
    const action = this.MyActionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);
    return result;
  }
}
