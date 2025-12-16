import { useState } from "react";

const FaqItem = ({question, answer}: {question: string, answer: string}) => {
    const [openItem, setOpenItem] = useState(false);

    return (
        <div className="bg-white mt-2 md:mt-4 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg transition-all cursor-pointer">

            <div
                className="flex items-start md:items-center justify-between gap-3"
                onClick={() => setOpenItem(prev => !prev)}
            >
                <h3 className="text-sm md:text-lg font-bold text-gray-800 hover:text-purple-600 transition-colors leading-tight pr-2 flex-1">
                    {question}
                </h3>

                <span
                    className={`text-xl md:text-2xl text-purple-600 transition-transform flex-shrink-0 ${
                        openItem ? "rotate-45" : ""
                    }`}
                >
          +
        </span>
            </div>

            {openItem && (
                <p className="text-gray-600 mt-2 md:mt-3 text-sm md:text-base leading-relaxed">
                    {answer}
                </p>
            )}
        </div>
    );
};

export default FaqItem;