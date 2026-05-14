// ========== ИНИЦИАЛИЗАЦИЯ ==========

document.addEventListener('DOMContentLoaded', function() {

    // ========== 1. ТАЙМЕР (Дни, Часы, Минуты, Секунды) ==========

    function updateStopwatch() {
        const startDate = new Date('2026-05-01T00:00:00Z');
        const now = new Date();
        
        // Дни
        const daysActive = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
        document.getElementById('days-count').textContent = daysActive;
        
        // Время UTC
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        document.getElementById('live-clock').textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Обновляем сразу
    updateStopwatch();
    
    // Обновляем каждую секунду
    setInterval(updateStopwatch, 1000);

    // ========== 2. МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ ==========

    const modal = document.getElementById('terminalModal');
    const usbBtn = document.getElementById('usbBtn');
    const closeBtn = document.getElementById('closeTerminalBtn');
    const registerForm = document.getElementById('registerForm');

    // Открыть модаль
    function openTerminal() {
        modal.classList.add('active');
        document.getElementById('emailInput').focus();
        document.body.style.overflow = 'hidden'; // Заблокировать скролл
    }

    // Закрыть модаль
    function closeTerminal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Разблокировать скролл
    }

    // Клик на флешку
    usbBtn.addEventListener('click', openTerminal);

    // Закрыть окно
    closeBtn.addEventListener('click', closeTerminal);

    // Закрыть при клике на фон (не на форму)
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeTerminal();
        }
    });

    // Закрыть на Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeTerminal();
        }
    });

    // Отправка формы (Formspree обрабатывает)
    registerForm.addEventListener('submit', function(e) {
        // Formspree обработает это автоматически
        // После отправки покажем сообщение
        console.log('Форма отправлена на Formspree');
        
        // Опционально: закрыть модаль через 1 сек
        setTimeout(function() {
            alert('Registration successful! You\'ll receive an email shortly.');
            closeTerminal();
        }, 1500);
    });

});

// ========== ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ ==========

// Плавная прокрутка при клике на ссылки
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.startsWith('#modal')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Анимация при загрузке
window.addEventListener('load', function() {
    // Добавить класс loaded для CSS анимаций
    document.body.classList.add('loaded');
});