export function findById(id, data) {
    return data.find((item) => item.id === id);
}

export function renderDino(dino) {
    const div = document.createElement('div');
    div.classList.add('dinosaur');

    const a = document.createElement('a');
    a.href = `./dinosaurs/?id=${dino.id}`;

    if (dino.image) {
        const img = document.createElement('img');
        img.src = `./assets/dinosaurs/${dino.image}`;
        div.append(img);
    }

    const h5 = document.createElement('h5');
    h5.textContent = dino.name;
    div.append(h5);
    a.append(div);
    return a;
}

export function renderDinoDetail(dino) {
    const div = document.createElement('div');
    div.classList.add('dino-detail');
    const title = document.createElement('h1');
    title.textContent = `${dino.name}`;
    div.append(title);

    if (dino.image) {
        const img = document.createElement('img');
        img.src = `../assets/dinosaurs/${dino.image}`;
        div.append(img);
    }

    const ul = document.createElement('ul');
    div.append(ul);
    let li1 = document.createElement('li');
    li1.textContent = `Time period: ${dino.period}`;
    ul.append(li1);

    let li2 = document.createElement('li');
    li2.textContent = `Suborder: ${dino.suborder}`;
    ul.append(li2);

    let li3 = document.createElement('li');
    li3.textContent = `Length: ${dino.length} ft`;
    ul.append(li3);

    return div;
}