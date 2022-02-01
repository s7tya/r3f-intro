import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Box } from "./components/Box";
import { Spoon } from "./components/Spoon";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight position={[100, 100, 100]} angle={0.15} />
      <Spoon position={[2, 0, 0]} />
    </Canvas>
  );
}

export default App;
