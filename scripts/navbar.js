$(() => {
    $('#principal-appbar').load('/components/navbar/navbar.html', function () {
        let name = ''

        let url = window.location.pathname
        let urlArray = url.split('/')
        let lastPath = urlArray[urlArray.length - 1]

        name = lastPath.replace('.html', '')

        $(`#principal-navigation [name=${name}]`).addClass('active active-icon')
    })
})
