import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { initAuthData } from '../services/initAuthData';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { type JsonSettings } from '../types/jsonSettings';
import { type UserSchema, type User } from '../types/user';

import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { broadcastChannelSend } from '@/shared/lib/utils/broadcastChannelSend';
import { EBroadcastChannelEventName } from '@/shared/types/broadcastChannel';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        (action.payload.features?.isAppRedesigned ?? false) ? 'new' : 'old',
      );
      broadcastChannelSend(EBroadcastChannelEventName.AUTH, true);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_KEY, 'old');
      setFeatureFlags({ isAppRedesigned: false });
      broadcastChannelSend(EBroadcastChannelEventName.AUTH, false);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, { payload }: PayloadAction<JsonSettings>) => {
        if (state.authData != null) {
          state.authData.jsonSettings = payload;
        }
      },
    );
    builder.addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
      setFeatureFlags(payload.features);
      state._inited = true;
    });
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
