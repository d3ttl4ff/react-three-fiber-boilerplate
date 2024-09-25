const Base = () => {
  return (
    <>
      <mesh castShadow scale={1.5}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Base;
