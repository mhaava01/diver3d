import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect} from "react";

const Fish = (): JSX.Element => {
  const { scene, animations } = useGLTF('/fish_animation_swiming.glb')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => void (actions?.['swimming']?.play()), [actions])

  return <primitive object={scene} position={[0, -10, 0]} scale={1.5} rotation={[0, 0, 0]} />
}

export default Fish
