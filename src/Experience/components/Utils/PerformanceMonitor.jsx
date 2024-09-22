import { Perf } from 'r3f-perf';
import { useControls } from 'leva';

const PerformenceMonitor = () => {
  const { performance } = useControls({
    performance: true,
  });

  return <>{performance ? <Perf position="top-left" /> : null}</>;
};

export default PerformenceMonitor;
