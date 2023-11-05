import { useEffect, useState } from 'react'
import ChatHeader from "./components/ChatHeader"
import ChatInput from "./components/ChatInput"
import Chats from "./components/Chats"
import { ChatType, ChatsType } from './Types'

function App() {
  const [chats, setChats] = useState<ChatType[]>([])

  const [chatFrom, setChatFrom] = useState<string>('')
  const [chatTo, setChatTo] = useState<string>('')

  const fetchChats = async () => {
    const url = `https://qa.corider.in/assignment/chat?page=0`
    const data = await fetch(url);
    const parsedData: ChatsType = await data.json()
    setChats(parsedData.chats)
    setChatFrom(parsedData.from)
    setChatTo(parsedData.to)
  }

  useEffect(() => {
    fetchChats()
  }, [])

  return (
    <>
      <main className="bg-[#FAF9F4] h-screen w-screen md:w-96 mx-auto p-4 rounded-none md:rounded-3xl flex flex-col">
        <ChatHeader chatTo={chatTo} chatFrom={chatFrom} />
        <Chats setChats={setChats} chats={chats} />
        <ChatInput />
      </main>
    </>
  )
}

export default App
