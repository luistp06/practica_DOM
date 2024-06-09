header=document.querySelector("header");
main=document.querySelector("main");
footer=document.querySelector("footer");



//header
logo=document.createElement("img")
logo.src="https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg" 
header.appendChild(logo)
logo.setAttribute('id', 'logo');



//boton menu
menu=document.createElement("button")
menu.setAttribute('id', 'menu');
header.appendChild(menu)
menuimg=document.createElement("img")
menuimg.src="assets/menu.png"
menu.appendChild(menuimg)

menutext=document.createElement("p")
menutext.textContent='Todas las categorías';
menu.appendChild(menutext)



//input de busqueda
inputcontainer=document.createElement("div")
header.appendChild(inputcontainer)
inputcontainer.setAttribute('id', 'inputcontainer');
search=document.createElement("input")
inputcontainer.appendChild(search)
search.setAttribute('type', 'text');
search.setAttribute('placeholder', 'Buscar',);
lupa=document.createElement("img")
lupa.src="assets/lupa.png"
inputcontainer.appendChild(lupa)

//boton mi cuenta
micuenta=document.createElement("button")
micuenta.setAttribute('id', 'micuenta');
micuenta.setAttribute('class', 'hbtn');
header.appendChild(micuenta)
userimg=document.createElement("img")
userimg.src="assets/usuario.png"
micuenta.appendChild(userimg)

usertext=document.createElement("p")
usertext.textContent='Mi cuenta';
micuenta.appendChild(usertext)



//boton mi cesta
basket=document.createElement("button")
basket.setAttribute('id', 'basket');
basket.setAttribute('class', 'hbtn');
header.appendChild(basket)
basketimg=document.createElement("img")
basketimg.src="assets/carrito-de-compras.png"
basket.appendChild(basketimg)

basketext=document.createElement("p")
basketext.textContent='Mi cesta';
basket.appendChild(basketext)
//subheader solo para mobile








//main
//subheader solo para mobile
let subheader=document.createElement("section")
subheader.setAttribute('id', 'subheader');
main.appendChild(subheader)
comparar=document.createElement("button")
comparar.textContent="Comparar"
ordenar=document.createElement("button")
ordenar.textContent="Ordenar"
filtrar=document.createElement("button")
filtrar.textContent="Filtrar"
subheader.appendChild(comparar)
subheader.appendChild(ordenar)
subheader.appendChild(filtrar)



//filtros

filters=document.createElement("section")
filters.setAttribute('id', 'filters');
main.appendChild(filters)

filtros=[
  "Precio",
  "Marcas",
  "Procesador",
  "Memoria Ram",
  "Tarjeta Gráfica",
  "Sistema Operativo",
  "Estado del Artículo",
  "Pulgadas",
  "Almacenamiento SSD",
  "Tipo de Portátil",
  "Idioma del Teclado",
  "Tipo Memoria",
  "Tipo Pantalla",
  "Conexiones",
  "Resolución",
  "Almacenamiento",
  "Frecuencia de Refresco",
  "Color",
  "Conectividad",
  "Clase de Teclado",
  "Baterías",
  "Inteligencia Artificial",
]

const ul=document.createElement("ul")
filters.appendChild(ul);
for (const filtro of filtros) {
  const list = document.createElement("li");
    list.textContent=filtro;
    ul.appendChild(list);
}












