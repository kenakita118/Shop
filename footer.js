const footer = document.createElement('footer');
footer.innerHTML = `
    <nav class="shadow-sm mt-5">
        <a href="index.html">
            <img class="footer__logo" src="../img/logo/man.webp" alt="PHD">
        </a>
        <ul class="footer__links">
            <li>
                <a href="https://www.bilibili.com">
                    <img src="../img/logo/logo_Bilibili.png" alt="BiliBili">
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com">
                    <img src="../img/logo/logo_Facebook.png" alt="Facebook">
                </a>
            </li>
            <li>
                <a href="https://www.x.com">
                    <img src="../img/logo/logo_X.png" alt="X">
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com">
                    <img src="../img/logo/logo_YouTube.png" alt="YouTube">
                </a>
            </li>
        </ul>
    </nav>
`;

document.body.append(footer);