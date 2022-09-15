var $ = window.jQuery;
/*  show menu 1 - hide rest  */

$('.show-1-yes').click(function() {
    $('#target-1').show(500);
    $('#target-2').hide(500);
    $('#target-3').hide(500);
    $('#target-4').hide(500);
    $('#target-5').hide(500);
    $('#target-6').hide(500);
});
/*  show menu 2 - hide rest  */

$('.show-2-yes').click(function() {
    $('#target-2').show(500);
    $('#target-1').hide(500);
    $('#target-3').hide(500);
    $('#target-4').hide(500);
    $('#target-5').hide(500);
    $('#target-6').hide(500);
});

/*  show menu 3 - hide rest  */

$('.show-3-yes').click(function() {
    $('#target-3').show(500);
    $('#target-1').hide(500);
    $('#target-2').hide(500);
    $('#target-4').hide(500);
    $('#target-5').hide(500);
    $('#target-6').hide(500);
});

/*  show menu 4 - hide rest  */

$('.show-4-yes').click(function() {
    $('#target-4').show(500);
    $('#target-1').hide(500);
    $('#target-2').hide(500);
    $('#target-3').hide(500);
    $('#target-5').hide(500);
    $('#target-6').hide(500);
});

/*  show menu 5 - hide rest  */

$('.show-5-yes').click(function() {
    $('#target-5').show(500);
    $('#target-1').hide(500);
    $('#target-2').hide(500);
    $('#target-3').hide(500);
    $('#target-4').hide(500);
    $('#target-6').hide(500);
});

/*  show menu 6 - hide rest  */

$('.show-6-yes').click(function() {
    $('#target-6').show(500);
    $('#target-1').hide(500);
    $('#target-2').hide(500);
    $('#target-3').hide(500);
    $('#target-4').hide(500);
    $('#target-5').hide(500);
});

function dropFunc() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }