<template>
  <button class="add__btn" @click="$emit('openModal')">
    <img src="@/assets/images/edit.svg" alt=""  />
  </button>
</template>

<script>
export default {};
</script>

<style>
.add__btn {
  border-radius: 16px;
  background: linear-gradient(
      0deg,
      rgba(103, 80, 164, 0.11) 0%,
      rgba(103, 80, 164, 0.11) 100%
    ),
    #fffbfe;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 4px 8px 3px rgba(0, 0, 0, 0.15);
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 30px;
    right: 30px;
}
</style>