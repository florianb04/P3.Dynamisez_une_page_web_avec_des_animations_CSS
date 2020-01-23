
var global = {

    data: {
        title : "Ma Demo Task Runner et sass incluant une decouverte javasripts",
        products: []
    },
    constante: {
        firstTitle: $("#title")
    },
    methods: {
        initialize: () => {
            //global.methods.console("Main.js chargé");
            global.methods.initializeProducts();
            //global.constante.firstTitle.html(global.data.title);
        },
        console: (maVariable) => {
            console.log("ma console : ", maVariable)
        },
        initializeProducts: function() {
            console.log('1 - J\'appel le service pour trouver un resultat');
            services.getData("./assets/json/products.json")
            .then((data) => {
                console.log('4 - Le service me renvoi le resultat trouve');
                global.data.products = data;
                console.log('global.data.products ', global.data.products )
                
                for( var i = 0; i < global.data.products.length ; i++) {
                    let templateHtml = 
                        `<div class=\"product-ctn\" id="product-${global.data.products[i].id}">
                            <p class="product-label">Titre : ${global.data.products[i].label}</p>
                            <img class="product-img" src="${global.data.products[i].urlImg}" alt=" ">
                            <p class="product-price">${global.data.products[i].price}</p>
                        </div>`
                    $("#productsCtn").append(templateHtml)
                }
            });
        }
    }
}

const init = (() => {
    global.methods.initialize();
})()
