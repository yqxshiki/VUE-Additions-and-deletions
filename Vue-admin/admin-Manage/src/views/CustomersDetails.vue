
<template>
  <div class="CustomersDetailes container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
      {{customer.name}}
      <span class="pull-right">
        <router-link class="btn btn-default" :to="'/edit/'+customer.id">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-flag jiange">{{customer.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-indent-right jiange">{{customer.email}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-tint jiange">{{customer.website}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk jiange">{{customer.id}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-th-large jiange">{{customer.catchPhrase}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-signal jiange">{{customer.street}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "customersdetailes",
  data() {
    return {
      customer: ""
    };
  },
  methods: {
    fetchCustomers(id) {
      this.$http.get("http://localhost:3000/users/" + id).then(res => {
        console.log(res);
        //将数据给到  data里面的  customers
        this.customer = res.body;
      });
    },
    deleteCustomer(id) {
      this.$http.delete("http://localhost:3000/users/" + id).then(res => {
        this.$router.push({
          path: "/",
          query: {
            alert: "用户信息已经删除成功！"
          }
        });
      });
    }
  },
  created() {
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>

