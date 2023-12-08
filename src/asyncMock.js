
const products = [
    {
        id: '1',
        name: 'Las cosas que perdimos en el fuego',
        price: 12000,
        category: 'Narrativa',
        author: 'Mariana Enriquez',
        img: 'https://i.ibb.co/7KzNYgX/D-NQ-NP-935115-MLA25180727751-112016-O.webp',
        stock: 30,
        description: 'El mundo de Mariana Enriquez no tiene por qué ser el nuestro, y, sin embargo, lo termina siendo. Bastan pocas frases para pisarlo, respirarlo y no olvidarlo gracias a una viveza emocional insólita. Con la cotidianidad hecha pesadilla, el lector se despierta abatido, perturbado por historias e imágenes que jamás conseguirá sacarse de la cabeza. Las autodenominadas «mujeres ardientes», que protestan contra una forma extrema de violencia doméstica que se ha vuelto viral; una estudiante que se arranca las uñas y las pestañas, y otra que intenta ayudarla; los años de apagones dictados por el gobierno durante los cuales se intoxican tres amigas que lo serán hasta que la muerte las separe; el famoso asesino en serie llamado Petiso Orejudo, que sólo tenía nueve años; hikikomori, magia negra, los celos, el desamor, supersticiones rurales, edificios abandonados o encantados... En estos doce cuentos el lector se ve obligado a olvidarse de sí mismo para seguir las peripecias e investigaciones de cuerpos que desaparecen o bien reaparecen en el momento menos esperado. Ya sea una trabajadora social, una policía o un guía turístico, los protagonistas luchan por apadrinar a seres socialmente invisibles, indagando así en el peso de la culpa, la compasión, la crueldad, las dificultades de la convivencia, y en un terror tan hondo como verosímil. Mariana Enriquez es una de las narradoras más valientes y sorprendentes del siglo XXI, no sólo de la nueva literatura argentina a cargo de escritores nacidos durante la dictadura sino de la literatura de cualquier país o lengua. Mariana Enriquez transforma géneros literarios en recursos narrativos, desde la novela negra hasta el realismo sucio, pasando por el terror, la crónica y el humor, y ahonda con dolor y belleza en las raíces, las llamas y las tinieblas de toda existencia.'
    },
    {
        id: '2',
        name: 'La música del universo',
        price: 8300,
        category: 'Ciencias',
        author: 'Lidia Díaz, Mario Díaz, Gabriela González, Jorge Pullin',
        img: 'https://i.ibb.co/LYMsj1w/9789878010489-e52d6de9822ffb507e17014017618593-1024-1024.webp',
        stock: 51,
        description: 'El 11 de febrero de 2016, el anuncio de un descubrimiento sacudió el mundo y fue tapa de los principales diarios: por primera vez se habían detectado ondas gravitacionales. ¡Sí! esas que un siglo antes había predicho Albert Einstein en su teoría de la relatividad. La física argentina Gabriela González era entonces la líder y vocera de la colaboración científica LIGO, y las autoras y los autores de este libro fueron parte de ese descubrimiento y estuvieron presentes en la ceremonia. Este libro cuenta en boca de sus protagonistas el arduo camino hacia esa primera detección. Y muy largo, porque esta historia comenzó hace unos mil trescientos millones de años, cuando dos agujeros negros que bailaban juntos en el espacio-tiempo se fusionaron en un abrazo y formaron uno. Y continuó con Galileo, cuando unos cuatrocientos años atrás miró el cielo con un telescopio; y luego con Einstein, cuando publicó que su teoría del espacio-tiempo predecía ondas gravitacionales; y en la década del setenta, cuando se empezaron a imaginar y construir los instrumentos para medirlas. Una nueva manera de hacer astronomía reveló que no solo recibimos luz desde las estrellas, también sonidos. A las imágenes que nos proporcionan los telescopios se les sumó otra dimensión sensorial, como cuando al cine mudo se le agregó la banda sonora. ¡Ahora podemos escuchar la música del universo! Y esa música no solo nos trae el sonido de colisiones de agujeros negros y estrellas de neutrones en galaxias lejanas, esa música nos habla de la creatividad humana, del trabajo en colaboración, de evidencias que confirman teorías elaboradas cien años atrás, de nuevas teorías y sus aplicaciones, de tecnologías que mejorarán nuestras vidas. Este descubrimiento corrió las fronteras de lo que conocíamos sobre el universo. Escuchemos juntos el largo viaje de la ciencia.'
    },
    {
        id: '3',
        name: 'El arte de amar',
        price: 6000,
        category: 'Psicología',
        author: 'Erich Fromm',
        img: 'https://i.ibb.co/4ZkVtLq/D-NQ-NP-985652-MLA72001853800-102023-O.webp',
        stock: 30,
        description: 'El arte de amar es una obra con la que Erich Fromm ha ayudado a varias generaciones a reflexionar sobre el amor y a responder a algunas preguntas aparentemente sencillas: ¿qué significa amar? ¿Cómo desprendernos de nosotros mismos para experimentar este sentimiento"?Fromm nos explica que el amor no es solo una relación personal, sino además un rasgo de madurez que se manifiesta en diversas formas: amor erótico, amor fraternal, amor filial, amor a uno mismo"Nos dice también que el amor no es algo pasajero y mecánico, como a veces nos induce a creer la sociedad de hoy. Muy al contrario, el amor es un arte, el fruto de un aprendizaje. Por ello, si queremos aprender a amar debemos actuar como lo haríamos si quisiéramos aprender cualquier otro arte, ya sea la música, la pintura, la carpintería o el arte de la medicina. O, por lo menos, no dedicar nuestra energía a lograr el éxito y el dinero, el prestigio y el poder, sino a cultivar el verdadero arte de amar.'
    },
    {
        id: '4',
        name: 'Crónicas del Ángel Gris',
        price: 8000,
        category: 'Narrativa',
        author: 'Alejandro Dolina',
        img: 'https://i.ibb.co/bPVmjVc/D-874653-MLA41719556934-052020-O-720x.webp',
        stock: 30,
        description: 'La leyenda del Ángel Gris de Flores asegura que, a medida que pase el tiempo, los sueños serán más largos y las vigilias más cortas... Y los Hombres Sensibles soñarán que un Ángel los acaricia con sus alas y los Refutadores de Leyendas soñarán que están despiertos y que los ángeles no existen. A través de un enfoque que conjuga en clave literariohumorística la cultura universal con el lenguaje y la filosofía genuinos del ciudadano bonaerense, estas crónicas que conjugan la parodia, la fábula, la leyenda, la alegoría, hilvanadas unas con otras recrean lugares y personajes cotidianos vistos dentro de un mundo onírico que se pretende posible. La lucha de los muchachos del Ángel Gris es sobre todo una lucha por la poesía.'
    },
    {
        id: '5',
        name: 'Cien años de soledad',
        price: 20000,
        category: 'Narrativa',
        author: 'Gabriel García Márquez',
        img: 'https://i.ibb.co/qYwsW7v/9789500758796-4168ac73225b2b365816988076524593-1024-1024.webp',
        stock: 10,
        description: 'Un referente imprescindible de la vida y la narrativa latinoamericana. «Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos. El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo». Con estas palabras empieza la novela ya legendaria en los anales de la literatura universal, una de las aventuras literarias más fascinantes de nuestro siglo. Millones de ejemplares deCien años de soledad leídos en todas las lenguas y el Premio Nobel de Literatura coronando una obra que se había abierto paso «boca a boca» -como gusta decir al escritor- son la más palpable demostración de que la aventura fabulosa de la familia Buendía-Iguarán, con sus milagros, fantasías, obsesiones, tragedias, incestos, adulterios, rebeldías, descubrimientos y condenas, representaba al mismo tiempo el mito y la historia, la tragedia y el amor del mundo entero.'
    },
    {
        id: '6',
        name: 'El hombre en busca de sentido',
        price: 7540,
        category: 'Psicología',
        author: 'Viktor Frankl',
        img: 'https://i.ibb.co/9WvGChX/9788425432026-e900dc840de28f310216988070916598-1024-1024.webp',
        stock: 25,
        description: ' El doctor Frankl, psiquiatra y escritor, suele preguntar a sus pacientes aquejados de múltiples padecimientos: «¿Por qué no se suicida usted? Y muchas veces, de las respuestas extrae una orientación para la psicoterapia a aplicar: a éste, lo que le ata a la vida son los hijos; al otro, un talento, una habilidad sin explotar; a un tercero, quizás, sólo unos cuantos recuerdos que merece la pena rescatar del olvido. Tejer estas tenues hebras de vidas rotas en una urdimbre firme, coherente, significativa y responsable es el objeto con que se enfrenta la logoterapia. En esta obra, Viktor E. Frankl explica la experiencia que le llevó al descubrimiento de la logoterapia. Prisionero, durante mucho tiempo, en los desalmados campos de concentración, él mismo sintió en su propio ser lo que significaba una existencia desnuda. ¿Cómo pudo él que todo lo había perdido, que había visto destruir todo lo que valía la pena, que padeció hambre, frío, brutalidades sin fin, que tantas veces estuvo a punto del exterminio, cómo pudo aceptar que la vida fuera digna de vivirla? El psiquiatra que personalmente ha tenido que enfrentarse a tales rigores merece que se le escuche, pues nadie como él para juzgar nuestra condición humana sabia y compasivamente.'
    },
    {
        id: '7',
        name: 'El Banquete',
        price: 10000,
        category: 'Filosofía',
        author: 'Platón',
        img: 'https://i.ibb.co/8d8k8F5/D-NQ-NP-675094-MLA31335160832-072019-O.webp',
        stock: 30,
        description: 'Entre la reflexión filosófica y la teoría psicológica, Platón (c. 427 347 a. C.) nos ofrece con El Banquete una brillante y elaborada exposición de su teoría de los afectos. El diálogo, perteneciente al período de madurez, en el que el filósofo ateniense se interesa por la esencia ontológica de diversas ideas, presenta una estructura sencilla. A través de seis discursos que encuentran su eje en este sentimiento, el autor desmenuza sus múltiples facetas: la naturaleza divina de Eros, sus diversas formas y manifestaciones, sus designios y anhelos, o su incidencia en la vida humana. Por estas páginas desfila, en suma, la consistente doctrina del amor platónica que constituye en sí misma su exaltación.'
    },
    {
        id: '8',
        name: 'Diarios',
        price: 19500,
        category: 'Poesía',
        author: 'Alejandra Pizarnik',
        img: 'https://i.ibb.co/zxd0KGt/9788426481238-a24a9c2457d9557e9e16988114673627-1024-1024.webp',
        stock: 10,
        description: 'Por fin salen a la luz los diarios de la genial poeta argentina Alejandra Pizarnik. Desde que se suicidara en 1972, Alejandra Pizarnik ha ido adquiriendo poco a poco naturaleza de mito y perfil de leyenda. Autora deculto, venerada por varias generaciones de lectores, Pizarnik se cuenta ya entre las escritoras latinoamericanas más importantes del siglo XX. Su poesía -íntegramente publicada por Lumen- ha cosechado numerosos adeptos incondicionales, ha creado escuela y la ha hecho mundialmente famosa. Ahora llegan por fin sus diarios, esperadísimos y totalmente inéditos, la obra de toda su vida, el laboratorio de su obra poética y ensayística, el testimonio estremecedor de su atormentada vida, la crónica de ese descenso al infierno de las palabras y de la existencia que fue su biografía. Ana Becciu, máxima especialista en la obra de la poeta argentina, ha llevado a cabo una selección de los diarios originales -un manuscrito monumental- a fin de publicar lo más esencial del pensamiento literario de la autora, de sus reflexiones acerca del amor yla muerte, de los resultados de su autoanálisis. En definitiva, estos Diarios constituyen una fascinante autobiografía, sin duda uno de los textos memorialísticos más importantes del pasado siglo.'
    },
    
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getproductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500);
    });
};