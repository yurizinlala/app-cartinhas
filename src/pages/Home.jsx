import { useState } from 'react';
import { HeartHandshake, Smile, Frown, Meh } from 'lucide-react';

const sentimentos = [
  { emoji: <Smile />, texto: 'Feliz' },
  { emoji: <Frown />, texto: 'Triste' },
  { emoji: <HeartHandshake />, texto: 'Com saudade' },
  { emoji: <Meh />, texto: 'Indiferente' },
];

export default function Home() {
  const [sentimento, setSentimento] = useState(null);

  return (
    <div className="p-4 flex flex-col items-center text-center gap-4">
      <h1 className="text-2xl font-semibold">Olá, Maria Eduarda 💖</h1>

      <p className="text-base text-gray-600">Como você está se sentindo hoje?</p>

      <div className="grid grid-cols-2 gap-4">
        {sentimentos.map((s, index) => (
          <button
            key={index}
            className={`p-4 rounded-2xl border text-sm font-medium shadow transition-all ${
              sentimento === s.texto ? 'bg-pink-100 border-pink-400' : 'bg-white border-gray-300'
            }`}
            onClick={() => setSentimento(s.texto)}
          >
            <div className="flex flex-col items-center gap-1">
              {s.emoji}
              {s.texto}
            </div>
          </button>
        ))}
      </div>

      {sentimento && (
        <div className="mt-6 w-full bg-pink-50 p-4 rounded-xl shadow text-pink-700">
          <h2 className="text-lg font-bold mb-2">Sugestão pra você 💌</h2>
          <p>
            Já que você está se sentindo <strong>{sentimento.toLowerCase()}</strong>,
            que tal abrir a cartinha "{sentimento === 'Com saudade' ? 'Sinto sua falta' : sentimento}"?
          </p>
        </div>
      )}
    </div>
  );
}