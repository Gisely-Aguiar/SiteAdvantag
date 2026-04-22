import { Cpu, Tag, Settings, CheckCircle } from "lucide-react";

export function CustomizationSection() {
  return (
    <section id="personalizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tags RFID Personalizadas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desenvolvemos etiquetas RFID sob medida para atender às necessidades específicas do seu negócio, garantindo máxima performance e integração.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition">
            <Tag className="w-10 h-10 mx-auto mb-4 text-teal-500" />
            <h3 className="font-semibold mb-2">Formato Personalizado</h3>
            <p className="text-sm text-gray-600">
              Desenvolvemos tags em diferentes tamanhos e formatos conforme sua aplicação.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition">
            <Cpu className="w-10 h-10 mx-auto mb-4 text-teal-500" />
            <h3 className="font-semibold mb-2">Alta Performance</h3>
            <p className="text-sm text-gray-600">
              Otimização de leitura para ambientes industriais, logísticos e varejo.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition">
            <Settings className="w-10 h-10 mx-auto mb-4 text-teal-500" />
            <h3 className="font-semibold mb-2">Integração Completa</h3>
            <p className="text-sm text-gray-600">
              Compatível com sistemas já existentes e infraestrutura RFID.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition">
            <CheckCircle className="w-10 h-10 mx-auto mb-4 text-teal-500" />
            <h3 className="font-semibold mb-2">Qualidade Garantida</h3>
            <p className="text-sm text-gray-600">
              Tags testadas e validadas para garantir durabilidade e eficiência.
            </p>
          </div>

        </div>

        {/* Texto complementar */}
        <div className="bg-gray-100 rounded-xl p-8 text-center mb-10">
          <p className="text-gray-700 max-w-3xl mx-auto">
            Cada empresa possui necessidades únicas. Por isso, analisamos o seu cenário para desenvolver 
            soluções RFID específicas, considerando ambiente, tipo de material, distância de leitura e 
            volume de operação.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#consultoria"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg transition font-medium"
          >
            Solicitar Personalização
          </a>
        </div>

      </div>
    </section>
  );
}