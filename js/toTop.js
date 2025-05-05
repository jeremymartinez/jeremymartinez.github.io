/*   
   // Create scroll to top when clicking Next Project

    function toTopNext() {
        const btn = document.getElementById('next');

        btn.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
        }));
    }

    // Create scroll to top when clicking Last Project

    function toTopLast() {
        const btn = document.getElementById('last');

        btn.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
        }));
    }

    // Initialize function on first page load

    toTopNext();

    // Initialize function on swup event page reload

    swup.on('contentReplaced', toTopNext);

    // Initialize function on first page load

    toTopLast();

    // Initialize function on swup event page reload

    swup.on('contentReplaced', toTopLast);

    // For Top Navs -- Repetitive but I can't figure out how to use getElementByClassName and the array that generates with addEventListener

    function toTopNav() {
        const btnOne = document.getElementById('nav-one');

        btnOne.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
        }));
        const btnTwo = document.getElementById('nav-two');

        btnTwo.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
        }));
        const btnThree = document.getElementById('nav-three');

        btnThree.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
        }));
        const btnFour = document.getElementById('nav-four');

        btnFour.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
        }));
    }

    toTopNav();

    swup.on('contentReplaced', toTopNav);
*/


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.toTop').forEach(function(element) {
        element.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        });
    });
});

      
swup.on('pageView', () => {
    document.querySelectorAll('.toTop').forEach(function(element) {
        element.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        });
    });
});
