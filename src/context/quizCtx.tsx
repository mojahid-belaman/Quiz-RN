import { createContext, useContext, useState } from "react";

import questions from "../data";
import { Question } from "../types";

type QuizContextType = {
  quiz: Question;
  selectedOption: string;
  score: number;
  totalQuestions: number;
  selectIndex: number;
  isFinished: boolean;
  onNext: () => void;
  setSelectedOption: (option: string) => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const quiz = questions[selectIndex];
  const isFinished = selectIndex === questions.length;

  function resetQuiz() {
    setSelectIndex(0);
    setScore(0);
    setSelectedOption("");
  }

  function onNext() {
    if (isFinished) {
      resetQuiz();
      return;
    }
    if (selectedOption === quiz.correctAnswer) setScore((prev) => prev + 1);
    setSelectIndex((prev) => prev + 1);
  }

  return (
    <QuizContext.Provider
      value={{
        quiz,
        selectedOption,
        score,
        totalQuestions: questions.length,
        selectIndex,
        isFinished,
        onNext,
        setSelectedOption,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizCtx = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizCtx must be used within a QuizProvider");
  }
  return context;
};
