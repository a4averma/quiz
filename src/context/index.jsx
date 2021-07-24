import { QuestionProvider } from "./Question/action";

export default function AppProvider({ children }) {
  return <QuestionProvider>{children}</QuestionProvider>;
}
