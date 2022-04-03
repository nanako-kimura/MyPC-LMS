function Save() {
	var id = document.getElementById("id").value;
	var name = document.getElementById("name").value;
	const gasUrl =
		"https://script.google.com/a/macros/g.ecc.u-tokyo.ac.jp/s/AKfycbxkFgzfV4IOqIDBK69pxs1LQZah48QzXXsimUB3dVlRF0Ikic7hbFBxSm3iChkJUBas/exec";
	const params = {
		method: "POST",
		body: JSON.stringify({ id: id, name: name }),
	};

	fetch(gasUrl, params)
		.then((response) => {
			console.log(response);
			return response.text();
		})
		.then((json) => {
			console.log(json);
			console.log(typeof json);
			chrome.storage.local.set(
				{ id: id, name: name, schedule: json },
				function () {}
			);
			window.close();
		});
}

function Load() {
	chrome.storage.local.get("id", function (items) {
		document.getElementById("id").value = items.id; // Alertmsgキーと対に記録された文字列を、idがinput_messageのテキストボックスに出力
	});
	chrome.storage.local.get("name", function (items) {
		document.getElementById("name").value = items.name; // Alertmsgキーと対に記録された文字列を、idがinput_messageのテキストボックスに出力
	});
}

document.addEventListener("DOMContentLoaded", Load); // オプションページ（options.html）の読み込みと解析が完了したらLoad関数を実行

document.getElementById("save_button").addEventListener("click", Save); // 保存ボタン（save_button）がクリックされたらSave関数を実行
