import {useGLTF} from "@react-three/drei";

const OceanGate = (): JSX.Element => {
  const { scene } = useGLTF('/oceangate_titan_submersible.glb')

  return <primitive object={scene} position={[0, -90, -10]} scale={5} rotation={[0, 0, 0]} />
}

export default OceanGate
