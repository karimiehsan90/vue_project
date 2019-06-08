<template>
  <div class="entrance-style-doing card-white col-8 mx-auto col-sm-8"
       style="font-family: IranSans" >
    <div class="font-title1">
      <img src="./img/case.png" class="">
      موضوع
    </div>

    <div class="font-explain">
      <img src="./img/explaination.png" class="">
      شرح
    </div>
<form @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-12 col-sm-12" id="reply" style="">
        <label class="form-style" for="reply"><b style="">
          <img src="./img/add.png" class="">
          افزودن توضیحات</b></label> <!--in this style have some margin-->
        <div class="div-input-each"> <!--in this style have some margin-->
          <input style="border-style: dashed; border-color: var(--stone)" type="text" class="form-control-reply" id="changing-the-sitiuation" v-model="content">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="row col-3 col-sm-3 m-3" style="">
        <label id="closed-select" class="container-doing checkmark-text">
          <img src="./img/closed.png" class="">
          <span style="margin: 80px">بسته</span>
          <input type="radio" name="radio" onclick="closeTextField()" value="1" v-model="status">
          <span class="checkmark"></span>
        </label>

        <label id="ref-select" class="container-doing checkmark-text"
               style="float: right" onclick="openTextField()">
          <img src="./img/ref.png" class="" style="width: 23px">
          <span style="margin: 80px">
            ارجاع</span>
          <input type="radio" name="radio" value="2" v-model="status">
          <span class="checkmark"></span>
        </label>
      </div>

      <div class="col-6 col-sm-6 " style="margin-top: 40px">
        <div style="display: none" id="select-user">
          <div style="display: inline-block; float: left;">
            <div class="">
              <input type="text" id="input-name-ref" class="input-name-user" placeholder="نام کاربری">
            </div>
          </div>

          <div style="display: inline-block; float: left;">
            <select onchange="myFunction(this) " class="input-name-user selection-style">
              <option>استاد</option>
              <option>سایرین</option>
            </select>
          </div>
        </div>
      </div>

      <div class=" m-3" style="">
        <button id="send-btn" type="submit" class="btn m-3" style="background-color: var(--stone);" disabled>
          ارسال
        </button>
      </div>
    </div>
</form>
    <div class="empty-div">

    </div>

  </div>
</template>

<script>
  export default {
    name: 'edit-prof',
    data() {
      return {
        content: '',
        status: '',
        to:-9
      }
    },
    methods:{
      onSubmit(){
        var vm = this;
        var tkn = localStorage.getItem("token");
        $.post('/ticketing/rest/action/set', {
          token: tkn,
          case_id:vm.$parent.id,
          content:vm.content,
          status:parseInt(vm.status)
        }, function (data) {
            if (data.success){
              vm.content="";
              vm.status=-1;
              alert(data.message)
            }
        })
      }

    },
    created: function () {

    }

  }
</script>
