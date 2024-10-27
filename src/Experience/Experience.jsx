import { OrbitControls } from '@react-three/drei';
import { Effects } from './post-processing';
import { PerformenceMonitor } from './common';
import { Lights } from './environment';
import { Base } from './world';

const Experience = () => {
  return (
    <>
      {/* <Effects /> */}

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
