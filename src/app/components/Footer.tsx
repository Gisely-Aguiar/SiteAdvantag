import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <img 
                src="/logo/Advantag_trasparente.png"
                alt="VisionAir Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="font-bold text-lg text-white">ADVANTAG</div>
                <div className="text-xs text-gray-400 -mt-1">Tecnologia e Serviços</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              Fabricante nacional de TAGs RFID com produção própria e know-how técnico aplicado.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-cyan-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
              <li><Link to="#quem-somos" className="hover:text-cyan-400 transition">Quem Somos</Link></li>
              <li><Link to="#rfid" className="hover:text-cyan-400 transition">RFID</Link></li>
              <li><Link to="#cab" className="hover:text-cyan-400 transition">CAB</Link></li>
              <li><Link to="/catalogo" className="hover:text-cyan-400 transition">Catálogo</Link></li>
              <li><Link to="#contato" className="hover:text-cyan-400 transition">Contato</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#solucoes" className="hover:text-cyan-400 transition">Soluções RFID</Link></li>
              <li><Link to="#pd" className="hover:text-cyan-400 transition">P&D</Link></li>
              <li><Link to="#personalizacao" className="hover:text-cyan-400 transition">Personalização</Link></li>
              <li><Link to="#consultoria" className="hover:text-cyan-400 transition">Consultoria</Link></li>
              <li><Link to="#cab" className="hover:text-cyan-400 transition">Equipamentos CAB</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                <span>São Paulo - SP<br />Brasil</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+55 11 4301-0636</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>contato@advantag.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2025 Advantag Tecnologia e Serviços Ltda. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-400 transition">Política de Privacidade</a>
              <a href="#" className="hover:text-cyan-400 transition">Termos de Uso</a>
              <a href="#" className="hover:text-cyan-400 transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
