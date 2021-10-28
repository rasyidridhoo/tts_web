const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let namebtn = pil.getAttribute('name');
        geserCek(namebtn);
    });
});

function geserCek(nbtn) {
    const table = document.querySelectorAll('.' + nbtn);
    if (table[0].disabled == true) {
        autoNext(0, nbtn);
    } else {
        table[0].select();
    }


    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener('input', function () {
            if (i == table.length - 1) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);


            } else if (i == table.length - 2 && table[table.length - 1].disabled == true) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);

            } else {
                autoNext(i, nbtn);
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
            }

        });

    }
}


function autoNext(i, cn) {
    let d = document.querySelectorAll('.' + cn);
    if (d[i + 1].disabled == true) {
        d[i + 2].select();

    } else {
        d[i + 1].select();
    }

}

function catString(cn) {
    var concat = "";
    let d = document.querySelectorAll('.' + cn);
    for (let i = 0; i < d.length; i++) {
        concat += d[i].value;
    }
    return concat;
}

function submitString(concat, tipe, tabel) {
    
        if (concat.toUpperCase() == "HTML" && tipe == "t1") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "JAVASCRIPT" && tipe == "t2") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "SCRIPT" && tipe == "t3") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "VALUE" && tipe == "t4") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "CSS" && tipe == "d1") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "BOOTSTRAP" && tipe == "d2") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "AUDIO" && tipe == "d3") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "TITLE" && tipe == "d4") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        }


    }

function tableRepeat(table) {
    for (let j = 0; j < table.length; j++) {
        table[j].disabled = true;
       
    }
}

$(document).ready(function(){
    $(".target").hide();
      
      $("#toggle").click(function(){
        $(".target").show();
      });

      $("#toggleHide").click(function(){
        $(".target").hide();
      });
});