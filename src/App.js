import useSound from "use-sound";
import "./styles.css";

export default function App() {
  const [play] = useSound("beep.mp3");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
