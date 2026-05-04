"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Text, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
function CubeCore() {
const group = useRef<THREE.Group>(null);
useFrame((_, delta) => {
if (group.current) {
group.current.rotation.y += delta * 0.35;
group.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.08;
}
});
return (
<group ref={group}>
<mesh>
<boxGeometry args={[2.4, 2.4, 2.4]} />
<meshStandardMaterial
color="#0f172a"
metalness={0.55}
roughness={0.22}
transparent
opacity={0.92}
/>
</mesh>
<lineSegments>
<edgesGeometry args={[new THREE.BoxGeometry(2.45, 2.45, 2.45)]} />
<lineBasicMaterial color="#34d399" linewidth={2} />
</lineSegments>
<Text position={[0, 0, 1.26]} fontSize={0.28} color="#ffffff"
anchorX="center" anchorY="middle">
TenderIQ
</Text>
<Text position={[0,-0.42, 1.27]} fontSize={0.14} color="#a7f3d0"
anchorX="center" anchorY="middle">
AI Evaluation
</Text>
{[0, 1, 2, 3].map((i) => {
const angle = (i / 4) * Math.PI * 2;
return (
<mesh key={i} position={[Math.cos(angle) * 2.1, Math.sin(angle) *
0.35, Math.sin(angle) * 2.1]}>
<sphereGeometry args={[0.08, 24, 24]} />
<meshStandardMaterial color="#22c55e" emissive="#22c55e"
emissiveIntensity={0.8} />
</mesh>
);
})}
</group>
);
}
export default function TenderCube() {
return (
<div
className="h-[360px] w-full overflow-hidden rounded-[32px] bg-slate-950 
shadow-2xl">
<Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
<ambientLight intensity={0.7} />
<directionalLight position={[5, 5, 5]} intensity={1.6} />
<pointLight position={[-4,-2, 3]} intensity={1.8} color="#22c55e" />
<Environment preset="city" />
<Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.8}>
<CubeCore />
</Float>
<OrbitControls enableZoom={false} enablePan={false} autoRotate
autoRotateSpeed={0.5} />
</Canvas>
</div>
);
}