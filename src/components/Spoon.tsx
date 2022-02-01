import React, { Suspense, VFC } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";

interface SpoonProps {
  position: any;
}

export const Spoon: VFC<SpoonProps> = ({ position }) => {
  return (
    <>
      <OrbitControls enablePan={false} />

      <Suspense fallback={null}>
        <Model position={position} />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
    </>
  );
};
