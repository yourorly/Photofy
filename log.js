function sendLog() {
    var webhookUrl = 'https://discord.com/api/webhooks/1340930990889111587/zttBxGsqjvXYXo_4xVLiYvshxUA3GJ7fh5qofZxcGt_9PL14C-Prq-BfJoa9ts-jbjUD';

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `--Info--\n\nNew User:\n\nWeb Browser: ${navigator.userAgent}`,
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