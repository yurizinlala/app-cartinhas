import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function NossoCantinho() {
  const [momentos, setMomentos] = useState([
    {
      titulo: "Primeiro encontro 💞",
      descricao: "O dia que a gente se viu pela primeira vez e eu fiquei bobo(a) 😳",
      data: "14/02/2024",
    },
    {
      titulo: "Pedido de namoro 💍",
      descricao: "Aquele dia mágico que eu te pedi pra ser minha pra sempre.",
      data: "01/07/2024",
    },
  ]);

  const [novoTitulo, setNovoTitulo] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");

  const adicionarMomento = () => {
    if (novoTitulo.trim() === "" || novaDescricao.trim() === "") return;

    const novoMomento = {
      titulo: novoTitulo,
      descricao: novaDescricao,
      data: new Date().toLocaleDateString("pt-BR"),
    };

    setMomentos([novoMomento, ...momentos]);
    setNovoTitulo("");
    setNovaDescricao("");
  };

  return (
    <div className="p-4 flex flex-col h-full">
      <h1 className="text-xl font-bold text-center mb-4">Nosso Cantinho 🏠</h1>

      <div className="space-y-3 overflow-y-auto flex-1">
        {momentos.map((momento, index) => (
          <div key={index} className="bg-purple-100 rounded-xl p-3 shadow">
            <h2 className="font-semibold text-purple-800">{momento.titulo}</h2>
            <p className="text-sm mt-1">{momento.descricao}</p>
            <p className="text-xs text-gray-600 mt-1 text-right">{momento.data}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <input
          value={novoTitulo}
          onChange={(e) => setNovoTitulo(e.target.value)}
          className="w-full p-2 rounded-xl border shadow"
          placeholder="Título do momento"
        />
        <textarea
          value={novaDescricao}
          onChange={(e) => setNovaDescricao(e.target.value)}
          className="w-full p-2 rounded-xl border shadow"
          rows={2}
          placeholder="Descreva o momento..."
        />
        <button
          onClick={adicionarMomento}
          className="w-full bg-purple-500 text-white p-2 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-600 transition"
        >
          <PlusCircle size={18} /> Adicionar Momento
        </button>
      </div>
    </div>
  );
}
