const formEl = document.querySelector(".login-form")
//const emailEl = document.querySelectorAll("input")

const handlerLogin = (event) => {
    event.preventDefault()

    let dataFormResult = {}

    const formData = new FormData(event.currentTarget)
    formData.forEach((value, key) => {
        if (!value || !key) {
            alert("You must fill in all the fields of the form!")
            return
        }
        else {
            dataFormResult[key] = value
            console.log(dataFormResult)
            formEl.reset()
        }
    })
}

formEl.addEventListener("submit", handlerLogin)




