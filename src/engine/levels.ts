import type { Level } from './types';

export const levels: Level[] = [
    {
        id: 1,
        title: "Солнечный парадокс",
        description: "Иллюзии и время",
        stages: [
            {
                id: '1-1',
                text: "Солнце встало. Иногда слишком быстрое решение приводит к падению.",
                buttons: [
                    { id: '1-1-1', text: "Правда", type: 'safe', color: 'red', trapCondition: { type: 'time_less_than', value: 5 } }, // Danger < 5s
                    { id: '1-1-2', text: "Не правда", type: 'passive', color: 'blue' },
                    { id: '1-1-3', text: "Подумать", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '1-2',
                text: "Все кажется очевидным, но простота часто обманывает глаз.",
                buttons: [
                    { id: '1-2-1', text: "Согласен", type: 'safe', color: 'green', trapCondition: { type: 'time_less_than', value: 4 } },
                    { id: '1-2-2', text: "Не согласен", type: 'passive', color: 'red' },
                    { id: '1-2-3', text: "Сомневаться", type: 'passive', color: 'blue' }
                ]
            },
            {
                id: '1-3',
                text: "Ветер шепчет: путь не всегда там, где кажется.",
                buttons: [
                    { id: '1-3-1', text: "Следовать ветру", type: 'danger', color: 'blue' }, // Always dangerous
                    { id: '1-3-2', text: "Игнорировать", type: 'safe', color: 'red' },
                    { id: '1-3-3', text: "Подождать", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '1-4',
                text: "Иногда лучше сделать шаг назад, чем идти вслепую.",
                buttons: [
                    { id: '1-4-1', text: "Идти вперёд", type: 'danger', color: 'green' },
                    { id: '1-4-2', text: "Шаг назад", type: 'safe', color: 'blue' },
                    { id: '1-4-3', text: "Оставаться на месте", type: 'passive', color: 'red' }
                ]
            },
            {
                id: '1-5',
                text: "Последняя иллюзия поджидает там, где меньше всего ожидаешь.",
                buttons: [
                    { id: '1-5-1', text: "Верить иллюзии", type: 'danger', color: 'red' },
                    { id: '1-5-2', text: "Не верить", type: 'safe', color: 'green' },
                    { id: '1-5-3', text: "Смотреть внимательнее", type: 'passive', color: 'blue' }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Лишнее слово",
        description: "Найди лишнее",
        stages: [
            {
                id: '2-1',
                text: "В ряду фруктов есть тот, кто совсем не как все.",
                buttons: [
                    { id: '2-1-1', text: "яблоко", type: 'safe', color: 'red' },
                    { id: '2-1-2', text: "банан", type: 'safe', color: 'green' }, // Banana is yellow/green
                    { id: '2-1-3', text: "стол", type: 'danger', color: 'blue' } // Outlier
                ]
            },
            {
                id: '2-2',
                text: "Ошибка может прятаться в самом простом слове.",
                buttons: [
                    { id: '2-2-1', text: "Книга", type: 'danger', color: 'blue' },
                    { id: '2-2-2', text: "Ручка", type: 'safe', color: 'red' },
                    { id: '2-2-3', text: "Тетрадь", type: 'safe', color: 'green' }
                ]
            },
            {
                id: '2-3',
                text: "Цвет может отвлекать, но внимание к деталям спасает.",
                buttons: [
                    { id: '2-3-1', text: "Красный", type: 'danger', color: 'red' },
                    { id: '2-3-2', text: "Синий", type: 'safe', color: 'blue' },
                    { id: '2-3-3', text: "Зелёный", type: 'safe', color: 'green' }
                ]
            },
            {
                id: '2-4',
                text: "Что-то упущено, и именно это тебя подведёт.",
                buttons: [
                    { id: '2-4-1', text: "Упущено", type: 'danger', color: 'green' },
                    { id: '2-4-2', text: "Ничего", type: 'safe', color: 'blue' },
                    { id: '2-4-3', text: "Всё", type: 'safe', color: 'red' }
                ]
            },
            {
                id: '2-5',
                text: "Последний выбор: то, что кажется лишним, часто опасно.",
                buttons: [
                    { id: '2-5-1', text: "Лишнее", type: 'danger', color: 'red' },
                    { id: '2-5-2', text: "Не лишнее", type: 'safe', color: 'green' },
                    { id: '2-5-3', text: "Сомнение", type: 'safe', color: 'blue' }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Терпение",
        description: "Умей ждать",
        stages: [
            {
                id: '3-1',
                text: "Подождите немного. Спешка — враг наблюдательного.",
                buttons: [
                    { id: '3-1-1', text: "Нажать", type: 'danger', color: 'red' },
                    { id: '3-1-2', text: "Ждать", type: 'safe', color: 'blue', trapCondition: { type: 'time_less_than', value: 3 } }, // Force wait
                    { id: '3-1-3', text: "Пропустить", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '3-2',
                text: "Кнопка привлекает взгляд. Смотрите внимательнее.",
                buttons: [
                    { id: '3-2-1', text: "Да", type: 'danger', color: 'green' },
                    { id: '3-2-2', text: "Нет", type: 'safe', color: 'red' },
                    { id: '3-2-3', text: "Пропустить", type: 'passive', color: 'blue' }
                ]
            },
            {
                id: '3-3',
                text: "Кажется очевидным? Иногда очевидное — ловушка.",
                buttons: [
                    { id: '3-3-1', text: "Согласен", type: 'danger', color: 'blue' },
                    { id: '3-3-2', text: "Не согласен", type: 'safe', color: 'green' },
                    { id: '3-3-3', text: "Сомневаться", type: 'passive', color: 'red' }
                ]
            },
            {
                id: '3-4',
                text: "Лучше немного подождать, чем идти сразу.",
                buttons: [
                    { id: '3-4-1', text: "Нажать", type: 'safe', color: 'red', trapCondition: { type: 'time_less_than', value: 3 } }, // Danger < 3
                    { id: '3-4-2', text: "Подождать", type: 'passive', color: 'blue' },
                    { id: '3-4-3', text: "Пропустить", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '3-5',
                text: "Последний шанс: ловушка может быть там, где её совсем не ждёшь.",
                buttons: [
                    { id: '3-5-1', text: "Верить", type: 'danger', color: 'green' },
                    { id: '3-5-2', text: "Не верить", type: 'safe', color: 'red' },
                    { id: '3-5-3', text: "Смотреть внимательнее", type: 'passive', color: 'blue' }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Лёгкая иллюзия",
        description: "Не верь глазам",
        stages: [
            {
                id: '4-1',
                text: "То, что кажется очевидным, может быть ловушкой.",
                buttons: [
                    { id: '4-1-1', text: "Следовать", type: 'danger', color: 'blue' },
                    { id: '4-1-2', text: "Игнорировать", type: 'safe', color: 'red' },
                    { id: '4-1-3', text: "Подумать", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '4-2',
                text: "Не всё то, что блестит, безопасно.",
                buttons: [
                    { id: '4-2-1', text: "Блестит", type: 'danger', color: 'green' },
                    { id: '4-2-2', text: "Матово", type: 'safe', color: 'blue' },
                    { id: '4-2-3', text: "Сомнение", type: 'passive', color: 'red' }
                ]
            },
            {
                id: '4-3',
                text: "Простые шаги часто обманывают.",
                buttons: [
                    { id: '4-3-1', text: "Вперёд", type: 'danger', color: 'red' },
                    { id: '4-3-2', text: "Назад", type: 'safe', color: 'green' },
                    { id: '4-3-3', text: "Стоять", type: 'passive', color: 'blue' }
                ]
            },
            {
                id: '4-4',
                text: "Иногда лучше ничего не делать.",
                buttons: [
                    { id: '4-4-1', text: "Нажать", type: 'danger', color: 'blue' },
                    { id: '4-4-2', text: "Подождать", type: 'safe', color: 'red' },
                    { id: '4-4-3', text: "Пропустить", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '4-5',
                text: "Последний клик может решить всё.",
                buttons: [
                    { id: '4-5-1', text: "Кликнуть", type: 'danger', color: 'green' },
                    { id: '4-5-2', text: "Не кликать", type: 'safe', color: 'blue' },
                    { id: '4-5-3', text: "Смотреть", type: 'passive', color: 'red' }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Странные шаги",
        description: "Иди осторожно",
        stages: [
            {
                id: '5-1',
                text: "Каждый шаг может быть ловушкой.",
                buttons: [
                    { id: '5-1-1', text: "Шаг вперёд", type: 'danger', color: 'red' }, // Prompt: forward dangerous
                    { id: '5-1-2', text: "Шаг назад", type: 'safe', color: 'green' },
                    { id: '5-1-3', text: "Стоять", type: 'passive', color: 'blue' }
                ]
            },
            {
                id: '5-2',
                text: "Иногда безопасно — это просто ждать.",
                buttons: [
                    { id: '5-2-1', text: "Ждать", type: 'safe', color: 'blue', trapCondition: { type: 'time_less_than', value: 3 } },
                    { id: '5-2-2', text: "Действовать", type: 'danger', color: 'red' },
                    { id: '5-2-3', text: "Пропустить", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '5-3',
                text: "Ловушка часто там, где меньше всего думаешь.",
                buttons: [
                    { id: '5-3-1', text: "Слева", type: 'danger', color: 'green' },
                    { id: '5-3-2', text: "Справа", type: 'safe', color: 'blue' },
                    { id: '5-3-3', text: "Центр", type: 'passive', color: 'red' }
                ]
            },
            {
                id: '5-4',
                text: "Обрати внимание на детали — они спасут.",
                buttons: [
                    { id: '5-4-1', text: "Игнорировать", type: 'danger', color: 'red' },
                    { id: '5-4-2', text: "Смотреть", type: 'safe', color: 'green' },
                    { id: '5-4-3', text: "Сомневаться", type: 'passive', color: 'blue' }
                ]
            },
            {
                id: '5-5',
                text: "Последний шаг: рассудок важнее интуиции.",
                buttons: [
                    { id: '5-5-1', text: "Слушать интуицию", type: 'danger', color: 'blue' },
                    { id: '5-5-2', text: "Довериться рассудку", type: 'safe', color: 'red' },
                    { id: '5-5-3', text: "Стоять", type: 'passive', color: 'green' }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Ловушка времени",
        description: "Временные парадоксы",
        stages: [
            {
                id: '6-1',
                text: "Слишком быстрое решение опасно.",
                buttons: [
                    { id: '6-1-1', text: "Нажать", type: 'safe', color: 'red', trapCondition: { type: 'time_less_than', value: 3 } },
                    { id: '6-1-2', text: "Ждать", type: 'passive', color: 'blue' },
                    { id: '6-1-3', text: "Пропустить", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '6-2',
                text: "Иногда подождать — лучшее решение.",
                buttons: [
                    { id: '6-2-1', text: "Подождать", type: 'safe', color: 'green', trapCondition: { type: 'time_less_than', value: 5 } }, // Danger < 5s (must wait)
                    { id: '6-2-2', text: "Нажать", type: 'safe', color: 'red', trapCondition: { type: 'time_greater_than', value: 5 } }, // Danger > 5s (must act fast)
                    { id: '6-2-3', text: "Сомневаться", type: 'passive', color: 'blue' }
                ]
            },
            {
                id: '6-3',
                text: "Следовать подсказке не всегда безопасно.",
                buttons: [
                    { id: '6-3-1', text: "Следовать", type: 'danger', color: 'blue' },
                    { id: '6-3-2', text: "Игнорировать", type: 'safe', color: 'red' },
                    { id: '6-3-3', text: "Стоять", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '6-4',
                text: "Обычные действия могут быть ловушкой.",
                buttons: [
                    { id: '6-4-1', text: "Действовать", type: 'danger', color: 'red' },
                    { id: '6-4-2', text: "Ждать", type: 'safe', color: 'green', trapCondition: { type: 'time_less_than', value: 3 } },
                    { id: '6-4-3', text: "Пропустить", type: 'passive', color: 'blue' }
                ]
            },
            {
                id: '6-5',
                text: "Последний клик решает.",
                buttons: [
                    { id: '6-5-1', text: "Нажать", type: 'danger', color: 'blue' },
                    { id: '6-5-2', text: "Не нажимать", type: 'safe', color: 'green' },
                    { id: '6-5-3', text: "Смотреть", type: 'passive', color: 'red' }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Цветовая иллюзия",
        description: "Цвета обманывают",
        stages: [
            {
                id: '7-1',
                text: "Красный привлекает внимание, будь осторожен.",
                buttons: [
                    { id: '7-1-1', text: "Красный", type: 'danger', color: 'red' },
                    { id: '7-1-2', text: "Синий", type: 'safe', color: 'blue' },
                    { id: '7-1-3', text: "Зелёный", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '7-2',
                text: "Синий безопасен, но не всегда.",
                buttons: [
                    { id: '7-2-1', text: "Синий", type: 'safe', color: 'blue', trapCondition: { type: 'time_less_than', value: 2 } }, // Danger < 2s
                    { id: '7-2-2', text: "Красный", type: 'passive', color: 'red' },
                    { id: '7-2-3', text: "Зелёный", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '7-3',
                text: "Зелёный может быть ловушкой.",
                buttons: [
                    { id: '7-3-1', text: "Зелёный", type: 'safe', color: 'green', trapCondition: { type: 'time_greater_than', value: 4 } }, // Danger > 4s
                    { id: '7-3-2', text: "Синий", type: 'passive', color: 'blue' },
                    { id: '7-3-3', text: "Красный", type: 'passive', color: 'red' }
                ]
            },
            {
                id: '7-4',
                text: "Игнорируй подсказку на первый взгляд.",
                buttons: [
                    { id: '7-4-1', text: "Игнорировать", type: 'danger', color: 'red' },
                    { id: '7-4-2', text: "Следовать", type: 'safe', color: 'green' },
                    { id: '7-4-3', text: "Стоять", type: 'passive', color: 'blue' }
                ]
            },
            {
                id: '7-5',
                text: "Последний шаг: цвет может обмануть.",
                buttons: [
                    { id: '7-5-1', text: "Красный", type: 'danger', color: 'red' },
                    { id: '7-5-2', text: "Синий", type: 'safe', color: 'blue' },
                    { id: '7-5-3', text: "Зелёный", type: 'passive', color: 'green' }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Последовательность",
        description: "Соблюдай порядок",
        stages: [
            {
                id: '8-1',
                text: "Сначала нажми зелёную, потом синюю.",
                requiredSequence: ['8-1-1', '8-1-2'],
                buttons: [
                    { id: '8-1-1', text: "Зелёная", type: 'safe', color: 'green' }, // Must be first
                    { id: '8-1-2', text: "Синяя", type: 'safe', color: 'blue' },    // Must be second
                    { id: '8-1-3', text: "Красная", type: 'passive', color: 'red' } // Safe/Passive
                ]
            },
            {
                id: '8-2',
                text: "Следующий шаг важен. (Синяя опасна первой)",
                requiredSequence: ['8-2-2', '8-2-1'], // Implicit? Prompt: "Синяя (опасно если первая), Зелёная (безопасно)". Maybe "Press Green then Blue"?
                // Prompt is vague: "Синяя (опасно если нажата первой)". It doesn't say what to do.
                // Assuming "Green" is safe start. Let's make it a sequence: Green -> Blue.
                buttons: [
                    { id: '8-2-1', text: "Синяя", type: 'safe', color: 'blue' },
                    { id: '8-2-2', text: "Зелёная", type: 'safe', color: 'green' },
                    { id: '8-2-3', text: "Красная", type: 'passive', color: 'red' }
                ]
            },
            {
                id: '8-3',
                text: "Не нарушай порядок. (Зеленая -> Синяя?)",
                // Prompt: "Красная (опасно), Зелёная (безопасно), Синяя (безопасно)"
                // Assuming sequence Green -> Blue again or just avoid Red.
                // Let's make it single click: Avoid Red.
                buttons: [
                    { id: '8-3-1', text: "Красная", type: 'danger', color: 'red' },
                    { id: '8-3-2', text: "Зелёная", type: 'safe', color: 'green' },
                    { id: '8-3-3', text: "Синяя", type: 'safe', color: 'blue' }
                ]
            },
            {
                id: '8-4',
                text: "Иногда ждать — правильный ход.",
                buttons: [
                    { id: '8-4-1', text: "Ждать", type: 'safe', color: 'green' },
                    { id: '8-4-2', text: "Нажать", type: 'danger', color: 'red' },
                    { id: '8-4-3', text: "Пропустить", type: 'safe', color: 'blue' }
                ]
            },
            {
                id: '8-5',
                text: "Последний шаг: сохраняй последовательность. (Синяя safe, Green Danger)",
                // Prompt: "Зелёная (опасно), Синяя (безопасно)".
                buttons: [
                    { id: '8-5-1', text: "Зелёная", type: 'danger', color: 'green' },
                    { id: '8-5-2', text: "Синяя", type: 'safe', color: 'blue' },
                    { id: '8-5-3', text: "Красная", type: 'passive', color: 'red' }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Пропуск и ожидание",
        description: "Контроль темпа",
        stages: [
            {
                id: '9-1',
                text: "Нажимать нельзя сразу.",
                buttons: [
                    { id: '9-1-1', text: "Нажать", type: 'safe', color: 'red', trapCondition: { type: 'time_less_than', value: 3 } },
                    { id: '9-1-2', text: "Ждать", type: 'passive', color: 'blue' },
                    { id: '9-1-3', text: "Пропустить", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '9-2',
                text: "Иногда нужно подождать.",
                buttons: [
                    { id: '9-2-1', text: "Ждать", type: 'safe', color: 'green', trapCondition: { type: 'time_less_than', value: 5 } },
                    { id: '9-2-2', text: "Нажать", type: 'safe', color: 'red', trapCondition: { type: 'time_greater_than', value: 5 } },
                    { id: '9-2-3', text: "Пропустить", type: 'passive', color: 'blue' }
                ]
            },
            {
                id: '9-3',
                text: "Пропуск может быть ловушкой.",
                buttons: [
                    { id: '9-3-1', text: "Пропустить", type: 'danger', color: 'blue' },
                    { id: '9-3-2', text: "Нажать", type: 'safe', color: 'red' },
                    { id: '9-3-3', text: "Ждать", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '9-4',
                text: "Следи за временем.",
                buttons: [
                    { id: '9-4-1', text: "Нажать", type: 'safe', color: 'green', trapCondition: { type: 'time_less_than', value: 2 } },
                    { id: '9-4-2', text: "Ждать", type: 'passive', color: 'blue' },
                    { id: '9-4-3', text: "Пропустить", type: 'passive', color: 'red' }
                ]
            },
            {
                id: '9-5',
                text: "Последний шаг решает всё.",
                buttons: [
                    { id: '9-5-1', text: "Нажать", type: 'danger', color: 'red' },
                    { id: '9-5-2', text: "Ждать", type: 'safe', color: 'green' },
                    { id: '9-5-3', text: "Пропустить", type: 'safe', color: 'blue' }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Хаос и ловушки",
        description: "Финал",
        stages: [
            {
                id: '10-1',
                text: "Каждый клик может быть ловушкой.",
                buttons: [
                    { id: '10-1-1', text: "Вариант A", type: 'danger', color: 'red' },
                    { id: '10-1-2', text: "Вариант B", type: 'safe', color: 'green' },
                    { id: '10-1-3', text: "Вариант C", type: 'passive', color: 'blue' }
                ]
            },
            {
                id: '10-2',
                text: "Неверная последовательность — ошибка.",
                requiredSequence: ['10-2-1', '10-2-2'], // Assume A then B? Prompt says B dangerous if first. So A first.
                buttons: [
                    { id: '10-2-1', text: "A", type: 'safe', color: 'green' },
                    { id: '10-2-2', text: "Вариант B", type: 'safe', color: 'blue' },
                    { id: '10-2-3', text: "C", type: 'passive', color: 'red' }
                ]
            },
            {
                id: '10-3',
                text: "Слишком быстрое решение опасно.",
                buttons: [
                    { id: '10-3-1', text: "A", type: 'safe', color: 'blue', trapCondition: { type: 'time_less_than', value: 3 } },
                    { id: '10-3-2', text: "B", type: 'passive', color: 'red' },
                    { id: '10-3-3', text: "C", type: 'passive', color: 'green' }
                ]
            },
            {
                id: '10-4',
                text: "Пропуск может спасти.",
                buttons: [
                    { id: '10-4-1', text: "Пропустить", type: 'safe', color: 'green' },
                    { id: '10-4-2', text: "Нажать", type: 'danger', color: 'red' },
                    { id: '10-4-3', text: "Ждать", type: 'passive', color: 'blue' }
                ]
            },
            {
                id: '10-5',
                text: "Последний шаг: хаос полон ловушек.",
                buttons: [
                    { id: '10-5-1', text: "Вариант A", type: 'danger', color: 'blue' },
                    { id: '10-5-2', text: "Вариант B", type: 'safe', color: 'green' },
                    { id: '10-5-3', text: "Вариант C", type: 'passive', color: 'red' }
                ]
            }
        ]
    }
];
