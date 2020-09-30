
setTimeout(() => {
    let count=document.querySelector('.container');
    count.textContent='9';
    setTimeout(() => {
        let count=document.querySelector('.container');
        count.textContent='8';
        setTimeout(() => {
            let count=document.querySelector('.container');
            count.textContent='7';
            setTimeout(() => {
                let count=document.querySelector('.container');
                count.textContent='6';
                setTimeout(() => {
                    let count=document.querySelector('.container');
                    count.textContent='5';
                    setTimeout(() => {
                        let count=document.querySelector('.container');
                        count.textContent='4';
                        setTimeout(() => {
                            let count=document.querySelector('.container');
                            count.textContent='3';
                            setTimeout(() => {
                                let count=document.querySelector('.container');
                                count.textContent='2';
                                setTimeout(() => {
                                    let count=document.querySelector('.container');
                                    count.textContent='1';
                                    setTimeout(() => {
                                        let count=document.querySelector('.container');
                                        count.textContent='Welcome to Callback Hell!!!';
                                        count.classList.add('blinking');
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

