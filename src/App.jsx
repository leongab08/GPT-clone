import "./App.css";
import React, { useEffect, useRef, useState } from "react";

// Logos
import GptSvg from "./assets/chatgpt.svg";
import PurpleGptSvg from "./assets/chatgptPurple.svg";
//Icons
import { CiChat1, CiGlass } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";

// OpenAIAPI
import { sendMsgToAI } from "./openai";

function App() {
  const [input, setInput] = useState("");
  const msgEnd = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi im chat Gpt, how can i help you today?",
      isBot: true,
    },
  ]);

  const handleInfoClick = () => {
    setShowModal(true);
  };

  const handleSend = async () => {
    console.log("handle SENd");
    const res = await sendMsgToAI(input);
    setMessages([
      ...messages,
      { text: input, isBot: false },
      { text: res, isBot: true },
    ]);
    setInput("");
  };

  const handleQuery = async (e) => {
    const res = await sendMsgToAI(e.target.value);
    setMessages([
      ...messages,
      { text: e.target.value, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter" && input) {
      await handleSend();
    }
  };

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  return (
    <div data-ui="App" className="min-h-screen flex scroll-smooth max-h-screen">
      <header className="lg:hidden fixed w-screen z-10 bg-backgroundChat border-b border-b-borderWhite p-3 text-white rounded flex justify-between">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <BiMenuAltLeft className="text-3xl text-amber-50"/>
        </button>
        
        <img src={PurpleGptSvg} />

        <button
            onClick={handleInfoClick}
            data-ui="Suscription-btn"
            className="flex gap-2 items-center text-md cursor-pointe"
          >
            <IoIosRocket className="text-amber-50 text-4xl  hover:text-violet-500 transition-all duration-300 ease-in-out " />
          </button>
      </header>

      <div
        data-ui="sidebar"
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:flex flex-3 flex-col border-r border-borderWhite h-screen fixed lg:static bg-backgroundChat z-40 w-64`}
      >
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <BiMenuAltLeft className="text-3xl text-amber-50 absolute cursor-pointer lg:hidden left-4"/>
        </button>
        <div data-ui="upperSide" className="flex flex-col p-7 sm:h-7/10 h-6/10 lg:mt-0 mt-2">
          <div className="flex items-center">
            <img
              src={isHovered ? PurpleGptSvg : GptSvg}
              alt="LogoGpt"
              data-ui="logoGPT"
              className="w-[50px] mr-3 transition-all duration-500 ease-in-out transform scale-100"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <span data-ui="brandSpan" className="text-2xl ">
              CloneGPT
            </span>
          </div>
          <button
            data-ui="newChatBtn"
            className="flex justify-center gap-3 hover:bg-violet-600  transition-colors duration-300 ease-in-out cursor-pointer items-center text-xl mt-7 p-4 rounded-md w-full bg-purple-600"
            onClick={() => {
              setMessages([
                {
                  text: "Hi im chat Gpt, how can i help you today?",
                  isBot: true,
                },
              ]);
            }}
          >
            <FaPlus /> New Chat
          </button>
          <div data-ui="upperQueryDiv" className="mt-8 gap-5 flex flex-col">
            <button
              id="query"
              className="flex max-h-[60px] border group hover:text-[17px] hover:font-bold hover:border-2 hover:border-amber-50 transition-all ease-in w-full rounded-md p-4 gap-6 items-center cursor-pointer border-borderWhite"
              onClick={handleQuery}
              value={"What is an LLM?"}
            >
              <CiChat1 className="text-3xl group-hover:text-[32px] group-hover:font-bold transition-all ease-in" />{" "}
              What is an LLM?
            </button>
            <button
              id="query"
              className="flex max-h-[60px] border group hover:text-[17px] hover:font-bold hover:border-2 hover:border-amber-50 transition-all ease-in w-full rounded-md p-4 gap-6 items-center cursor-pointer border-borderWhite"
              onClick={handleQuery}
              value={" How to use Open AI API?"}
            >
              <CiChat1 className="text-3xl group-hover:text-[32px] group-hover:font-bold transition-all ease-in" />
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
            className="flex gap-2 items-center text-md cursor-pointer"
            onClick={handleInfoClick}
          >
            <IoMdHome className="text-purple-600 text-4xl hover:text-violet-500 transition-all duration-300 ease-in-out" />
            <span className="hover:font-bold transition-all duration-300 ease-in-out mt-1">
              Home
            </span>
          </button>
          <button
            onClick={handleInfoClick}
            data-ui="Saved-btn"
            className="flex gap-[11px] items-center text-md cursor-pointer"
          >
            <FaBookmark className="text-purple-600 text-3xl ml-[3px]  hover:text-violet-500 transition-all duration-300 ease-in-out " />
            <span className="hover:font-bold transition-all duration-300 ease-in-out">
              Saved
            </span>
          </button>
          <button
            onClick={handleInfoClick}
            data-ui="Suscription-btn"
            className="flex gap-2 items-center text-md cursor-pointer"
          >
            <IoIosRocket className="text-purple-600 text-4xl  hover:text-violet-500 transition-all duration-300 ease-in-out " />
            <span className="hover:font-bold transition-all duration-300 ease-in-out">
              Upgradge to Pro
            </span>
          </button>
        </div>
      </div>
      <div data-ui="main" className="flex-9 font-poppinsGoogle">
        <div
          data-ui="chat-box"
          className="lg:h-12/14 h-12/14 border-borderWhite px-[50px] pt-[50px] flex flex-col gap-9 overflow-hidden overflow-y-scroll scrollbar-thin scroll-smooth scrollbar-thumb-purple-600 scrollbar-track-zinc-800"
        >
          {messages.map((msj, index) => {
            const isBot = msj.isBot;
            const baseClasses =
              "transition-all duration-500 ease-in-out opacity-0 translate-y-6 animate-slide-up";

            return (
              <div
                key={index}
                className={`${
                  isBot
                    ? "flex gap-3 w-fit bg-[#1e1e2e] rounded-b-4xl rounded-tr-4xl self-start p-2.5 max-w-9/10"
                    : "flex gap-3 w-fit bg-gradient-to-b from-purple-600 to-violet-500 rounded-b-4xl rounded-tl-4xl self-end p-2.5 max-w-9/10"
                } ${baseClasses}`}
              >
                {isBot ? (
                  <>
                    <img
                      src={PurpleGptSvg}
                      className="w-[50px] h-[50px] object-cover shrink-0 self-start mt-3 ml-2"
                    />
                    <p className="text-[15px] text-left leading-[1.75] p-2 self-center">
                      {msj.text}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-[15px] text-left leading-[1.75] p-2 self-center">
                      {msj.text}
                    </p>
                    <FaRegUserCircle className="w-[50px] h-[50px] text-white shrink-0 self-start" />
                  </>
                )}
              </div>
            );
          })}

          <div ref={msgEnd}></div>
        </div>
        <div
          data-ui="chat-footer"
          className="lg:h-2/14 lg:pt-0 h-fit absolute md:static bottom-0 flex flex-col justify-end items-center pt-3 bg-backgroundChat lg:bg-transparent"
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
              onKeyDown={handleEnter}
            />
            <button onClick={handleSend}>
              <IoSend className="w-[40px] h-[30px] text-purple-600 shrink-0 cursor-pointer hover:text-amber-50 transition-colors duration-300 ease-in-out" />
            </button>
          </div>
          <span
            data-ui="disclaimer"
            className="font-poppinsGoogle text-xs mt-4 mb-3 text-center"
          >
            ChatGPT can make mistakes. Please consider verifying important
            information.
          </span>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 max-w-md shadow-lg text-center transition-all duration-300 ease-out pointer-events-auto">
            <h2 className="text-xl font-semibold mb-4 text-black">More Info</h2>
            <p className="text-gray-700 mb-6">
              For more details on these features, visit the official OpenAI
              website.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-purple-600 hover:bg-purple-900 text-white px-4 py-2 rounded transition duration-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
