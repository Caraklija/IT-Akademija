function result_function() {
    var n1 = document.getElementById('number1').value;
    var n2 = document.getElementById('number2').value;

    var oper = document.getElementById('operation').value;

    if (oper === '+') {
        document.getElementById('result').value = n1 + n2;
    }

    if (oper === '-') {
        document.getElementById('result').value = n1 - n2;
    }

    if (oper === '/') {
        document.getElementById('result').value = n1 / n2;
    }

    if (oper === '*') {
        document.getElementById('result').value = n1 * n2;
    }
}