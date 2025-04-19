const settings_dropdown = document.getElementById("settings-dropdown");
const navbar_settings = document.getElementById("navbar-settings");
const settings_dropdown_content = settings_dropdown.querySelectorAll("a");

navbar_settings.addEventListener("mousemove", (e) => {
    settings_dropdown.style.display = "block";
});

settings_dropdown.addEventListener("mousemove", (e) => {
    settings_dropdown.style.display = "block";
});

navbar_settings.addEventListener("mouseleave", () => {
    settings_dropdown.style.display = "none";
});

settings_dropdown.addEventListener("mouseleave", () => {
    settings_dropdown.style.display = "none";
});

settings_dropdown_content.forEach((a) => {
    a.addEventListener("click", (e) => {
        settings_dropdown.style.display = "none";
    });
});
