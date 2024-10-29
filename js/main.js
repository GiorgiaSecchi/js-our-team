//# Esercizio: Our Team
// Dato un array di oggetti rappresentante un team di un’azienda,
// creare una pagina dedicata in cui mostrare una card per ciascun componente.

// BONUS
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina
// (usate una foto qualunque)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

//# Recupero elemento in cui generare le card

const cardsGrid = document.getElementById("cards-grid");
console.log(cardsGrid);

//# Funzione che genera html card

const generateMemberCardHtml = (name, role, email, img) => {
  return ` <div class="col">
                <div class="card mb-3 shadow-sm">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img
                        src="./${img}"
                        class="img-fluid rounded-start"
                        />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${role}</p>
                        <p class="card-text">
                            <small class="text-body-secondary"
                            >${email}</small
                            >
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>`;
};

//# Funzione: stampa card con dati forniti dalla lista di oggetti in un determinato elemento (contenitore)

const printMemberCards = (container, members) => {
  // stringa vuota
  let cardsHtml = ``;

  // per ogni oggetto dentro lista teamMembers (parametro "member")
  teamMembers.forEach((member) => {
    // estraggo le informazioni {...} dall'oggeto "member"
    const { name, role, email, img } = member;

    // utilizzo la funzione con le proprietà estratte e genero html card
    const memberCardHtml = generateMemberCardHtml(name, role, email, img);

    // concateno le cards generate dentro la variabile già dichiarata fuori
    cardsHtml += memberCardHtml;
  });

  // le inseirsco dentro elemento html
  cardsGrid.innerHTML = cardsHtml;
};

//# output cards nell'html

printMemberCards(cardsGrid, teamMembers);
