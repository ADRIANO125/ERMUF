window.addEventListener("load", () => {
    const loaderContainer = document.querySelector(".loader-container");
    const content = document.querySelector(".content");

    // إخفاء الـ Loader بعد ثانيتين
    setTimeout(() => {
      loaderContainer.style.opacity = "0";
      loaderContainer.style.visibility = "hidden";

      // إظهار المحتوى
      content.classList.add("active");

      // إعادة التمرير للصفحة
      document.body.style.overflow = "auto";
    }, 2000); // 2000ms = 2 seconds
  });