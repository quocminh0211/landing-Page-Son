var xhr = new XMLHttpRequest();
xhr.open("GET", "/images/FEEDBACK", true);
xhr.responseType = 'document';
xhr.onload = () => {
if (xhr.status === 200) {
    var elements = xhr.response.getElementsByTagName("a");
    for (x of elements) {
    if ( x.href.match(/\.(jpe?g|png|gif|jpg|jpeg)$/) ) { 
        let img = document.createElement("img");
        img.src = x.href;                         
        document.querySelector("#image-about-us2").appendChild(img).setAttribute("style", "height: 500px"); 
       } 
    }
    Slick2();
  ;
} 
else {
    alert('Request failed. Returned status of feeback ' + xhr.status);
}
}
xhr.send()   

function Slick2(){
    $('.autoplay2').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    lazyLoad: 'ondemand',
                    autoplay: true,
                    autoplaySpeed: 1000,
                    });
  }     