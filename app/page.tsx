"use client"
import React, { useRef, useState } from 'react';
import styles from './page.module.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Select } from '@react-three/drei';
import SpaceElement from '@components/SpaceElement';
import { solarSystemElements } from '@/utils/planets';
import Floor from '@/components/Floor';
import Earth from '@/components/planets/Earth';
import { calculateVelocity, computeSemiMinorAxis } from '@/utils/utils';

const ENABLE_FLOOR = false;

export default function SolarSystem() {
  const cameraRef = useRef(null);
  return (
    <div className={styles.scene}>
      <Canvas className={styles.canvas} shadows={true}>
        <PerspectiveCamera makeDefault={true} ref={cameraRef} position={[0, 0, 300]} />
        <ambientLight intensity={1} />
        <Select box>
          {
            solarSystemElements.map(element => (
              <SpaceElement key={element.name} name={element.name} orbit={element.orbit} />
            ))
          }
        </Select>
        {ENABLE_FLOOR && <Floor args={[1, 1]} />}
        <OrbitControls camera={cameraRef.current} />
      </Canvas>
    </div>
  )
}
