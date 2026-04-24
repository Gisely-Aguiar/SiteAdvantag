const partners = [
  { 
    name: "SENAI", 
    description: "Parceria em inovação e tecnologia",
    logo: "/parceiros/senai.png"
  },
  { 
    name: "Colitag", 
    description: "Desenvolvimento empresarial",
    logo: "/parceiros/colitag.png"
  },
  { 
    name: "VisionAir", 
    description: "Soluções tecnológicas",
    logo: "/parceiros/visionair.png"
  },
  { 
    name: "YggDrasil", 
    description: "Integração de sistemas",
    logo: "/parceiros/yggdrasil.png"
  },
  { 
    name: "DotNova", 
    description: "Desenvolvimento de software",
    logo: "/parceiros/dotnova.png"
  },
  { 
    name: "4 Next", 
    description: "Desenvolvimento de software",
    logo: "/parceiros/4next.png"
  },
  { 
    name: "Ideia Solution", 
    description: "Desenvolvimento de software",
    logo: "/parceiros/ideia.png"
  },
];

function PartnerCard({ partner }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-cyan-400 transition group">
      <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-3 overflow-hidden p-2 border border-gray-200">
        <img 
          src={partner.logo}
          alt={partner.name}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="font-semibold text-gray-900 mb-1">
        {partner.name}
      </h3>

      <p className="text-xs text-gray-600">
        {partner.description}
      </p>
    </div>
  );
}

export function PartnersSection() {
  const firstRow = partners.slice(0, 4);
const secondRow = partners.slice(4);

return (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">

      {/* título */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Parceiros Estratégicos
        </h2>
        <p className="text-lg text-gray-600">
          A Advantag atua com parceiros estratégicos para ampliar sua atuação tecnológica
        </p>
      </div>

      {/* PRIMEIRA LINHA (4) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {firstRow.map((partner, index) => (
          <PartnerCard key={index} partner={partner} />
        ))}
      </div>

      {/* SEGUNDA LINHA (3 CENTRALIZADOS) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-4xl mx-auto">
        {secondRow.map((partner, index) => (
          <PartnerCard key={index} partner={partner} />
        ))}
      </div>

    </div>
  </section>
);
}