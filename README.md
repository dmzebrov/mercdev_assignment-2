### Файловая структура
Использование "частных", принадлежащих отдельной страничке, компонентов (ChatCard).
Разбиение страницы на составляющие (ChatlistBody, ChatlistHead).

### Позиционирование <img> в ChatlistHead
Как бы сделал ты?

#### Сделал свой универсальный компонент для выделения кусков текста (HighlightText)
Сначала думал сделать как утилиту, потом решил, что компонентом будет удобнее, планирую использовать в будущем

#### Решил использовать отдельный файл для работы с запросами (api.js)

#### Компонент Input просто подтянул с предыдущего тестового
Добавил возможность отключения верификации инпута

#### Названия некоторых функций и компонентов немного некорректные (на мой взгляд)
Например Chatlist - все пошло с того, что изначально немного неверно воспринял (это скорее Bloglist или что-то вроде, не стал переделывать)