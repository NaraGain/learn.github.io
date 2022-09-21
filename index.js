function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  window.onscroll = ()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetWidth){
     console.log(document.body.offsetHeight)
     document.getElementById('#intro').style.color = 'red'
    }else{
   
    }
  }