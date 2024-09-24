import './style.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './experience/experience';
import { LevaPane } from './experience/common';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const created = ({ gl }) => {
  gl.setClearColor('#05070f', 1);
};

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
      onCreated={created}
    >
      <Experience />
    </Canvas>
  </StrictMode>
);
