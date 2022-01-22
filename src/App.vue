<template>
  <Card>
    <template v-slot:card-img>
      <Renderer ref="renderer" antialias orbit-ctrl>
        <Camera :position="{ z: 2}" />
        <Scene background="#fff">
          <AmbientLight/>
          <PointLight color="white" :intensity="10" :position="{ x: 100, y: 1000, z: 40 }" />
          <GltfModel src="./scene.gltf"/>
        </Scene>
      </Renderer>
    </template>
    <template v-slot:card-title> Product </template>
    <template v-slot:card-body>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </template>
  </Card>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

import Card from "./components/Card.vue";
export default {
  components: {
    Card,
  },
  setup() {
    const renderer = ref();

    const _ = reactive({
      renderer,
    });

    onMounted(() => {
      _.renderer.onBeforeRender(() => {
      });
    });

    return {
      renderer,
    };
  },
};
</script>
