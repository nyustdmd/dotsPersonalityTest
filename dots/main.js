let currentQuestion = 1;
let answers = [];
let totalQuestions = 8; // 假设总题目数为 8

function startQuiz() {
    totalQuestions = 8; // 在开始测试时设置总题目数
    document.querySelector('h1').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('question-heading').style.display = 'none';
    document.getElementById('progress-bar-container').style.display = 'block';
    updateQuestion();
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        answers.push(selectedOption.value);
        currentQuestion++;
        if (currentQuestion <= 8) {
            updateQuestion();
        } else {
            showResult();
        }
    } else {
        alert('請選擇一個選項');
    }
}

function updateQuestion() {
    const questionHeading = document.getElementById('question-heading');
    const questionText = document.getElementById('question-text');
    const optionA = document.getElementById('option-a');
    const optionB = document.getElementById('option-b');
    const progressbar = document.getElementById('progress-bar');
    const progress = (currentQuestion / totalQuestions) * 100; // 计算当前进度百分比
    progressbar.style.width = `${progress}%`;
    
    questionHeading.textContent = `問題 ${currentQuestion}`;
    switch (currentQuestion) {
        // 添加问题及选项的代码...
    }

    // 重置选项
    optionA.checked = false;
    optionB.checked = false;
}

function showResult() {
    // 显示结果的代码...
}

// 点击"再测一次"按钮后重新开始测验
document.getElementById('retry-button').addEventListener('click', function() {
    // 重置测验状态
    currentQuestion = 1;
    answers = [];
    // 显示测验内容
    document.getElementById('quiz-container').style.display = 'block';
    // 隐藏结果容器
    document.getElementById('result-container').style.display = 'none';
    // 更新问题
    updateQuestion();
});
