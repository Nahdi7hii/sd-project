        // Smooth scrolling only
        var links = document.querySelectorAll('a[href^="#"]');
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = function(e) {
                e.preventDefault();
                var href = this.getAttribute('href');
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            };
        }