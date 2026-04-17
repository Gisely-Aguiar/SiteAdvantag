import { useState } from "react";
import { Link } from "react-router";
import { Filter, Search } from "lucide-react";

const products = [
  // TAGs Comuns
  { id: "tag-bopp", name: "TAG BOPP", category: "comum", material: "BOPP", application: "Varejo e inventário", image: "https://images.unsplash.com/photo-1593955654387-9dcbc8ef8071?w=400" },
  { id: "tag-couchê", name: "TAG Couchê", category: "comum", material: "Couchê", application: "Documentos e etiquetas", image: "https://images.unsplash.com/photo-1704175970187-1f7eaaa30312?w=400" },
  { id: "tag-nylon", name: "TAG Nylon", category: "comum", material: "Nylon", application: "Lavanderia industrial", image: "https://images.unsplash.com/photo-1765021690889-e49ba794c429?w=400" },
  { id: "tag-jóias", name: "TAG Jóias", category: "comum", material: "Especial", application: "Joalheria e luxo", image: "https://images.unsplash.com/photo-1774110073583-2475ab5ed8b2?w=400" },
  
  // TAGs Especiais
  { id: "tag-mármore", name: "TAG Mármore", category: "especial", material: "Compósito", application: "Setor de rochas", image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=400" },
  { id: "tag-lavanderia", name: "TAG Lavanderia", category: "especial", material: "Silicone", application: "Lavanderia profissional", image: "https://images.unsplash.com/photo-1765021690889-e49ba794c429?w=400" },
  { id: "tag-reutilizável", name: "TAG Reutilizável", category: "especial", material: "PVC", application: "Logística reversa", image: "https://images.unsplash.com/photo-1593955654387-9dcbc8ef8071?w=400" },
  { id: "flagtag", name: "FlagTag", category: "especial", material: "Nylon", application: "Identificação de cabos", image: "https://images.unsplash.com/photo-1704175970187-1f7eaaa30312?w=400" },
  
  // TAGs de Alta Resistência
  { id: "on-metal", name: "On-Metal", category: "alta-resistencia", material: "ABS", application: "Ativos metálicos", image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=400" },
  { id: "alta-temperatura", name: "Alta Temperatura", category: "alta-resistencia", material: "Cerâmica", application: "Indústria automotiva", image: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?w=400" },
  { id: "hardtag", name: "HardTag", category: "alta-resistencia", material: "Policarbonato", application: "Ambientes agressivos", image: "https://images.unsplash.com/photo-1764185800646-f75f7e16e465?w=400" },
  { id: "tag-híbrida", name: "TAG Híbrida", category: "alta-resistencia", material: "Multi-layer", application: "Múltiplas tecnologias", image: "https://images.unsplash.com/photo-1593955654387-9dcbc8ef8071?w=400" },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "comum", label: "TAGs Comuns" },
  { id: "especial", label: "TAGs Especiais" },
  { id: "alta-resistencia", label: "Alta Resistência" },
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.application.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Catálogo de TAGs RFID
          </h1>
          <p className="text-xl text-white/90">
            Explore nossa linha completa de produtos
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              <Filter className="w-5 h-5 text-gray-600 mt-1.5" />
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition ${
                    selectedCategory === category.id
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Link
              key={product.id}
              to={`/produto/${product.id}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>
              <div className="p-4">
                <div className="inline-block px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 mb-2">
                  {product.material}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {product.application}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              Nenhum produto encontrado
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Desenvolvemos TAGs customizadas para aplicações específicas
          </p>
          <a
            href="#contato"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition font-medium"
          >
            Fale com Especialista
          </a>
        </div>
      </div>
    </div>
  );
}