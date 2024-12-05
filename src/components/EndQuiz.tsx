import { StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";

import Card from "./Card";
import { useQuizCtx } from "../context/quizCtx";

const EndQuiz = () => {
  const { score, totalQuestions } = useQuizCtx();
  return (
    <>
      <LottieView
        autoPlay
        style={StyleSheet.absoluteFill}
        source={require("../data/animation.json")}
      />
      <Card title="Well Done">
        <Text>
          Correct Answer: {score}/{totalQuestions}
        </Text>
        <Text>Best Score: {score}</Text>
      </Card>
    </>
  );
};

export default EndQuiz;
