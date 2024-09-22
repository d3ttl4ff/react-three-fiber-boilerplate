import { OrbitControls } from '@react-three/drei';
import { PerformenceMonitor } from './components/Utils';
import { Lights } from './components/Environment';
import { Base } from './components/World';

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
