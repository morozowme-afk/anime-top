document.addEventListener("DOMContentLoaded", () => {
    const characters = [
        {
            name: "Мику Накано",
            anime: "Пять невест",
            img: "https://static.wikia.nocookie.net/gotoubun/images/3/31/Nakano_Miku.png",
            rank: 1,
            rating: 5,
            desc: "Спокойная и умная старшая сестра из семейства Накаго."
        },
        {
            name: "Рем",
            anime: "Re:Zero",
            img: "https://static.wikia.nocookie.net/rezero/images/2/20/Rem.png",
            rank: 2,
            rating: 5,
            desc: "Верная и преданная служанка, известная своей добротой."
        },
        {
            name: "Хацуне Мику",
            anime: "Vocaloid",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hatsune_Miku_3D.png/330px-Hatsune_Miku_3D.png",
            rank: 3,
            rating: 4,
            desc: "Цифровая идолка с узнаваемым голубым хвостиком."
        },
        {
            name: "Кушина Узумаки",
            anime: "Наруто",
            img: "https://static.wikia.nocookie.net/naruto/images/9/9a/Kushina.png",
            rank: 4,
            rating: 4,
            desc: "Мать Наруто, известная своей страстью и силой духа."
        },
        {
            name: "Асано Мари",
            anime: "Blue Period",
            img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Blue_Period_Mari.png",
            rank: 5,
            rating: 3,
            desc: "Творческая и эмоциональная студентка, любящая искусство."
        }
    ];

    const container = document.getElementById("charactersContainer");

    characters.forEach((char) => {
        const card = document.createElement("div");
        card.className = "character-card";

        // Формируем рейтинг звездочками
        const stars = '★'.repeat(char.rating) + '☆'.repeat(5 - char.rating);

        card.innerHTML = `
            <img src="${char.img}" alt="${char.name}" class="character-img" />
            <div class="character-name">${char.rank}. ${char.name}</div>
            <div class="character-desc">${char.anime} - ${char.desc}</div>
            <div class="character-rating">${stars}</div>
        `;

        container.appendChild(card);
    });
});
