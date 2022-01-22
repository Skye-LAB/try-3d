<template>
  <Renderer ref="renderer">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const renderer = ref();
    const box = ref();

    const _ = reactive({
      renderer,
      box,
    });

    onMounted(() => {
      _.renderer.onBeforeRender(() => {
        _.box.mesh.rotation.x += 0.1;
      });
    });

    return {
      renderer,
      box,
    };
  },
};
</script>
