// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    },
];


const cardRow = document.querySelector(".row");

let cards = "";
for (let i = 0; i < team.length; i++) {
    const item = team[i];
    // MILESTONE 1:
    // Stampare su console le informazioni di nome, ruolo e la stringa della foto
    console.log(item.name, item.role, item.photo) 
    cards += `
        <div class="col">
            <div class="card">
            <img class="card-img-top" src="img/${item.photo}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                    ${item.role}</h6>
                </div>
            </div>
        </div>
    `;
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
console.log(cards);
cardRow.innerHTML = cards;