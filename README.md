### Consigna
Crear un sitio sencillo de películas usando handlebars, similar a lo que estuvimos haciendo, que consista de 3 vistas:
​
- "home", página inicial (landing page) que solo tiene un mensaje de bienvenida.
- "movie-list" que muestre una lista de películas, con una imagen chiquita de la tapa y su título y año entre paréntesis. El texto de título + año es un link para ver el detalle de la película (dispara un request GET a /movie/:id, donde "id" es el id de esa película). La lista se muestra ordenada tal como esté en el objeto de datos.
- "movie-detail" que muestra detalles de una película
​

Algunas consideraciones:
​​
1. El layout contiene un menú (pueden ver algunas buenas ideas para menúes superiores sencillos en https://www.w3schools.com/css/css_navbar_horizontal.asp, por ejemplo), con dos items:
i. "Home": link a la vista "home"
ii. "Movie List": link a la vista "movie-list"
​
2. También contiene un footer que dice "Copyleft " y su nombre.
​
3. Corolario de 2 y 3: todas las vistas contienen ese header y ese footer.
​
4. La vista de detalles ("movie-detail") tiene que mostrar todos los datos. El link a IMDB debe ser clickeable y abrirse en una solapa nueva del navegador. Mostrar toda la lista de actores y actrices principales (puede variar la cantidad en cada película).
​
### Consignas adicionales:

​​
**A)** Agregar en la vista "movie-list" 2 botones o links (a gusto) arriba de la lista de películas que permitan ordenar por nombre y año respectivamente, de manera ascendente ("sort by name (asc)" y "sort by year (asc)" si queremos dejar todo en inglés). En ambos casos, el click debe generar un nuevo pedido al servidor que retornará la misma vista pero renderizada con los datos en el orden pedido.

​
**B)** Al clickear en cualquiera de esos botones, la vista que se retorne debe incluir los botones de ordenamiento preparados para invertir el orden actual. Análogamente sucederá lo mismo con el ordenamiento por año.