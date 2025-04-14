import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import avatar from "./icons/user.png";
export default function App() {
  const [userName, setUserName] = useState("Joe");
  return (
    <main>
      <Header userName={userName} avatar={avatar} />
      <Body userName={userName} />
    </main>
  );
}
