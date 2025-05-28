export const ProcessWork = () => {
  return (
    <div className="w-full max-w-5xl mb-12">
      <h2 className="font-montserrat font-bold text-2xl text-[#f5f5f5] text-center mb-8 drop-shadow-sm">
        Nuestro proceso de trabajo
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 relative px-6">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 z-0"></div>
        {[
          { step: "Reunión inicial", icon: "📞" },
          { step: "Propuesta personalizada", icon: "📝" },
          { step: "Desarrollo", icon: "💻" },
          { step: "Entrega y seguimiento", icon: "🚀" },
        ].map(({ step, icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-center z-10 transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
          >
            <div className="bg-[#f5f5f5] text-black w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg mb-2">
              {icon}
            </div>
            <p className="text-sm md:text-base text-[#f5f5f5] font-montserrat font-medium text-center max-w-[120px]">
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
