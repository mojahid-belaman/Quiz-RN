import { View, Text, StyleSheet } from "react-native";
import { useQuizCtx } from "../context/quizCtx";

const Header = () => {
  const { selectIndex, totalQuestions, isFinished } = useQuizCtx();
  return (
    <View>
      <Text style={styles.text}>
        {isFinished ? (
          <Text>End Quiz</Text>
        ) : (
          <Text>
            Question {selectIndex + 1}/{totalQuestions}
          </Text>
        )}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "semibold",
    textAlign: "center",
    color: "#005155",
  },
});
