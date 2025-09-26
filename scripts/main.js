 const slides = document.querySelector(".slides");
        const slideCount = document.querySelectorAll(".slide").length;
        let index = 0;

        function showSlide(i) {
            if (i < 0) index = slideCount - 1;
            else if (i >= slideCount) index = 0;
            else index = i;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        document
            .querySelector(".prev")
            .addEventListener("click", () => showSlide(index - 1));
        document
            .querySelector(".next")
            .addEventListener("click", () => showSlide(index + 1));

        setInterval(() => showSlide(index + 1), 5000);