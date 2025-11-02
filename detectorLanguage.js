// Detectar o idioma do navegador
function detectLanguage(){
    const userLang = navigator.language || navigator.userLanguage;
    return userLang === 'pt-BR';
}

// Função para atualizar textos baseado no idioma
function updateTexts(){
    const isPtBR = detectLanguage();
    const currentTexts = isPtBR ? texts.pt : texts.en;

    document.addEventListener('DOMContentLoaded', function(){
        // Atualizar title da página
        document.title = currentTexts.title + " - " + currentTexts.subtitle;

        // Atualizar elementos
        document.querySelector('h1').textContent = currentTexts.title;
        document.querySelector('.subtitle').textContent = currentTexts.subtitle;
        document.querySelector('.contact-info .contact-item:nth-child(1) span:last-child').textContent = currentTexts.email;
        document.querySelector('.contact-info .contact-item:nth-child(2) span:last-child').textContent = currentTexts.phone;
        document.querySelector('.contact-info .contact-item:nth-child(3) span:last-child').textContent = currentTexts.location;

        // Seção Sobre
        document.querySelector('section:nth-of-type(1) h2').textContent = currentTexts.appsTitle;
        const aboutPs = document.querySelectorAll('.section:nth-of-type(1) p');
        aboutPs[0].textContent = currentTexts.aboutText1;
        aboutPs[1].textContent = currentTexts.aboutText2;

        // Seção Apps
        document.querySelector('.section::nth-of-type(2) h2').textContent = currentTexts.appsTitle;
        document.querySelector('.app-card:nth-child(1) h3').textContent = currentTexts.app1Title;
        document.querySelector('.app-card:nth-child(1) p').textContent = currentTexts.app1Desc;
        document.querySelector('app-card:nth-child(2) h3').textContent = currentTexts.app2Title;
        document.querySelector('app-card:nth-child(2) p').textContent = currentTexts.app2Desc;

        // Política de Privacidade
        document.querySelector('.privacy-section h2').textContent = currentTexts.privacyTitle;
        document.querySelector('.privacy-section p:first-of-type strong').textContent = currentTexts.lastUpdate;

        document.querySelector('.privacy-section h3:nth-of-type(1)').textContent = currentTexts.section1Title;
        document.querySelector('.privacy-section h3:nth-of-type(1) + p').textContent = currentTexts.section1Text;
        const section1Items = document.querySelectorAll('.privacy-section h3:nth-of-type(1) + p + ul li');
        section1Items[0].textContent = currentTexts.section1Item1;
        section1Items[1].textContent = currentTexts.section1Item2;
        section1Items[2].textContent = currentTexts.section1Item3;

        document.querySelector('.privacy-section h3:nth-of-type(2)').textContent = currentTexts.section2Title;
        document.querySelector('.privacy-section h3:nth-of-type(2) + p').textContent = currentTexts.section2Text;
        const section2Items = document.querySelectorAll('.privacy-section h3:nth-of-type(2) + p + ul li');
        section2Items[0].textContent = currentTexts.section2Item1;
        section2Items[1].textContent = currentTexts.section2Item2;
        section2Items[2].textContent = currentTexts.section2Item3;

        document.querySelector('.privacy-section h3:nth-of-type(3)').textContent = currentTexts.section3Title;
        document.querySelector('.privacy-section h3:nth-of-type(3) + p').innerHTML = currentTexts.section3Text + '<a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a> ';

        document.querySelector('.privacy-section h3:nth-of-type(4)').textContent = currentTexts.section4Title;
        document.querySelector('.privacy-section h3:nth-of-type(4) + p').textContent = currentTexts.section4Text;

        document.querySelector('.privacy-section h3:nth-of-type(5)').textContent = currentTexts.section5Title;
        document.querySelector('.privacy-section h3:nth-of-type(5) + p').textContent = currentTexts.section5Text;

        document.querySelector('.privacy-section h3:nth-of-type(6)').textContent = currentTexts.section6Title;
        document.querySelector('.privacy-section h3:nth-of-type(6) + p').textContent = currentTexts.section6Text;
        const section6Items = document.querySelectorAll('.privacy-secton h3:nth-of-type(6) + p + ul li');
        section6Items[0].textContent = currentTexts.section6Item1;
        section6Items[1].textContent = currentTexts.section6Item2;
        section6Items[2].textContent = currentTexts.section6Item3;
        section6Items[3].textContent = currentTexts.section6Item4;

        document.querySelector('.privacy-section h3:nth-of-type(7)').textContent = currentTexts.section7Title;
        document.querySelector('.privacy-section h3:nth-of-type(7) + p').textContent = currentTexts.section7Text;

        document.querySelector('.privacy-section h3:nth-of-type(8)').textContent = currentTexts.section8Title;
        document.querySelector('.privacy-section h3:nth-of-type(8) + p').textContent = currentTexts.section8Text;

        // Footer
        const footerPs = document.querySelectorAll('footer p');
        footerPs[0].innerHTML = '&copy; ' + currentTexts.footerText1;
        footerPs[1].textContent = currentTexts.footerText2;
    })
}