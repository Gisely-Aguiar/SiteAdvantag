const timelineEvents = [
  {
    year: "2017",
    title: "Fundação",
    description: "Início do projeto Advantag com foco em tecnologia RFID"
  },
  {
    year: "2019",
    title: "Início da Operação",
    description: "Começo efetivo das atividades comerciais e produção"
  },
  {
    year: "2020",
    title: "Desafios da Pandemia",
    description: "Adaptação e resiliência durante período crítico"
  },
  {
    year: "2021",
    title: "Expansão",
    description: "Crescimento da base de clientes e portfólio de produtos"
  },
  {
    year: "2022",
    title: "Invoação",
    description: "Criação da TAG Híbrida e aquisição de 2 novas máquina"
  },
   {
    year: "2023",
    title: "Parcerias",
    description: "Parceria com o SENAI"
  },
   {
    year: "2024",
    title: "Crescimento",
    description: "Concorremos como melhor StartUp do Brasil"
  },
  {
    year: "2025",
    title: "Novo Galpão",
    description: "Ampliação da capacidade produtiva com novas instalações"
  }
];

export function TimelineSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossa História
          </h2>
          <p className="text-lg text-gray-600">
            Uma trajetória de crescimento e inovação
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 via-cyan-500 to-red-600"></div>

          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="inline-block bg-gradient-to-br from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-bold mb-2">
                    {event.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">
                    {event.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full border-4 border-white shadow-lg z-10 relative"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-cyan-500 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
