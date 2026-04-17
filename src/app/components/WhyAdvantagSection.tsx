import { Factory, Brain, Target, Award, Handshake, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Fabricação Própria",
    description: "Produção nacional com controle total de qualidade"
  },
  {
    icon: Brain,
    title: "Know-how Técnico",
    description: "Expertise e conhecimento profundo em RFID"
  },
  {
    icon: Target,
    title: "Aplicação Real",
    description: "Soluções testadas em ambientes reais"
  },
  {
    icon: Award,
    title: "Qualidade Industrial",
    description: "Padrão de excelência em cada produto"
  },
  {
    icon: Handshake,
    title: "Parcerias",
    description: "Network estratégico para soluções completas"
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Próximo",
    description: "Suporte dedicado e consultoria especializada"
  }
];

export function WhyAdvantagSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que Advantag?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Se a tecnologia RFID é tão poderosa, por que tantos ainda não utilizam?
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Porque falta quem entregue a combinação certa: <span className="text-red-600 font-semibold">produto + conhecimento + suporte</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
