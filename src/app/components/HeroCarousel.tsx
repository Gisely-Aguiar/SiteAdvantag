import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Capacidade, atendimento e inovação aplicados ao RFID",
    description: "A Advantag representa a união entre capacidade técnica, atendimento próximo e inovação constante. Mais do que fornecer produtos, entregamos conhecimento, confiabilidade e soluções reais.",
    image: "/img/adv1.jfif",
    cta: "Quem somos",
    link: "#quem-somos"
  },
  {
    id: 2,
    title: "RFID veio para ficar",
    description: "RFID é uma tecnologia que permite identificar, rastrear e controlar itens de forma automática e precisa. Hoje é essencial para empresas que buscam eficiência e produtividade.",
    image: "/img/adv2.jfif",
    cta: "Produtos RFID",
    link: "#rfid"
  },
  {
    id: 3,
    title: "One Stop Solution em RFID",
    description: "A Advantag conecta tecnologia, parceiros e conhecimento para entregar soluções completas para empresas de todos os portes.",
    image: "/img/adv3.jfif",
    cta: "Produtos",
    link: "/catalogo"
  }
];

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
    >
      <ChevronRight className="w-6 h-6 text-gray-900" />
    </button>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
    >
      <ChevronLeft className="w-6 h-6 text-gray-900" />
    </button>
  );
}

export function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed">
                    {slide.description}
                  </p>
                  <a
                    href={slide.link}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition font-medium"
                  >
                    {slide.cta}
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}