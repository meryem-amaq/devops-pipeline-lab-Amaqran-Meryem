const statusPhrases = [
    "Flux actifs : CRM, support, ventes, ops",
    "Nouveaux agents : qualification, relance, reporting",
    "Connecteurs en ligne : Slack, Notion, HubSpot, Gmail"
];

const statusPill = document.querySelector("#status-pill");
const revealTargets = document.querySelectorAll(
    ".hero-panel, .feature-card, .timeline-card, .benefit-grid article, .cta-section"
);

let statusIndex = 0;

revealTargets.forEach((element) => {
    element.setAttribute("data-reveal", "");
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.18
    }
);

revealTargets.forEach((element) => observer.observe(element));

if (statusPill) {
    window.setInterval(() => {
        statusIndex = (statusIndex + 1) % statusPhrases.length;
        statusPill.textContent = statusPhrases[statusIndex];
    }, 2600);
}