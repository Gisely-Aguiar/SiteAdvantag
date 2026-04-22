import { useParams, Link } from "react-router";
import { Download, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";

// Mock product data
const productData: Record<string, any> = {
  "tag-bopp": {
    name: "TAG BOPP",
    category: "TAG Comum",
    image: "/tags/bopp.jfif",
    shortDescription: "TAG RFID em material BOPP para aplicações gerais com excelente custo-benefício. Ideal para varejo, inventário e controle de estoque.",
    specs: {
      frequency: "UHF (860-960 MHz)",
      material: "BOPP (Polipropileno Biorientado)",
      dimensions: "95 x 25 mm",
      chip: "Impinj M730 / Alien H3",
      readRange: "Até 8 metros",
      temperature: "-20°C a +60°C",
      adhesive: "Acrílico permanente",
      fixation: "Adesivo"
    },
    applications: [
      "Controle de inventário",
      "Gestão de estoque",
      "Varejo e etiquetação",
      "Rastreamento de produtos",
      "Controle de ativos"
    ],
    benefits: [
      "Excelente custo-benefício",
      "Alta taxa de leitura",
      "Fácil aplicação",
      "Compatível com todos os leitores UHF",
      "Produção nacional"
    ],
    
  },
  "tag-couchê": {
    name: "TAG Couchê",
    category: "TAG Comum",
    image: "/tags/couche.jfif",
    shortDescription: "TAG RFID em papel couchê de alta qualidade para impressão térmica e etiquetação profissional.",
    specs: {
      frequency: "UHF (860-960 MHz)",
      material: "Papel Couchê",
      dimensions: "100 x 30 mm",
      chip: "Impinj M730",
      readRange: "Até 7 metros",
      temperature: "-10°C a +50°C",
      adhesive: "Acrílico removível ou permanente",
      fixation: "Adesivo"
    },
    applications: [
      "Etiquetas para documentos",
      "Identificação de arquivos",
      "Controle patrimonial",
      "Gestão de bibliotecas",
      "Rastreamento de caixas"
    ],
    benefits: [
      "Excelente para impressão térmica",
      "Superfície lisa e uniforme",
      "Boa leitura em diversos ângulos",
      "Fácil personalização",
      "Custo acessível"
    ],
    
  },
  "tag-nylon": {
    name: "TAG Nylon",
    category: "TAG Comum",
    image: "/img/nylon.jfif",
    shortDescription: "TAG RFID em nylon resistente, ideal para lavanderia industrial com alta durabilidade em processos de lavagem.",
    specs: {
      frequency: "UHF (860-960 MHz)",
      material: "Nylon texturizado",
      dimensions: "25 x 25 mm",
      chip: "Impinj M750",
      readRange: "Até 3 metros",
      temperature: "-20°C a +90°C",
      washCycles: "Mais de 200 ciclos",
      fixation: "Costura ou adesivo"
    },
    applications: [
      "Lavanderia industrial",
      "Uniformes corporativos",
      "Roupas hospitalares",
      "Hotelaria",
      "Gestão de enxovais"
    ],
    benefits: [
      "Resiste a múltiplos ciclos de lavagem",
      "Suporta altas temperaturas",
      "Flexível e confortável",
      "Não danifica os tecidos",
      "Longa vida útil"
    ],
    
  },
  "tag-jóias": {
    name: "TAG Jóias",
    category: "TAG Comum",
    image: "/img/joias.jfif",
    shortDescription: "TAG RFID compacta e discreta desenvolvida especialmente para joalheria e artigos de luxo.",
    specs: {
      frequency: "UHF (860-960 MHz)",
      material: "Papel especial",
      dimensions: "15 x 10 mm (micro)",
      chip: "NXP UCODE 8",
      readRange: "Até 4 metros",
      temperature: "-10°C a +50°C",
      adhesive: "Adesivo delicado",
      fixation: "Adesivo"
    },
    applications: [
      "Joalheria e relojoaria",
      "Artigos de luxo",
      "Controle de estoque premium",
      "Rastreamento de itens valiosos",
      "Prevenção de furtos"
    ],
    benefits: [
      "Tamanho ultra compacto",
      "Design discreto",
      "Não interfere na apresentação",
      "Alta segurança",
      "Remoção fácil após venda"
    ],
    
  },
  "tag-mármore": {
    name: "TAG Mármore",
    category: "TAG Especial",
    image: "/tags/marmore.jfif",
    shortDescription: "TAG RFID desenvolvida especialmente para o setor de rochas ornamentais, resistente a ambientes agressivos.",
    specs: {
      frequency: "UHF (860-960 MHz)",
      material: "Compósito resistente",
      dimensions: "80 x 40 x 8 mm",
      chip: "Impinj M750",
      readRange: "Até 6 metros",
      temperature: "-30°C a +120°C",
      resistance: "IP68 - Totalmente selada",
      fixation: "Furação ou adesivo industrial"
    },
    applications: [
      "Rastreamento de chapas de mármore",
      "Gestão de estoque de granito",
      "Indústria de rochas ornamentais",
      "Controle de produção",
      "Logística de materiais pesados"
    ],
    benefits: [
      "Extrema durabilidade",
      "Resistente a água e poeira",
      "Suporta ambientes industriais",
      "Fixação segura",
      "Alta resistência mecânica"
    ],
    
  },
  "tag-lavanderia": {
    name: "TAG Lavanderia",
    category: "TAG Especial",
    image: "/tags/lavanderia.jfif",
    shortDescription: "TAG RFID profissional em silicone para lavanderia industrial com resistência superior a 300 ciclos de lavagem.",
    specs: {
      frequency: "UHF (860-960 MHz)",
      material: "Silicone médico",
      dimensions: "30 x 15 x 3 mm",
      chip: "Impinj M750",
      readRange: "Até 4 metros",
      temperature: "-40°C a +120°C",
      washCycles: "Mais de 300 ciclos",
      fixation: "Costura reforçada"
    },
    applications: [
      "Lavanderia hospitalar",
      "Hotelaria profissional",
      "Uniformes industriais",
      "Gestão de enxovais",
      "Rastreamento de roupas"
    ],
    benefits: [
      "Ultra resistente a lavagens",
      "Suporta esterilização",
      "100% atóxico",
      "Não deforma",
      "Vida útil prolongada"
    ],
    
  },
  "tag-reutilizável": {
    name: "TAG Reutilizável",
    category: "TAG Especial",
    image: "/tags/reutilizavel.jfif",
    shortDescription: "TAG RFID reutilizável em PVC durável para aplicações que exigem múltiplos usos e fácil remoção.",
    specs: {
      frequency: "UHF (860-960 MHz)",
      material: "PVC rígido",
      dimensions: "85 x 54 mm (formato cartão)",
      chip: "NXP UCODE 8",
      readRange: "Até 7 metros",
      temperature: "-20°C a +70°C",
      durability: "Mais de 5 anos",
      fixation: "Porta-cartão ou cordão"
    },
    applications: [
      "Logística reversa",
      "Controle de acesso",
      "Identificação de colaboradores",
      "Containers e paletes retornáveis",
      "Gestão de ativos móveis"
    ],
    benefits: [
      "Múltiplos usos",
      "Fácil limpeza",
      "Alta durabilidade",
      "Personalização completa",
      "Sustentável"
    ],
    
  },
  "flagtag": {
    name: "FlagTag",
    category: "TAG Especial",
    image: "/tags/flagtag.jfif",
    shortDescription: "TAG RFID tipo bandeira para identificação de cabos, tubulações e estruturas com fácil visualização.",
    specs: {
      frequency: "UHF (860-960 MHz)",
      material: "Nylon reforçado",
      dimensions: "150 x 20 mm",
      chip: "Impinj M730",
      readRange: "Até 5 metros",
      temperature: "-30°C a +85°C",
      resistance: "IP65",
      fixation: "Abraçadeira ou lacre"
    },
    applications: [
      "Identificação de cabos",
      "Tubulações industriais",
      "Redes de telecomunicações",
      "Instalações elétricas",
      "Manutenção industrial"
    ],
    benefits: [
      "Fácil identificação visual",
      "Instalação rápida",
      "Resistente a intempéries",
      "Área para escrita manual",
      "Versátil"
    ],
    
  },
  "on-metal": {
    name: "On-Metal",
    category: "Alta Resistência",
    image: "/tags/onmetal.jfif",
    shortDescription: "TAG RFID especialmente desenvolvida para aplicação em superfícies metálicas. Resistente e durável para ambientes industriais.",
    specs: {
      frequency: "UHF (860-960 MHz)",
      material: "ABS + Espuma isolante",
      dimensions: "50 x 50 x 5 mm",
      chip: "Impinj M750",
      readRange: "Até 5 metros em metal",
      temperature: "-40°C a +85°C",
      resistance: "IP67 - À prova d'água",
      fixation: "Adesivo 3M VHB"
    },
    applications: [
      "Rastreamento de ativos metálicos",
      "Ferramentas industriais",
      "Equipamentos e máquinas",
      "Cilindros de gás",
      "Estruturas metálicas"
    ],
    benefits: [
      "Funciona perfeitamente em metal",
      "Alta resistência mecânica",
      "À prova d'água (IP67)",
      "Suporta ambientes agressivos",
      "Longa durabilidade"
    ],
    
  },
  "alta-temperatura": {
    name: "Alta Temperatura",
    category: "Alta Resistência",
    image: "/tags/hardtag.jfif",
    shortDescription: "TAG RFID cerâmica para aplicações em altíssimas temperaturas, ideal para indústria automotiva e siderúrgica.",
    specs: {
      frequency: "UHF (860-960 MHz)",
      material: "Cerâmica de alta performance",
      dimensions: "40 x 20 x 10 mm",
      chip: "Impinj M750 HT",
      readRange: "Até 4 metros",
      temperature: "-40°C a +250°C",
      resistance: "IP68 + Resistente a choques",
      fixation: "Parafuso ou rebite"
    },
    applications: [
      "Indústria automotiva",
      "Processos de pintura",
      "Tratamento térmico",
      "Rastreamento de peças em fornos",
      "Ambiente de fundição"
    ],
    benefits: [
      "Suporta temperaturas extremas",
      "Resistente a produtos químicos",
      "Durabilidade excepcional",
      "Não deforma com calor",
      "Alta confiabilidade"
    ],
    
  },
  "hardtag": {
    name: "HardTag",
    category: "Alta Resistência",
    image: "/tags/hardtag.jfif",
    shortDescription: "TAG RFID ultra resistente em policarbonato para ambientes extremamente agressivos e aplicações críticas.",
    specs: {
      frequency: "UHF (860-960 MHz)",
      material: "Policarbonato blindado",
      dimensions: "60 x 40 x 8 mm",
      chip: "Impinj M750",
      readRange: "Até 6 metros",
      temperature: "-50°C a +120°C",
      resistance: "IP69K - Máxima proteção",
      fixation: "Parafuso, rebite ou epóxi"
    },
    applications: [
      "Ambientes offshore",
      "Equipamentos pesados",
      "Mineração",
      "Indústria química",
      "Aplicações críticas"
    ],
    benefits: [
      "Resistência extrema",
      "Totalmente selada",
      "Suporta impactos severos",
      "Resistente a químicos agressivos",
      "Máxima confiabilidade"
    ],
    
  },
  "tag-híbrida": {
    name: "TAG Híbrida",
    category: "Alta Resistência",
    image: "/tags/hibrida.jfif",
    shortDescription: "TAG RFID híbrida com múltiplas tecnologias (UHF + NFC) para aplicações que exigem flexibilidade.",
    specs: {
      frequency: "UHF (860-960 MHz) + NFC (13.56 MHz)",
      material: "Multi-camadas",
      dimensions: "80 x 50 mm",
      chip: "Impinj M750 + NXP NTAG",
      readRange: "Até 8m (UHF) / 10cm (NFC)",
      temperature: "-30°C a +85°C",
      resistance: "IP67",
      fixation: "Adesivo industrial"
    },
    applications: [
      "Autenticação de produtos",
      "Rastreabilidade completa",
      "Gestão de ativos premium",
      "Controle de acesso duplo",
      "Marketing interativo"
    ],
    benefits: [
      "Dupla tecnologia",
      "Versatilidade máxima",
      "Segurança aumentada",
      "Interação com smartphones",
      "Rastreamento e autenticação"
    ],
    
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = id ? productData[id] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Produto não encontrado
          </h1>
          <Link
            to="/catalogo"
            className="text-red-600 hover:text-red-700 font-medium"
          >
            Voltar ao catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-red-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/catalogo" className="text-gray-600 hover:text-red-600">Catálogo</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Images */}
          <div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
           
          </div>

          {/* Info */}
          <div>
            <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-3">
              {product.category}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contato"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition font-medium text-center"
              >
                Solicitar Orçamento
              </a>
              <button className="flex-1 bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg transition font-medium flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Benefícios
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">
                Aplicações
              </h3>
              <ul className="space-y-2">
                {product.applications.map((app: string, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Technical specs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">
              Especificações Técnicas
            </h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="border-b border-gray-200 pb-4">
                  <dt className="text-sm font-medium text-gray-500 mb-1 uppercase">
                    {key === "frequency" && "Frequência"}
                    {key === "material" && "Material"}
                    {key === "dimensions" && "Dimensões"}
                    {key === "chip" && "Chip RFID"}
                    {key === "readRange" && "Alcance de Leitura"}
                    {key === "temperature" && "Temperatura"}
                    {key === "adhesive" && "Adesivo"}
                    {key === "resistance" && "Resistência"}
                    {key === "fixation" && "Fixação"}
                    {key === "washCycles" && "Ciclos de Lavagem"}
                    {key === "durability" && "Durabilidade"}
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {value as string}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* CTA */}
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Interessado neste produto?
          </h2>
          <p className="text-xl mb-6 text-white/90">
            Nossa equipe comercial está pronta para ajudar
          </p>
          <a
            href="https://wa.me/551143010636?text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20da%20Advantag%20e%20gostaria%20de%20falar%20com%20o%20comercial."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition font-medium cursor-pointer"
          >
            Fale com o Comercial
          </a>
        </div>
      </div>
    </div>
  );
}