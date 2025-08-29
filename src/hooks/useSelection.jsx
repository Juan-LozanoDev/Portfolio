import { useEffect, useState } from "react";

function useSelection() {
    const [selected, setSelected] = useState("Home")

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setSelected(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));
    }, []);

    return (selected)
}

export default useSelection;
