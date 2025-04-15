import { useState } from "react";
import { Send } from "lucide-react";

export default function Mensagem() {
  const [mensagens, setMensagens] = useState([
    { autor: "Ela", texto: "Oi meu amor 💖", data: "06/04/2025 09:30" },
    { autor: "Você", texto: "Oi princesa 😍", data: "06/04/2025 09:32" },
  ]);

  const [novaMensagem, setNovaMensagem] = useState("");

  const enviarMensagem = () => {
    if (novaMensagem.trim() === "") return;

    const nova = {
      autor: "Você",
      texto: novaMensagem,
      data: new Date().toLocaleString("pt-BR"),
    };

    setMensagens([...mensagens, nova]);
    setNovaMensagem("");
  };

  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="text-xl font-semibold text-center mb-4">Mensagens 💬</h1>

      <div className="flex-1 overflow-y-auto space-y-3">
        {mensagens.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[75%] p-3 rounded-xl shadow ${
              msg.autor === "Você"
                ? "bg-blue-200 self-end ml-auto"
                : "bg-pink-200 self-start mr-auto"
            }`}
          >
            <p className="text-sm">{msg.texto}</p>
            <p className="text-xs text-gray-600 mt-1 text-right">{msg.data}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <input
          value={novaMensagem}
          onChange={(e) => setNovaMensagem(e.target.value)}
          className="flex-1 p-2 border rounded-xl shadow focus:outline-none"
          placeholder="Escreva uma mensagem..."
        />
        <button
          onClick={enviarMensagem}
          className="p-2 bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}