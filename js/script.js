document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    if (!filterButtons.length || !projects.length) {
        return;
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            projects.forEach(project => {
                const category = project.dataset.category;
                project.style.display = (filter === "all" || category === filter) ? "block" : "none";
            });
        });
    });
});
