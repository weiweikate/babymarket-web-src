$.fn.fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    navigation: true,
    'scrollingSpeed':800,
    //'scrollOverflow':true,
    'easing':'easeOutQuart',
    onLeave: function (index) {
        //console.log(index)
        if(index=="2"){
            console.log(11111)
            $(".imgDiv").find('img').eq(1).animate({
                right: 0
            }, 200);
        }else if(index=='3'){
            $(".page3").find('img').animate({
                bottom:-200
            }, 200);
        }else if(index=='4'){
            $(".page4").find('img').eq(1).animate({
                bottom:-70
            }, 200);
        }
    },
    afterLoad:function(index){
        console.log(index)
        if(index=="page2"){
            $(".imgDiv").find('img').eq(1).animate({
                right: 230
            }, 1000);
        }else if(index=="page3"){
            $(".page3").find('img').animate({
                bottom:-130
            }, 1000);
        }else if(index=="page4"){
            $(".page4").find('img').eq(1).animate({
                bottom:0
            }, 1000);
        }
    }
});
