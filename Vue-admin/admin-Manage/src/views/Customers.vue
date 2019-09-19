
<template>
  <div class="customers container">
    <Alert v-if="alert" :message="alert"></Alert>
    <h1>用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput" />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <thead>
        <tr v-for="customer in filterBy(customers,filterInput)">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td>
            <router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">详情</router-link>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import Alert from "./Alert";

export default {
  name: "Customers",
  data() {
    return {
      customers: [],
      alert: "",
      filterInput: ""
    };
  },
  methods: {
    fetchCustomers() {
      this.$http.get("http://localhost:3000/users/").then(res => {
        // console.log(res);
        //将数据给到  data里面的  customers
        this.customers = res.body;
      });
    },
    //过滤
    filterBy(customers, value) {
      return customers.filter(function(customer) {
        return customer.name.match(value);
      });
    }
  },
  //页面开始展示之前拿到数据
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  updated() {
    this.fetchCustomers();
  },
  components: {
    Alert
  }
};
</script>
