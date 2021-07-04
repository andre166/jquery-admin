const changeSearchFilter = (e) => {
    let element = $(e)
    let isSameElement = false

    let name = e.currentTarget.attributes['value']['value']

    let searchFilterMenu = $('#search-filter-menu').children()

    searchFilterMenu.each(function (i, el) {
        let actualElement = $(el)
        let value = actualElement.attr('value')

        if (value == name) {
            let hasActive = actualElement.hasClass('active')
            if (!hasActive) {
                actualElement.addClass('active')
            } else {
                isSameElement = true
            }
        } else {
            actualElement.removeClass('active')
        }
    })

    if (isSameElement) {
        return
    }

    let searchInput = $('#search-input-secondary-appbar')

    if (name === 'name') {
        searchInput.parent().load('./secondaryNavBar/defaultInput.html', () => {
            $('#search-input-secondary-appbar').attr(
                'placeholder',
                'Pesquisar...'
            )
            $('#search-input-label').html('Nome')
        })
    } else if (name === 'email') {
        searchInput.parent().load('./secondaryNavBar/defaultInput.html', () => {
            $('#search-input-secondary-appbar')
                .attr('placeholder', 'exemplo@hotmail.com')
                .attr('type', 'email')
            $('#search-input-label').html('Email')
        })
    } else if (name === 'birthday') {
        searchInput.parent().load('./secondaryNavBar/dateInput.html', () => {
            $('#search-input-secondary-appbar').mask('00/00/0000')

            $('#search-input-secondary-appbar').on('input', function (e) {
                let regex =
                    /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/gm

                let value = $(e.target).val()

                if (value == '') {
                    $('#search-input-secondary-appbar').removeClass(
                        'is-invalid'
                    )
                    return
                }

                if (value.match(regex)) {
                    $('#search-input-secondary-appbar').removeClass(
                        'is-invalid'
                    )

                    onSubmit(value)
                } else {
                    $('#search-input-secondary-appbar').addClass('is-invalid')
                }
            })

            $('#search-input-label').html('Data de nascimento')

            $.datepicker.regional['pt-br'] = {
                closeText: 'Fechar',
                currentText: 'Hoje',
                monthNames: [
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro',
                ], // set month names
                monthNamesShort: [
                    'Jan',
                    'Fev',
                    'Mar',
                    'Abr',
                    'Mai',
                    'Jun',
                    'Jul',
                    'Ago',
                    'Set',
                    'Out',
                    'Nov',
                    'Dez',
                ],
                dayNames: [
                    'Domingo',
                    'Segunda',
                    'Terça',
                    'Quarta',
                    'Quinta',
                    'Sexta',
                    'Sábafo',
                ],
                dayNamesShort: [
                    'Dom',
                    'Seg',
                    'Ter',
                    'Qua',
                    'Qui',
                    'Sex',
                    'Sáb',
                ],
                dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
                dateFormat: 'dd/mm/yy',
            }
            $.datepicker.setDefaults($.datepicker.regional['pt-br'])

            $('#search-input-secondary-appbar').datepicker({
                onSelect: function (dateText) {
                    onSubmit(this.value)
                },
            })
        })
    }
}

const activePills = (el) => {
    let element = $(el)
    let hasActive = element.hasClass('activeBirthday-pill')

    if (hasActive) {
        element.removeClass('activeBirthday-pill')
    } else {
        element.addClass('activeBirthday-pill')
    }
}

$(() => {
    $('#secondary-appbar').load(
        './secondaryNavBar/secondaryNavBar.html',
        () => {
            $('#search-filter-menu')
                .children()
                .on('click', (e) => {
                    changeSearchFilter(e)
                })

            let birthdayContainer = $('#birthdayContainer')[0]
            console.log("$('#birthdayContainer')", birthdayContainer)
            let birthdays = [
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
                { id: 1, birthday: 21 },
                { id: 2, birthday: 22 },
                { id: 3, birthday: 29 },
                { id: 4, birthday: 25 },
                { id: 5, birthday: 31 },
                { id: 6, birthday: 19 },
                { id: 7, birthday: 15 },
            ]

            birthdays.forEach((b) => {
                let pills = ` 
                    <span class="badge badge-pill py-2 mx-1 birthday-pill" onclick="activePills(this)" >
                        ${b.birthday}
                    </span>
                `

                birthdayContainer.insertAdjacentHTML('beforeend', pills)
            })
        }
    )
})

const onSubmit = (value) => {
    $('#search-input-secondary-appbar').datepicker('hide')

    let cardsContainer = $('.cards-container')
    let mainContainer = $('.main-container')

    mainContainer.load('/components/loadContainer/loadContainer.html')
}
