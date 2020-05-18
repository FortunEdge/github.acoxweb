var binStr;
var b32Str;
var canvas, cS, ctx;
var prob = 0.5;
const pxls = 8;

window.onload = function() {
    canvas = document.getElementById("pixelMagic");
    cS = canvas.height = canvas.width = pxls * 200;
    ctx = canvas.getContext('2d');

    for(let i = 0; i < pxls; i++) {
        for(let j = 0; j < pxls; j++) {
            ctx.fillRect(i*(cS/pxls),j*(cS/pxls),cS/pxls,cS/pxls);
        }
    }

    newRand();
}

function newRand() {
    let n = genStr();
    document.getElementById("artTitle").innerHTML = convertToHex(n);
    drawPict(n);
}

function convertToHex(string) {
    let out = "";

    for(let i=0; i<(pxls*pxls)/4; i++) {
        out = out.concat(parseInt(string.substring(i*4,i*4+4),2).toString(16));
    }

    return out;
}

function convertToBin(string) {
    let out = "";
}

function genStr() {
    let out = "";

    for(let i=0; i < pxls * pxls; i++) {
        let rnd = Math.random();
        out += rnd < prob ? "0" : "1";
    }

    return out;
}

function drawPict(string) {
    for(let i = 0; i < pxls; i++) {
        for(let j = 0; j < pxls; j++) {
            ctx.fillStyle = parseInt(string.substring(i+(j*pxls+1),i+(j*pxls+1)+1)) == 0 ? "#000" : "#fff";
            ctx.fillRect(i*(cS/pxls),j*(cS/pxls),cS/pxls,cS/pxls);
        }
    }
}

function upProbVal(el) {
    if (el == 0) {
    document.getElementById("probVal").value = prob = document.getElementById("prob").value/100;
    }
    else {
    document.getElementById("prob").value = document.getElementById("probVal").value*100;
    prob = document.getElementById("probVal").value;
    }
}