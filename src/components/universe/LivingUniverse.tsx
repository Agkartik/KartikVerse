"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useOrionStore } from "@/lib/store/orionStore";

function ShootingStar() {
  const meshRef = useRef<THREE.Mesh>(null);
  const tailRef = useRef<THREE.Mesh>(null);
  
  const [startPos, setStartPos] = useState(() => new THREE.Vector3(-20, 20, -10));

  useEffect(() => {
    setStartPos(new THREE.Vector3(
      -20 - Math.random() * 20, 
      20 + Math.random() * 20, 
      -10 - Math.random() * 10
    ));
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current && tailRef.current) {
      const speed = 40;
      meshRef.current.position.x += speed * delta;
      meshRef.current.position.y -= speed * delta;
      
      tailRef.current.position.copy(meshRef.current.position);
      tailRef.current.position.x -= 0.5;
      tailRef.current.position.y += 0.5;

      if (meshRef.current.position.x > 30) {
        meshRef.current.position.set(
          -30 - Math.random() * 50,
          30 + Math.random() * 50,
          -10 - Math.random() * 10
        );
      }
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={startPos}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh ref={tailRef} position={startPos} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.01, 0.05, 1.5, 8]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export function LivingUniverse() {
  const { meteorsEnabled, starsEnabled, performanceMode } = useOrionStore();

  const showMeteors = meteorsEnabled && !performanceMode;
  const showStars = starsEnabled;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-space pointer-events-none">
      {/* Nebula Layers using Framer Motion & CSS */}
      <motion.div
        animate={performanceMode ? { scale: 1, opacity: 0.1 } : {
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-[50%] -left-[25%] w-[150vw] h-[150vh] nebula-purple ${performanceMode ? 'opacity-10 blur-[20px]' : 'opacity-30 blur-[100px]'}`}
      />
      <motion.div
        animate={performanceMode ? { scale: 1, opacity: 0.1 } : {
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className={`absolute top-[20%] -right-[25%] w-[120vw] h-[120vh] nebula-blue ${performanceMode ? 'opacity-10 blur-[20px]' : 'opacity-20 blur-[120px]'}`}
      />
      
      {/* R3F Stars and Shooting Stars */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          {showStars && (
            <Stars 
              radius={100} 
              depth={50} 
              count={performanceMode ? 1000 : 4000} 
              factor={performanceMode ? 2 : 4} 
              saturation={0.5} 
              fade 
              speed={performanceMode ? 0.1 : 0.5} 
            />
          )}
          {showMeteors && (
            <>
              <ShootingStar />
              <ShootingStar />
            </>
          )}
        </Canvas>
      </div>
    </div>
  );
}
