const Base = () => {
  return (
    <>
      <mesh castShadow position-y={1}>
        <boxGeometry />
        <meshStandardMaterial color={'red'} />
      </mesh>

      <mesh rotation-x={-Math.PI * 0.5} scale={5}>
        <planeGeometry />
        <meshStandardMaterial color={'greenyellow'} />
      </mesh>
    </>
  );
};

export default Base;
