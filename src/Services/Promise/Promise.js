export const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 30, 
                    title: 'Pelota Molten de Cuero GGX6', 
                    description: 'Pelota profesional de cuero', 
                    price: 5500,
                    picture:{
                        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_629328-MLA31406425795_072019-O.jpg',
                        alt: "Pelota Molten GGX6"
                    },
                    stock: 20,
                    category: "pelotas",
                    freeShipping: true,
                    material: 'Cuero'
                },
                {
                    id: 25, 
                    title: 'Pelota Molten de Goma GR5', 
                    description: 'Pelota de goma para niños', 
                    price: 4000,
                    picture:{
                        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_832164-MLA31037177172_062019-O.jpg',
                        alt: "Pelota Molten GR5"
                    },
                    stock: 15,
                    category: "pelotas",
                    freeShipping: false,
                    material: 'Goma'
                },
                {
                    id: 37, 
                    title: 'Aro de básquet', 
                    description: 'Aro profesional de básquet n° 7 con red', 
                    price: 4500,
                    picture:{
                        pictureUrl: 'https://www.deportesmd.com.ar//sistema/uploads/699/articulos/aro-de-basquet-macizo-10-mm-con-red--1-.jpg',
                        alt: "Aro de básquet"
                    },
                    stock: 10,
                    category: "aros",
                    freeShipping: false,
                    material: 'Acero'
                },
                {
                    id: 28, 
                    title: 'Camiseta Denver Nuggets - Facu Campazzo', 
                    description: 'Camiseta original de los Denver Nuggets', 
                    price: 12000,
                    picture:{
                        pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/229/661/products/1461-4b972fc66cdda00eff16103005910492-480-0.jpg',
                        alt: "Camiseta original de los Denver Nuggets"
                    },
                    stock: 3,
                    category: "camisetas",
                    freeShipping: true,
                    material: 'Lycra'
                }
            ]
        ), 500)
    })
}