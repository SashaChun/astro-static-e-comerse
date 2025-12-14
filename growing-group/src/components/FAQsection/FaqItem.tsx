import { useState } from "react";

const FaqItem = ({question, answer}: {question: string, answer: string}) => {
    const [openItem, setOpenItem] = useState(false);

    return (
        <div className="bg-white mt-4 rounded-2xl p-6 shadow-lg transition-all cursor-pointer">

            <div
                className="flex items-center justify-between"
                onClick={() => setOpenItem(prev => !prev)}
            >
                <h3 className="text-lg font-bold text-gray-800 hover:text-purple-600 transition-colors">
                    {question}
                </h3>

                <span
                    className={`text-2xl text-purple-600 transition-transform ${
                        openItem ? "rotate-45" : ""
                    }`}
                >
          +
        </span>
            </div>

            {openItem && (
                <p className="text-gray-600 mt-3">
                    {answer}
                </p>
            )}
        </div>
    );
};

export default FaqItem;
