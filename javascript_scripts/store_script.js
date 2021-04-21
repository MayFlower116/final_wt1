let albums = 
    [{ name: "Album 1", price: 12.99, addedToCart: false },
    { name: "Album 2", price: 14.99, addedToCart: false}, 
    { name: "Album 3", price: 9.99, addedToCart: false }, 
    { name: "Album 4", price: 19.99, addedToCart: false }];



function image_sources() {
    let img_add_count;
    let album_total = 4;
    for (img_add_count = 1; img_add_count <= album_total; img_add_count++) {
        album = document.getElementById('Album ' + img_add_count)
        album_img_src = 'Images\\Album ' + img_add_count + '.png'
        album.src = album_img_src
    }
}

image_sources()