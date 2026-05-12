document.addEventListener("DOMContentLoaded", () => {

    // 1. СЕКУНДОМЕР ПРОЕКТА (STOPWATCH)
    // Укажи здесь точную дату, когда ты начал проект (Год-Месяц-День T Время)
    // Сейчас стоит 1 декабря 2024 года, 12:00
    const projectStartDate = new Date('2026-05-01T12:00:00Z'); 

    function updateStopwatch() {
        const now = new Date();
        const diff = now.getTime() - projectStartDate.getTime();

        // Считаем прошедшее время
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        const minutes = Math.floor((diff / 1000 / 60) % 60).toString().padStart(2, '0');
        const seconds = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');

        // Выводим в HTML
        document.getElementById('days-count').innerText = days;
        document.getElementById('live-clock').innerText = `${hours}:${minutes}:${seconds}`;
    }
    
    // Обновляем секундомер каждую секунду
    setInterval(updateStopwatch, 1000);
    updateStopwatch();

    // 2. ОТКРЫТИЕ ОКНА АВТОРИЗАЦИИ
    const modal = document.getElementById('terminalModal');
    const usbBtn = document.getElementById('usbBtn');
    const closeBtn = document.getElementById('closeTerminalBtn');

    function openTerminal() {
        modal.style.display = 'flex';
        document.getElementById('emailInput').focus();
    }

    function closeTerminal() {
        modal.style.display = 'none';
    }

    usbBtn.addEventListener('click', openTerminal);
    closeBtn.addEventListener('click', closeTerminal);
});