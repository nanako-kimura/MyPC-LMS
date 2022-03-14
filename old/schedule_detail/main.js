
$(function(){
    'use strict';
  
    $.ajax({
        type:'GET',
        url:'/lms/online',
        dataType:'html'
    }).then(
        function(data){
                var date = new Date () ;
                var day = date.getDay() ;	
                if(day == 0)var add_data = $(data).find(".yobi_list_1");
                if(day == 1)var add_data = $(data).find(".yobi_list_1");
                if(day == 2)var add_data = $(data).find(".yobi_list_2");   
                if(day == 3)var add_data = $(data).find(".yobi_list_3");           
                if(day == 4)var add_data = $(data).find(".yobi_list_4");
                if(day == 5)var add_data = $(data).find(".yobi_list_5");
                if(day == 6)var add_data = $(data).find(".yobi_list_6");
                var text = $(add_data).find(".onlineText")
                var contents = $(add_data).find(".onlineContents")
                for(let i=0;i<text.length;i++){
                    var new_data = JSON.parse(text[i].value)["ops"]
                    var len = new_data.length
                    for(let j=0;j<len;j++){
                        contents[i].insertAdjacentText('beforeend', new_data[j]["insert"]);
                    }
                    contents[i].style.whiteSpace = "pre-wrap"
                    contents[i].style.wordWrap = "break-word";
                }
                $("#timetable .header").before($(add_data));
            },
        function(){
            alert("オンライン授業情報が読み込めません");

        }
    );
});