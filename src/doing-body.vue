<template>
    <div class="container container1 card-white col-sm-8 entrance-style-filters card-white col-8 mx-auto loading-mode">

        <div class="font-title1">
            موضوع
        </div>

        <div class="font-explain">
            شرح
        </div>

        <div class="row">
            <div class="col-12 col-sm-12" id="reply" style="">
                <label class="form-style" for="reply"><b>افزودن توضیحات</b></label>
                <div class="div-input-each">
                    <input type="text" class="form-control-reply" id="changing-the-sitiuation" name="reply">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="row col-3 col-sm-3 m-3" style="">
                <label id="closed-select" class="container checkmark-text">بسته
                    <input type="radio" name="radio" onclick="closeTextField()">
                    <span class="checkmark"></span>
                </label>
                <label id="ref-select" class="container checkmark-text" style="float: right" onclick="openTextField()">ارجاع
                    <input type="radio" name="radio">
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

                    <div style="display: inline-block; float: left;" >
                        <select onchange="myFunction(this) " class="input-name-user selection-style">
                            <option>استاد</option>
                            <option>سایرین</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class=" m-3" style="">
                <button id="send-btn" type="button" class="btn m-3" style="background-color: var(--stone);" disabled>
                    ارسال
                </button>
            </div>


        </div>

        <div class="empty-div">

        </div>
    </div>
</template>

<script>

</script>
