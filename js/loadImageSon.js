var xhr1 = new XMLHttpRequest();
xhr1.open("GET", "/images/ẢNH TEST/01", true);
xhr1.responseType = 'document';
xhr1.onload = () => {
if (xhr1.status === 200) {
    var elements = xhr1.response.getElementsByTagName("a");
    for (x of elements) {
    if ( x.href.match(/\.(jpe?g|png|gif|jpg|jpeg)$/) ) { 
        let img = document.createElement("img");
        img.src = x.href;                         
        document.querySelector("#image-about-us3").appendChild(img).setAttribute("style", "height: 500px");    
       } 
    }
    Slick3();
  ;
} 
else {
    alert('Request failed. Returned status of ' + xhr1.status);
}
}
xhr1.send()   

function Slick3(){
    $('.autoplay3').slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    lazyLoad: 'ondemand',
                    autoplay: true,
                    autoplaySpeed: 500,
                    });
  }     

var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "/images/ẢNH TEST/04", true);
xhr2.responseType = 'document';
xhr2.onload = () => {
if (xhr2.status === 200) {
    var elements = xhr2.response.getElementsByTagName("a");
    for (x of elements) {
    if ( x.href.match(/\.(jpe?g|png|gif|jpg|jpeg)$/) ) { 
        let img = document.createElement("img");
        img.src = x.href;                         
        setAttributes( document.querySelector("#image-about-us4").appendChild(img), {"style": "height: 500px", "href": x.href}); 
       } 
    }
    Slick4();
  ;
} 
else {
    alert('Request failed. Returned status of ' + xhr2.status);
}
}
xhr2.send()   

function Slick4(){
    $('.autoplay4').slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    lazyLoad: 'ondemand',
                    autoplay: true,
                    autoplaySpeed: 1000,
                    });
  } 

  function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  var xhr3 = new XMLHttpRequest();
  xhr3.open("GET", "/images/HỘP + SON_", true);
  xhr3.responseType = 'document';
  xhr3.onload = () => {
if (xhr3.status === 200) {
    var elements = xhr3.response.getElementsByTagName("a");
    for (x of elements) {
    if ( x.href.match(/\.(jpe?g|png|gif|jpg|jpeg)$/) ) { 
        let img = document.createElement("img");
        img.src = x.href;                         
        setAttributes( document.querySelector("#image-about-us5").appendChild(img), {"style": "height: auto", "href": x.href}); 
       } 
    }
    Slick5();
  ;
} 
else {
    alert('Request failed. Returned status of ' + xhr3.status);
}
}
xhr3.send()   

function Slick5(){
    $('.autoplay5').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    lazyLoad: 'ondemand',
                    autoplay: true,
                    autoplaySpeed: 1000,
                    });
  } 
