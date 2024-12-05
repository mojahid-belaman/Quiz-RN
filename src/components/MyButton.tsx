import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

type MyButtonProps = {
  text: string;
  rightIcon?: React.ReactNode;
} & PressableProps;

const MyButton = ({ text, rightIcon, ...pressableProps }: MyButtonProps) => {
  return (
    <Pressable
      {...pressableProps}
      style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
    >
      <Text style={styles.text}>{text}</Text>
      <View
        style={{
          position: "absolute",
          width: 30,
          right: 15,
        }}
      >
        {rightIcon}
      </View>
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005155",
    borderRadius: 500,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.8,
    textAlign: "center",
  },
});
