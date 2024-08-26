let main = document.getElementById("main");
let container = document.getElementById("con");
function phones(phone,color){
    main.src = phone;
    switch(color){
    case"1":
    document.body.style.background = "goldenrod";
    container.style.background = "goldenrod";
    container.style.transition = "2s"
    break;
    case"2":
    document.body.style.background = "rgb(52, 147, 195)";
    container.style.background = "rgb(52, 147, 195)";
    container.style.transition = "2s"
    break;
    case"3":
    document.body.style.background = "rgb(49, 70, 80)";
    container.style.transition = "2s"
    container.style.background = "rgb(49, 70, 80)";
    break;
    case"4":
    document.body.style.background = "rgb(151, 142, 135)";
    container.style.transition = "2s"
    container.style.background = "rgb(151, 142, 135)";
    break;
    case"5":
    document.body.style.background = "rgb(150, 64, 3)";
    container.style.transition = "2s"
    container.style.background = "rgb(150, 64, 3)";
    break;
    default:
        document.body.style.background = "black";
        container.style.transition = "2s"
        container.style.backgroundColor ="black";
        break;
    }
}