const products = [
    {
      name: 'Apple MacBook Air Apple M1/8GB/256GB SSD/GPU Hepta Core/13.3" Plata',
      price: 999,
      stars: 5,
      reviews: 810,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-150-150/articles/33/335380/1911-apple-macbook-air-apple-m1-8gb-256gb-ssd-gpu-hepta-core-133-plata.jpg'
    },
    {
      name: 'PcCom Revolt 4090 Intel Core i9-13900HX/32GB/2TB SSD/RTX 4090/16" + Windows 11',
      price: 3.309,
      stars: 5,
      reviews: 2,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-150-150/articles/1079/10790416/1616-pccom-revolt-4090-intel-core-i9-13900hx-32gb-2tb-ssd-rtx-4090-16-windows-11-comprar.jpg'
    },
    {
      name: 'Lenovo IdeaPad Slim 3 15IAH8 Intel Core i5-12450H/16GB/512GB SSD/15.6',
      price: 479,
      stars: 5,
      reviews: 518,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-150-150/articles/1079/10797786/1581-lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-512gb-ssd-156.jpg'
    },
    {
      name: 'Lenovo LOQ 15IRH8 Intel Core i7-13620H/16GB/512GB SSD/RTX 4060/15.6"',
      price: 1.319,
      stars: 5,
      reviews: 22,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-150-150/articles/1082/10827485/1339-lenovo-loq-15irh8-intel-core-i7-13620h-16gb-512gb-ssd-rtx-4060-156-review.jpg'
    },
    {
      name: 'ASUS TUF Gaming F17 FX707VI-HX040 Intel Core i7-13620H/32GB/1TB SSD/RTX',
      price: 1.499,
      stars: 5,
      reviews: 14,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-150-150/articles/1081/10811707/1635-asus-tuf-gaming-f17-fx707vi-hx040-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4070-173.jpg'
    },
    {
      name: 'MSI Modern 15 H C13M-087XES Intel Core i7-13620H/32GB/1TB SSD/15.6"',
      price: 829,
      stars: 5,
      reviews: 34,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-150-150/articles/1081/10810280/1102-msi-modern-15-h-c13m-087xes-intel-core-i7-13620h-32gb-1tb-ssd-156.jpg'
    },
    {
      name: 'Lenovo IdeaPad Flex 5 14IAU7 Intel Core i7-1255U/16GB/512GB SSD/14"',
      price: 829,
      stars: 5,
      reviews: 12,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-150-150/articles/1079/10797793/1293-lenovo-ideapad-flex-5-14iau7-intel-core-i7-1255u-16gb-512gb-ssd-14-tactil.jpg'
    },
    {
      name: 'HP Victus 16-r1001ns Intel Core i7-14650HX/32GB/1TB SSD/RTX 4060/16.1"',
      price: 1349,
      stars: 5,
      reviews: 1,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-150-150/articles/1081/10815589/1825-hp-victus-16-r1001ns-intel-core-i7-14650hx-32gb-1tb-ssd-rtx-4060-161.jpg'
    },
    {
      name: 'ASUS VivoBook 16X K3605ZC-N1267W Intel Core i7-12650H/16GB/512GB SSD/RTX',
      price: 999,
      stars: 5,
      reviews: 39,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-150-150/articles/1074/10743152/1639-asus-vivobook-16x-k3605zc-n1267w-intel-core-i7-12650h-16gb-512gb-ssd-rtx-3050-16-opiniones.jpg'
    },
    {
      name: 'ASUS Zenbook 14 UM425QA-KI252 AMD Ryzen 7 5800HS/16GB/512GB SSD/14"',
      price: 699.35,
      stars: 4,
      reviews: 43,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-150-150/articles/1072/10729042/1123-asus-zenbook-14-um425qa-ki252-amd-ryzen-7-5800h-16gb-512gb-ssd-14.jpg'
    },

    
  ];

  let productos = document.createElement("section")
  productos.setAttribute('id', 'productos');
  main.appendChild(productos)
  for (const product of products) {
    let div = document.createElement("div")
    div.setAttribute('id', product.name);
    productos.appendChild(div)
    let image=document.createElement("img")
    image.src=product.image;
    div.appendChild(image)

    let description=document.createElement("h4")
    description.textContent=product.name
    div.appendChild(description)
    
    let price=document.createElement("h3")
    price.textContent=product.price+"€" 
    div.appendChild(price)
    let valoracion=document.createElement("p")
    let estrellas="";
          for(let i=0;i<product.stars;i++){
           estrellas+="⭐";
          }
          valoracion.textContent=estrellas+"   " +"("+product.reviews+")";
    div.appendChild(valoracion)
  
    let vendedor=document.createElement("p")
    vendedor.textContent="Vendido por "+product.seller;
    div.appendChild(vendedor)
    
  }