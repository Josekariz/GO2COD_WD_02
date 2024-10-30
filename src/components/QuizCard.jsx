import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';


export default function QuizCard({ question, onAnswer, onQuit }) {

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    useEffect(() => {
        const newShuffledAnswers = [...question.incorrect_answers, question.correct_answer]
            .sort(() => Math.random() - 0.5);
        setShuffledAnswers(newShuffledAnswers);
        setSelectedAnswer(null);
    }, [question]);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        onAnswer(answer === question.correct_answer);
    };

    
         return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-xl p-6 shadow-lg backdrop-blur-sm bg-opacity-90"
        >
            <h3
                className="text-xl mb-6 text-blue-900 font-medium"
                dangerouslySetInnerHTML={{ __html: question.question }}
            />
            <div className="grid gap-4">
                {shuffledAnswers.map((answer, index) => (
                    <motion.button
                        key={index}
                        onClick={() => handleAnswerClick(answer)}
                        disabled={selectedAnswer !== null}
                        initial={{ scale: 1 }}
                        animate={{
                            scale: selectedAnswer === answer
                                ? answer === question.correct_answer ? 1.08 : 0.92
                                : 1,
                            transition: { duration: 0.5, ease: "easeInOut" }
                        }}
                        className={`p-4 rounded-lg text-left transition-all relative overflow-hidden
                            ${selectedAnswer === null ? 'hover:bg-blue-50 bg-white border-2 border-blue-200' :
                                answer === question.correct_answer ? 'bg-green-100 border-2 border-green-500' :
                                    selectedAnswer === answer ? 'bg-red-100 border-2 border-red-500' :
                                        'bg-white border-2 border-blue-200'
                            }`}
                    >
                        <div className="relative z-10">
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: selectedAnswer === null ? 0 : 1 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-blue-300/20 rounded-lg"
                        />
                    </motion.button>
                ))}
            </div>
                 <div className="mt-6">
                     <button
                         onClick={onQuit}
                         className="w-full px-4 py-2 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white 
    transition-colors flex items-center justify-center gap-2"
                     >
                         <X className="w-4 h-4" />
                         Quit
                     </button>

                 </div>
        </motion.div>
    );
}