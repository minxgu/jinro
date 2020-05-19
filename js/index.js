$(document).ready(function(){
    menuTab();
    answertab();
    tvcfVideo();
    sliderComponent();
    pager();
    textScroll();
});

function answertab(){
    $(".checkTarget").click(function(){
        if($(this).hasClass("active")===true){
            $(this).removeClass("active");
        }else{
            $(".checkTarget").removeClass("active");
            $(this).addClass("active");
        }
    });
};

function menuTab(){
    $('header nav ul li a[href="#"]').click(function(e) {
        e.preventDefault();
    });
    $("header nav ul li").click(function(){
        if($(this).hasClass("active")===true){
            $(this).removeClass("active");
        }else{
            $(this).removeClass("active");
            $(this).addClass("active");
        }
    });
};

function tvcfVideo(){
    $('#play').on('click', function() {
        $("#player")[0].src += "?autoplay=1";
        $('#player').show();
        $('#videoCover').hide();
        $('#play').hide();
    });
};

function sliderComponent(){
    $('.slider').bxSlider({
        mode: 'horizontal', // 'horizontal' : 좌,우 'vertical' : 상,하 'fade' : fade in, out
        speed: 500, // m/s ex > 1000 = 1s
        easing : 'ease-in-out',
        minSlides: 1, //Carousel은 여러개의 객체를 보여주게 하는데, minSlides는 화면 크기가 줄어도 최저 몇개를 보여줄 것인가 의 값.  
        maxSlides: 3, //maxSlides는 최대 몇개의 객체를 보여줄 것인가 의 값
        slideMargin: 90, // img와 img 사이 간격
        moveSlides : 1, // 전환시 한번에 이동할 slide 수.
        slideWidth : 530, //각 슬라이드 별 width.
        shrinkItems : false, //carousel에 전체 이미지를 다 뿌리고, min, max 수치를 기반으로 뷰포트에 맞게 이미지를 축소.
        touchEnabled : false
    });
};

function textScroll(){
    $("section.ceo").addClass("scroll");
    $(document).scroll(function(){
        setTimeout(function(){
            if($(".pagination li:first-of-type a").hasClass("active")){
                $("section.panel").removeClass("scroll");
                $("section.ceo").addClass("scroll");
            }else if($(".pagination li:nth-of-type(2) a").hasClass("active")){
                $("section.panel").removeClass("scroll");
                $("section.slogan").addClass("scroll");
            }else if($(".pagination li:nth-of-type(3) a").hasClass("active")){
                $("section.panel").removeClass("scroll");
                $("section.management").addClass("scroll");
            }else if($(".pagination li:nth-of-type(4) a").hasClass("active")){
                $("section.panel").removeClass("scroll");
                $("section.corevalues").addClass("scroll");
            }else if($(".pagination li:last-of-type a").hasClass("active")){
                $("section.panel").removeClass("scroll");
                $("section.location").addClass("scroll");
            }
        },500);
    });
};

function pager() {
    $.scrollify({
        section: ".panel",
        scrollbars: false,
        before: function (i, panels) {
            var ref = panels[i].attr("data-section-name");

            $(".pagination .active").removeClass("active");

            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function (i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span><span></span><span></span></a></li>";
            });

            pagination += "</ul>";

            $(".ceo").append(pagination);
        }
    });
    /*
  
    Tip: The two click events below are the same:
  
    $(".pagination a").on("click",function() {
      $.scrollify.move($(this).attr("href"));
    });
  
    */
    $(".pagination a").on("click", $.scrollify.move);
};