document.querySelector("#number").addEventListener("input", function (event) {
    document.querySelector('#numclone').textContent = event.target.value
});

document.querySelector("#name").addEventListener("input", function (event) {
    document.querySelector("#nameclone").textContent = event.target.value
})

document.querySelector("#mm").addEventListener("input", function (event) {
    document.querySelector("#mmclone").textContent = event.target.value
})

document.querySelector("#yy").addEventListener("input", function (event) {
    document.querySelector("#yyclone").textContent = "/" + event.target.value
})

document.querySelector("#cvc").addEventListener("input", function (event) {
    document.querySelector("#cvcclone").textContent = event.target.value
})