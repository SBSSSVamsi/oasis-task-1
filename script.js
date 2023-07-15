let result = document.getElementById("result");
    let expression = "";

    function appendNumber(number) {
      expression += number;
      result.value = expression;
    }

    function appendOperator(operator) {
      expression += operator;
      result.value = expression;
    }

    function appendDecimal() {
      if (!expression.includes(".")) {
        expression += ".";
        result.value = expression;
      }
    }

    function clearResult() {
      expression = "";
      result.value = "";
    }

    function calculate() {
      try {
        const answer = eval(expression);
        result.value = answer;
        expression = answer.toString();
      } catch (error) {
        result.value = "Error";
      }
    }