<template>
  <div>
    <div>
      <b-img-lazy
        v-bind="mainProps"
        :src="require('../assets/banner.jpg')"
        alt="Image 1"
      ></b-img-lazy>
    </div>
    <b-container>
      <div class="box">
        <h4 style="color: red">กรุณากรอกข้อมูลเพื่อตรวจสอบ</h4>
        <h4 style="color: red">Please fill out the information to verify.</h4>
        <br />
        <div>
          <b-form-group class="mb-0">
            <p><b>ชื่อ / Frist and Middle name*</b></p>
            <b-form-input
              v-model="text"
              placeholder="Please enter your mobile number"
              style="width: 50%; display: inline"
            ></b-form-input>
          </b-form-group>
        </div>
        <br />
        <div>
          <b-form-group class="mb-0">
            <p><b>นามสกุล / Last name*</b></p>
            <b-form-input
              v-model="text"
              placeholder="Please enter your mobile number"
              style="width: 50%; display: inline"
            ></b-form-input>
          </b-form-group>
        </div>
        <br />
        <div class="minibox">
          <p>
            <b
              >กรุณาเลือกหลักฐานในการใช้ยืนยันตัวตน<br />
              Please select type of verification</b
            >
          </p>
          <b-form-group v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Please enter your Thai ID">เลขที่บัตรประชาชน / Thai ID</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Please enter your Customer ID">หมายเลขทรูออนไลน์หรือรหัสทรูวิชั่น / True Online or True Viscioncustomer ID</b-form-radio>
      <b-form-input
              placeholder="Please enter your ID"
              v-model="text"
            ></b-form-input>
    </b-form-group>
        </div>
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
      selected: "",
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
        width: 600,
        height: 400,
        class: "my-5",
      },
    };
  },
  methods: {},
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

.minibox {
  border: 2px;
  border-radius: 20px;
  margin: 20px;
  padding: 30px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 4px;
  width: 50%;
  margin: auto;
  text-align: left!important;
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
