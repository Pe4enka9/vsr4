// Код запускается после загрузки страницы
window.onload = function () {
    // Находим аудио элемент
    const audio = document.querySelector('audio');

    // Пытаемся запустить воспроизведение аудио
    audio.play().catch(function (error) {
        // Обработка ошибки автозапуска
        console.log('Ошибка автозапуска: ', error);

        // Добавляем обработчик события "клик" на весь документ
        document.body.addEventListener('click', function () {
            // Повторная попытка запустить аудио при клике
            audio.play().catch(function (error) {
                console.log('Ошибка воспроизведения:', error);
            });
        });
    });
};

// Инициализация холста для снега
const canvas = document.querySelector('.snow');
const ctx = canvas.getContext('2d'); // Получаем 2D-контекст
const snowflakes = []; // Массив для снежинок

// Устанавливаем размеры холста
canvas.width = 400;
canvas.height = 600;

// Функция создания снежинки
function createSnowflake() {
    return {
        x: Math.random() * canvas.width, // Случайное положение по горизонтали
        y: Math.random() * canvas.height - canvas.height, // Появление выше экрана
        radius: Math.random() * 4 + 1, // Случайный размер снежинки
        speed: Math.random() * 2 + 1, // Случайная скорость падения
        opacity: Math.random() * 0.5 + 0.3 // Случайная прозрачность
    };
}

// Функция отрисовки снежинки
function drawSnowflake(flake) {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2); // Рисуем круг
    ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`; // Устанавливаем цвет с учетом прозрачности
    ctx.fill();
}

// Функция обновления позиции снежинки
function updateSnowflake(flake) {
    flake.y += flake.speed; // Снежинка движется вниз
    if (flake.y > canvas.height) { // Если снежинка ушла за нижнюю границу
        flake.y = -flake.radius; // Появляется снова сверху
        flake.x = Math.random() * canvas.width; // Случайная новая позиция по горизонтали
    }
}

// Анимация снежинок
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем холст
    snowflakes.forEach((flake) => {
        drawSnowflake(flake); // Отрисовка снежинки
        updateSnowflake(flake); // Обновление ее позиции
    });
    requestAnimationFrame(animate); // Рекурсивный вызов для анимации
}

// Создаем 100 снежинок и добавляем их в массив
for (let i = 0; i < 100; i++) {
    snowflakes.push(createSnowflake());
}

// Запускаем анимацию
animate();

// Функция переворота открытки
function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped'); // Добавляем/удаляем класс для переворота
}
