const products = [
    {
        id : "1",
        name : "IPhone 15",
        price :  1399,
        img: "../img/iphone15.jpg",
        idCat: "2"
    },
    {
        id : "2",
        name : "IPhone 14",
        price :  1180,
        img: "../img/iphone14.jpg",
        idCat: "2"
    },
    {
        id : "3",
        name : "IPhone 13",
        price :  999,
        img: "../img/iphone13.jpg",
        idCat: "2"
    },
    {
        id : "4",
        name : "IPhone 12",
        price :  759,
        img: "../img/iphone12.jpg",
        idCat: "2"
    },
    {
        id: "5",
        name: "MacBook Pro 14",
        price: 2499,
        img: "../img/macbook16.jpg",
        idCat: "3"
    },
    {
        id: "6",
        name: "MacBook Pro 16",
        price: 2899,
        img: "../img/macbook14.jpg",
        idCat: "3"
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2 * 1000)
    })
}


// return only one product
export const getOneProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id);
            resolve(product);
        }, 2 * 1000)
    })
}


// return the hole cartegory
export const getProductsByCategory = (idCategory) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productCategory = products.filter(prod => prod.idCat === idCategory);
            resolve(productCategory);
        }, 2 * 1000)
    })
}

