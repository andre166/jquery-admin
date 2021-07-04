let tableBody = $('.cards-container')[0]

let contacts = [
    {
        id: 1,
        name: 'André',
        lastname: 'de Souza Mesquita Bezerra Lima',
        email: 'andre@hotmail.com',
        gender: 'M',
        language: 'Portuguese',
        birthday: '1993-11-25',
    },
    {
        id: 1,
        name: 'André',
        lastname: 'Mesquita',
        email: 'andre@hotmail.com',
        gender: 'F',
        language: 'Portuguese',
        birthday: '1993-11-25',
    },
    {
        id: 1,
        name: 'André',
        lastname: 'Mesquita',
        email: 'andre@hotmail.com',
        gender: 'F',
        language: 'Portuguese',
        birthday: '1993-11-25',
    },
    {
        id: 1,
        name: 'André',
        lastname: 'Mesquita',
        email: 'andre@hotmail.com',
        gender: 'M',
        language: 'Portuguese',
        birthday: '1993-11-25',
    },
]

contacts.forEach((c) => {
    let tableRow = `
        <div class="card">
            <div class="card-body">
            <h6 class="custom-card-title">${c.name + ' ' + c.lastname}</h6>
            <div class="list-item-root">
                <span class="text-primary">Email</span>
                <span class="text-secondary">${c.email}</span>
            </div>
            <div class="list-item-root">
                <span class="text-primary">Gênero</span>
                <span class="text-secondary">${
                    c.gender == 'M' ? 'Masculino' : 'Feminino'
                }</span>
            </div>
            <div class="list-item-root">
                <span class="text-primary">Linguagem</span>
                <span class="text-secondary">${c.language}</span>
            </div>
            <div class="list-item-root">
                <span class="text-primary">Data de nascimento</span>
                <span class="text-secondary">${moment(c.birthday).format(
                    'DD/MM/YYYY'
                )}</span>
            </div>
   
            </div>
            <div class="d-flex justify-content-end p-2">
                <button class="d-flex mr-1 custom-btn custom-btn-transp">
                    <span class="material-icons">
                        delete_outline
                    </span>
                    Excluir
                </button>
                <button class="d-flex custom-btn custom-btn-primary">
                    <span class="material-icons">
                        edit
                    </span>
                    Editar
                </button>
            </div>
        </div>
    `
    tableBody.insertAdjacentHTML('beforeend', tableRow)
})
