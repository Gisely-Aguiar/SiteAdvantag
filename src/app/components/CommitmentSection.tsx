import { Target, Eye, Award } from "lucide-react";

export function CommitmentSection() {
  return (
    <section id="quem-somos" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Nosso Compromisso
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Indústria, tecnologia e conhecimento aplicados para transformar operações com RFID.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Missão</h3>
            <p className="text-gray-300 leading-relaxed">
              Entregar soluções RFID completas que combinem produto de qualidade, conhecimento técnico e suporte especializado, transformando a forma como empresas controlam e otimizam seus processos.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Visão</h3>
            <p className="text-gray-300 leading-relaxed">
              Ser a referência nacional em TAGs RFID, reconhecida pela qualidade industrial, inovação contínua e capacidade de entregar soluções que realmente funcionam na prática.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Valores</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Qualidade industrial</li>
              <li>• Inovação aplicada</li>
              <li>• Conhecimento técnico</li>
              <li>• Atendimento próximo</li>
              <li>• Compromisso com resultados</li>
              <li>• Ética e transparência</li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-2">
              +9
            </div>
            <div className="text-gray-400">Anos de experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500 mb-2">
              +350
            </div>
            <div className="text-gray-400">Clientes ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-2">
              +50
            </div>
            <div className="text-gray-400">Tipos de TAGs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500 mb-2">
              99%
            </div>
            <div className="text-gray-400">Taxa de qualidade</div>
          </div>
        </div>
      </div>
    </section>
  );
}
