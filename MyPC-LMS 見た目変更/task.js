window.onload = function() {
    var texts = document.getElementsByClassName('deadline');
    var boxes = document.getElementsByClassName('result_list_line');
    var box = document.getElementsByClassName('result_list_content')[0];
    
    for(let i=0;i<3;i++){
        var clone_element = boxes[0].cloneNode(true);  
        clone_element.getElementsByClassName("tasklist-course break course")[0].textContent = "課題テスト"
        clone_element.getElementsByClassName('tasklist-mobile-width-deadline deadline')[0].textContent = "2020/04/01 00:00:00"
        var tasklist = clone_element.getElementsByClassName("tasklist-contents answer-test")
        for(let i=0;i<tasklist.length;i++){
            tasklist[i].childNodes[1].href = "https://www.yahoo.co.jp"
            tasklist[i].childNodes[1].textContent = "わーい"
        }
        var tasktitle = clone_element.getElementsByClassName("tasklist-title answer-test")
        for(let i=0;i<tasktitle.length;i++){
            tasktitle[i].childNodes[1].href = "https://www.yahoo.co.jp"
            tasktitle[i].childNodes[1].textContent = "HHH"
        }
        box.appendChild(clone_element);
    }

    for (let i = 0; i < texts.length; i++) {
        var date = new Date(texts[i].textContent)
        var day = (date.getTime()-Date.now())/86400000
        // del[i].style.display = "none";
        boxes[i].style.margin = "10px"; 
        boxes[i].style.borderRadius = "10px";
        boxes[i].style.boxShadow = "0 10px 25px 0 rgba(0, 0, 0, .5)";
        if(day<30){
            boxes[i].style.backgroundColor = "pink";
        }else{
            boxes[i].style.backgroundColor = "lightblue";
        }
    }
};

// document.getElementById("page_main").onclick = function() {
//     if(document.getElementById("contents_wrapper").classList.contains( "contents_sidemenu_open" )){
//         document.getElementById("contents_wrapper").classList.remove("contents_sidemenu_open")
//         document.getElementById("contents_wrapper").classList.add("sidemenu_hide")
//         document.getElementById("sidemenu").classList.add("sidemenu_close")
//     }
// };