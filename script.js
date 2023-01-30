// Add JavaScript code here

window.onload = () => {
    const keys = document.querySelectorAll(".key");

    const operators = ['*', '/', '-', '+', 'X']

    keys.forEach(key => {
        key.addEventListener('click', (event) => {
            let value = key.innerHTML;

            const answer = document.querySelector('#answer');
            const problem = document.querySelector('#problem')
            if (value === '=') {
                computeAnswer(answer, problem.innerHTML, problem);
            } else if (value === 'CE') {
                answer.innerHTML = problem.innerHTML = '';
            } else if (value === 'C') { 
                problem.innerHTML = '';
            } else if (value === 'X') {
                problem.innerHTML = problem.innerHTML.slice(0, problem.innerHTML.length - 1);
            } else if (operators.includes(value)) {
                let question = problem.innerHTML;
                // .slice(0, problem.length - 1);
                computeAnswer(answer, question, problem, value);
            } else {
                problem.innerHTML += value;
            }
        })
    })
}

function computeAnswer(answerNode, problem, questionNode, nextOperation=null) {
    try {
        answerNode.innerHTML = math.evaluate(problem).entries[0];

        if (nextOperation) {
            questionNode.innerHTML += ' ' + nextOperation;
        }
    } catch (e) {
        answerNode.innerHTML = 'N/A';
    }

}
