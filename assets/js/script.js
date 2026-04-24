setInterval(()=>{
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('time').textContent = `${time} ${date}`;
}, 1000)