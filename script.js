const toggleBox = document.querySelector("input");
const lightModeText = document.getElementById("light_mode");
const darkModeText = document.getElementById("dark_mode");
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');


function toggleDarkLightMode() {
    lightModeText.classList.toggle('hidden');
    darkModeText.classList.toggle('hidden');
    img1.src = `./UndrawIllusration/undraw_By_the_road_re_vvs7_${window.localStorage.getItem('theme')}.svg`;
    img2.src = `./UndrawIllusration/undraw_My_location_re_r52x_${window.localStorage.getItem('theme')}.svg`;
    img3.src = `./UndrawIllusration/undraw_Travel_mode_re_2lxo_${window.localStorage.getItem('theme')}.svg`;
    document.documentElement.classList.toggle('dark');
}

function changeTheme(event) {
    event.target.checked ? window.localStorage.setItem('theme', 'dark') : window.localStorage.setItem('theme', 'light');
    toggleDarkLightMode();
}

toggleBox.addEventListener('change', changeTheme);

const theme = window.localStorage.getItem('theme');
if (theme && theme === 'dark') {
    toggleBox.checked = true;
    toggleDarkLightMode();
}