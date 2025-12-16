import { useState } from "react";

const FaqItem = ({question, answer}: {question: string, answer: string}) => {
    const [openItem, setOpenItem] = useState(false);

    return (
        <div className="bg-white mt-2 sm:mt-4 rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg transition-all cursor-pointer">

            <div
                className="flex items-start sm:items-center justify-between gap-3"
                onClick={() => setOpenItem(prev => !prev)}
            >
                <h3 className="text-sm sm:text-lg font-bold text-gray-800 hover:text-purple-600 transition-colors leading-tight flex-1 pr-2">
                    {question}
                </h3>

                <span
                    className={`text-xl sm:text-2xl text-purple-600 transition-transform flex-shrink-0 ${
                        openItem ? "rotate-45" : ""
                    }`}
                >
          +
        </span>
            </div>

            {openItem && (
                <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
                    {answer}
                </p>
            )}
        </div>
    );
};

export default FaqItem;