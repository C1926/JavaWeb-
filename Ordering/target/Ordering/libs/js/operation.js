//控制菜单数量加减
$(function () {
    var number=0;
    $('.food_ordering').on('click','.add',function(){
        var parent = $(this).parent('.food_select');
        var ele=$(parent).children('.itemnum');
        var num=ele.val();
        $(ele).attr('value',parseInt(num)+ 1);
        $(ele).prop('value',parseInt(num)+ 1); //输入框输入导致页面数据没法改变，不知原因。
    });
    $('.food_ordering').on('click','.remove',function(){
        var parent = $(this).parent('.food_select');
        var ele=$(parent).children('.itemnum');
        var num=ele.val();
        if (parseInt(num) > 0) {
            $(ele).attr('value',parseInt(num)- 1);
            $(ele).prop('value',parseInt(num)- 1);
        }
    });
    $('.food_ordering').on('blur','.itemnum',function () {
        number=$(this).val();
        if (isNaN(parseInt(number)) == true) {
            number=0;
        }
        $(this).attr('value',parseInt(number));//改变html中的value值
        $(this).prop('value',parseInt(number));//改变页面中文本框的值
    });
});