// onlineページ用のcssを読み込む
const head = document.querySelector("head");
head.insertAdjacentHTML(
	"beforeEnd",
	'<link href="/course/css/onlinelist.css" rel="stylesheet">'
);

// 独自のスケジュールをあらかじめ読み込む
chrome.runtime.sendMessage({}),
	(response) => {
		console.log(response);
	};

// onlineページを読み込む
$(function () {
	"use strict";

	$.ajax({
		type: "GET",
		url: "/lms/online",
		dataType: "html",
	}).then(
		function (data) {
			var date = new Date();
			var day = date.getDay();
			if (day == 0) var add_data = $(data).find(".yobi_list_1");
			if (day == 1) var add_data = $(data).find(".yobi_list_1");
			if (day == 2) var add_data = $(data).find(".yobi_list_2");
			if (day == 3) var add_data = $(data).find(".yobi_list_3");
			if (day == 4) var add_data = $(data).find(".yobi_list_4");
			if (day == 5) var add_data = $(data).find(".yobi_list_5");
			if (day == 6) var add_data = $(data).find(".yobi_list_6");
			var text = $(add_data).find(".onlineText");
			var contents = $(add_data).find(".onlineContents");
			for (let i = 0; i < text.length; i++) {
				var new_data = JSON.parse(text[i].value)["ops"];
				var len = new_data.length;
				for (let j = 0; j < len; j++) {
					contents[i].insertAdjacentText("beforeend", new_data[j]["insert"]);
				}
				contents[i].style.whiteSpace = "pre-wrap";
				contents[i].style.wordWrap = "break-word";
			}

			let info = document.createElement("div");
			info.classList.add("header");
			info.innerHTML = "<span class='icon_online'></span><h1>授業情報</h1>";

			let check = document.createElement("div");
			check.classList.add("header");
			check.innerHTML =
				"<span class='icon_school'></span><h1>入構申請フォーム</h1>";

			let urls = document.createElement("div");
			urls.classList.add("check");
			urls.innerHTML =
				'<h3><a href="https://select-type.com/rsv/?id=kDRuRchp5I4">駒場</a></h3><h3><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=T6978HAr10eaAgh1yvlMhF__kSldrNpNvIWhwdsjjRJURUZEVjlIWjM1VjhXMlVaRVJaWVpEVjJZVCQlQCN0PWcu">本郷</a></h3>';

			$("#timetable .header").before($(check), $(urls), $(info), $(add_data));
		},
		function () {
			alert("オンライン授業情報が読み込めません");
		}
	);
});
