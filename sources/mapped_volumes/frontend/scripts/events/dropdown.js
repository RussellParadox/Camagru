const settings_dropdown = document.getElementById("settings-dropdown");
const navbar_settings = document.getElementById("navbar-settings");

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
