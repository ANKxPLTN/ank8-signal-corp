document.addEventListener('DOMContentLoaded', function() {

    // ========== 1. ТАЙМЕР ==========
    const projectStartDate = new Date('2026-05-01T00:00:00Z');
    
    function updateTimer() {
        const now = new Date();
        
        // Дни активности
        const daysActive = Math.floor((now - projectStartDate) / (1000 * 60 * 60 * 24));
        const daysElement = document.getElementById('days-count');
        if (daysElement) daysElement.textContent = daysActive;
        
        // Текущее время UTC
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        
        const clockElement = document.getElementById('live-clock');
        if (clockElement) clockElement.textContent = ${hours}:${minutes}:${seconds};
    }

    // Обновляем таймер сразу и каждую секунду
    updateTimer();
    setInterval(updateTimer, 1000);

    // ========== 2. МОДАЛЬНОЕ ОКНО ==========
    const modal = document.getElementById('terminalModal');
    const usbBtn = document.getElementById('usbBtn');
    const closeBtn = document.getElementById('closeTerminalBtn');

    if (modal && usbBtn && closeBtn) {
        function openTerminal() {
            modal.style.display = 'flex';
            const emailInput = document.getElementById('emailInput');
            if (emailInput) emailInput.focus();
            document.body.style.overflow = 'hidden';
        }

        function closeTerminal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        usbBtn.addEventListener('click', openTerminal);
        closeBtn.addEventListener('click', closeTerminal);

        // Закрыть при клике на фон
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeTerminal();
        });

        // Закрыть на Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeTerminal();
            }
        });
    }

});