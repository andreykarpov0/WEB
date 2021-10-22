function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function show(el, x)
{
    for(let i = 1; i != x; ++i)
    {
        el.style.fontsize = i + 'px';
        ++i;
        sleep(10);
    }
}
function fadeIn(el, speed) {
    let step = 1 / speed;
    x = 0;
    let interval = setInterval(function() {
        if (el.style.opacity >= 1)
            clearInterval(interval);
        el.style.opacity = Number(el.style.opacity) + step;
        el.style.height = x + 'px';
        x += 20;
    }, speed / 1000);
}


window.onload = () =>  {
    let tasks = document.querySelectorAll('.task');
    for(let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = () => {
                let taskt = tasks[i].querySelector('.taskText');
                if(taskt.style.opacity <= 0) {
                    let step = 1 / 10;
                    let x = 0;
                    taskt.style.height = x + 'px';
                    let size = window.getComputedStyle(taskt,null).getPropertyValue("font-size");
                    size = size.slice(0,size.length-2);
                    let step1 = size / 10;
                    console.log(size);
                    taskt.style.opacity = 0;
                    let interval1 = setInterval(function() {
                        if (x >= size)
                            clearInterval(interval1);
                        taskt.style.height = x + 'px';
                        x += step1;
                    }, 10 / 1000);
                    let interval = setInterval(function() {
                        if (taskt.style.opacity >= 1)
                            clearInterval(interval);
                        taskt.style.opacity = Number(taskt.style.opacity) + step;
                    }, 10 / 1000);
                } else {
                    let step = 1 / 20;
                    let size = window.getComputedStyle(taskt,null).getPropertyValue("font-size");
                    size = size.slice(0,size.length-2);
                    let x = size;
                    taskt.style.height = x + 'px';
                    let step1 = size / 10;
                    console.log(size);
                    taskt.style.opacity = 0;
                    let interval1 = setInterval(function() {
                        if (x <= 0)
                            clearInterval(interval1);
                        taskt.style.height = x + 'px';
                        x -= step1;
                    }, 10 / 1000);
                    let interval = setInterval(function() {
                        if (taskt.style.opacity <= 0)
                            clearInterval(interval);
                        taskt.style.opacity = Number(taskt.style.opacity) - step;
                    }, 10 / 1000);
                }
            }
    }
}