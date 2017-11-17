function question(number) {
    var one = [
        {
            question: ' В каком произведении главного героя зовут Григорий Мелихов?',
            a: 'A: Поднятая целина',
            b: 'B: Нахалёнок',
            c: 'C: Тихий Дон',
            d: 'D: Судьба человека',
        },
        'c', 10000
    ];

    var two = [
        {
            question: ' Какая страна считается родиной йогурта?',
            a: 'A: Чехия',
            b: 'B: Сербия',
            c: 'C: Албания',
            d: 'D: Болгария',
        },
        'd', 15000
    ];

    var three = [
        {
            question: 'Королём какого музыкального направления поклонники называли Би Би Кинга?',
            a: 'A: бита',
            b: 'B: блюза',
            c: 'C: рок-н-рола',
            d: 'D: рэпа',
        },
        'b', 25000
    ];

    var four = [
        {
            question: 'Сколько крыльев у стрекозы?',
            a: 'A: 2',
            b: 'B: 4',
            c: 'C: 6',
            d: 'D: 8',
        },
        'b', 50000
    ];

    var five = [
        {
            question: 'Какой бой впервые состоялся 24 апреля 1918 года недалеко от Виллер-Бретоннё?',
            a: 'A: воздушный',
            b: 'B: подводный',
            c: 'C: танковый',
            d: 'D: противовоздушный',
        },
        'c', 100000
    ];

    var six = [
        {
            question: 'Что, по признанию Льва Толстого, было ему необходимо для плодотворной работы?',
            a: 'A: кофе',
            b: 'B: чай',
            c: 'C: молоко',
            d: 'D: квас',
        },
        'b', 200000
    ];

    switch (number) {
        case 1:
            return one;
        case 2:
            return two;
        case 3:
            return three;
        case 4:
            return four;
        case 5:
            return five;
        case 6:
            return six;
    }
}

user_answer();

function user_answer() {
    var profit = 0;
    for (var i = 1; i <= 6; i++) {
        var answer = prompt(question(i)[0].question + '\n' +
            question(i)[0].a + '\n' +
            question(i)[0].b + '\n' +
            question(i)[0].c + '\n' +
            question(i)[0].d +
        '\nДля выхода введите q');

        if (test(answer, question(i))) {
            profit = question(i)[2];
            alert('Ваш ответ верный!\nВы Выиграли ' + profit);
        } else if (answer == 'q') {
            alert('Игра окончена!');
            many(profit);
            break;
        } else {
            alert('Неправильно! Игра окончена!');
            many(profit);
            break;
        }
    }
}

function test(result, array) {
    if (result == array[1]) {
        return true;
    }
}

function many(profit) {
    if (profit >= 10000 && profit < 50000) {
        return alert('Ваш выигрыш 10000');
    } else if (profit >= 50000 && profit < 200000) {
        return alert('Ваш выигрыш 50000');
    } else if (profit == 200000) {
        return alert('Ваш выигрыш 200000');
    } else {
        return alert('Ваш выигрыш 0');
    }
}