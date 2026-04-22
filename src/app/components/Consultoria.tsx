import { Search, BarChart3, Cpu, CheckCircle } from "lucide-react";

export function ConsultingSection() {
  return (
    <section id="consultoria" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Consultoria Especializada em RFID
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Analisamos sua operação para identificar oportunidades e implementar soluções RFID com máxima eficiência.
          </p>
        </div>

        {/* Etapas (muito forte pra venda) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition">
            <Search className="w-10 h-10 mx-auto mb-4 text-red-600" />
            <h3 className="font-semibold mb-2">Diagnóstico</h3>
            <p className="text-sm text-gray-600">
              Analisamos processos, desafios e necessidades do seu negócio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition">
            <Cpu className="w-10 h-10 mx-auto mb-4 text-red-600" />
            <h3 className="font-semibold mb-2">Definição Técnica</h3>
            <p className="text-sm text-gray-600">
              Escolha das tags, leitores e arquitetura ideal para sua operação.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition">
            <BarChart3 className="w-10 h-10 mx-auto mb-4 text-red-600" />
            <h3 className="font-semibold mb-2">Planejamento</h3>
            <p className="text-sm text-gray-600">
              Estruturação da implementação com foco em eficiência e ROI.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition">
            <CheckCircle className="w-10 h-10 mx-auto mb-4 text-red-600" />
            <h3 className="font-semibold mb-2">Implementação</h3>
            <p className="text-sm text-gray-600">
              Acompanhamento completo para garantir resultados reais.
            </p>
          </div>

        </div>

        {/* Texto forte (gatilho de dor) */}
        <div className="bg-white rounded-xl p-8 text-center mb-10 shadow-sm">
          <p className="text-gray-700 max-w-3xl mx-auto">
            Muitas empresas enfrentam dificuldades na implementação de RFID por falta de planejamento adequado.
            Nossa consultoria evita erros comuns, reduz custos desnecessários e garante que a tecnologia
            seja aplicada da forma correta desde o início.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contato"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition font-medium"
          >
            Falar com Especialista
          </a>
        </div>

      </div>
    </section>
  );
}