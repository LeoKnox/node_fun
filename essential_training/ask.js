var questions = [
    "what is your name",
    "what is your fav hobby",
    "what is your bestest language"
]

var answer = [];

function ask(i) {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(" > ");

}

process.stdin.on('data', function(data) {
    answer.push(data.toString().trim())

    if (answer.length < questions.length) {
        ask(answer.length);
    } else {
        process.exit();
    }
})

process.on('exit', function() {
    process.stdout.write("\n");
    process.stdout.write(`go ${answer[1]} ${answer[0]} write ${answer[2]} later`);
    process.stdout.write('\n');
})

ask(0)