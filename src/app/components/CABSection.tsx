import { Wrench } from "lucide-react";

const cabProducts = [
  {
    name: "Catálogo de Modelos",
    image: "https://images.unsplash.com/photo-1630327722923-5ebd594ddda9?w=600",
    description: "Conheça nossa linha completa de impressoras CAB para diferentes necessidades e volumes de produção"
  },
  {
    name: "Manutenção Preventiva",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Serviço especializado para manter seu equipamento em perfeito estado, evitando paradas não programadas",
    isService: true
  },
  {
    name: "Reparos por Danos",
    image: "https://media.istockphoto.com/id/1156204551/pt/foto/a-man-breaks-a-computer-using-locksmith-tools.jpg?s=1024x1024&w=is&k=20&c=5IPNPpmhQGEo_MrWe95Om2KNv5-o57x7n11cxG4bI0I=",
    description: "Reparo técnico especializado para danos acidentais ou desgaste avançado do equipamento"
  },
  {
    name: "Peças Originais",
    image: "https://plus.unsplash.com/premium_photo-1681426666763-ed28d7310edf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fornecimento de peças originais CAB com garantia e procedência certificada",
    isService: true
  }
];

export function CABSection() {
  return (
    <section id="cab" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Equipamentos CAB
          </h2>
          <p className="text-xl text-gray-300">
            Impressoras industriais de alto desempenho e suporte técnico completo
          </p>
          <a
            href="/cab_identification_de_productos_es.pdf"
            download
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition font-medium"
          >
            Baixar Catálogo
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cabProducts.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition group"
            >
              <div className="aspect-square bg-gray-700 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
                {product.isService && (
                  <div className="absolute top-4 right-4 bg-cyan-500 p-3 rounded-full">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Precisa de suporte técnico ou está procurando equipamentos?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Nossa equipe está pronta para ajudar você a escolher a melhor solução
          </p>
          <a
            href="https://wa.me/551143010636?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20da%20Advantag%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition font-medium"
          >
            Fale com Especialista
          </a>

          
        </div>
      </div>
    </section>
  );
}
