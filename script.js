<script>
    text = document.getElementById('text')

    buttons = document.querySelectorAll('button')

    buttons.forEach((item) => {

        item.addEventListener('click', function (e) {
            // btnText = e.target.innerText
            btnText = item.innerText
            if (btnText == "Clear") {
                text.innerText = ''
            }
            else if (btnText == "Back") {
                previousText = text.innerText
                arr = Array.from(previousText)
                arr.pop()
                joined = arr.join('')
                text.innerText = joined
            }

            else if (btnText == "=") {
                previousText = text.innerText
                a = eval(previousText)
                text.innerText = a
            }
            else {
                text.innerText += btnText
            }


        })
    })

</script>