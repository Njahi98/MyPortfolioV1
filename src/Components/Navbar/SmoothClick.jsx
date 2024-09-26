export const handleSmoothClick = (id) => (e) => {
    e.preventDefault();
    const element = id ? document.getElementById(id) : document.body;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };