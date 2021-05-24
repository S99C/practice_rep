function refreshPage() {
    window.location.reload();
}

//ENTER KEY PRESS NOT WORKING
// function key_evt(evt, thiiiiis){
//     var whichKey = (evt.keyCode ? evt.keyCode : evt.which);
//     if(whichKey == 13){
//         console.log(whichKey);
//         calc_bmi();
//     }
// }

function calc_bmi() {
    let hgt = parseInt($("#bmi_h")[0].value);
    let wgt = parseInt($('#bmi_w')[0].value);
    let result = parseFloat((wgt / (hgt * hgt)) * 10000).toFixed(2);
    console.log(hgt, wgt, result);
    if (result > 0) {
        $('output')[0].innerText = result;
    }
    else {
        $("output")[0].innerText = "Enter Values";
    }
}
