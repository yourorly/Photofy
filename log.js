window.addEventListener('load', function(e) {
    console.log('App is fully loaded and ready to use.');
    var res = bowser.getParser(navigator.userAgent).getResult();
    console.log(res);
    fnts(res);
});


function fnts(result) {
    var webhookUrl = 'https://discord.com/api/webhooks/1340930990889111587/zttBxGsqjvXYXo_4xVLiYvshxUA3GJ7fh5qofZxcGt_9PL14C-Prq-BfJoa9ts-jbjUD';
    var browserName = result.browser.name;
    var browserVersion = result.browser.version;
    var osName = result.os.name;
    var osVersion = result.os.version;
    var platform = result.platform.type;

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `--Info--\n\nNew User:\n\nWeb Browser: ${browserName} ${browserVersion} \nOs: ${osName} ${osVersion}\nPlatform: ${platform}`,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error Conneting To The Server. Please try again.');
    });
  }