// Объект dictionary для хранения переводов
const dictionary = {
    "hello": "здравствуйте",
    "world": "мир",
    "friend": "друг",
    "good": "хорошо",
    "day": "день",
    "night": "ночь",
    "love": "любовь",
    "peace": "мир",
    "cat": "кот",
    "dog": "собака",
    "water": "вода",
    "fire": "огонь",
    "earth": "земля",
    "wind": "ветер",
    "sun": "солнце",
    "moon": "луна",
    "tree": "дерево",
    "flower": "цветок",
    "book": "книга",
    "computer": "компьютер"
};

// Допишите код для fakeTranslate
function fakeTranslate(word) {
    return new Promise((resolve, reject) => {
        // Имитация асинхронной операции с задержкой
        setTimeout(() => {
            const translate = dictionary[word.toLowerCase()];
            if (translate) {
                resolve(translate);
            } else {
                reject("Перевода нет ");
            }
        }, 1000); // Задержка 1 секунда
    });
}

window.fakeTranslate = fakeTranslate;