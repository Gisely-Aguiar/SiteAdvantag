import { Link } from "react-router";
import { Menu, Globe, Phone } from "lucide-react";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <img 
                src="/logo/Advantag_trasparente.png"
                alt="VisionAir Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="font-bold text-xl text-gray-900">ADVANTAG</div>
                <div className="text-xs text-gray-600 -mt-1">Tecnologia e Serviços</div>
              </div>
            </div>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <Link to="/" className="hover:text-red-600 transition">Home</Link>
            <Link to="#quem-somos" className="hover:text-red-600 transition">Quem Somos</Link>
            <Link to="#rfid" className="hover:text-red-600 transition">RFID</Link>
            <Link to="#cab" className="hover:text-red-600 transition">CAB</Link>
            <Link to="#solucoes" className="hover:text-red-600 transition">Soluções</Link>
            <Link to="#personalizacao" className="hover:text-red-600 transition">Personalização</Link>
            <Link to="#consultoria" className="hover:text-red-600 transition">Consultoria</Link>
            <Link to="#contato" className="hover:text-red-600 transition">Contato</Link>
          </nav>

          {/* Social + CTA */}
            <div className="hidden lg:flex items-center gap-4">

              {/* Redes sociais */}
              <div className="flex items-center gap-3 text-gray-600">
                <a 
                  href="https://web.facebook.com/AdvantagRFID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a 
                  href="https://www.instagram.com/advantagrfid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a 
                  href="https://www.linkedin.com/company/advantag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a 
                  href="https://www.youtube.com/@advantagrfid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

              {/* Botão */}
              <a
                href="#contato"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg transition font-medium"
              >
                Fale com o Comercial
              </a>
            </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4 flex flex-col gap-3">
            <Link to="/" className="hover:text-red-600 transition">Home</Link>
            <Link to="#quem-somos" className="hover:text-red-600 transition">Quem Somos</Link>
            <Link to="#rfid" className="hover:text-red-600 transition">RFID</Link>
            <Link to="#cab" className="hover:text-red-600 transition">CAB</Link>
            <Link to="#solucoes" className="hover:text-red-600 transition">Soluções</Link>
            <Link to="#personalizacao" className="hover:text-red-600 transition">Personalização</Link>
            <Link to="#consultoria" className="hover:text-red-600 transition">Consultoria</Link>
            <Link to="#contato" className="hover:text-red-600 transition">Contato</Link>
            <a
              href="#contato"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg transition text-center"
            >
              Fale com o Comercial
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
