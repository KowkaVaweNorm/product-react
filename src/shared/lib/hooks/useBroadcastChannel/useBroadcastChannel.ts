import { useCallback, useEffect, useRef, useState } from 'react';

import { type TBroadcastChannelEvents } from '@/shared/types/broadcastChannel';

/**
 * @example
 * // Sender
 * const {send} = useBroadcastChannel("TEST")
 * send('anyData');
 *
 * // Reciever
 * const {data} = useBroadcastChannel("TEST")
 * console.log('data:', data); // data: anyData
 */
export const useBroadcastChannel = (channelName: keyof TBroadcastChannelEvents) => {
  const channelRef = useRef<BroadcastChannel | null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const channel = new BroadcastChannel(channelName);
    channelRef.current = channel;
    const onMessage = (e: MessageEvent<any>) => {
      setData(e.data);
    };

    channel.addEventListener('message', onMessage);
    return () => {
      channel.removeEventListener('message', onMessage);
      channel.close();
    };
  }, [channelName]);

  const send = useCallback((message: any) => {
    if (channelRef.current != null) {
      channelRef.current.postMessage(message);
    }
  }, []);
  return { data, send };
};
