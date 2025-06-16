import React from 'react';

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    return (
        <div className="text-justify flex flex-col gap-3 h-auto overflow-auto max-w-3xl">
            {/* Mobile design (hidden on sm and above) */}
            <div className="sm:hidden">
                <div className="bg-[#bdff00] p-4  border- 2 border border-black">
                    <h3 className="text-black font-semibold font-mono text-sm">{question}</h3>
                </div>
                <div className="mt-0 border-2 border-[#bdff00] bg-white p-4 ">
                    <p className="text-black font-light font-mono text-xs">{answer}</p>
                </div>
            </div>

            {/* Desktop design (hidden on mobile) */}
            <div className="hidden sm:flex flex-row items-center gap-x-6">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#bdff00] text-black rounded-full font-mono font-bold text-base">
                    Q
                </div>
                <div className="flex-1">
                    <h3 className="text-black font-semibold font-mono text-base mb-2">{question}</h3>
                    <p className="text-black font-light font-mono text-sm">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;