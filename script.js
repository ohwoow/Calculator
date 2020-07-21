function insert(number) {
    document.form.textview.value =
    document.form.textview.value + number
}

function clean() {
    document.form.textview.value = ''
}

function back() {
    const result = document.form.textview.value

    document.form.textview.value = result.substr(0, result.length - 1)
}

function equal() {
    const result = document.form.textview.value

    if (result) {
        document.form.textview.value = eval(result)
    }
}