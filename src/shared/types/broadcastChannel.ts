export const enum EBroadcastChannelEventName {
  AUTH = 'AUTH',
  MESSAGE = 'MESSAGE',
}

export type TBroadcastChannelEvents = {
  [K in EBroadcastChannelEventName]: K extends EBroadcastChannelEventName.AUTH
    ? boolean // Тип данных для AUTH
    : K extends EBroadcastChannelEventName.MESSAGE
      ? string // Тип данных для MESSAGE
      : never;
};
