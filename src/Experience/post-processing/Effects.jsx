import {
  EffectComposer,
  Noise,
  ToneMapping,
} from '@react-three/postprocessing';

const Effects = () => {
  return (
    <EffectComposer multisampling={8}>
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>
  );
};

export default Effects;
