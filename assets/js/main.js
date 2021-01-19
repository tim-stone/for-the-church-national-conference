// This function toggles the overlay for speakers descriptions

window.onload=function(){

//Toggles Greear's Description
  document.getElementById("overlay-greear").addEventListener("click", function(){
    var a =document.getElementsByClassName("speakers-description-greear");

        a[0].style.display = 'block';

  });

  document.getElementById("close-1").addEventListener("click", function(){
    var a =document.getElementsByClassName("speakers-description-greear");

      a[0].style.display='none';

  });

//Toggles Loritts' Description
  document.getElementById("overlay-loritts").addEventListener("click", function(){
    var b =document.getElementsByClassName("speakers-description-loritts");

      b[0].style.display = 'block';

  });

  document.getElementById("close-2").addEventListener("click", function(){
    var b =document.getElementsByClassName("speakers-description-loritts");

      b[0].style.display='none';

  });

//Toggles Merida's Description
  document.getElementById("overlay-merida").addEventListener("click", function(){
    var c =document.getElementsByClassName("speakers-description-merida");

      c[0].style.display ='block';

  });

  document.getElementById("close-3").addEventListener("click", function(){
    var c =document.getElementsByClassName("speakers-description-merida");

      c[0].style.display='none';

  });

//Toggles Allen's Description
  document.getElementById("overlay-allen").addEventListener("click", function(){
    var d =document.getElementsByClassName("speakers-description-allen");

      d[0].style.display = 'block';

  });

  document.getElementById("close-4").addEventListener("click", function(){
    var d =document.getElementsByClassName("speakers-description-allen");

      d[0].style.display='none';

  });

//Toggles Strachan's Description
  document.getElementById("overlay-strachan").addEventListener("click", function(){
    var e =document.getElementsByClassName("speakers-description-strachan");

      e[0].style.display = 'block';

  });

  document.getElementById("close-5").addEventListener("click", function(){
    var e =document.getElementsByClassName("speakers-description-strachan");

      e[0].style.display='none';

  });

//Toggles Wilson's Description
  document.getElementById("overlay-wilson").addEventListener("click", function(){
    var f =document.getElementsByClassName("speakers-description-wilson");

      f[0].style.display = 'block';

  });

  document.getElementById("close-6").addEventListener("click", function(){
    var f =document.getElementsByClassName("speakers-description-wilson");

      f[0].style.display='none';

  });
}
