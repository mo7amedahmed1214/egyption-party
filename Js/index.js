// ^^^*************************** sidebar ****************************
let side = $(".side").outerWidth()
console.log(side);
// !open
$('.sidbar').css({ left: `${-side}px` })

$(".icon").on("click", function () {
    $('.sidbar').animate({ left: `0px` }, 500)
})

// !close
$(".closedIcon").on("click", function () {
    $('.sidbar').animate({ left: `${-side}px` }, 500)
})


// ************************************** scroll to spasific section
$("ul li a").on('click', function () {
    let idSection = $(this).attr("href")
    console.log(idSection);
    let topOfSection = $(idSection).offset().top
    console.log(topOfSection);
    $('html').animate({ scrollTop: topOfSection }, 2000)
})


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ section duration ^^^^^^^^^^^^^^^^^^
$('.clicked').slideUp(0)


$('.title').on('click', function () {

    $(this).next().slideToggle(500)
    $('.clicked').not($(this).next()).slideUp()
})

// *--------------------------------section detils-----------------------//
let dateOfEvent = new Date("2021-11-14").getTime()
console.log(dateOfEvent);
let count = setInterval(function () {
    let newDate = new Date()

    let dateDiff = dateOfEvent - newDate

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))

    let houres = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60 * 60))

    let min = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60))
    let sec = Math.floor((dateDiff % (1000 * 60 )) / (1000 ))



    $(".day").html(days)
    $(".clock").html(-(houres))
    $(".min").html(-(min))
    $(".sec").html(-(sec))




}, 1000)




// ^------------------------------------------------ section contact ----------------------------//

$(".textArea").on('input', function () {
    let len = $(this).val().length;
    console.log(len);

    $("#chars").html(
        100 - len > 0 ? 100 - len : "your available character finished"
    )
})