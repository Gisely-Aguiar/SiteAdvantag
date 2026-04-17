import { Link } from "react-router";
import { Tag, FlaskConical, Printer, Sticker, Sparkles, Users } from "lucide-react";

const services = [
  {
    icon: Tag,
    title: "Fabricação de TAGs RFID",
    description: "Produção própria de TAGs RFID para todas as aplicações",
    color: "from-red-600 to-red-700"
  },
  {
    icon: FlaskConical,
    title: "P&D de TAGs Especiais",
    description: "Desenvolvimento de TAGs customizadas para aplicações específicas",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Printer,
    title: "Equipamentos CAB",
    description: "Impressoras industriais CAB e suporte técnico completo",
    color: "from-red-600 to-red-700"
  },
  {
    icon: Sticker,
    title: "Etiquetas Especiais",
    description: "Etiquetas personalizadas para diferentes necessidades",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Sparkles,
    title: "Personalização RFID",
    description: "Personalização gráfica e de dados em TAGs RFID",
    color: "from-red-600 to-red-700"
  },
  {
    icon: Users,
    title: "Consultoria e Treinamento",
    description: "Capacitação técnica e consultoria em projetos RFID",
    color: "from-cyan-500 to-cyan-600"
  }
];

export function ServicesSection() {
  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-gray-600">
            Soluções completas em RFID, do produto à consultoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
              
              {/* Content */}
              <div className="relative p-8 text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {service.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition font-medium"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </div>
    </section>
  );
}
