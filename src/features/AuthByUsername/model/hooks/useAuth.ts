import { initAuthData, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useBroadcastChannel } from '@/shared/lib/hooks/useBroadcastChannel/useBroadcastChannel';
import { EBroadcastChannelEventName } from '@/shared/types/broadcastChannel';
import { useEffect } from 'react';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { data } = useBroadcastChannel(EBroadcastChannelEventName.AUTH);
  useEffect(() => {
    if (data === false) {
      dispatch(userActions.logout());
    }
    if (data === true) {
      dispatch(initAuthData());
    }
  }, [data, dispatch]);
};
