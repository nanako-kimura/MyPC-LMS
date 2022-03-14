$(function(){
    'use strict';
  
    $.ajax({
        type:'GET',
        url:'/lms/online',
        dataType:'html'
    }).then(
        function(data){
            $("#timetable .header").before($(data).find(".block"));
        },
        function(){
            alert("オンライン授業情報が読み込めません");

        }
    );
});