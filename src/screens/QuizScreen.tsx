import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Header from "../components/Header";
import QuizContent from "../components/QuizContent";
import MyButton from "../components/MyButton";
import { useQuizCtx } from "../context/quizCtx";
import { useTimer } from "../hooks/useTimer";
import EndQuiz from "../components/EndQuiz";

const QuizScreen = () => {
  const { onNext, quiz } = useQuizCtx();
  const { timer, startTimer, stopTimer } = useTimer();

  useEffect(() => {
    if (quiz) startTimer();

    return () => stopTimer();
  }, [quiz]);

  useEffect(() => {
    if (timer === 0) {
      onNext();
    }
  }, [timer]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {quiz ? (
        <View>
          <QuizContent />
          <Text style={styles.timer}>{timer} sec</Text>
        </View>
      ) : (
        <EndQuiz />
      )}

      <MyButton
        text="Next"
        rightIcon={<Ionicons name="arrow-forward" size={24} color="white" />}
        onPress={onNext}
      />
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  timer: {
    color: "#005155",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
});
