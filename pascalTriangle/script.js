var n = 11; //n size for ar (n+1)
var j = 11; //j size for ar (j+1)
var ar;
var main, tCont;

window.onload = function() {
    main = document.getElementById("main");
    main.style.left = "0px";
    tCont = document.getElementById("triangleCont");
    tCont.style.width = "calc(100vw - 280px)";
    
    updateTriangle();
}

function updateTriangle() {
    let triangle = document.getElementById("theTriangle");

    //Update array values
    ar = new Array(n);
    for(let r = 0; r < n; r++) {
        ar[r] = new Array(j);
        for(let c = 0; c < j; c++) {
            if(c==r || c==0) ar[r][c] = 1;
            else if (c > r) ar[r][c] = -1;
            else ar[r][c] = ar[r-1][c-1] + ar[r-1][c];
        }
    }

    //Generate html table
    updateHtml();
}

function updateHtml() {
    let newHTML = "<thead><tr><th></th><th>j=0</th>";

    if(j > 0) {
        for(let i = 1; i < j; i++) {
            newHTML += "<th>" + i + "</th>";
        }
    }
    newHTML += "</tr></thead><tbody><tr><td>n=0</td>";

    for(let r = 0; r < ar.length; r++) {
        if(r != 0) newHTML += "<tr>";
        for(let c = -1; c < ar[r].length; c++) {
            if(c == -1 && r != 0) {newHTML += "<td>" + r + "</td>";}
            else if (c != -1){ 
                let toAdd = ar[r][c] != -1 ? ar[r][c].toString() : " ";
                newHTML += "<td>" + toAdd + "</td>";
            }
        }
        newHTML += "</tr>";
    }

    newHTML += "</tbody>";

    document.getElementById("theTriangle").innerHTML = newHTML;
}

function updateN(e) {
    n = e.value;
    n++;
    updateTriangle();
}

function updateJ(e) {
    j = e.value;
    j++;
    updateTriangle();
}

function toggleBar(e) {

    if(main.style.left == "0px") {
        main.style.left = "-260px";
        tCont.style.width = "calc(100vw - 20px)";
        e.firstElementChild.style.transform = "rotate(40deg)";
        e.lastElementChild.style.transform = "rotate(-40deg)";
    }
    else {
        main.style.left = "0px";
        tCont.style.width = "calc(100vw - 280px)";
        e.firstElementChild.style.transform = "rotate(-40deg)";
        e.lastElementChild.style.transform = "rotate(40deg)";
    }
}