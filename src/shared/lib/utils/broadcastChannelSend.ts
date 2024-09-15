import {
  type TBroadcastChannelEvents,
  type EBroadcastChannelEventName,
} from '@/shared/types/broadcastChannel';

export const broadcastChannelSend = <T extends EBroadcastChannelEventName>(
  channelName: T,
  message: TBroadcastChannelEvents[T],
) => {
  try {
    const channel = new BroadcastChannel(channelName);
    channel.postMessage(message);
    channel.close();
  } catch (e: unknown) {
    console.log('Send message failed with message:', e);
  }
};
