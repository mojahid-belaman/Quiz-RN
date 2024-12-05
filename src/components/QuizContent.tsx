import { useState } from "react";

import { useQuizCtx } from "../context/quizCtx";
import Card from "./Card";
import Answer from "./Answer";

const QuizContent = () => {
  const { quiz, selectedOption, setSelectedOption } = useQuizCtx();

  return (
    <Card title={quiz.title}>
      {quiz.options.map((option, index) => (
        <Answer
          key={index}
          option={option}
          isSelected={selectedOption === option}
          onPress={() => setSelectedOption(option)}
        />
      ))}
    </Card>
  );
};

export default QuizContent;
