const form = document.getElementById("form")
const input = document.querySelector("#input");
const result = document.querySelector("#result");
const money = [500, 200, 100, 50, 20, 10, 5, 1]
form.addEventListener("submit", (e) => {
    e.preventDefault();
    result.innerHTML = ("")
    let mebleg = +input.value
    money.map((pul) => {
        let count = Math.trunc(mebleg / pul)
        mebleg = mebleg - count * pul
        if (count) {
            const row = document.createElement("div")
            row.classList.add("row")
            for (let i = 0; i < count && i < 5; i++) {
                const img = document.createElement("img")
                img.classList.add("img")
                img.src = `./images/${pul}.jpg`
                img.style.left = `${i * 60}px`
                row.append(img)
            }

            result.append(row)
        }
    })
})
