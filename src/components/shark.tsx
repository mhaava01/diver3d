import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect} from "react";

const Shark = (): JSX.Element => {
  const { scene, animations } = useGLTF('/high_quality_shark_animation.glb')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => void (actions?.['circling']?.play()), [actions])

  return <primitive object={scene} position={[0, -40, -60]} rotation={[0, 0, 0]} />
}

export default Shark
