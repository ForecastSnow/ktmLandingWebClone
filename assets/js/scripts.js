document.addEventListener('DOMContentLoaded', () => {

    function nav() {

        const menuItems = document.querySelectorAll('.indexNameCategory');
        const categories = document.querySelectorAll('.indexCategoryContainer');
        const nav = document.getElementById("nav");
        const basicIndexContainer = document.querySelector(".basicIndexContainer");
        const basicNavContainer = document.querySelector(".basicNavContainer");
        const burgerNavToggle = document.getElementById("burgerNavToggle");
        const navLines = document.getElementById('burgerNavToggleLines');
        const navCross = document.getElementById('burgerNavToggleCross');
        const subBikesMenuCategory = document.querySelectorAll('.bikeCategory');
        const subExtendedCategory = document.querySelectorAll('.subExtendedCategory');
        const completedIndex = document.querySelector(".completedIndex");

        navLines.addEventListener('click', () => {

            navCross.classList.toggle('active');

            navLines.classList.toggle('disable');

            nav.classList.add('completedIndexActive');

            basicIndexContainer.classList.add("completedIndexActive")

            basicNavContainer.classList.add("completedIndexActive")

            menuItems.forEach(btn => btn.classList.remove('selected'));

            categories.forEach(cat => cat.classList.remove('active'));

        });

        navCross.addEventListener('click', () => {

            navCross.classList.toggle('active');

            navLines.classList.remove('disable');

            nav.classList.remove("completedIndexActive");

            basicNavContainer.classList.remove("completedIndexActive")

            basicIndexContainer.classList.remove("completedIndexActive")

            menuItems.forEach(btn => btn.classList.remove('selected'));

            categories.forEach(cat => cat.classList.remove('active'));

        });

        menuItems.forEach((item, index) => {

            item.addEventListener('click', () => {

                navCross.classList.add('active');

                menuItems.forEach(btn => btn.classList.remove('selected'));

                item.classList.add('selected');

                categories.forEach(cat => cat.classList.remove('active'));

                if (categories[index]) {

                    categories[index].classList.add('active');


                }

                if (nav) {

                    nav.classList.add("completedIndexActive");

                    basicIndexContainer.classList.add("completedIndexActive")

                    basicNavContainer.classList.add("completedIndexActive")

                    navLines.classList.add('disable');

                }

            });

        });

        subBikesMenuCategory.forEach((item, index) => {

            item.addEventListener('click', () => {

                subBikesMenuCategory.forEach(btn => btn.classList.remove('selected'));

                item.classList.add('selected');

                subExtendedCategory.forEach(cat => cat.classList.remove('active'));

                if (subExtendedCategory[index]) {

                    subExtendedCategory[index].classList.add('active');

                }

            });

        });

        const mediaQuery = window.matchMedia("(max-width: 1024px)");

        function responsiveNav(cssCondition) {
            if (cssCondition.matches) {

                menuItems.forEach((basicIndexCategory, index) => {

                    const CategoryContainer = categories[index];

                    if (CategoryContainer) {
                        basicIndexCategory.appendChild(CategoryContainer);
                    }

                });

                completedIndex.appendChild(basicIndexContainer);

            } else {

                categories.forEach((CategoryContainer) => {
                    completedIndex.appendChild(CategoryContainer);
                });

                burgerNavToggle.after(basicIndexContainer);
            }
        }

        mediaQuery.addEventListener('change', responsiveNav);

        responsiveNav(mediaQuery);

    }

    function carousel() {

        const carouselItems = document.getElementById('carouselItems');

        const carouselButtons = document.querySelectorAll('.btnCarousel');

        let currentSlideIndex = 0;

        const updateSlidePosition = (newIndex) => {

            const offset = newIndex * -100;

            carouselItems.style.transform = `translateX(${offset}vw)`;

            carouselButtons.forEach((button, index) => {

                button.classList.remove('active');

                if (index === newIndex) {
                    button.classList.add('active');
                }
            });

            currentSlideIndex = newIndex;
        };

        carouselButtons.forEach((button, index) => {

            button.addEventListener('click', () => {

                updateSlidePosition(index);

            });
        });

        setInterval(() => {

            if ((currentSlideIndex + 1) < carouselButtons.length) {
                updateSlidePosition((currentSlideIndex + 1))
            } else {
                updateSlidePosition(0)
            }


        }, 5000)


        updateSlidePosition(0);

    }

    function footerCategory() {

        const categories = document.querySelectorAll(".categoryContainer");

        categories.forEach((category) => {
            category.addEventListener('click', () => {

                categories.forEach((item) => {
                    if (item !== category) {
                        item.classList.remove('active');
                    }
                });


                category.classList.toggle('active');
            });
        });

    }

    carousel()

    nav()

    footerCategory()


});