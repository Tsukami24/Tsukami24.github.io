data = [{
    'img1': 'asset/Foto muka.jpg',
    'img2': 'asset/poster.jpg',
    'title': 'Poster',
    'subtitle': 'Zenit',
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat deleniti reiciendis,libero ex sed, tenetur consequatur eum sequi earum consequuntur praesentium delectus explicabo sapiente ducimus non fugit quis quo."
},{
    'img1': 'asset/poster.jpg',
    'img2': 'asset/poster.jpg',
    'title': 'Poster',
    'subtitle': 'Zenit',
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat deleniti reiciendis,libero ex sed, tenetur consequatur eum sequi earum consequuntur praesentium delectus explicabo sapiente ducimus non fugit quis quo."
}
]
var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    ` <div class="project">
    <div class="img-project">
        <img src="`+element.img2+`" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>
    <button class="read-more">Read More</button>
    
</div>`

});