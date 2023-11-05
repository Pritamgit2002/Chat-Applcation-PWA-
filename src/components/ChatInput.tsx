import { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { RxPaperPlane } from "react-icons/rx";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./style.css";

const ChatInput = () => {
  const [message, setMessage] = useState<string>("");

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <form onSubmit={handleOnSubmit} className="relative mb-4">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-3 py-2 rounded-xl placeholder:text-sm bg-gray-300/40"
        type="text"
        placeholder="Reply to @Rohit Yadav"
      />
      <div className="flex space-x-4 absolute top-2.5 end-0 mr-5 bg-white rounded-xl">

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button>
              <GrAttachment className="icon" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className="w-40 bg-[#008000] rounded-full  py-4">
              <div className="flex items-center justify-around ">
                <div>
                  <img src="/camera.png" alt="cam" className="w-6 h-6" />
                </div>
                <div>
                  <img src="/rec.png" alt="cam" className="w-6 h-5" />
                </div>
                <div>
                  <img src="/text.png" alt="cam" className="w-6 h-6" />
                </div>
              </div>
              <DropdownMenu.Arrow className="custom-dropdown-arrow"/>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>

        <button type="submit">
          <RxPaperPlane className="icon hover:scale-150 duration-400" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
