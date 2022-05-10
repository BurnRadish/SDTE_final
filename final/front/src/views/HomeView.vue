<template>
  <div>
    <div>
    <b-img-lazy v-bind="mainProps" :src="require('../assets/banner.jpg')" alt="Image 1"></b-img-lazy>
    </div>
    <b-container>
      <div class="box">
        <h4 style="color: red">กรุณากรอกข้อมูลเพื่อตรวจสอบ</h4>
        <h4 style="color: red">Please fill out the information to verify.</h4>
        <br />
        <h6>กรอกเบอร์โทรศัพท์มือถือ</h6>
        <h6>เพื่อรับ OTP เพื่อยืนยันตัวตน</h6>
        <h6>Please enter your mobile phone number.</h6>
        <h6>to receive OTP to verify identity</h6>
        <br />
        <div>
          <b-form-group class="mb-0">
            <p><b>เบอร์โทรศัพท์มือถือ / Mobile number</b></p>
            <b-form-input
              v-model="text"
              placeholder="Please enter your mobile number"
              style="width: 50%; display: inline"
            ></b-form-input>
          </b-form-group>
          <p class="danger">
            กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง / Please enter your mobile number
          </p>
        </div>
        <br />
        <router-link class="danger-a" to="/tol-tvs">ลูกค้า TrueOnline และ TrueVision คลิกที่นี่<br />
          For TrueOnline and Truevision customer click here</router-link>
        <br /><br />
        <b-button pill variant="danger" @click="toReserve()">ขอรหัส OTP / Get OTP</b-button>
      </div>
    </b-container>
    <div>
    <b-img-lazy v-bind="mainProps" :src="require('../assets/footer.svg')" alt="Image 1"></b-img-lazy>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
      return {
        mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: 600,
          height: 400,
          class: 'my-5'
        }
      }
    },
    methods: {
      toReserve(){
        this.$router.push({ path: '/reserve', replace: true })
      }
    }
};
</script>

<style scoped>
.box {
  border: 2px;
  border-radius: 20px;
  margin: 20px;
  padding: 30px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 4px;
}

.danger {
  font-size: 12px;
  color: red;
}

.danger-a {
  font-size: 12px;
  color: red;
  text-decoration: underline;
}

</style>
