<template>
        <div class="container card-white col-sm-8 entrance-style-filters card-white col-8 mx-auto loading-mode">
            <form class="myfrm">
                <div class="form-inline my-3">
                    <div class="col-sm-6 float-left">
                        <label class="small mx-3 float-right">کاربری نام<span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-sm"/>
                    </div>
                    <div class="col-sm-6 float-right my-3 my-sm-2">
                        <label class="small mx-3 float-right">رمز عبور<span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-sm"/>
                    </div>
                </div>
                <hr class="d-none d-sm-block">
                <div class="form-inline my-3">
                    <div class="col-sm-6 float-left">
                        <label class="small mx-3 float-right">&nbsp; &nbsp; نام<span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-sm"/>
                    </div>
                    <div class="col-sm-6 float-right my-3 my-sm-2">
                        <label class="small mx-3 float-right">نام خانوادگی<span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-sm"/>
                    </div>
                </div>
                <div class="form-inline my-3">
                    <div class="col-sm-6 float-left">
                        <label class="small mx-3 float-right">کد ملی<span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-sm" />
                    </div>
                    <div class="col-sm-6 float-right my-3 my-sm-2">
                        <label class="small mx-3 float-right">کد دانشجویی<span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-sm" />
                    </div>
                </div>
                <hr class="d-none d-sm-block">
                <div class="form-inline my-3">
                    <div Mask="Number" class="col-sm-6 float-left">
                        <label class="small mx-3 float-right">موبایل<span class="text-danger">*</span></label>
                        <input class="form-control form-control-sm" type="text" />
                    </div>
                    <div Mask="Number" class="col-sm-6 float-right my-3 my-sm-2">
                        <label class="small mx-3 float-right">تلفن ثابت<span class="text-danger">*</span></label>
                        <input class="form-control form-control-sm" type="text" />
                    </div>
                </div>
                <div class="form-inline my-3">
                    <div IsLtr="true" class="col-sm-6 float-left">
                        <label class="small mx-3 float-right">ایمیل<span class="text-danger">*</span></label>
                        <input type="email" class="form-control form-control-sm" />
                    </div>
                    <div Mask="Number" MinLen="10" class="col-sm-6 float-right my-3 my-sm-2">
                        <label class="small mx-3 float-right">کد پستی</label>
                        <input class="form-control-sm form-control" type="text" maxlength="10" />
                    </div>
                </div>
                <br class="d-sm-inline d-none">
                <div class="form-inline my-3" dir="ltr" >

                    <div class=" mx-sm-auto mr-3 mr-sm-0" >
                        <input class="form-control form-control-sm" type="hidden" name="_token">
                        <button class="btn btn-success text-white btn-sm" type="submit">ثبت تغییرات</button>
                    </div>
                </div>
            </form>
        </div>
</template>

<script>
    export default {
        name: 'edit-prof',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>