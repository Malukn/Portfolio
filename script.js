// スクロールで .fade-in 要素をふわっと表示する
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  targets.forEach((el) => observer.observe(el));
});


