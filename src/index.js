function handleSubmit(e) {
    e.preventDefault()

    username = document.getElementById("username").value
    res = document.getElementById("response")

    res.style = "display: flex;";

    setTimeout(() => {
        res.innerHTML = `<div class="check"></div>
                        <span>Welcome, ${username}</span>`
    }, 3000)
}

document.getElementById("subscribe-form").onsubmit = handleSubmit