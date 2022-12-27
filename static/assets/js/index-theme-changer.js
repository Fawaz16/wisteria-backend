
//Calling the items in the body for the theme changing
const autoTypingText = document.getElementsByClassName("auto")[0];
const descTitle = document.getElementsByClassName("desc-title");
const desc = document.getElementsByClassName("desc");
const descBtn = document.getElementsByClassName("desc-btn");

lightBtn.onclick = ()=>{
    //Applying theme changes to the nav, body and footer
    navbarTogglerBtn.style.backgroundColor = "rgb(0,0,0,0)";
    navbar.style.backgroundColor = "var(--light-theme-header-color)";
    themeChangerBtn.style.color = "var(--light-theme-text-color)";
    body.style.backgroundColor = "var(--light-theme-bg-color)";
    footer.style.backgroundColor = "var(--light-theme-bg-color)";
    emailSubmitBtn.style.backgroundColor = "var(--light-theme-header-color)";
    emailSubmitBtn.style.color = "var(--light-theme-text-color)";
    footDesc.style.color = "var(--light-theme-text-color)";

    for(let i = 0; i < footDescText.length; i++){
        footDescText[i].style.color = "var(--light-theme-text-color)";
    }
    for(let i = 0; i < footerIcon.length; i++){
        footerIcon[i].style.color = "var(--light-theme-header-color)";
    }

    //Applying changes to all items in the body
    autoTypingText.style.color = "var(--light-theme-text-color)";
    for(let i = 0; i < descTitle.length; i++){
        descTitle[i].style.color = "var(--light-theme-header-color)";
    }
    for(let i = 0; i < desc.length; i++){
        desc[i].style.color = "var(--light-theme-text-color)";
    }
    for(let i = 0; i < descBtn.length; i++){
        descBtn[i].style.borderColor = "var(--light-theme-header-color)";
    }
}

darkBtn.onclick = ()=>{
    //Applying theme changes to the nav, body and footer
    navbarTogglerBtn.style.backgroundColor = "white";
    navbar.style.backgroundColor = "var(--dark-theme-header-color)";
    themeChangerBtn.style.color = "var(--dark-theme-text-color)";
    body.style.backgroundColor = "var(--dark-theme-bg-color)";
    footer.style.backgroundColor = "var(--dark-theme-bg-color)";
    emailSubmitBtn.style.backgroundColor = "var(--dark-theme-header-color)";
    emailSubmitBtn.style.color = "var(--dark-theme-text-color)";
    footDesc.style.color = "var(--dark-theme-text-color)";

    for(let i = 0; i < footDescText.length; i++){
        footDescText[i].style.color = "var(--dark-theme-text-color)";
    }
    for(let i = 0; i < footerIcon.length; i++){
        footerIcon[i].style.color = "var(--dark-theme-header-color)";
    }

    //Applying changes to all items in the body
    autoTypingText.style.color = "white";
    for(let i = 0; i < descTitle.length; i++){
        descTitle[i].style.color = "var(--dark-theme-text-color)";
    }
    for(let i = 0; i < desc.length; i++){
        desc[i].style.color = "var(--dark-theme-text-color)";
    }
    for(let i = 0; i < descBtn.length; i++){
        descBtn[i].style.borderColor = "var(--dark-theme-header-color)";
    }
}

