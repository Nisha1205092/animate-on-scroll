const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            entry.target.classList.toggle('show', entry.isIntersecting)
        })
    },
    {
        threshold: 0.005
    }
)

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))