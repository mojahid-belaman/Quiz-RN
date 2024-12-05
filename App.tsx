import { StatusBar } from "expo-status-bar";

import QuizScreen from "./src/screens/QuizScreen";
import { QuizProvider } from "./src/context/quizCtx";

export default function App() {
  return (
    <QuizProvider>
      <StatusBar style="auto" />
      <QuizScreen />
    </QuizProvider>
  );
}
