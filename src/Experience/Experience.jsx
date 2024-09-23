import { OrbitControls } from '@react-three/drei';
import { PerformenceMonitor } from './common';
import { Lights } from './environment';
import { Base } from './World';

const Experience = () => {
  return (
    <>
      <PerformenceMonitor />

      <OrbitControls makeDefault />

      {/* Environment */}
      <Lights />

      {/* World */}
      <Base />
    </>
  );
};

export default Experience;
