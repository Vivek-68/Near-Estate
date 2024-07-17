import React, { useContext, useEffect, useState } from "react";
import { userData, listData } from "../lib/dummydata.js";
import Card from "../components/Card";
import Chat from "../components/Chat.jsx";
import apiRequest from "../lib/apiRequest.js";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { format } from "timeago.js";
import { SocketContext } from "../context/SocketContext.jsx";

const ProfilePage = () => {
  const { posts, saved, chats } = useLoaderData();
  const [chat, setChat] = useState(null);
  const [text,setText] = useState('');
  const {socket} = useContext(SocketContext);
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);
  const handleClick = async () => {
    try {
      const response = await apiRequest.delete("/auth/logout");
      updateUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChatClick = async (id, receiver) => {
    try {
      const res = await apiRequest.get("/chats/" + id);
      setChat({ ...res?.data?.data, receiver });
    } catch (error) {
      console.log(error);
    }
  };

  const handleMessageSend = async() =>{
    if(!text) return;
    try{
    const res = await apiRequest.post('/messages/'+chat.id,{text});
    setChat(prev =>({...prev,messages:[...prev.messages,res.data?.data]}));
    setText('')
    socket.emit("sendMessage",{
      receiverId: chat?.receiver?.id,
      data: res?.data?.data
    })
    }
    catch(e){
      console.log(e);
    }

  }

  useEffect(() => {
    const read = async () => {
      try {
        await apiRequest.put("/chats/read/" + chat.id);
      } catch (err) {
        console.log(err);
      }
    };

    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
          read();
        }
      });
    }
    return () => {
      socket.off("getMessage");
    };
  }, [socket, chat]);

  // useEffect(()=>{
  //   const readMessage = async() =>{
  //     try{
  //     await apiRequest.put('/chats/read/'+chat.id);
  //     }catch(e){
  //       console.log(e);
  //     }
  //   };

  //   if(chat && socket){
      
  //     socket.on("getMessage",(data)=>{
  //       console.log('whoa')
  //       if(chat.id === data.chatId){
  //         setChat(prev => ({...prev,messages:[...prev.messages,data]}))
  //         readMessage()
  //       }
  //     })
  //   }
   
  //   return () =>{ socket.off("getMessage"); }

  // },[chat,socket])
 

  const openChatboxStyle =
    "flex flex-col gap-4 max-[1023px]:max-h-[400px] lg:h-[45%] overflow-y-auto";
  const closedChatboxStyle =
    "flex flex-col gap-4 max-[1023px]:max-h-[600px] lg:h-[100%] overflow-y-auto";

  return (
    <div className="max-[768px]:pt-[5rem] max-[500px]:pt-[3.5rem] lg:flex lg:h-[85vh] pb-8 lg:pb-0">
      <div className="lg:w-[65%] md:pr-8 mb-8 overflow-y-auto">
        <div className="flex justify-between items-center gap-2">
          <h2 className="min-[450px]:text-3xl text-2xl font-semibold">
            User Information
          </h2>
          <Link
            to="/profile/update"
            className="px-2 py-1.5 sm:px-4 text-[14px] sm:text-[1rem] sm:py-3 rounded-md text-white bg-lilac"
          >
            Update Profile
          </Link>
        </div>
        <div className=" flex flex-col pt-4 gap-4">
          <span className=" flex gap-4 items-center">
            Avatar :{" "}
            <img
              src={currentUser?.avatar || "/icons/noavatar.jpg"}
              className="h-[2.25rem] w-[2.25rem] rounded-full object-cover"
              alt="Could not load image"
            />
          </span>
          <span>
            Username: <span className="m-4">{currentUser?.username}</span>
          </span>
          <span>
            Email: <span className="m-4">{currentUser?.email}</span>
          </span>
          <button
            onClick={handleClick}
            className="px-2 py-1.5 sm:px-4 text-[14px] sm:text-[1rem] w-[5rem] sm:w-[7.5rem] sm:py-3 rounded-md text-white bg-lilac"
          >
            Logout
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h2 className="min-[450px]:text-3xl text-2xl font-semibold">
            My List
          </h2>
          <Link to="/add">
            <button className="px-2 py-1.5 sm:px-4 text-[14px] sm:text-[1rem] sm:py-3 rounded-md text-white bg-lilac">
              Add New Post
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:h-[60vh] pt-4">
          {posts &&
            posts.map((item) => (
              <div key={item.id} className="max-h-[20rem]">
                <Card {...item} />
              </div>
            ))}
          <h2 className="min-[450px]:text-3xl text-2xl font-semibold">
            Saved List
          </h2>
          {saved &&
            saved.map((item) => (
              <div key={item.id} className="max-h-[20rem]">
                <Card {...item} />
              </div>
            ))}
        </div>
      </div>
      <div className="lg:w-[35%] px-6 bg-[#FFE6E6]  max-[1023px]:max-h-[1000px] lg:h-[100%] pt-4 pb-4">
        <div className="mb-2">
          <h2 className="text-3xl font-semibold">Messages</h2>
        </div>
        <div className={chat ? openChatboxStyle : closedChatboxStyle}>
          {chats &&
            chats.map((item) => (
              <div
                onClick={() => handleChatClick(item.id, item.receiver)}
                key={nanoid()}
              >
                <Chat {...item} />
              </div>
            ))}
        </div>
        {chat && (
          <div className="max-[1023px]:h-[350px] lg:h-[45%]">
            <div className="flex justify-between items-center p-2 bg-lilac">
              <span className="flex items-center">
                <img
                  className="h-[2.5rem] w-[2.5rem] object-cover rounded-full"
                  src={chat.receiver?.avatar || "icons/noavatar.jpg"}
                  alt="Could not load image"
                />
                <p className="text-white">{chat.receiver?.username}</p>
              </span>
              <p
                className="text-white cursor-pointer"
                onClick={() => setChat((prev) => !prev)}
              >
                X
              </p>
            </div>
            <div className="gap-2 h-[70%] text-[14px] flex flex-col bg-white p-2 overflow-y-auto">
              {chat.messages &&
                chat.messages.map((message) => {
                  if (message.userId !== currentUser.id) {
                    return (
                      <div key={message.id} className="bg-white">
                        <p className="line-clamp-1">{message.text}</p>
                        <span className="text-[.75rem]">
                          {format(message.createdAt)}
                        </span>
                      </div>
                    );
                  } else
                    return (
                      <div
                        key={message.id}
                        className="bg-white flex justify-end"
                      >
                        <span className="">
                          <p className="line-clamp-1">{message.text}</p>
                          <span className="text-[.75rem]">
                            {format(message.createdAt)}
                          </span>
                        </span>
                      </div>
                    );
                })}
            </div>
    
            <div className="flex mt-2">
              <textarea name="chatbox" className="w-[100%]" value={text} onChange={(e)=>setText(e.target.value)} />
              <button onClick={handleMessageSend} className="bg-lilac p-3">Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
