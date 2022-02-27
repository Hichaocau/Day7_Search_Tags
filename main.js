const content = document.querySelector('.content')
const input = document.querySelector('input')
const btn = document.querySelector('.btn-removeAll')


let tags = ['Javascript', 'React']
const render = () => {

    content.innerHTML = ''

    for(let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        content.innerHTML += `
            <li>
                ${tag}
                <i onclick = "deleteTags(${i})" class="fa-solid fa-xmark"></i>
            </li>
             `
    }
    // appendChild: bổ sung một Dom Node vào vị trí cuối cùng của 1 Dom Node khác
    content.appendChild(input)
    // thêm focus() mới điền được value khi gán sự kiện
    input.focus()
}
render()

input.addEventListener('keydown', function(e) {
    if(e.keyCode === 13){
        tags.push(input.value)
        input.value = null
        render()
    }
})

// click icon x delete tag
const deleteTags = (index) => {
    tags.splice(index , 1)
    render()
}

// Click btn delete all tags
btn.addEventListener('click', function(e) {
    // tags = []
    tags.length = 0
    input.value = null
    render()
})


