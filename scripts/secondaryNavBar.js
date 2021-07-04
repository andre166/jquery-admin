const changeSearchFilter = (e) => {
    let value = e.currentTarget.innerHTML
    let name = e.currentTarget.attributes['value']['value']

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
    } else if (name === 'language') {
        searchInput.parent().load('./secondaryNavBar/defaultInput.html', () => {
            $('#search-input-secondary-appbar').attr(
                'placeholder',
                'Português, inglês...'
            )
            $('#search-input-label').html('Linguagem')
        })
    } else if (name === 'birthday') {
        searchInput.parent().load('./secondaryNavBar/dateInput.html', () => {
            $('#search-input-secondary-appbar').mask('00/00/0000')
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

            $('#search-input-secondary-appbar').datepicker()
        })
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
        }
    )
})
