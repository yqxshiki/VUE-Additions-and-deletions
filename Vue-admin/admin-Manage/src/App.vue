
<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">用户管理</router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active">
              <router-link to="/">主页</router-link>
            </li>
            <li class="active">
              <router-link to="/about">关于我们</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="active">
              <router-link to="/add">添加用户</router-link>
            </li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style >
</style>

