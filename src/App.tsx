import { useState } from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Login from "./components/Login";
import NavigateHeader from "./components/NavigateHeader";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <Header
        navigate={<NavigateHeader onClickLogin={() => setOpen(true)} />}
        title="Loja Elegance"
      >
        teste
      </Header>
      <Drawer isOpen={open} setIsOpen={setOpen}>
        <Login />
      </Drawer>
    </Layout>
  );
}

export default App;
