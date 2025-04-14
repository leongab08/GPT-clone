import "./App.css";
import React from "react";

// Logos
import GptSvg from "./assets/chatgpt.svg";
//Icons
import { CiChat1 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

function App() {
  return (
    <div data-ui="App" className="min-h-screen flex">
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
          className="p-10 h-3/10 border-t border-borderWhite flex flex-col gap-5 items-start"
        >
          <div data-ui="Home-btn" className="flex gap-4 items-center text-md">
            <IoMdHome className="text-purple-600 text-4xl" />
            Home
          </div>
          <div
            data-ui="Saved-btn"
            className="flex gap-[19px] items-center text-md"
          >
            <FaBookmark className="text-purple-600 text-3xl ml-[3px]" />
            Saved
          </div>
          <div
            data-ui="Suscription-btn"
            className="flex gap-4 items-center text-md"
          >
            <IoIosRocket className="text-purple-600 text-4xl" />
            Upgradge to Pro
          </div>
        </div>
      </div>
      <div data-ui="main" className="flex-9">
        <div
          data-ui="chat-box"
          className="h-9/11 border-b border-borderWhite px-[50px] pt-[50px] flex flex-col gap-9"
        >
          <div
            data-ui="user-prompt"
            className="flex gap-4 w-fit border-2 rounded-xl self-end items-center p-2.5 max-w-9/10"
          >
            <p
              data-ui="user-prompt-text"
              className="text-[14px] text-left leading-[1.75] p-2"
            >
              Hola ChatGPT, necesito tu ayuda para integrar correctamente la API
              de OpenAIHola ChatGPT
            </p>
            <FaRegUserCircle className="w-[50px] h-[50px] text-purple-600 shrink-0" />
          </div>
          <div
            data-ui="Chat-answer"
            className="flex gap-4 w-fit border-2 rounded-xl self-start items-center p-2.5 max-w-9/10"
          >
            <img src={GptSvg} className="w-[50px] h-[50px] object-cover shrink-0"/>

            <p
              data-ui="user-prompt-text"
              className="text-[14px] text-left leading-[1.75] p-2"
            >
              Hola ChatGPT, necesito tu ayuda para integrar correctamente la API
              de OpenAI en una aplicación web que estoy desarrollando. Estoy
              usando Node.js con Express en el backend y quiero entender cómo
              autenticarme de forma segura, cómo estructurar correctamente las
              solicitudes POST al endpoint /v1/chat/completions, y cuál es la
              mejor manera de mantener una conversación con contexto usando el
              historial de mensajes. También me gustaría saber las diferencias
              entre gpt-3.5-turbo y gpt-4, tanto en capacidad como en costos, y
              cómo calcular y optimizar el uso de tokens para reducir gastos.
              ¿Puedes explicarme cómo usar el parámetro stream para recibir
              respuestas en tiempo real y cómo implementar esa funcionalidad?
              Además, quiero incluir un mensaje de sistema al inicio de cada
              sesión para establecer el rol o personalidad del modelo. Por
              favor, incluye ejemplos de código, recomendaciones de buenas
              prácticas, advertencias de seguridad sobre el uso de la API key, y
              herramientas como Postman o curl para hacer pruebas. Finalmente,
              dime cómo proteger mi clave de API en producción y evitar que sea
              visible desde el frontend.
            </p>
          </div>
        </div>
        <div data-ui="chat-footer" className="h-2/11"></div>
      </div>
    </div>
  );
}

export default App;
