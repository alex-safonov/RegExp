Регулярное выражение для проверки ФИО

function test (value){
    var regExp = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/
    return regExp.test(value)
}

// Другой вариант
function test (value){
    var regExp = /^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/
    return regExp.test(value)
}

// Пример использования:

test("Иванов Иван Иванович"); //true
test("Ли Лу Янг"); //true
test("Dwain Simmons"); //true
test("Dwain-Branden Simmons"); //true
test("И Иван Иванович"); //true
test("Салим-оглы Мамед"); //true
test("Салим-кызы Лейла"); //true
