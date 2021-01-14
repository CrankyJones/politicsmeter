$(document).ready(function () {
  $("#formOne").submit(function (event) {
    $("#left").hide();
    $("#leanleft").hide();
    $("#leanright").hide();
    $("#right").hide();
    const rights = parseInt($("input:radio[name=rights]:checked").val());
    const healthcare = parseInt($("input:radio[name=healthcare]:checked").val());
    const marriage = parseInt($("input:radio[name=marriage]:checked").val());
    event.preventDefault();
  
  if (rights + healthcare + marriage === 3) {
  $("#left").show();
  } else if (rights + healthcare + marriage === 2) {
  $("#leanleft").show();
  } else if (rights + healthcare + marriage === 1) {
  $("#leanright").show();
  } else if (rights + healthcare + marriage === 0) {
  $("#right").show();
  }
  });
});

