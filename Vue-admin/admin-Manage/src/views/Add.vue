
<template>
  <div class="add container">
    <Alert v-if="alert" :message="alrt"></Alert>
    <h1 class="page-header">添加用户</h1>
    <form @submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="用户名" v-model="customer.name" />
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="电话" v-model="customer.phone" />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="邮箱" v-model="customer.email" />
        </div>
        <div class="form-group">
          <label>网站</label>
          <input type="text" class="form-control" placeholder="学历" v-model="customer.website" />
        </div>
        <div class="form-group">
          <label>公司行业</label>
          <input type="text" class="form-control" placeholder="毕业学校" v-model="customer.bs" />
        </div>
        <div class="form-group">
          <label>公司口号</label>
          <input type="text" class="form-control" placeholder="公式口号" v-model="customer.catchPhrase" />
        </div>
        <div class="form-group">
          <label>地址街道</label>
          <textarea rows="10" class="form-control" v-model="customer.street"></textarea>
        </div>
        <button class="btn">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  name: "add",
  data() {
    return {
      customer: {},
      alert: ""
    };
  },
  methods: {
    addCustomer(e) {
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.alert = "请输入相应的信息";
      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          website: this.customer.website,
          bs: this.customer.bs,
          catchPhrase: this.customer.catchPhrase,
          street: this.customer.street
        };
        this.$http
          .post("http://localhost:3000/users/", newCustomer)
          .then(res => {
            this.$router.push({
              path: "/",
              query: { alert: "用户信息添加成功！" }
            });
          });

        e.preventDefault();
      }
      //阻止默认事件
      e.preventDefault();
    }
  },
  components: {
    Alert
  }
};
</script>

