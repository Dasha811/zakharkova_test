function hello(number) {
    if (number > 7) {
        alert('Hello!')
    }
}


function sayHello(str) {
    if (str === 'Вячеслав') {
        alert('Привет, Вячеслав')
    } else {
        alert('Нет такого имени!')
    }
}



function multipleThree(array) {
    return array.filter(item => item % 3 == 0);
}




function correctBrackets(brackets) {
    let stack = [];
    let last;

    for (let i = 0; i < brackets.length; i++) {
        if (brackets[i] == '[' || brackets[i] == '(' || brackets[i] == '{') {
            stack.push(brackets[i]);
        } else if (brackets[i] == ']' || brackets[i] == ')' || brackets[i] == '}') {
            if (stack.length) {
                last = stack[stack.length - 1];
                if ((last == '[' && brackets[i] == ']') || (last == '(' && brackets[i] == ')') || (last == '{' && brackets[i] == '}')) {
                    stack.pop();
                }
            } else return false;
        }
    } return (!stack.length);
}
correctBrackets('[((())()(())]]');//false
//последовательность неправильная- ответ: нет- вхождение открывающих и закрывающих скобок не соответствует
