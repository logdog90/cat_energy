const body = document.body
const toggleMenu = document.querySelector('.burger')
const toggleMenuLines = document.querySelector('.burger__lines')
const nav = document.querySelector('.nav')

toggleMenu.addEventListener('click', () => {
    body.classList.toggle('no-scroll')
    toggleMenuLines.classList.toggle('burger__lines--active')
    nav.classList.toggle('nav--show')
})

const center = [59.93862956925295,30.32310295286441]

const init = () => {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 17
    })

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/placemark.png',
        iconImageSize: [113, 106],
        iconImageOffset: [-50, -100],
        iconContentOffset: [15, 15],
    })

    map.geoObjects.add(placemark)

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init)
