import { useState } from "react";
import PasswordControl from "./PasswordControl";

function App() {
  const [password, setPassword] = useState("");

  const handleInput = (name, value) => {
    setPassword(value);
  };

  return (
    <PasswordControl name="Password" value={password} onInput={handleInput} />
  );
}

export default App;
