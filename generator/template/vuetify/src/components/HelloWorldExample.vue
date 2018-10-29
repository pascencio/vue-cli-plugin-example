<template>
    <div>
        <h1>{{ msg }}</h1>
        <% if (options.firstPlugin) { %>
        <h2>Welcome to your first plugin example!</h2>
        <% } else { %>
        <h2>Welcome back to your plugin example!</h2>
        <% } %>
        <center>
          <v-img width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png" />
        </center>
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