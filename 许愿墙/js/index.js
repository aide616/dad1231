// 找对象
var wrap = document.querySelector('#wrap');

var kuang = wrap.querySelector('.kuang');


// 点击输入框清除value

var input = document.getElementById('input');
console.log('adadadad');

input.onfocus = function () {
    input.value = '';
}

input.onblur = function () {
    if (this.value == '') {
        input.value = '你想说的话';
    }
}
// 自动添加框子
// for (let i = 0; i < 10; i++) {
//     var newNode = kuang.cloneNode(true);
//     wrap.appendChild(newNode);
// }

//点击按钮添加节点
var but = document.querySelector('button');
var iv;
but.onmousemove = function () {
    iv = input.value
}
// console.log(but);
but.onclick = function () {
    var leftt = parseInt(Math.random() * 573);
    var topp = parseInt(Math.random() * 280);

    var newNode = kuang.cloneNode(true);
    wrap.appendChild(newNode);
    newNode.querySelector('.bottom').innerText = iv;
    newNode.style.left = leftt + "px";
    newNode.style.top = topp + "px";
    // 提升层级
    var kuang1 = wrap.querySelectorAll('.kuang');
    var count = 5;
    for (let j = 0; j < kuang1.length; j++) {
        // 双击删除对应框
        kuang1[j].ondblclick = function () {
            wrap.removeChild(this);
        }
        // 提升层级
        kuang1[j].onclick = function () {
            count++;
            this.style.zIndex = count;
            
        }
    }
}