import './style.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { LevaPane } from './experience/common';
import Experience from './experience/Experience.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <StrictMode>
    <LevaPane />
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [-4, 3, 6],
      }}
    >
      <Experience />
    </Canvas>
  </StrictMode>
);
