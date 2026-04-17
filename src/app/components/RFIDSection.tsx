import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const tagCategories = [
  {
    title: "TAGs Comuns",
    description: "TAGs para aplicações gerais com excelente custo-benefício",
    tags: [
      { name: "TAG BOPP", id: "tag-bopp", image: "https://www.aartgraf.com.br/media/catalog/product/cache/1/image/1028x1028/eb8d37da8cd435603d2090a66a95cf8c/e/t/etiqueta_50x30_mm_bopp.jpg", app: "Varejo e inventário" },
      { name: "TAG Couchê", id: "tag-couchê", image: "https://http2.mlstatic.com/D_Q_NP_878023-MLA95241127222_102025-O.webp", app: "Documentos e etiquetas" },
      { name: "TAG Nylon", id: "tag-nylon", image: "https://m.media-amazon.com/images/I/71IVcvdS+dL.jpg", app: "Lavanderia industrial" },
      { name: "TAG Jóias", id: "tag-jóias", image: "https://down-br.img.susercontent.com/file/23cbdee574710e3a3019eec6b9dcdfd1", app: "Joalheria e luxo" }
    ]
  },
  {
    title: "TAGs Especiais",
    description: "Desenvolvidas para aplicações técnicas específicas",
    tags: [
      { name: "TAG Mármore", id: "tag-mármore", image: "https://content.store.gototags.com/media/catalog/product/cache/f105ae4d8826b0cb09a14ad6bcce45e8/3/0/3008274_midas_flagtag_white_wet_inlay_front.jpg", app: "Setor de rochas" },
      { name: "TAG Lavanderia", id: "tag-lavanderia", image: "https://ecdn6.globalso.com/upload/p/320/image_other/2024-03/65eeb6f2da40895211.jpg", app: "Lavanderia profissional" },
      { name: "TAG Reutilizável", id: "tag-reutilizável", image: "https://m.media-amazon.com/images/I/611xFpJb8zL._AC_UF894,1000_QL80_.jpg", app: "Logística reversa" },
      { name: "FlagTag", id: "flagtag", image: "https://static.ticimax.cloud/54431/uploads/urunresimleri/buyuk/rfid-uzun-menzilli-bayrak-etiketi-6a0730.jpg", app: "Identificação de cabos" }
    ]
  },
  {
    title: "TAGs de Alta Resistência",
    description: "Para ambientes extremos e aplicações críticas",
    tags: [
      { name: "On-Metal", id: "on-metal", image: "https://cdn11.bigcommerce.com/s-ka7ofex/images/stencil/original/products/5083/22106/Zebra_2.67x1_Z-Ultimate_4000T_On-Metal_Flag_RFID_Label_For_Industrial_and_Desktop_Printers__77731.1740595495.jpg?c=2", app: "Ativos metálicos" },
      { name: "Alta Temperatura", id: "alta-temperatura", image: "https://lh5.googleusercontent.com/proxy/Tp2x51xWYWaNNdneCuxNU7vpR522ZUUOH-HvddVvyYFvhEtXAZv4v7kt8rjyNVL7iLGpCJ2CjGNArGbxBk_mC16rSUJ-1pMTAW8HqFT9J2KxaJ3q6QLmX7xQDRc", app: "Indústria automotiva" },
      { name: "HardTag", id: "hardtag", image: "https://www.idplate.com/wp-content/uploads/Universal-hard-tag-m_0.png", app: "Ambientes agressivos" },
      { name: "TAG Híbrida", id: "tag-híbrida", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfB08mC44v1N9_0W2qUT2gGbyVkD_qUxa2iw&s", app: "Múltiplas tecnologias" }
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