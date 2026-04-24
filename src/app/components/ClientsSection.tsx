const clients = [
  { name: "Suzano", logo: "/clientes/suzano.png" },
  { name: "APTIV", logo: "/clientes/aptiv.png" },
  { name: "Unilever", logo: "/clientes/unilever.png" },
  { name: "Coca-Cola", logo: "/clientes/coca-cola.png" },
  { name: "Siemens", logo: "/clientes/siemens.png" },
  { name: "FCA", logo: "/clientes/fca.png" },
  { name: "Renault", logo: "/clientes/renault.jpg" },
  { name: "Tech Import", logo: "/clientes/tech-import.png" },
  { name: "Promedon", logo: "/clientes/promedon.png" },
  { name: "Polesportivo", logo: "/clientes/polesportivo.png" },
  { name: "CS3", logo: "/clientes/cs3.png" },
];

export function ClientsSection() {
  // Divide os clientes em duas linhas
  const primeiraLinha = clients.slice(0, 6);
  const segundaLinha = clients.slice(6, 11);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Clientes
          </h2>
          <p className="text-lg text-gray-600">
            As empresas apresentadas representam parte dos clientes que confiam na Advantag em todo o Brasil.
          </p>
        </div>

        {/* Primeira linha com 6 clientes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
          {primeiraLinha.map((client, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-lg hover:border-cyan-400 transition group"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-lg flex items-center justify-center mb-2 overflow-hidden p-2">
                  <img 
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-500">{client.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Segunda linha com 5 clientes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {segundaLinha.map((client, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-lg hover:border-cyan-400 transition group"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-lg flex items-center justify-center mb-2 overflow-hidden p-2">
                  <img 
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-500">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}