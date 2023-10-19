import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from '../../styles/components/FAQ.module.scss'

// TypeScript interfaces
interface FAQItem {
    question: string;
    answer: string;
}

interface QuestionProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQ: React.FC = () => {
    const [questions, setQuestions] = useState<FAQItem[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null); // Track the index of the open question

    useEffect(() => {
        fetch('./FAQ.json')
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch(err => console.error("Error fetching questions:", err));
    }, []);

    return (
        <div className={styles.QuestionContainer}>
            {questions.map((q, index) => (
                <QuestionItem
                    key={index}
                    question={q.question}
                    answer={q.answer}
                    isOpen={index === openIndex} // Check if this question is the open one
                    onClick={() => setOpenIndex(index !== openIndex ? index : null)} // Toggle open/close
                />
            ))}
        </div>
    );
};

const QuestionItem: React.FC<QuestionProps> = ({ question, answer, isOpen, onClick }) => {

    const variants = {
        open: { opacity: 1, height: "auto" },
        closed: { opacity: 0, height: 0 }
    };

    return (
        <div className={styles.Container}>
            <motion.div className={styles.QNAWraper} layout onClick={onClick}>
                <motion.h2 className={styles.Question} layout>{question}</motion.h2>
                {isOpen && (
                    <motion.p
                        className={styles.Answer}
                        layout
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                        // transition={{ duration: 0.3, ease: 'easeInOut' }}
                        transition={{
                            duration: 0.4,
                            ease: [0.785, 0.135, 0.15, 0.86] // cubic bezier values
                        }}
                    >
                        {answer}
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
};

export default FAQ;
