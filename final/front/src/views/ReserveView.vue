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
        <h4 style="color: red">ลงทะเบียนรับวัคซีน</h4>
        <h4 style="color: red">Regster to be Vaccinated</h4>
        <br />
        <h6>คุณสามารถลงทะเบียนได้ 2 ท่าน</h6>
        <h6>Registration limit to 2 person/number</h6>
        <br />
        <div>
          <b-form-group class="mb-0">
            <p>
              <b
                >ศูนย์ฉีดวัคซีน*<br />
                Vaccinaation center*</b
              >
            </p>
            <b-form-select
              v-model="selected1"
              :options="options1"
            ></b-form-select>
          </b-form-group>
        </div>
        <br />
        <b-row>
          <b-col><b-form-group class="mb-0">
            <p><b>คำนำหน้าชื่อ*<br>First name and Middle name
            </b></p>
            <b-form-select
              v-model="selected2"
              :options="options2"
            ></b-form-select>
          </b-form-group></b-col>
          <b-col><b-form-group class="mb-0">
            <p><b>เพศ*<br>Gender*</b></p>
            <b-form-select
              v-model="selected3"
              :options="options3"
            ></b-form-select>
          </b-form-group></b-col>
        </b-row>
        <br /><br />
        <b-button pill variant="danger">ยืนยันข้อมูล / Submit</b-button>
      </div>
    </b-container>
    <div>
      <b-img-lazy
        v-bind="mainProps"
        :src="require('../assets/footer.svg')"
        alt="Image 1"
      ></b-img-lazy>
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
        blankColor: "#bbb",
        width: 600,
        height: 400,
        class: "my-5",
      },
      selected1: null,
      options1: [
        { value: null, text: "Please select an option" },
        { value: "1", text: "สจล. 1" },
        { value: "2", text: "สจล. 2" },
      ],
      selected2: null,
      options2: [
        { value: null, text: "Please select an option" },
        { value: "Mr.", text: "นาย" },
        { value: "Mrs.", text: "นาง" },
        { value: "M", text: "นางสาว" },
      ],
      selected3: null,
      options3: [
        { value: null, text: "Please select an option" },
        { value: "M", text: "ชาย" },
        { value: "F", text: "หญิง" },
        { value: "O", text: "ไม่ระบุเพศ" },
      ],

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
