const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    const txt = document. getElementById("text")
    setTimeout(() => {
    txt.textContent = ("ボタンをクリックしました");
    },2000);
    
});