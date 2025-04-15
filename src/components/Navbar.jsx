import { Home, Heart, MessageCircle, User, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', icon: <Home />, label: 'Home' },
  { to: '/cartinhas', icon: <Heart />, label: 'Cartinhas' },
  { to: '/mensagem', icon: <MessageCircle />, label: 'Mensagem' },
  { to: '/nosso-cantinho', icon: <User />, label: 'Cantinho' },
  { to: '/configuracoes', icon: <Settings />, label: 'Configurações' },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 shadow-md z-50">
      {links.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${
              isActive ? 'text-pink-500' : 'text-gray-500'
            }`
          }
        >
          {icon}
          <span className="text-xs">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}