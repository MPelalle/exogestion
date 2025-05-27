import { useEffect, useState } from "react";

export  const PhrasesChange = () => {
    const phrases = [
        '🔒 Pago seguro',
        '🤝 Soporte real',
        '🌟 Transformamos ideas en resultados',
        '🔥 Dale vida a tu proyecto hoy'
    ];

    const [phraseIndex, setPhraseIndex] = useState(0);

    const changePhrase = () => {
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    };

    useEffect(() => {
        const interval = setInterval(changePhrase, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <h1 className="font-montserrat font-extrabold text-[18px] text-center py-[20px] bg-gradient-to-r from-[#00D084] via-[#0ECFBC] to-[#0A1128] text-transparent bg-clip-text drop-shadow-md transition-all duration-500 ease-in-out">
    {phrases[phraseIndex]}
</h1>

    );
}