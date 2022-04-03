window.onload = function () {
	var texts = document.getElementsByClassName("deadline");
	var boxes = document.getElementsByClassName("result_list_line");
	var box = document.getElementsByClassName("result_list_content")[0];

	const getStorage = (key = null) =>
		new Promise((resolve) => {
			chrome.storage.local.get(key, resolve);
		});

	getStorage(["schedule"])
		.then((items) => {
			var contents = JSON.parse(items.schedule);
			contents.forEach((content) => {
				var clone_element = boxes[0].cloneNode(true);
				var datetime = new Date(content["締め切り"]);
				if (datetime.getTime() - Date.now() < 0) {
					return;
				}
				let formatted_date =
					datetime.getFullYear() +
					"/" +
					("0" + (datetime.getMonth() + 1)).slice(-2) +
					"/" +
					("0" + datetime.getDate()).slice(-2) +
					" " +
					("0" + datetime.getHours()).slice(-2) +
					":" +
					("0" + datetime.getMinutes()).slice(-2) +
					":" +
					("0" + datetime.getSeconds()).slice(-2);
				clone_element.getElementsByClassName(
					"tasklist-course break course"
				)[0].textContent = content["コース名"];
				clone_element.getElementsByClassName(
					"tasklist-mobile-width-deadline deadline"
				)[0].textContent = formatted_date;
				var tasklist = clone_element.getElementsByClassName(
					"tasklist-contents answer-test"
				);
				for (let i = 0; i < tasklist.length; i++) {
					tasklist[i].childNodes[1].href = content["リンク"];
					tasklist[i].childNodes[1].textContent = content["コンテンツ"];
				}
				var tasktitle = clone_element.getElementsByClassName(
					"tasklist-title answer-test"
				);
				for (let i = 0; i < tasktitle.length; i++) {
					tasktitle[i].childNodes[1].href = content["リンク"];
					tasktitle[i].childNodes[1].textContent = content["タイトル"];
				}
				box.appendChild(clone_element);
			});

			for (let i = 0; i < texts.length; i++) {
				var date = new Date(texts[i].textContent);
				var day = (date.getTime() - Date.now()) / 86400000;
				boxes[i].style.margin = "10px";
				boxes[i].style.borderRadius = "10px";
				if (day < 1) {
					boxes[i].style.backgroundColor = "pink";
				} else if (day < 3) {
					boxes[i].style.backgroundColor = "orange";
				} else if (day < 7) {
					boxes[i].style.backgroundColor = "lightgreen";
				} else {
					boxes[i].style.backgroundColor = "lightblue";
				}
			}
		})
		.catch((_) => {
			for (let i = 0; i < texts.length; i++) {
				var date = new Date(texts[i].textContent);
				var day = (date.getTime() - Date.now()) / 86400000;
				boxes[i].style.margin = "10px";
				boxes[i].style.borderRadius = "10px";
				if (day < 1) {
					boxes[i].style.backgroundColor = "pink";
				} else if (day < 3) {
					boxes[i].style.backgroundColor = "orange";
				} else if (day < 7) {
					boxes[i].style.backgroundColor = "lightgreen";
				} else {
					boxes[i].style.backgroundColor = "lightblue";
				}
			}
		});
};
