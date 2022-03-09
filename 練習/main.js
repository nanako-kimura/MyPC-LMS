function process_tasks(value) {
    var lines = document.getElementsByClassName("contents-display-flex-exchange-sp");
    let len = lines.length;
    var now = Date.now();

    var hide_list = new Set(value['hide-course-list']);
    var highlight_flag = value['highlight-check']
    var color = value['highlight-color'];

    // if values are not set
    if (highlight_flag == undefined) highlight_flag = true;

    if (color == undefined) color = 'yellow';
}

$(function(){
    'use strict';
  
    $.ajax({
        type:'GET',
        url:'/lms/online',
        dataType:'html'
    }).then(
        function(data){
            $("#timetable .header:first").before($(data).find(".block.clearfix"));
            chrome.storage.sync.get(
                ['hide-course-list', 'highlight-check', 'highlight-color'],
                process_tasks
            );
        },
        function(){
            alert("失敗");
        }
    );
});