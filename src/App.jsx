import "./App.css";
import React, { useState } from "react";

// Logos
import GptSvg from "./assets/chatgpt.svg";
import PurpleGptSvg from "./assets/chatgptPurple.svg";
//Icons
import { CiChat1 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

// OpenAIAPI
import { sendMsgToAI } from "./openai";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi im chat Gpt, how can i help you today?",
      isBot: true,
    },
  ]);

  const handleSend = async () => {
    const res = await sendMsgToAI(input);
    setMessages([
      ...messages,
      {text: input, isBot:false},
      {text: res, isBot:true},
    ])
    setInput("")
  };
  return (
    <div data-ui="App" className="min-h-screen flex scroll-smooth max-h-screen">
      <div
        data-ui="sidebar"
        className="flex-3 flex flex-col border-r-1 border-borderWhite h-screen"
      >
        <div data-ui="upperSide" className="flex flex-col p-7 h-7/10 ">
          <div className="flex items-center">
            <img
              src={GptSvg}
              alt="LogoGpt"
              data-ui="logoGPT"
              className="w-[50px] mr-3"
            />
            <span data-ui="brandSpan" className="text-2xl">
              CloneGPT
            </span>
          </div>
          <button
            data-ui="newChatBtn"
            className="flex justify-center gap-3 cursor-pointer items-center text-xl mt-7 p-4 rounded-md w-full bg-purple-600"
          >
            <FaPlus /> New Chat
          </button>
          <div data-ui="upperQueryDiv" className="mt-8 gap-5 flex flex-col">
            <button
              id="query"
              className="flex border w-full rounded-md p-4 gap-6 items-center cursor-pointer border-borderWhite"
            >
              <CiChat1 className="text-3xl" /> What is an LLM?
            </button>
            <button
              id="query"
              className="flex border w-full rounded-md p-4 gap-6 items-center cursor-pointer border-borderWhite"
            >
              <CiChat1 className="text-3xl" />
              How to use Open AI API?
            </button>
          </div>
        </div>
        <div
          data-ui="lowerSide"
          className="p-10 h-3/10 border-t border-borderWhite flex flex-col gap-5 justify-center items-start"
        >
          <button
            data-ui="Home-btn"
            className="flex gap-4 items-center text-md"
          >
            <IoMdHome className="text-purple-600 text-4xl" />
            Home
          </button>
          <button
            data-ui="Saved-btn"
            className="flex gap-[19px] items-center text-md"
          >
            <FaBookmark className="text-purple-600 text-3xl ml-[3px]" />
            Saved
          </button>
          <button
            data-ui="Suscription-btn"
            className="flex gap-4 items-center text-md"
          >
            <IoIosRocket className="text-purple-600 text-4xl" />
            Upgradge to Pro
          </button>
        </div>
      </div>
      <div data-ui="main" className="flex-9 font-poppinsGoogle">
        <div
          data-ui="chat-box"
          className="h-12/14 border-borderWhite px-[50px] pt-[50px] flex flex-col gap-9 overflow-hidden overflow-y-scroll scrollbar-thin scroll-smooth scrollbar-thumb-purple-600 scrollbar-track-zinc-800"
        >
           {messages.map((msj, index)=>{
          if(msj.isBot){
            return(<div
              key={index}
              data-ui="Chat-bot-answer"
              className="flex gap-3 w-fit bg-[#1e1e2e] rounded-b-4xl rounded-tr-4xl self-start p-2.5 max-w-9/10"
            >
              <img
                src={PurpleGptSvg}
                className="w-[50px] h-[50px] object-cover shrink-0 self-start mt-3 ml-2"
              />
  
              <p
                data-ui="user-prompt-text"
                className="text-[15px] text-left leading-[1.75] p-2 self-center"
              >
                {msj.text}
              </p>
            </div>)}
            else if(!msj.isBot){
              return(<div
                data-ui="user-prompt"
                className="flex gap-3 w-fit bg-gradient-to-b from-purple-600 to-violet-500 rounded-b-4xl rounded-tl-4xl self-end p-2.5 max-w-9/10"
              >
                <p
                  data-ui="user-prompt-text"
                  className="text-[15px] text-left leading-[1.75] p-2 self-center"
                >
                  {msj.text}
                </p>
                <FaRegUserCircle className="w-[50px] h-[50px] text-white shrink-0 self-start" />
              </div>)
            }
          
        })}
        </div>
        <div
          data-ui="chat-footer"
          className="h-2/14 flex flex-col justify-end items-center"
        >
          <div
            data-ui="user-input-box"
            className="bg-zinc-800 flex rounded-3xl w-8/10 mx-auto p-2"
          >
            <input
              type="text"
              className="flex-1 border-none focus:outline-none focus:ring-0 px-5"
              placeholder="Pregunta lo que quieras"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button onClick={handleSend}>
              <IoSend className="w-[40px] h-[30px] text-purple-600 shrink-0 cursor-pointer" />
            </button>
          </div>
          <span
            data-ui="disclaimer"
            className="font-poppinsGoogle text-xs mt-4 mb-3"
          >
            ChatGPT puede cometer errores. Considera verificar la información
            importante.
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
