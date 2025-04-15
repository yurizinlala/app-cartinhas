import { useState } from "react";

export default function Configuracoes() {
  const [tema, setTema] = useState("claro");
  const [notificacoes, setNotificacoes] = useState(true);

  const alternarTema = () => setTema(tema === "claro" ? "escuro" : "claro");
  const alternarNotificacoes = () => setNotificacoes(!notificacoes);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-bold text-center">Configurações ⚙️</h1>

      {/* Tema */}
      <div className="flex items-center justify-between p-3 bg-gray-100 rounded-xl">
        <span className="font-medium">Tema</span>
        <button
          onClick={alternarTema}
          className="bg-purple-500 text-white px-4 py-1 rounded-xl shadow hover:bg-purple-600"
        >
          {tema === "claro" ? "Claro 🌞" : "Escuro 🌙"}
        </button>
      </div>

      {/* Notificações */}
      <div className="flex items-center justify-between p-3 bg-gray-100 rounded-xl">
        <span className="font-medium">Notificações</span>
        <button
          onClick={alternarNotificacoes}
          className={`px-4 py-1 rounded-xl shadow ${
            notificacoes ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
          } text-white`}
        >
          {notificacoes ? "Ativadas ✅" : "Desativadas ❌"}
        </button>
      </div>

      {/* Sobre o App */}
      <div className="bg-gray-100 p-4 rounded-xl text-sm text-gray-600">
        <p>
          Criado com 💖 por Yuri para sua noiva Maria Eduarda. Feito pra guardar os momentos mais especiais e
          tornar o dia a dia mais amorzinho 🥰
        </p>
        <p className="text-xs mt-2 text-right">Versão 1.0.0</p>
      </div>
    </div>
  );
}
