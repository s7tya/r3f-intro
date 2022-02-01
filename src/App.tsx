import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Box } from "./components/Box";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;
