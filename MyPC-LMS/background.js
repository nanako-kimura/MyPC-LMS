chrome.runtime.onMessage.addListener(
  function (request, sender, callback) {

    const getStorage = (key = null) => new Promise(resolve => {
        chrome.storage.local.get(key, resolve);
    });

    // 「ウェブアプリ」としてデプロイしてるGASのURL
    const gasUrl = "https://script.google.com/a/macros/g.ecc.u-tokyo.ac.jp/s/AKfycbxkFgzfV4IOqIDBK69pxs1LQZah48QzXXsimUB3dVlRF0Ikic7hbFBxSm3iChkJUBas/exec";

    getStorage(['id','name'])
    .then(( items ) => {
      console.log(items)
        const params = {method : "POST", body : JSON.stringify({id : items.id, name: items.name})};
        fetch(gasUrl,params)
        .then(response => {
            return response.text();
        })
        .then(json => {
            console.log(json)
            chrome.storage.local.set({'schedule': json}, function () {
            });
        })
    })
    return true;
  }
);