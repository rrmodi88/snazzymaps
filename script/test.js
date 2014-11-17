$(document).ready(function (){
  
  $("#cmn-toggle-5").click(function () {

    $("#cmn-toggle-5").attr("checked") ? callMap() : callList();

  })

  $("#cmn-toggle-5").attr("checked") ? callMap() : callList();
  
function callMap()
{
    alert("checked");
}
function callList()
{
    jQuery("#map").hide();
    jQuery(".list-view").show();
}
})
