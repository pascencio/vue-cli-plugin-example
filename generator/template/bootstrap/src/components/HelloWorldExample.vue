<template>
    <div>
        <h1>{{ msg }}</h1>
        <% if (options.firstPlugin) { %>
        <h2>Welcome to your first plugin example!</h2>
        <% } else { %>
        <h2>Welcome back to your plugin example!</h2>
        <% } %>
        <b-img src="https://bootstrap-vue.js.org/_nuxt/img/icon.f0a8c9e.png" width="100" alt="Responsive image" />
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
