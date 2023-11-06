import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


function Skills() {
  return (
    <>
      <Canvas id='canvas' height="500">
          <OrbitControls autoRotate={true}/>
          <mesh>
            <ambientLight intensity={2}/>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial attach="material" color={0xf08080}/>
          </mesh>
      </Canvas>

    </>
  )
}

export default Skills