import {Canvas} from '@react-three/fiber'
import {Suspense} from "react";
import {ScrollControls, Scroll} from "@react-three/drei";
import OceanGate from "./components/ocean-gate.tsx";
import Fish from "./components/fish.tsx";
import Shark from "./components/shark.tsx";
import Diver from "./components/diver.tsx";
import Loader from "./components/loader.tsx";

function App() {

  return (
    <Canvas camera={{fov: 90}}>
      {/*<Perf position="top-left" />*/}
      <color attach="background" args={['#00beff']} />
      <directionalLight position={[0,2,2]} />
      <ambientLight intensity={5} />

      <Suspense fallback={<Loader />}>
        <ScrollControls pages={10}>
          <Diver/>
          <Scroll>
            <Shark/>
            <Fish/>
            <OceanGate />
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

export default App