primaryBtn.onclick = () => {
    //Applying theme changes to the nav, body and footer
    navbarTogglerBtn.style.backgroundColor = "white";
    navbar.style.backgroundColor = "var(--primary-theme-header-color)";
    themeChangerBtn.style.color = "var(--primary-theme-text-color)";
    body.style.backgroundColor = "var(--pimary-theme-bg-color)";
    footer.style.backgroundColor = "var(--primary-theme-bg-color)";
    emailSubmitBtn.style.backgroundColor = "var(--primary-theme-header-color)";
    emailSubmitBtn.style.color = "var(--primary-theme-text-color)";
    footDesc.style.color = "var(--primary-theme-text-color)";

    for(let i = 0; i < footDescText.length; i++){
        footDescText[i].style.color = "var(--primary-theme-text-color)";
    }
    for(let i = 0; i < footerIcon.length; i++){
        footerIcon[i].style.color = "var(--primary-theme-header-color)";
    }

    //Applying changes to all items in the body
    autoTypingText.style.color = "var(--primary-theme-text-color)";

    for(let i = 0; i < descTitle.length; i++){
        descTitle[i].style.color = "var(--primary-theme-header-color)";
    }
    for(let i = 0; i < desc.length; i++){
        desc[i].style.color = "var(--primary-theme-text-color)";
    }
    for(let i = 0; i < descBtn.length; i++){
        descBtn[i].style.borderColor = "var(--primary-theme-header-color)";
    }
}

successBtn.onclick = () => {
    //Applying theme changes to the nav, body and footer
    navbarTogglerBtn.style.backgroundColor = "white";
    navbar.style.backgroundColor = "var(--success-theme-header-color)";
    themeChangerBtn.style.color = "var(--success-theme-text-color)";
    body.style.backgroundColor = "var(--success-theme-bg-color)";
    footer.style.backgroundColor = "var(--success-theme-bg-color)";
    emailSubmitBtn.style.backgroundColor = "var(--success-theme-header-color)";
    emailSubmitBtn.style.color = "var(--success-theme-text-color)";
    footDesc.style.color = "var(--success-theme-text-color)";

    for(let i = 0; i < footDescText.length; i++){
        footDescText[i].style.color = "var(--success-theme-text-color)";
    }
    for(let i = 0; i < footerIcon.length; i++){
        footerIcon[i].style.color = "var(--success-theme-header-color)";
    }

    //Applying changes to all items in the body
    autoTypingText.style.color = "var(--success-theme-text-color)";
    body.style.backgroundColor = "var(--success-theme-bg-color)";

    for(let i = 0; i < descTitle.length; i++){
        descTitle[i].style.color = "var(--success-theme-header-color)";
    }
    for(let i = 0; i < desc.length; i++){
        desc[i].style.color = "var(--success-theme-text-color)";
    }
    for(let i = 0; i < descBtn.length; i++){
        descBtn[i].style.borderColor = "var(--success-theme-header-color)";
    }
}

dangerBtn.onclick = () => {
    //Applying theme changes to the nav, body and footer
    navbarTogglerBtn.style.backgroundColor = "white";
    navbar.style.backgroundColor = "var(--danger-theme-header-color)";
    themeChangerBtn.style.color = "var(--danger-theme-text-color)";
    body.style.backgroundColor = "var(--danger-theme-bg-color)";
    footer.style.backgroundColor = "var(--danger-theme-bg-color)";
    emailSubmitBtn.style.backgroundColor = "var(--danger-theme-header-color)";
    emailSubmitBtn.style.color = "var(--danger-theme-text-color)";
    footDesc.style.color = "var(--danger-theme-text-color)";

    for(let i = 0; i < footDescText.length; i++){
        footDescText[i].style.color = "var(--danger-theme-text-color)";
    }
    for(let i = 0; i < footerIcon.length; i++){
        footerIcon[i].style.color = "var(--danger-theme-header-color)";
    }

    //Applying changes to all items in the body
    autoTypingText.style.color = "var(--danger-theme-text-color)";
    body.style.backgroundColor = "var(--danger-theme-bg-color)";

    for(let i = 0; i < descTitle.length; i++){
        descTitle[i].style.color = "var(--danger-theme-header-color)";
    }
    for(let i = 0; i < desc.length; i++){
        desc[i].style.color = "var(--danger-theme-text-color)";
    }
    for(let i = 0; i < descBtn.length; i++){
        descBtn[i].style.borderColor = "var(--danger-theme-header-color)";
    }
}
