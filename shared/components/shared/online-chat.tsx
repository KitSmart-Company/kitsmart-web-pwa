import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";

const OnlineChat = () => {
  return (
    <div className="bottom-0 p-16 sticky cursor-pointer top-0 z-20">
      <div className="w-[50px] absolute h-[50px] right-0 p-3 flex justify-center rounded-full items-center bg-indigo-600 ">
        <BsFillChatDotsFill size={25} color="white" />
      </div>
    </div>
  );
};

export default OnlineChat;
