var links = {
    setcolor : function(color){
    var a_lst = document.querySelectorAll('a');
        var i = 0;
        while(i < a_lst.length){
        a_lst[i].style.color = color;
        i = i + 1;
    }
}
}
var Body = {
    set_color:function (color){
    document.querySelector('body').style.color = color;
},
    set_background_color: function (color){
    document.querySelector('body').style.backgroundColor=color;
}
}

var Head = {
    set_color:function (color){
        document.querySelector('#head').style.color= color;
    }
}


function night_day_handler(self){

    if(self.value==='night'){
    // 아이디가 셀렉터이면 body가 아닌 #id_name 으로 적어주면됨
        Body.set_color('white')
        Body.set_background_color('black')

        self.value = 'day';

        links.setcolor('powderblue')
        
        Head.set_color('white')

    } else {
        Body.set_color('black')
        Body.set_background_color('white')

        self.value = 'night';
        
        links.setcolor('blue')

        Head.set_color('black')

    }
}