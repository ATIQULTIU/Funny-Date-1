javascript
/* =========================================
   SCREEN NAVIGATION
========================================= */

function goToScreen(number) {

    // Hide every screen
    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    // Show selected screen
    document
        .getElementById("screen" + number)
        .classList.add("active");


    // Scroll to top
    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
}



/* =========================================
   YES BUTTON
========================================= */

function sayYes() {

    const message =
        document.getElementById("yesMessage");


    // Show funny message

    message.innerHTML = `

        <div class="success">

            SO YOU ACTUALLY SAID YES?! 😭💖

        </div>

    `;


    // Launch confetti

    createConfetti();


    // Go to next screen

    setTimeout(() => {

        goToScreen(2);

    }, 1600);

}



/* =========================================
   MOVING "NO" BUTTON
========================================= */

function moveNoButton() {

    const button =
        document.getElementById("noButton");


    /*
       Change the button from normal
       positioning to fixed positioning.
    */

    button.style.position = "fixed";


    /*
       Keep the button inside
       the visible browser window.
    */

    const padding = 20;


    const maxX =
        window.innerWidth -
        button.offsetWidth -
        padding;


    const maxY =
        window.innerHeight -
        button.offsetHeight -
        padding;


    /*
       Generate random X/Y position.
    */

    const randomX =
        Math.max(
            padding,
            Math.floor(
                Math.random() * maxX
            )
        );


    const randomY =
        Math.max(
            padding,
            Math.floor(
                Math.random() * maxY
            )
        );


    /*
       Move the button.
    */

    button.style.left =
        randomX + "px";


    button.style.top =
        randomY + "px";


    /*
       Change button text
       every time it escapes.
    */

    button.innerText =
        randomNoText();

}



/* =========================================
   RANDOM NO BUTTON TEXT
========================================= */

function randomNoText() {

    const texts = [

        "No 😐",

        "Nice try 😂",

        "Catch me! 🏃",

        "Nope!",

        "Too slow 😭",

        "Absolutely not!",

        "You can't click me 😎",

        "Try again 😂",

        "I refuse!",

        "NOOO 😭",

        "Missed me! 😂",

        "Not today 😌",

        "Almost! 👀"

    ];


    const randomIndex =
        Math.floor(
            Math.random() *
            texts.length
        );


    return texts[randomIndex];

}



/* =========================================
   FOOD SELECTION
========================================= */

function chooseFood(food) {


    /*
       Sushi gets the main
       payment twist.
    */

    if (food === "Sushi") {

        createConfetti();


        setTimeout(() => {

            document
                .getElementById(
                    "paymentOverlay"
                )
                .classList.add("show");

        }, 400);


        return;
    }


    /*
       Funny response for
       other food choices.
    */

    alert(

        food +
        "?! Interesting choice... 😭\n\n" +

        "Unfortunately, the Sushi Department " +
        "has already approved the date."

    );


    /*
       Still show the fake
       payment twist.
    */

    setTimeout(() => {

        document
            .getElementById(
                "paymentOverlay"
            )
            .classList.add("show");

    }, 500);

}



/* =========================================
   CLOSE PAYMENT MODAL
========================================= */

function closePayment() {

    document
        .getElementById(
            "paymentOverlay"
        )
        .classList.remove("show");

}



/* =========================================
   MOCK PAYMENT
========================================= */

function fakePayment() {

    const reaction =
        document.getElementById(
            "reaction"
        );


    /*
       First reaction.
    */

    reaction.innerHTML =

        "WAIT... YOU ACTUALLY CLICKED IT?! 😭😂";


    /*
       Confetti.
    */

    createConfetti();


    /*
       Change reaction after
       a short delay.
    */

    setTimeout(() => {

        reaction.innerHTML =

            "Payment successful: $0.00 💸<br>" +

            "Your wallet survived. Congratulations. 🥳";

    }, 1300);

}



/* =========================================
   CONFETTI GENERATOR
========================================= */

function createConfetti() {


    const items = [

        "💖",

        "💕",

        "🎉",

        "✨",

        "🥳",

        "🍣",

        "💸",

        "❤️",

        "🎊"

    ];


    /*
       Create 30 pieces
       of confetti.
    */

    for (let i = 0; i < 30; i++) {


        const element =
            document.createElement(
                "div"
            );


        element.className =
            "confetti";


        /*
           Random emoji.
        */

        element.innerText =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];


        /*
           Random horizontal
           position.
        */

        element.style.left =
            Math.random() * 100 +
            "vw";


        /*
           Start above screen.
        */

        element.style.top =
            "-30px";


        /*
           Random animation delay.
        */

        element.style.animationDelay =
            Math.random() * 0.5 +
            "s";


        /*
           Add to page.
        */

        document.body.appendChild(
            element
        );


        /*
           Remove after animation.
        */

        setTimeout(() => {

            element.remove();

        }, 2200);

    }

}



/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closePayment();

        }

    }
);



/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

document
    .getElementById("paymentOverlay")
    .addEventListener(
        "click",
        function(event) {

            /*
               If the user clicks
               the dark background,
               close the modal.
            */

            if (
                event.target === this
            ) {

                closePayment();

            }

        }
    );