<template>
  <div class="card" style="width: 18rem">
    <slot name="card-img" />
    <div class="card-body">
      <h5 class="card-title">
        <slot name="card-title" />
      </h5>
      <p class="card-text">
        <slot name="card-body" />
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
