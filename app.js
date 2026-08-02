document.addEventListener('DOMContentLoaded', () => {
  // イベント開始日時を設定（2026年12月13日 13:00）
  const targetDate = new Date('2026-12-13T13:00:00+09:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      // イベント開始後の表示
      document.getElementById('countdown').innerHTML = '<p style="color:#ffffff; font-weight:bold; font-size:1.2rem; margin:0;">25th Anniversary Event START!</p>';
      return;
    }

    // 残り時間の計算
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // 1桁の場合は頭に0を補完して2桁表示にする（例: 05）
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  // 初回実行 ＆ 1秒（1000ミリ秒）ごとに更新
  updateCountdown();
  setInterval(updateCountdown, 1000);
});