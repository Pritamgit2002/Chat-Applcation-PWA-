import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ChatType } from "../Types";
import Spinner from "./Spinner";

type Props = {
  chats: ChatType[];
  setChats: React.Dispatch<React.SetStateAction<ChatType[]>>;
};

const Chats: React.FC<Props> = ({ chats, setChats }) => {
  const [page, setPage] = useState<number>(0);

  const fetchDataMore = () => {
    //Implemented SetTimeout just to experience
    setTimeout(async () => {
      setPage(page + 1);
      const url = `https://qa.corider.in/assignment/chat?page=${page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setChats(chats?.concat(parsedData.chats));
    }, 900);
  };

  return (
    <div
      id="scrollableDiv"
      className="flex-1 overflow-y-scroll my-2.5 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex flex-col-reverse"
    >
      <InfiniteScroll
        dataLength={chats.reduce((a, obj) => a + Object.keys(obj).length, 0)}
        next={fetchDataMore}
        className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex flex-col-reverse"
        inverse={true}
        hasMore={true}
        loader={<Spinner />}
        scrollableTarget="scrollableDiv"
      >
        {chats?.map((item: ChatType) => (
          <div
            key={item.id}
            className={`${
              !item.sender.self
                ? "flex space-x-2 clear-right"
                : "float-right clear-left"
            }`}
          >
            {!item.sender.self && (
              <img
                className="w-6 h-6 mt-3 rounded-full"
                src={item.sender.image}
                alt="profile"
              />
            )}
            <div
              className={` p-1 ${
                !item.sender.self ? "clear-right" : "float-right clear-left"
              } text-sm md:text-xs shadow-lg my-3 ${
                !item.sender.self ? "text-[#606060]" : "text-[#FFFFFF]"
              } max-w-fit w-[80%] ${
                !item.sender.self ? "bg-white" : "bg-[#1C63D5]"
              } ${!item.sender.self ? "" : "rounded-tl-lg"} rounded-tr-lg ${
                !item.sender.self ? "rounded-br-lg" : ""
              } rounded-bl-lg`}
            >
              {item.message}
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Chats;
