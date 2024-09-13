const LOCAL_THEME_KEY = "LOCAL_THEME_KEY";

const allThemeBtns = document.querySelectorAll(".theme-btn");

const themes = [
    ["#373A40", "#EEEEEE", "rgba(0, 255, 255, 0.32)"],
    ["#134B70", "rgb(236, 144, 238)", "rgba(19, 76, 113, 0.62)"],
    ["#55679C", "#C0C78C", "rgba(255, 255, 255, 0.32)"],
    ["#604CC3", "#F5F5F5", "rgba(255, 255, 255, 0.32)"],
    ["#C96868", "#FFF4EA", "rgba(255, 255, 255, 0.32)"],
];

let activeThemeKey = 0;
let selectedTheme = themes[activeThemeKey];

async function setThemeKey(newThemeKey = 0) {
    return new Promise((_, __) => {
        if (!localStorage) return __();

        localStorage.setItem(LOCAL_THEME_KEY, newThemeKey);
        _();
    });
}

async function getThemeKey(defaultValue = 0) {
    return new Promise((_, __) => {
        if (!localStorage) return __();

        let themeKey = localStorage.getItem(LOCAL_THEME_KEY);

        if (themeKey) _(themeKey);
        else _(defaultValue);
    });
}

allThemeBtns.forEach(elem => {
    elem.addEventListener("click", e => {
        if (!gamePaused) return;

        let themeKey = parseInt(e.target.getAttribute("theme-key"));
        if (Number.isNaN(themeKey) || themeKey > 4) {
            themeKey = 0;
        }

        setThemeKey(themeKey);

        activeThemeKey = themeKey;

        let selectedTheme = themes[activeThemeKey];
        if (!selectedTheme) selectedTheme = themes[0];

        wallColor = selectedTheme[0];
        foodColor = selectedTheme[1];
        ghostRadiusStrokeColor = selectedTheme[2];

        draw();

        allThemeBtns.forEach(_ => {
            if (_.classList.contains("active")) {
                _.classList.remove("active");
            }
        }
    );
        e.target.classList.add("active");
    });
});

getThemeKey(0)
.then(themeKey => {
    activeThemeKey = themeKey;

    let selectedTheme = themes[activeThemeKey];
    if (!selectedTheme) selectedTheme = themes[1];

    wallColor = selectedTheme[0];
    foodColor = selectedTheme[1];
    ghostRadiusStrokeColor = selectedTheme[2];

    draw();

    allThemeBtns.forEach(elem => {
        let _themeKey = elem.getAttribute("theme-key");
        _themeKey = parseInt(_themeKey);

        if (Number.isNaN(_themeKey)) {
            _themeKey = 0
        }

        if (themeKey == _themeKey) {
            allThemeBtns.forEach(el => el.classList.remove("active"));
            elem.classList.add("active");
        }
    });
});
