const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue 4",
      isVisible: false,
      show: true,
    };
  },
}).mount("#app");
