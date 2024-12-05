import { Pressable, StyleSheet, Text } from "react-native";

type AnswerType = {
  option: string;
  isSelected: boolean;
  onPress: () => void;
};

const Answer = ({ option, isSelected, onPress }: AnswerType) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.answer,
        isSelected && { backgroundColor: "#69f0ae", borderColor: "#005155" },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
};

export default Answer;

const styles = StyleSheet.create({
  answer: {
    borderRadius: 500,
    borderColor: "#CCC",
    borderWidth: 2,
    padding: 15,
    marginVertical: 10,
  },
});
