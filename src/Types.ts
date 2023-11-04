export type ChatsType = {
  chats: ChatType[];
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
}

export type ChatType = {
  id: string;
  message: string;
  sender: SenderType;
  time: Date;
}

export type SenderType = {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
}
