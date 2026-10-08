document.addEventListener("DOMContentLoaded", function () {


    const music = document.getElementById("birthdayMusic");
    const musicButton = document.getElementById("musicButton");

    if (music && musicButton) {

        music.volume = 0.5;

        musicButton.addEventListener("click", function () {

            if (music.paused) {

                music.play()
                    .then(function () {
                        musicButton.textContent = "♫";
                        musicButton.style.background = "#d8c9ed";
                    })
                    .catch(function (error) {
                        console.log("Music error:", error);
                    });

            } else {

                music.pause();

                musicButton.textContent = "♪";
                musicButton.style.background = "";

            }

        });
    }




    const exploreButton =
        document.getElementById("exploreButton");

    const messageSection =
        document.querySelector(".message-section");

    if (exploreButton && messageSection) {

        exploreButton.addEventListener("click", function () {

            messageSection.scrollIntoView({
                behavior: "smooth"
            });

        });

    }




    const revealItems = document.querySelectorAll(
        ".message-card, .photo-card, .letter-card, .cake-container"
    );

    revealItems.forEach(function (item) {

        item.classList.add("reveal");

    });


    function revealOnScroll() {

        revealItems.forEach(function (item) {

            const position =
                item.getBoundingClientRect().top;

            const screenHeight =
                window.innerHeight;

            if (position < screenHeight - 80) {

                item.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();



    const wishButton =
        document.getElementById("wishButton");

    const wishMessage =
        document.getElementById("wishMessage");

    const candles =
        document.querySelectorAll(".candle");

    if (wishButton && wishMessage) {

        wishButton.addEventListener("click", function () {

            /* Turn off candles */

            candles.forEach(function (candle) {

                candle.classList.add("flame-out");

            });


            /* Show message */

            wishMessage.classList.add("show");


            /* Change button */

            wishButton.textContent =
                "Wish Made 💜";

            wishButton.disabled = true;


            /* Flower celebration */

            createFlowers();

        });

    }



    function createFlowers() {

        const flowers = [
            "🌸",
            "🌷",
            "🌼",
            "💜",
            "✨"
        ];

        for (let i = 0; i < 25; i++) {

            setTimeout(function () {

                const flower =
                    document.createElement("div");

                flower.className = "petal";

                flower.textContent =
                    flowers[
                        Math.floor(
                            Math.random() * flowers.length
                        )
                    ];


                flower.style.left =
                    Math.random() * 100 + "vw";

                flower.style.top =
                    Math.random() * 40 + "vh";

                flower.style.fontSize =
                    14 + Math.random() * 15 + "px";


                document.body.appendChild(flower);


                setTimeout(function () {

                    flower.remove();

                }, 1600);


            }, i * 70);

        }

    }



    const photos =
        document.querySelectorAll(".photo-card img");

    photos.forEach(function (photo) {

        photo.addEventListener("error", function () {

            photo.style.display = "none";

        });

    });



    const buttons =
        document.querySelectorAll(".primary-button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.96)";

            setTimeout(function () {

                button.style.transform = "";

            }, 150);

        });

    });


    console.log(
        "🌸 Birthday Website Loaded Successfully 💜"
    );

});
