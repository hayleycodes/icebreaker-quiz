import styles from "./App.module.scss";
import Question from "./components/Question/Question";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <div className={styles.root}>
      <Question />
      <Characters />
    </div>
  );
}

export default App;
