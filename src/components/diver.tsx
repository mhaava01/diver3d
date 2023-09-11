import {Center, Float, Text, useAnimations, useGLTF, useScroll} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {Mesh} from "three";
import {Text as TextType} from "@react-three/drei/core/Text"

type TextTypeExtended = typeof TextType
  & { text: string }
function Diver() {
  const { scene, animations } = useGLTF('/diver.glb')
  const { actions } = useAnimations(animations, scene)

  const diverObject = useRef<Mesh>()
  const textRef = useRef<TextTypeExtended>()
  const scroll = useScroll()

  useEffect(() => void (actions?.['Take 001'] && (actions['Take 001'].play().paused = true)), [actions])

  let offset = 0
  let accumulativeOffset = 0

  useFrame(() => {
    accumulativeOffset += Math.abs(scroll.offset - offset)
    const action = actions['Take 001']

    if (diverObject.current) {
      if (offset > scroll.offset) {
        diverObject.current.rotation.y = diverObject.current.rotation.y > 0 ? diverObject.current.rotation.y - 0.1 : 0
      } else {
        diverObject.current.rotation.y = diverObject.current.rotation.y < Math.PI ? diverObject.current.rotation.y + 0.1 : Math.PI
      }
    }


    offset = scroll.offset

    if (action) {
      action.time = (accumulativeOffset * 10) % action.getClip().duration
    }

    (textRef?.current?.text) && (textRef.current.text = `${(scroll.offset * 20)?.toFixed()}M`)
  })

  return (
    <Center>
      <Text ref={textRef} position={[2, 2, 0]} rotation={[0, -Math.PI/4, 0]}>0M</Text>
      <Float>
        <primitive ref={diverObject} object={scene} rotation={[-Math.PI/2, Math.PI, Math.PI/2]} />
      </Float>
    </Center>
  )
}

export default Diver
