import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const applications = {
  logistica: [
    {
      title: "Rastreamento de Paletes",
      description: "Controle total de movimentação em centros de distribuição",
      image: "https://wordpress-cms-revista-prod-assets.quero.space/uploads/2025/01/logistica-1024x576.jpg"
    },
    {
      title: "Gestão de Inventário",
      description: "Inventário em tempo real com 99% de precisão",
      image: "https://images.unsplash.com/photo-1764795849885-e226e3cabe87?w=600"
    },
    {
      title: "Controle de Expedição",
      description: "Redução de erros e agilidade no processo",
      image: "https://images.unsplash.com/photo-1768796372882-8b67936af681?w=600"
    }
  ],
  industria: [
    {
      title: "Rastreamento de Ativos",
      description: "Localização e histórico de equipamentos industriais",
      image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=600"
    },
    {
      title: "Controle de Produção",
      description: "Monitoramento de WIP e produtividade",
      image: "https://images.unsplash.com/photo-1764185800646-f75f7e16e465?w=600"
    },
    {
      title: "Gestão de Ferramentas",
      description: "Controle de ferramental e redução de perdas",
      image: "https://images.unsplash.com/photo-1752170080635-db168448f85d?w=600"
    }
  ],
  florestal: [
    {
      title: "Rastreamento de Toras",
      description: "Controle desde a floresta até a indústria",
      image: "https://images.unsplash.com/photo-1513512995101-b6395de758b0?w=600"
    },
    {
      title: " Almoxarifado de peças",
      description: "Controle de estoque de peças para reposição de máquinas, em pontos estratégicos e isolados",
      image: "https://plus.unsplash.com/premium_photo-1661814320476-721abd8135a0?q=80&w=901&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Viveiro 4.0",
      description: "Rastrear e controlar o processo produtivo de mudas",
      image: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
};

export function ApplicationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Aplicações RFID
          </h2>
          <p className="text-xl text-gray-600">
            Quem está usando RFID e como estão usando
          </p>
        </div>

        <Tabs defaultValue="logistica" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="logistica">Logística</TabsTrigger>
            <TabsTrigger value="industria">Indústria</TabsTrigger>
            <TabsTrigger value="florestal">Florestal</TabsTrigger>
          </TabsList>

          {Object.entries(applications).map(([key, apps]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {apps.map((app, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition group"
                  >
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition">
                        {app.title}
                      </h3>
                      <p className="text-gray-600">
                        {app.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <a
            href="#contato"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition font-medium"
          >
            Fale Sobre Seu Projeto
          </a>
        </div>
      </div>
    </section>
  );
}
