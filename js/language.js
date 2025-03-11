const translations = {
    "en": {
        "about": "About",
        "whoweare": "Who we are",
        "contact": "Contact",
        "getStarted": "Get Started",
        "title": "Bolt Wizard",
        "description": "Bolt Wizard streamlines rock support documentation for on-site workers.",
        "requestTrial": "Request our one-month free trial",
        "aboutText": "Bolt Wizard streamlines rock support documentation for on-site workers. Capture a photo, mark installed bolts with your phone, and generate a detailed report effortlessly.",
        "adrianName": "Adrian A. Bouvier",
        "adrianBio": "Argentinian Civil Engineer with extensive experience in project management, specializing in cost control, budgeting, and technical solutions for large infrastructure projects. With a strong focus on efficiency and systemization, he ensures projects are completed successfully and on time. Passionate about programming, he develops digital tools to optimize workflows and enhance project management. His interest in data analysis and AI drives him to integrate technology into construction, improving decision-making and efficiency. Currently, he is expanding his expertise in Python to further innovate and streamline industry processes.",
        "ezequielName": "Ezequiel Galardi",
        "ezequielBio": "Argentinian Software Engineer specializing in front-end development with React, TypeScript, and AWS. Passionate about creating high-performance and visually refined web applications, he focuses on delivering efficient and scalable solutions. With years of experience in software development, he has worked on diverse projects, always seeking to improve user experience and optimize performance. Constantly learning, he enjoys tackling challenges and refining his code to achieve greater efficiency. As the co-founder and developer of Bolt Wizard, he applies his expertise to building digital tools that enhance workflow and project management.",
        "loginText": "Log in",
        "requestTrial2": "Request our one-month free trial",
        "trialText": "To receive a one-month free trial, please email <a href='mailto:adrianbouvier@gmail.com'>adrianbouvier@gmail.com</a> or contact Adrian at +47 948 18 900. We will be happy to provide you with access as soon as possible.",
        "languageDropdownText": "Language",
        "emailPlaceholder": "Enter email address...",
        "submitButton": "Get Started",
        "address": "Address",
        "email": "Email",
        "getStartedBtn": "Get Started",
        "phone": "Phone",
        "howItWorksLink": "How it works",
        "howItWorksTitle": "How it works",
        "howItWorksDescription": "Watch this video to understand how Bolt Wizard streamlines rock support documentation for on-site workers."
    },
    "no": {
        "about": "Om oss",
        "whoweare": "Hvem vi er",
        "contact": "Kontakt",
        "getStarted": "Kom i gang",
        "title": "Bolt Wizard",
        "description": "Bolt Wizard forenkler dokumentasjonen av fjellsikring for arbeidere på anlæg.",
        "requestTrial": "Be om vår gratis prøveperiode på én måned",
        "aboutText": "Bolt Wizard forenkler dokumentasjonen av bergsikring for arbeidere på stedet. Ta et bilde, merk installerte bolter med telefonen din, og generer en detaljert rapport uten anstrengelse.",
        "adrianName": "Adrian A. Bouvier",
        "adrianBio": "Argentinsk byggingeniør med omfattende erfaring innen prosjektledelse, spesialisert i kostnadskontroll, budsjettering og tekniske løsninger for store infrastrukturprosjekter. Med sterkt fokus på effektivitet og systematisering sikrer han at prosjektene fullføres vellykket og til rett tid. Lidenskapelig opptatt av programmering utvikler han digitale verktøy for å optimalisere arbeidsflyt og forbedre prosjektstyring. Hans interesse for dataanalyse og kunstig intelligens driver ham til å integrere teknologi i byggebransjen, noe som forbedrer beslutningstaking og effektivitet. For tiden utvider han sin ekspertise innen Python for å ytterligere innovere og effektivisere prosesser i bransjen.",
        "ezequielName": "Ezequiel Galardi",
        "ezequielBio": "Argentinsk programvareingeniør spesialisert i front-end-utvikling med React, TypeScript og AWS. Lidenskapelig opptatt av å skape høytytende og visuelt raffinerte webapplikasjoner, fokuserer han på å levere effektive og skalerbare løsninger. Med flere års erfaring innen programvareutvikling har han jobbet med varierte prosjekter, alltid med mål om å forbedre brukeropplevelsen og optimalisere ytelsen. Stadig lærende, liker han å takle utfordringer og finpusse koden for å oppnå større effektivitet. Som medgrunnlegger og utvikler av Bolt Wizard bruker han sin ekspertise til å bygge digitale verktøy som forbedrer arbeidsflyt og prosjektledelse.",
        "loginText": "Logg inn",
        "requestTrial2": "Be om vår gratis prøveperiode på én måned",
        "trialText": "For å motta en en-måneders gratis prøveperiode, vennligst send en e-post til <a href='mailto:adrianbouvier@gmail.com'>adrianbouvier@gmail.com</a> eller kontakt Adrian på +47 948 18 900. Vi vil gjerne gi deg tilgang så snart som mulig.",
        "languageDropdownText": "Språk",
        "emailPlaceholder": "Skriv inn e-postadresse...",
        "submitButton": "Kom i gang",
        "address": "Adresse",
        "email": "E-post",
        "getStartedBtn": "Kom i gang",
        "phone": "Telefon",
        "howItWorksLink": "Hvordan det fungerer",
        "howItWorksTitle": "Hvordan det fungerer",
        "howItWorksDescription": "Se denne videoen for å forstå hvordan Bolt Wizard forenkler dokumentasjon av fjellsikring for arbeidere på stedet."
    }
};

function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang); // Save user preference

    // List of elements to update
    const elements = {
        "aboutLink": "about",
        "whoWeAreLink": "whoweare",
        "contactLink": "contact",
        "title": "title",
        "description": "description",
        "requestTrial": "requestTrial",
        "requestTrial2": "requestTrial2",
        "trialText": "trialText",
        "aboutText": "aboutText",
        "adrianName": "adrianName",
        "adrianBio": "adrianBio",
        "ezequielName": "ezequielName",
        "ezequielBio": "ezequielBio",
        "loginText": "loginText",
        "languageDropdownText": "languageDropdownText",
        "submitButton": "submitButton",
        "address": "address",
        "email": "email",
        "getStartedBtn": "getStartedBtn",
        "phone": "phone",
        "howItWorksLink": "howItWorksLink",
        "howItWorksTitle": "howItWorksTitle",
        "howItWorksDescription": "howItWorksDescription"
    };

    // Update text content for all elements
    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = translations[lang][elements[id]];
        }
    });

    // Update placeholder for email input separately
    const emailInput = document.getElementById("emailAddress");
    if (emailInput) {
        emailInput.placeholder = translations[lang].emailPlaceholder;
        emailInput.setAttribute("aria-label", translations[lang].emailPlaceholder);
    }
}

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'no'; // Default to Norwegian
    changeLanguage(savedLanguage);
});