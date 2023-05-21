import logo from "./logo.svg";
import "./App.css";
import { Button, Text, Container, Navbar } from "@mantine/core";
import UserForm from "./components/UserForm";
import Chatgpt from "./components/Chatgpt";

function App() {

  return (
    <Container dir="rtl">
      <Chatgpt />
      <UserForm />
    </Container>
  );
}

export default App;
