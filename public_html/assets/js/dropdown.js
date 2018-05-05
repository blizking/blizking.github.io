$("#myselect option").prop("selected",true);

$("#myselect").change(function(){
  $(".categories").hide();
  $("#myselect option:selected").each(function(){
    $(".cat"+$(this).val()).show();
  });
});
$(function () {
    $(".tabs-content").hide().first().show();
    $(".tabs li:first").addClass("active");

    $(".tabs a").on('click', function (e) {
        e.preventDefault();
        $(this).closest('li').addClass("active").siblings().removeClass("active");
        $($(this).attr('href')).show().siblings('.tabs-content').hide();
    });
	 var hash = $.trim( window.location.hash );

    if (hash) $('.tabs a[href$="'+hash+'"]').trigger('click');

});


$("#machine-cat option").prop("selected",true);

$("#machinecat").change(function(){
  $(".machine-cat").hide();
  $("#machinecat option:selected").each(function(){
    $(".machine-cat"+$(this).val()).show();
  });
});
$(function () {
    $(".tabs-content").hide().first().show();
    $(".tabs li:first").addClass("active");

    $(".tabs a").on('click', function (e) {
        e.preventDefault();
        $(this).closest('li').addClass("active").siblings().removeClass("active");
        $($(this).attr('href')).show().siblings('.tabs-content').hide();
    });

});


$("#submachine-cat option").prop("selected",true);

$("#submachinecat").change(function(){
  $(".sub-machine-cat").hide();
  $("#submachinecat option:selected").each(function(){
    $(".sub-machine-cat"+$(this).val()).show();
  });
});
$(function () {
    $(".tabs-content").hide().first().show();
    $(".tabs li:first").addClass("active");

    $(".tabs a").on('click', function (e) {
        e.preventDefault();
        $(this).closest('li').addClass("active").siblings().removeClass("active");
        $($(this).attr('href')).show().siblings('.tabs-content').hide();
    });

});


$("#lastmachinecat option").prop("selected",true);

$("#lastmachinecat").change(function(){
  $(".last-machine-cat").hide();
  $("#lastmachinecat option:selected").each(function(){
    $(".last-machine-cat"+$(this).val()).show();
  });
});
$(function () {
    $(".tabs-content").hide().first().show();
    $(".tabs li:first").addClass("active");

    $(".tabs a").on('click', function (e) {
        e.preventDefault();
        $(this).closest('li').addClass("active").siblings().removeClass("active");
        $($(this).attr('href')).show().siblings('.tabs-content').hide();
    });


});


