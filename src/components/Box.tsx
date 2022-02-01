import { Mesh } from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

interface BoxProps {
  position: any;
}

export const Box: React.FC<BoxProps> = (props) => {
  const mesh = useRef<Mesh>();
  const [rotateY, setRotateY] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const onMouseUp = () => {
      setIsMouseDown(false);
    };
    const onMouseDown = () => {
      setIsMouseDown(true);
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousedown", onMouseDown);
    };
  });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (isMouseDown) {
        setRotateY((prev) => prev + event.movementX / 100);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  });

  useFrame((state, delta) => {
    mesh.current.rotation.y = rotateY;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial metalness={0.1} attach="material" />
    </mesh>
  );
};
