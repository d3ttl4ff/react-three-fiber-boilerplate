import { OrbitControls } from '@react-three/drei';
import { PerformenceMonitor } from './Utils';
import { Lights } from './Environment';
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
