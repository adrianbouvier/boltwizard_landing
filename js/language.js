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
        "languageDropdownText": "Language",
        "emailPlaceholder": "Enter email address...",
        "submitButton": "Get Started",
        "address": "Address",  // New
        "email": "Email",  // New
        "getStartedBtn": "Get Started", // New
        "phone": "Phone",  // New
        "howItWorksLink": "How it works", // New
        "howItWorksTitle": "How it works", // New
        "howItWorksDescription": "Watch this video to understand how Bolt Wizard streamlines rock support documentation for on-site workers." // New
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
        "languageDropdownText": "Språk",
        "emailPlaceholder": "Skriv inn e-postadresse...",
        "submitButton": "Kom i gang",
        "address": "Adresse",  // New
        "email": "E-post",  // New
        "getStartedBtn": "Kom i gang", // New
        "phone": "Telefon",  // New
        "howItWorksLink": "Hvordan det fungerer", // New
        "howItWorksTitle": "Hvordan det fungerer", // New
        "howItWorksDescription": "Se denne videoen for å forstå hvordan Bolt Wizard forenkler dokumentasjon av fjellsikring for arbeidere på stedet." // New
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
        "aboutText": "aboutText",
        "adrianName": "adrianName",
        "adrianBio": "adrianBio",
        "ezequielName": "ezequielName",
        "ezequielBio": "ezequielBio",
        "loginText": "loginText",
        "languageDropdownText": "languageDropdownText",
        "submitButton": "submitButton",
        "address": "address", // New
        "email": "email", // New
        "getStartedBtn": "getStartedBtn", // New
        "phone": "phone", // New
        "howItWorksLink": "howItWorksLink", // New
        "howItWorksTitle": "howItWorksTitle", // New
        "howItWorksDescription": "howItWorksDescription" // New
    };

    // Update text content for all elements
    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[lang][elements[id]];
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