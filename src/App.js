import useSound from "use-sound";
import beepSfx from "./beep.mp3";
import "./styles.css";

export default function App() {
  const [play] = useSound(beepSfx);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={play} className="btn btn-danger">
        Dei Venna
      </button>
    </div>
  );
}
