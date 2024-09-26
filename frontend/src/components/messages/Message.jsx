import React from "react";

const Message = () => {
//   const { authUser } = useAuthContext();
//   const { selectedConversation } = useConversation();
//   const fromMe = message.senderId === authUser._id;
//   const formattedTime = extractTime(message.createdAt);
//   const chatClassName = fromMe ? "chat-end" : "chat-start";
//   const profilePic = fromMe
//     ? authUser.profilePic
//     : selectedConversation?.profilePic;
//   const bubbleBgColor = fromMe ? "bg-blue-500" : "";

//   const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src="" />
        </div>
      </div>
      <div className={`chat-bubble text-white  pb-2`}>vcvcv</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        cvv
      </div>
    </div>
  );
};

export default Message;
