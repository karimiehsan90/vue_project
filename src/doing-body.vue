<template>
  <div class="entrance-style-doing card-white col-8 mx-auto col-sm-8"
       style="font-family: IranSans" >
    <div class="font-title1">
      <img src="./img/case.png" class="">
{{$parent.title}}
    </div>

    <div class="font-explain">
      <img src="./img/explaination.png" class="">
{{$parent.body}}
    </div>
    <div v-if="$parent.file != null" class="font-explain">
      <a :href="$parent.file" target="_blank">دانلود پیوست</a>
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
          <input type="radio" name="radio" onclick="closeTextField()" @click="setInvalidTo" value="1" v-model="status">
          <span class="checkmark"></span>
        </label>

        <label id="postponed-select" class="container-doing checkmark-text">
          <img src="./img/closed.png" class="">
          <span style="margin: 80px">نگهداشتن</span>
          <input type="radio" name="radio" onclick="closeTextField()" @click="setInvalidTo" value="3" v-model="status">
          <span class="checkmark"></span>
        </label>

        <label id="in-queue-select" class="container-doing checkmark-text">
          <img src="./img/closed.png" class="">
          <span style="margin: 80px">انتظار</span>
          <input type="radio" name="radio" onclick="closeTextField()" @click="setInvalidTo" value="2" v-model="status">
          <span class="checkmark"></span>
        </label>

        <label id="ref-select" class="container-doing checkmark-text"
               style="float: right" onclick="openTextField()">
          <img src="./img/ref.png" class="" style="width: 23px">
          <span style="margin: 80px">
            ارجاع</span>
          <input type="radio" name="radio" value="0" v-model="status">
          <span class="checkmark"></span>
        </label>
      </div>

      <div class="col-6 col-sm-6 " style="margin-top: 40px">
        <div style="display: none" id="select-user">
          <div style="display: inline-block; float: left;">
            <div class="">
              <select class="input-name-user" v-model="to">
                <option v-for="t in possibles" :value="t.id">{{t.name}}</option>
              </select>
            </div>
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
  import $ from 'jquery'
  export default {
    name: 'edit-prof',
    data() {
      return {
        content: '',
        status: '',
        to:-9,
          possibles: []
      }
    },
    methods:{
      onSubmit(){
        var vm = this;
        var tkn = localStorage.getItem("token");
          var formData = new FormData();
          formData.append('content', vm.content);
          formData.append('case_id', vm.$parent.caseId);
          formData.append('status', vm.status);
          formData.append('token', tkn);
          if (vm.to > 0){
              formData.append('to', vm.to);
          }
          $.ajax({
              url: '/ticketing/rest/action/set',
              data: formData,
              cache: false,
              contentType: false,
              processData: false,
              method: 'POST',
              type: 'POST',
              success: function (data) {
                  if(data.success){
                      vm.content = '';
                      vm.to = -1;
                      vm.status = '';
                      show_alert(data.message, false);
                  }
                  else {
                      show_alert(data.message, true);
                  }
              }
          });
      },
        setInvalidTo(){
            this.to = -1;
        }

    },
    mounted: function () {
        var vm = this;
        $.post('/ticketing/rest/auth/list', {
            token: localStorage.getItem("token")
        }, function (data) {
            if (data.success){
                vm.possibles = data.data;
            }
            else {
                show_alert(data.message, true);
            }
        })
    }

  }
</script>
