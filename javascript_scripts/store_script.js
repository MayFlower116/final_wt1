let albums = [
    { name: "Album 1", price: 12.99, addedToCart: false },
    { name: "Album 2", price: 14.99, addedToCart: false}, 
    { name: "Album 3", price: 9.99, addedToCart: false }, 
    { name: "Album 4", price: 19.99, addedToCart: false }
];


// sets sources for images on page load (see script bottom for call)
function image_sources() {
    let img_add_count;
    let album_total = 4;
    for (img_add_count = 1; img_add_count <= album_total; img_add_count++) {
        album = document.getElementById('Album ' + img_add_count)
        album_img_src = 'Images\\Album ' + img_add_count + '.png'
        album.src = album_img_src
    }
}

// what happens upon clicking an album cover
function click_album(e) {
    console.log(e.target)
    // let selected = albums.find(addedToCart => {
    //     return albums.title === e.target.innerText
    // })
    // console.log(loaded_note)
    // textarea.value = loaded_note.body
     if (e.target.addedToCart == true){
        console.log('Item already in cart')
        alert("Item already in cart")
    }
    else {
        console.log('Item being added to cart')
        e.target.addedToCart = true
        add_to_cart(e.target)
    }
}

// Add the clicked item to the cart
function add_to_cart(album) {
    // I was too slow to finish this part...
}


const album_store_items = document.getElementById("album_store")
album_store_items.addEventListener("click", click_album);

image_sources()