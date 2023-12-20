function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function darkmode()
{
    var icon = document.getElementById("icon");
    icon.onclick = function()
    {
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme"))
        {
            icon.src = "./assets/moon.png";
        }else{
            icon.src = "./assets/sun.png";
        }
    }
}