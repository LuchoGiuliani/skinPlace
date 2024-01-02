import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { Points, PointMaterial, Preload } from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(2000), { radius: 2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#540"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className=" h-max  absolute inset-0 z-0 ">
      <Canvas className="z-0 h-full" camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all:true />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
