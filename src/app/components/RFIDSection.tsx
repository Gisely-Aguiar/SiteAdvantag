import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const tagCategories = [
  {
    title: "TAGs Comuns",
    description: "TAGs para aplicações gerais com excelente custo-benefício",
    tags: [
      { name: "TAG BOPP", id: "tag-bopp", image: "/tags/bopp.jfif", app: "Varejo e inventário" },
      { name: "TAG Couchê", id: "tag-couchê", image: "/tags/couche.jfif", app: "Documentos e etiquetas" },
      { name: "TAG Nylon", id: "tag-nylon", image: "/tags/nylon.jfif", app: "Lavanderia industrial" },
      { name: "TAG Jóias", id: "tag-jóias", image: "/tags/joias.jfif", app: "Joalheria e luxo" }
    ]
  },
  {
    title: "TAGs Especiais",
    description: "Desenvolvidas para aplicações técnicas específicas",
    tags: [
      { name: "TAG Mármore", id: "tag-mármore", image: "/tags/marmore.jfif", app: "Setor de rochas" },
      { name: "TAG Lavanderia", id: "tag-lavanderia", image: "/tags/lavanderia.jfif", app: "Lavanderia profissional" },
      { name: "TAG Reutilizável", id: "tag-reutilizável", image: "/tags/reutilizavel.jfif", app: "Logística reversa" },
      { name: "FlagTag", id: "flagtag", image: "/tags/flagtag.jfif", app: "Identificação de cabos" }
    ]
  },
  {
    title: "TAGs de Alta Resistência",
    description: "Para ambientes extremos e aplicações críticas",
    tags: [
      { name: "On-Metal", id: "on-metal", image: "/tags/onmetal.jfif", app: "Ativos metálicos" },
      { name: "Alta Temperatura", id: "alta-temperatura", image: "/tags/hardtag.jfif", app: "Indústria automotiva" },
      { name: "HardTag", id: "hardtag", image: "/tags/hardtag.jfif", app: "Ambientes agressivos" },
      { name: "TAG Híbrida", id: "tag-híbrida", image: "/tags/hibrida.jfif", app: "Múltiplas tecnologias" }
    ]
  }
];

const upcomingProducts = [
  {
    name: "TAG para Pneus",
    status: "Em desenvolvimento",
    image: "https://images.unsplash.com/photo-1764185800646-f75f7e16e465?w=400",
    description: "Solução resistente para rastreamento de pneus"
  }
];

export function RFIDSection() {
  return (
    <section id="rfid" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            TAGs RFID
          </h2>
          <p className="text-xl text-gray-600">
            TAGs desenvolvidas para ambientes exigentes, com alta durabilidade e desempenho
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {tagCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.tags.map((tag, tagIndex) => (
                  <Link
                    key={tagIndex}
                    to={`/produto/${tag.id}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
                  >
                    <div className="aspect-square bg-gray-200 overflow-hidden">
                      <img
                        src={tag.image}
                        alt={tag.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition">
                        {tag.name}
                      </h4>
                      <p className="text-sm text-gray-600">{tag.app}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Upcoming - Layout destacado para 1 produto */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Próximos Lançamentos
              </h3>
              <p className="text-gray-600">Inovações em desenvolvimento</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl shadow-lg overflow-hidden text-white relative lg:col-span-2"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-square md:aspect-auto bg-black/20 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover opacity-60"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-3 w-fit">
                        {product.status}
                      </div>
                      <h4 className="font-semibold text-2xl mb-2">
                        {product.name}
                      </h4>
                      <p className="text-white/90 mb-4">{product.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="bg-white/20 px-3 py-1 rounded-full">
                          Lançamento em breve
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition font-medium"
          >
            Ver Catálogo Completo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}