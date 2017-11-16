function question(number) {
    var one = [
        {
            question: ' В каком произведении главного героя зовут Григорий Мелихов?',
            a: ' Поднятая целина',
            b: ' Нахалёнок',
            c: ' Тихий Дон',
            d: ' Судьба человека',
        },
        'c', 10000
    ];

    var two = [
        {
            question: ' Какая страна считается родиной йогурта?',
            a: ' Чехия',
            b: ' Сербия',
            c: ' Албания',
            d: ' Болгария',
        },
        'd', 15000
    ];

    var three = [
        {
            question: 'Королём какого музыкального направления поклонники называли Би Би Кинга?',
            a: 'бита',
            b: 'блюза',
            c: 'рок-н-рола',
            d: 'рэпа',
        },
        'b', 25000
    ];

    switch (number) {
        case 1:
            return one;
        case 2:
            return two;
        case 3:
            return three;
    }
}

user_answer();

function user_answer() {
    for (var i = 1; i <= 3; i++) {
        for (var prop in question(i)[0]) {
            console.log(prop, question(i)[0][prop]);
        }
    }
}

function test(result, array) {
    var yes = 'Ваш ответ верный!';
    var no = 'Неправильно!';

    if (result == array[1]) {
        return yes;
    } else {
        return no;
    }
}