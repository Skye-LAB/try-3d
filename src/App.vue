<template>
  <Card>
    <template v-slot:card-img>
      <Renderer ref="renderer">
        <Camera :position="{ z: 10 }" />
        <Scene>
          <PointLight :position="{ y: 50, z: 50 }" />
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
