import { OrbitControls } from '@react-three/drei';
import { Effects } from './post-processing';
import { PerformenceMonitor } from './common';
import { EnvironmentMap, Lights } from './environment';
import { Base } from './world';

const Experience = () => {
  return (
    <>
      <color args={['#05070f']} attach="background" />

      {/* <Effects /> */}

      <PerformenceMonitor />

      <OrbitControls makeDefault />

      {/* Environment */}
      <Lights />
      {/* <EnvironmentMap /> */}

      {/* World */}
      <Base />
    </>
  );
};

export default Experience;
