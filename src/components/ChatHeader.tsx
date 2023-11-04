import { IoMdArrowBack } from "react-icons/io"
import { FiEdit } from "react-icons/fi"
import GroupChatPng from "../assets/GroupChat.png"
import { BsThreeDotsVertical } from 'react-icons/bs'

type Props = {
  chatFrom: string;
  chatTo: string;
}

const ChatHeader: React.FC<Props> = ({ chatFrom, chatTo }) => {
  return (
    <header className="border-b border-gray-300">
      <div className="flex justify-between">
        <div className="flex items-center">
          <IoMdArrowBack className="icon" />
          <h1 className="text-xl font-semibold mx-3">Trip 1</h1>
        </div>
        <FiEdit className="icon" />
      </div>
      <div className="flex items-center justify-between my-5 font-semibold">
        <img src={GroupChatPng} alt="group-chat" />
        <div className="flex-1 mx-3 text-[0.950rem]">
          <h1 className="text-black/60">From <span className="text-black">{chatFrom}</span></h1>
          <h2 className="text-black/60">To <span className="text-black">{chatTo}</span></h2>
        </div>
        <BsThreeDotsVertical className="icon" />
      </div>
    </header>
  )
}

export default ChatHeader