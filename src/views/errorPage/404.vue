<template>
  <div class="bg-primary">

    <div class="device-content">
      <div class="error-device-content">
        <img
          class="w-75 position-relative"
          src="../../assets/images/404.png"
          alt
        />
      </div>
      <div class="error-text">
        <div class="error-word">抱歉，您访问的页面不存在</div>
        <a-button
          type="primary"
          @click="$router.replace('/')"
        >
          返回首页
        </a-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.bg-primary {
  background: #f0f2f5;
  width: 100%;
  height: 100%;
}
.device-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1;
  .error-text {
    padding-top: 30px;
    .error-word {
      padding-bottom: 30px;
      font-size: 18px;
    }
  }
}
</style>
