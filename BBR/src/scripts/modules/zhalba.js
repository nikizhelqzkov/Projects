/* eslint-disable no-plusplus */
const zhalba = {
    getVal() {
        if (window.location.href.includes('zhalba.html')) {
            const input = document.getElementById('zhalba--uploader');
            input.onchange = (event) => {
                const fileName = event.target.value.slice(event.target.value.lastIndexOf('\\') + 1);
                let imgSrc = '../../assets/images/undefined.svg';
                if (fileName.includes('.png')) {
                    imgSrc = imgSrc.replace('undefined', 'png');
                } else if (fileName.includes('.pdf')) {
                    imgSrc = imgSrc.replace('undefined', 'pdf');
                } else if (fileName.includes('.doc')) {
                    imgSrc = imgSrc.replace('undefined', 'doc');
                } else if (fileName.includes('.xls')) {
                    imgSrc = imgSrc.replace('undefined', 'xls');
                }
                const inner = document.createElement('div');
                inner.classList.add('zhalba__form__inner__files__inner');
                const item = document.createElement('div');
                item.classList.add('zhalba__form__inner__files__inner__item');
                const img = document.createElement('img');
                img.src = imgSrc;
                img.width = 46;
                img.height = 52;
                img.alt = 'File logo';
                item.appendChild(img);
                const info = document.createElement('div');
                info.classList.add('zhalba__form__inner__files__inner__item--info');
                const infoF = document.createElement('div');
                infoF.classList.add('d-flex', 'justify-content-between');
                const h6 = document.createElement('h6');
                h6.innerHTML = fileName;
                const span = document.createElement('span');
                span.innerHTML = '0%';
                span.classList.add('files--percentage');
                infoF.appendChild(h6);
                infoF.appendChild(span);
                const infoS = document.createElement('div');
                infoS.classList.add('row');
                const infoSOuter = document.createElement('div');
                infoSOuter.classList.add('col-12');
                const progress = document.createElement('progress');
                progress.classList.add('progressor');
                progress.max = 100;
                progress.value = 0;
                infoSOuter.appendChild(progress);
                infoS.appendChild(infoSOuter);
                info.appendChild(infoF);
                info.appendChild(infoS);
                item.appendChild(info);
                inner.appendChild(item);
                const out = document.querySelector('.zhalba__form__inner__files');
                out.appendChild(inner);
                const successImg = document.createElement('img');
                successImg.src = '../../assets/images/complaints-succes-upload.svg';
                successImg.alt = 'Success';
                successImg.classList.add('tick');
                inner.appendChild(successImg);
                let width = 0;
                const interval = setInterval(() => {
                    if (width >= 100) {
                        clearInterval(interval);
                        successImg.classList.add('success');
                    } else {
                        width++;
                        progress.value = width;
                        span.innerHTML = `${width}%`;
                    }
                }, 30);
            };
        }
    }
};

export default zhalba;
