const fs = require('fs');
const { Book, Author, Category, Language } = require('../db');
const { Op } = require('sequelize');
const checkAndCreateLanguage = require('../utils/checkAndCreateLanguage');
const file = __dirname + '/booksData.json';

async function bulkCreateBooksFromFile() {
  try {
    // Leer el archivo JSON
    const jsonData = fs.readFileSync(file, 'utf8');
    const books = [
      {
        "title": "Manual de edición académica",
        "authors": [
          "Jorge Enrique Beltrán"
        ],
        "publisher": "Universidad de los Andes",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este manual recoge toda la información necesaria para comprender el proceso de edición de una obra académica, ya sea un libro o una revista, cumpliendo con los más altos estándares de calidad. Con base en una cuidadosa investigación, apuntalada por una amplia experiencia en las labores concernientes, el autor describe detalladamente las características propias de dichas publicaciones y los pasos para adelantar con éxito un proyecto de este tipo, desde el momento en que el autor presenta el manuscrito ante el respectivo comité editorial, pasando por su corrección y diagramación, hasta el momento en que es enviado a la imprenta. Como nota destacada, esta obra incluye tres herramientas básicas para autores, editores y correctores: un manual del autor, que explica los derechos, obligaciones y acciones de este durante el proceso de edición de su obra; un modelo de pauta editorial, que contiene los más habituales lineamientos y usos ortotipográficos y gramaticales del sector académico, y un resumen de los tres más importantes sistemas mundiales de referencia bibliográfica (APA , MLA y Chicago parentético).",
        "isbn": "9789587830354",
        "numberPages": 406,
        "image": "http://books.google.com/books/content?id=a9_0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "220.58"
      },
      {
        "title": "Cmo Utilizar Jmol Para Estudiar y Presentar Estructuras Moleculares",
        "authors": [
          "Angel Herrez"
        ],
        "publisher": "Lulu.com",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Jmol es un visualizador interactivo de modelos moleculares en el ordenador. Este libro pretende ser tanto una guía para principiantes como un manual de consulta y profundización, para profesores, autores de contenidos, alumnos, investigadores y gestores de portales de información. El libro se organiza en secciones para un aprendizaje y profundización progresivos. Se comienza por las instrucciones más sencillas y más frecuentes, para ir avanzando hacia las ocasionales, específicas y más complicadas. Hay secciones dedicadas a quienes sólo precisen un uso ocasional y básico, otra que explica cómo sacar provecho al lenguaje de instrucciones -dividida en 2 niveles y que continúa en el vol. 2- y, finalmente, una sección -en 3 niveles- para quien esté interesado en la preparación de páginas web con modelos. Se incluyen un índice de instrucciones, un glosario y un listado de direcciones de internet, incluyendo la sede web creada para acompañar a este libro.",
        "isbn": "9781847537102",
        "numberPages": 146,
        "image": "http://books.google.com/books/content?id=PYwaJ-Kd0jgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "40.70"
      },
      {
        "title": "Aplicaciones Web",
        "authors": [
          "RAMOS MARTÍN, ALICIA",
          "RAMOS MARTÍN, MARíA JESÚS"
        ],
        "publisher": "Ediciones Paraninfo, S.A.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este libro cubre los contenidos del módulo profesional de Aplicaciones web, perteneciente al título de Técnico en Sistemas Microinformáticos y Redes. Este texto no sólo está dirigido a los estudiantes de este ciclo de grado medio, sino también a todo aquél interesado en aprender el uso de aplicaciones web basadas en las nuevas tecnologías. El libro incluye un Cd con recursos de apoyo.",
        "isbn": "9788497328135",
        "numberPages": 316,
        "image": "http://books.google.com/books/content?id=LXs3YlMoeNgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "46.30"
      },
      {
        "title": "Circular CFP LI (51) – Junio de 2020",
        "authors": [
          "Convenio de Rotterdam"
        ],
        "publisher": "Food & Agriculture Org.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La Circular PIC es un documento clave en virtud del Convenio de Rotterdam, tanto para la operación del procedimiento de Consentimiento Informado Previo (PIC) como un mecanismo para el intercambio de información. Se publica en junio y diciembre en inglés, francés y español. Se realiza conjuntamente con la Secretaría del PNUMA de los Convenios de Basel, Rotterdam y Estocolmo en Ginebra. Apoya directamente a las partes interesadas SO2.3.1 en la implementación de instrumentos internacionales.",
        "isbn": "9789251328620",
        "numberPages": 81,
        "image": "http://books.google.com/books/content?id=8RjxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Law"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "203.11"
      },
      {
        "title": "PIC CIRCULAR L",
        "authors": [
          "Organización de las Naciones Unidas para la Alimentación y la Agricultura",
          "Programa de las Naciones Unidas para el Medio Ambiente"
        ],
        "publisher": "Food & Agriculture Org.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La Circular PIC es un documento clave en virtud del Convenio de Rotterdam, tanto para el funcionamiento del procedimiento de Consentimiento Informado Previo (PIC) como un mecanismo para el intercambio de información. Se publica en junio y diciembre en inglés, francés y español. Se realiza conjuntamente con la Secretaría del PNUMA de los Convenios de Basilea, Rotterdam y Estocolmo en Ginebra. Apoya directamente a las partes interesadas SO2.3.1 en la implementación de instrumentos internacionales.",
        "isbn": "9789251320624",
        "numberPages": 58,
        "image": "http://books.google.com/books/content?id=nSLJDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Technology & Engineering"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "106.82"
      },
      {
        "title": "Circular CFP LII (52) – diciembre de 2020",
        "authors": [
          "Organización de las Naciones Unidas para la Alimentación y la Agricultura ",
          "Programa de las Naciones Unidas para el Medio Ambiente"
        ],
        "publisher": "Food & Agriculture Org.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La Circular PIC es un documento clave en virtud del Convenio de Rotterdam, tanto para la operación del procedimiento de Consentimiento Informado Previo (PIC) como un mecanismo para el intercambio de información. Se publica en junio y diciembre en inglés, francés y español. Se realiza conjuntamente con la Secretaría del PNUMA de los Convenios de Basel, Rotterdam y Estocolmo en Ginebra. Apoya directamente a las partes interesadas SO2.3.1 en la implementación de instrumentos internacionales.",
        "isbn": "9789251337868",
        "numberPages": 115,
        "image": "http://books.google.com/books/content?id=ZCkXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Nature"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "78.00"
      },
      {
        "title": "Historia y prospectiva",
        "authors": [
          "Cavieres Figueroa, Eduardo",
          "Perez Herrero, Pedro"
        ],
        "publisher": "20 %",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Vivíamos en la caverna de Platón, pendientes de los dispositivos digitales en cuyas pantallas contemplábamos las sombras que antiguamente se proyectaban en el muro. Vivíamos ensimismados en un mundo de ficción. Vivíamos anclados en el presente, pues ya no confiábamos en el futuro. Y en esto apareció el coronavirus. Nos impusieron el aislamiento social. Se decretó el cierre de fronteras entre los países. Nos concienciamos de que había que intensificar la higiene, utilizar mascarillas y guantes. Y proliferaron las fotos alarmantes de personas heroicas, protegidas por batas, gafas, mascarillas, guantes y botas, luchando contra algo que no podíamos ver y nos mataba. Después de siglos, una vez más, en todos los continentes, se establecieron las mismas medidas de resistencia contra el \"enemigo invisible\" de la historia, contra la nueva peste que es la COVID-19. Y comenzaron a circular comentarios, ensayos, artículos y anecdotarios que recordaban la peste negra pero, especialmente, los miedos y angustias sociales de un pasado que, aunque se creía aniquilado, todavía está presente en los escondrijos más recónditos de la mente y la existencia humanas. La ubicuidad absoluta de la globalización, que ya no se limita al intercambio o consumo de productos, propaga miedos e incertidumbres. Otra vez ha irrumpido el pasado, se ha paralizado el presente, hay desconfianza y negación del futuro. ¿Hemos llegado al final de la Historia? ¿Es tiempo de resignación y de nostalgia? Ante la ausencia de proyectos de futuro, ¿la solución es recuperar las utopías del pasado? ¿Son tiempos de retrotopía? Este libro reúne las ponencias presentadas en el IV Coloquio Internacional del Programa Universitario de Estudios Hispano-Chilenos, que llevó por título \"Historia y Prospectiva\" y se celebró en Valparaíso (Chile) durante los días 14 y 15 de octubre de 2019. Una semana después se produjeron los hechos que llevaron a Chile a una de sus crisis más notables y profundas de todo el siglo xx. A los pocos meses, se desencadenó la crisis del coronavirus que puso al mundo en vilo. ¿Fuimos capaces de prever durante esos días de coloquio lo que se nos venía encima? No de manera específica, pero sí fue nuestro objetivo tratar de visualizar el mañana, imaginar dónde estábamos y, en síntesis, hacer prospectiva. Entonces defendimos que tenemos la capacidad suficiente (e histórica) para, al presentar nuestras preocupaciones, romper con la clásica relación lineal de pasado-presente-futuro históricos; de causas y consecuencias encadenadas. Sostuvimos que el pasado se puede saltar el presente y que lo que pensamos en presente no necesariamente es lo que ocurrirá en el futuro. Nuestras reflexiones estuvieron en el lugar y el momento oportunos. No perdimos tiempo, sino que lo ganamos para imaginar el porvenir.",
        "isbn": "9788413810317",
        "numberPages": 268,
        "image": "http://books.google.com/books/content?id=9RwfEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "History"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "190.15"
      },
      {
        "title": "Circular CFP LIV (54) – diciembre de 2021",
        "authors": [
          "Organización de las Naciones Unidas para la Agricultura y la Alimentación",
          "Programme des Nations Unies pour l’Environnement"
        ],
        "publisher": "Food & Agriculture Org.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La Circular PIC es un documento clave en virtud del Convenio de Rotterdam, tanto para la operación del procedimiento de Consentimiento Informado Previo (PIC) como un mecanismo para el intercambio de información. Se publica en junio y diciembre en inglés, francés y español. Se realiza conjuntamente con la Secretaría del PNUMA de los Convenios de Basel, Rotterdam y Estocolmo en Ginebra. Apoya directamente a las partes interesadas SO2.3.1 en la implementación de instrumentos internacionales.",
        "isbn": "9789251356784",
        "numberPages": 113,
        "image": "http://books.google.com/books/content?id=0FVqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Technology & Engineering"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "279.90"
      },
      {
        "title": "Breve historia de la Lingüística estructural",
        "authors": [
          "Peter Matthews"
        ],
        "publisher": "Ediciones AKAL",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Se explica qué entendemos por estructuralismo y por qué razón las ideas estructuralistas ocupan aún hoy en día un lugar preeminente en el ámbito de la Lingüística. Para los estructuralistas, el lenguaje es un sistema autónomo y altamente organizado, cuya historia sería la de un conjunto de cambios sucesivos desde un estado del sistema a otro diferente. Esta idea tiene sus orígenes en el siglo XIX y fue desarrollada en el XX por Saussure y por sus discípulos, incluyendo los lingüistas que integraron la escuela liderada por Bloomfield en Estados Unidos. Merced, en particular, a la obra de Chomsky, el estructuralismo ha conservado buena parte de la influencia que llegó a tener.",
        "isbn": "9788446022992",
        "numberPages": 204,
        "image": "http://books.google.com/books/content?id=DGtxKkHCmaUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "179.98"
      },
      {
        "title": "Mejore su sitio Joomla!",
        "authors": [
          "Didier Mazier"
        ],
        "publisher": "Ediciones ENI",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "\"Este libro está dirigido a cualquier persona que conozca Joomla! o no, que desee lanzar un sitio web atractivo y competitivo, dotado con las extensiones más eficientes para las versiones 2.5 y 3.0 de Joomla!. Le explicamos paso a paso cómo ampliar las características de su sitio Joomla! con más de 100 extensiones fundamentales: diseño gráfico avanzado, gestión de plantillas, gestión avanzada de contenidos (incluidos los externos), consulta y descarga de archivos, calendarios y eventos, anuncios clasificados, galerías de imágenes y vídeos, comercio electrónico, boletín de noticias, red social, foro, preguntas más frecuentes, ... La administración del sitio ocupa un lugar destacado con las herramientas SEO (optimización para motores de búsqueda) y estadísticas, la seguridad, las actualizaciones y el marketing. Para cada categoría de características, se presentan las principales extensiones disponibles, cómo elegir e instalar las que haya escogido e implementar componentes, plugins y módulos. Para elegir estas extensiones, nos hemos basado en los siguientes criterios: si la extensión es gratuita, su simplicidad y rapidez de implementación, así como si su interfaz está traducida al español.\"--ENI Ediciones.",
        "isbn": "2746082926",
        "numberPages": 502,
        "image": "http://books.google.com/books/content?id=xhW5a3rE2-oC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Libros electrónicos"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "52.89"
      },
      {
        "title": "Instalación y configuración del software de servidor web. IFCT0509",
        "authors": [
          "José Luis Villada Romero"
        ],
        "publisher": "IC Editorial",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Libro especializado que se ajusta al desarrollo de la cualificación profesional y adquisición de certificados de profesionalidad. Manual imprescindible para la formación y la capacitación, que se basa en los principios de la cualificación y dinamización del conocimiento, como premisas para la mejora de la empleabilidad y eficacia para el desempeño del trabajo.",
        "isbn": "9788416433957",
        "numberPages": 402,
        "image": "http://books.google.com/books/content?id=RVYpEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "0.90"
      },
      {
        "title": "Cuadernillo JavaScript 2: Desarrollo Web en Entorno Cliente de una Calculadora",
        "authors": [
          "Baldomero S‡nchez PŽrez"
        ],
        "publisher": "Lulu.com",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "El libro esta desarrollado, a partir de una práctica de asimilación de los contenidos impartidos a un grupo de Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW), en el modulo Diseño Web en Entorno del Cliente, la impartición se desarrollo en JavaScript, en un entorno de programación y utilizando casi todos los contenidos de la programación curricular del título, integrando en la implementación de una aplicación completa, para ver su integración como objetivo final. Comandos que se tratan: String, Number, Date, Boolean, Date, NaN, null, parseInt, parseFloat, new Array(), toString(), document, window, form, prototype, ...",
        "isbn": "9780244641528",
        "numberPages": 120,
        "image": "http://books.google.com/books/content?id=N747DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Technology & Engineering"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "83.51"
      },
      {
        "title": "Domine Javascript 4a Edición",
        "authors": [
          "Pablo Fernandez Casado"
        ],
        "publisher": "Ediciones de la U",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Aunque JavaScript es un lenguaje capaz de manejar cosas tan increíbles como la geolocalización o de ejecutar subprogramas en segundo plano, casi, sin gastar recursos del sistema, para muchos, es el gran desconocido. Este libro va dirigido a todas aquellas personas, con o sin nivel, que quieren saber más sobre el mundo de la programación orientada a eventos o quieren iniciarse en el mundo de HTML5. Empezando desde un nivel cero, se van explicando de manera sencilla y concisa, todas y cada una de las características de JavaScript, desde los tipos de datos hasta las diferentes API de HTML5 y su posible integración con CSS. Después de la exposición teórica del lenguaje, se exponen veinticuatro ejemplos que pueden ser descargados a través de un repositorio de GitHub, los cuales están pensados desde un punto de vista didáctico para que, el alumno o lector, ponga en práctica varios de los aspectos más relevantes e importantes que ofrece JavaScript como son los Web Components, los elementos nativos o la API Canvas. Cuando se termine este libro se habrán adquirido los conocimientos necesarios para poder enfrentarse a cualquier desafío que JavaScript le pueda plantear y se le presentará una biblioteca de componentes de rápida instalación e integración sin derechos de uso dedicada, sobre todo, a los desarrolladores que desean seguir instruyéndose.",
        "isbn": "9789587923025",
        "numberPages": 438,
        "image": "http://books.google.com/books/content?id=lANcEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "26.85"
      },
      {
        "title": "Domine JavaScript 4ª Edición",
        "authors": [
          "Pablo Enrique Fernández Casado"
        ],
        "publisher": "Ra-Ma Editorial",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Aunque JavaScript es un lenguaje capaz de manejar cosas tan increíbles como la geolocalización o de ejecutar subprogramas en segundo plano, casi, sin gastar recursos del sistema, para muchos, es el gran desconocido. Este libro va dirigido a todas aquellas personas, con o sin nivel, que quieren saber más sobre el mundo de la programación orientada a eventos o quieren iniciarse en el mundo de HTML5. Empezando desde un nivel cero, se van explicando de manera sencilla y concisa, todas y cada una de las características de JavaScript, desde los tipos de datos hasta las diferentes API de HTML5 y su posible integración con CSS. Después de la exposición teórica del lenguaje, se exponen veinticuatro ejemplos que pueden ser descargados a través de un repositorio de GitHub, los cuales están pensados desde un punto de vista didáctico para que, el alumno o lector, ponga en práctica varios de los aspectos más relevantes e importantes que ofrece JavaScript como son los Web Components, los elementos nativos o la API Canvas. Cuando se termine este libro se habrán adquirido los conocimientos necesarios para poder enfrentarse a cualquier desafío que JavaScript le pueda plantear y se le presentará una biblioteca de componentes de rápida instalación e integración sin derechos de uso dedicada, sobre todo, a los desarrolladores que desean seguir instruyéndose.",
        "isbn": "9788499649016",
        "numberPages": 319,
        "image": "http://books.google.com/books/content?id=1c-4EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "172.48"
      },
      {
        "title": "Utilización de las bases de datos relacionales en el sistema de gestión y almacenamiento de datos",
        "authors": [
          "GONZÁLEZ MENÉNDEZ, JOSÉ ANTONIO"
        ],
        "publisher": "Ediciones Paraninfo, S.A.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Resolver los problemas e incidencias básicas de un equipo informático a nivel de usuario requiere de un grado conocimiento adecuado. A través de este manual aprenderemos a comprobar el funcionamiento del equipo y a diseñar bases de datos relacionales básicas no complejas; también, a analizar las utilidades de las aplicaciones informáticas de gestión de bases de datos, determinando los formatos más adecuados para la introducción, recuperación y presentación de la información; por otra parte, veremos cómo automatizar operaciones repetitivas sencillas y el acceso a la información en las bases de datos, analizando los procedimientos que garantizan la integridad, seguridad, disponibilidad y confidencialidad del sistema de gestión informático. Cada capítulo se complementa con actividades de autoevaluación, cuyas soluciones están disponibles en www.paraninfo.es. Los contenidos de este libro se corresponden con los establecidos para la UF 0348 Utilización de las bases de datos relacionales en el sistema de gestión y almacenamiento de datos, incardinada en el MF 0987_3Gestión de sistemas de información y archivo, transversal a los certificados de profesionalidad ADGG0308 Asistencia documental y de gestión en despachos y oficinas (RD 645/2011, de 9 de mayo) y ADGD0208 Gestión integrada de recursos humanos (RD 1210/2009, de 17 de julio, modificado por el RD 645/2011, de de mayo).",
        "isbn": "9788428397674",
        "numberPages": 236,
        "image": "http://books.google.com/books/content?id=pbUbCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "182.12"
      },
      {
        "title": "Natural Language Processing with Java Cookbook",
        "authors": [
          "Richard M. Reese"
        ],
        "publisher": "Packt Publishing Ltd",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "A problem-solution guide to encounter various NLP tasks utilizing Java open source libraries and cloud-based solutions Key FeaturesPerform simple-to-complex NLP text processing tasks using modern Java libraries Extract relationships between different text complexities using a problem-solution approach Utilize cloud-based APIs to perform machine translation operationsBook Description Natural Language Processing (NLP) has become one of the prime technologies for processing very large amounts of unstructured data from disparate information sources. This book includes a wide set of recipes and quick methods that solve challenges in text syntax, semantics, and speech tasks. At the beginning of the book, you'll learn important NLP techniques, such as identifying parts of speech, tagging words, and analyzing word semantics. You will learn how to perform lexical analysis and use machine learning techniques to speed up NLP operations. With independent recipes, you will explore techniques for customizing your existing NLP engines/models using Java libraries such as OpenNLP and the Stanford NLP library. You will also learn how to use NLP processing features from cloud-based sources, including Google and Amazon’s AWS. You will master core tasks, such as stemming, lemmatization, part-of-speech tagging, and named entity recognition. You will also learn about sentiment analysis, semantic text similarity, language identification, machine translation, and text summarization. By the end of this book, you will be ready to become a professional NLP expert using a problem-solution approach to analyze any sort of text, sentences, or semantic words. What you will learnExplore how to use tokenizers in NLP processing Implement NLP techniques in machine learning and deep learning applications Identify sentences within the text and learn how to train specialized NER models Learn how to classify documents and perform sentiment analysis Find semantic similarities between text elements and extract text from a variety of sources Preprocess text from a variety of data sources Learn how to identify and translate languagesWho this book is for This book is for data scientists, NLP engineers, and machine learning developers who want to perform their work on linguistic applications faster with the use of popular libraries on JVM machines. This book will help you build real-world NLP applications using a recipe-based approach. Prior knowledge of Natural Language Processing basics and Java programming is expected.",
        "isbn": "9781789808834",
        "numberPages": 386,
        "image": "http://books.google.com/books/content?id=gi2VDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "AR",
        "stock": 0,
        "price": "175.74"
      },
      {
        "title": "Diseñar y programar, todo es empezar.",
        "authors": [
          "José F. Vélez Serrano",
          "Alberto Peña Abril",
          "Francisco Gortázar Bellas",
          "Ángel Sánchez Calle"
        ],
        "publisher": "Librería-Editorial Dykinson",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "El presente trabajo surge de varios años de experiencia docente de los autores en las asignaturas \"Software avanzado\" y \"lenguajes informáticos\", que se imparten respectivamente en el tercer curso de la carrera de Ingeniería Técnica de Informática de Gestión y en el segundo curso de la carrera Ingeniería Informática de la Universidad Rey Juan Carlos de Madrid. El objetivo de este texto es la introducción del paradigma de la programación orientada a objetos, del diseño basado en patrones, del Lenguaje Unificado de Modelado (UML) y del lenguaje de programación Java en su versión 5. Con estas bases se pretende que el lector consiga unos conocimientos teóricos en estas materias y a la vez pueda comprobar su utilidad práctica.",
        "isbn": "9788499823454",
        "numberPages": 234,
        "image": "http://books.google.com/books/content?id=lk57JxHhpyAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "181.10"
      },
      {
        "title": "APLICACIONES DE R EN ESTADÍSTICA BÁSICA Y TEXTUAL",
        "authors": [
          "GIL PASCUAL, Juan Antonio                                "
        ],
        "publisher": "Editorial UNED",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La investigación constituye una tarea necesaria en la intervención y práctica en el ámbito de la educación, fundamentalmente se orienta a la búsqueda de alternativas, la comprensión de hechos y situaciones desde su complejidad, la consecución de soluciones, la transformación y el cambio. Por ello, investigar no puede concebirse como una tarea ajena que asuman solo los especialistas; investigar la realidad socioeducativa o pedagógica es la vía de innovación y mejora de la práctica profesional; pero en los procesos de investigación la estadística da rigor científico a las conclusiones obtenidas con datos recopilados. Los medios tecnológicos vigentes permiten un trabajo liviano para el investigador, pero a su vez riguroso y profundo. En este contexto el programa estadístico-informático R toma un papel destacado por su facilidad y libertad de uso, sin ninguna atadura a empresas comercializadoras de software y con una presencia relevante en las universidades y centros de investigación de todo el mundo. El texto que se presenta aborda, con la ayuda del programa R, en cinco temas, las tareas fundamentales que afronta cualquier investigador en el ámbito de las ciencias sociales. En primer lugar, se fijan los rudimentos del programa R en el entorno de trabajo RCommander; después se habla de la organización y manipulación de los datos; más tarde de la representación de la información. Con estos tres temas se cubren los aspectos descriptivos básicos del análisis de datos. En el tema cuatro se trata las relaciones entre variables. Finalmente, el quinto tema se adentra en el tratamiento de datos textuales. La visión del texto es eminentemente práctica, con algunas formulaciones matemáticas de ayuda. Además, todos los capítulos están ilustrados con ejemplos relacionados con las ciencias sociales.",
        "isbn": "9788436275988",
        "numberPages": 178,
        "image": "http://books.google.com/books/content?id=whrdDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Social Science"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "260.59"
      },
      {
        "title": "Big Intelligence",
        "authors": [
          "Antonio Miranda Raya"
        ],
        "publisher": "EOI Escuela de Organización Industrial",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "En las disciplinas de Dirección de Programas (en inglés Program Management) y Dirección de Proyectos se denomina Programa al conjunto de proyectos interrelacio- nados que son gestionados de forma coordinada con el objetivo de obtener Beneficios no alcanzables si se gestionan de forma individual. Estos Beneficios proporcionan un conjunto de Nuevas capacidades en la Organización en la que se implantan. Se postula que las grandes empresas de Internet han creado un Nuevo Mercado cuyos productos y servicios son el fundamento de un término paraguas que llamamos Big Data, que le da nuevas alas a las actividades y procesos que suelen englobarse en los conceptos de Vigilancia Estratégica e Inteligencia Competitiva. A esa fusión de Big Data aplicado a la Vigilancia Estratégica e Inteligencia Competitiva lo hemos venido a llamar en este libro Big Intelligence. Estas cuatro ideas fuerza Big Intelligence, Nuevas Capacidades, Big Data y Vigilancia e Inteligencia Competitiva le dan nombre a este libro. La puesta en marcha de Programas Big Data de Vigilancia e Inteligencia Competitiva en las Empresas e Instituciones les proporcionarán Nuevas Capacidades que hasta muy recientemente la tecnología no ha hecho viable. Tras la presentación general, se introduce los conceptos principales relacionados con la Vigilancia e Inteligencia Competitiva. A continuación se presentan las tecnologías, disciplinas y áreas de conocimiento más relevantes que se suelen englobar bajo el término Big Data, proponemos la evolución de los Sistemas de Vigilancia e Inteligencia Competitiva mediante Big Data y finalmente se presenta una metodología para el diseño del Sistema, un modelo funcional y un modelo organizativo que lo soporte. En las disciplinas de Dirección de Programas (en inglés Program Management) y Dirección de Proyectos se denomina Programa al conjunto de proyectos interrelacio- nados que son gestionados de forma coordinada con el objetivo de obtener Beneficios no alcanzables si se gestionan de forma individual. Estos Beneficios proporcionan un conjunto de Nuevas capacidades en la Organización en la que se implantan. Se postula que las grandes empresas de Internet han creado un Nuevo Mercado cuyos productos y servicios son el fundamento de un término paraguas que llamamos Big Data, que le da nuevas alas a las actividades y procesos que suelen englobarse en los conceptos de Vigilancia Estratégica e Inteligencia Competitiva. A esa fusión de Big Data aplicado a la Vigilancia Estratégica e Inteligencia Competitiva lo hemos venido a llamar en este libro Big Intelligence. Estas cuatro ideas fuerza Big Intelligence, Nuevas Capacidades, Big Data y Vigilancia e Inteligencia Competitiva le dan nombre a este libro. La puesta en marcha de Programas Big Data de Vigilancia e Inteligencia Competitiva en las Empresas e Instituciones les proporcionarán Nuevas Capacidades que hasta muy recientemente la tecnología no ha hecho viable. Tras la presentación general, se introduce los conceptos principales relacionados con la Vigilancia e Inteligencia Competitiva. A continuación se presentan las tecnologías, disciplinas y áreas de conocimiento más relevantes que se suelen englobar bajo el término Big Data, proponemos la evolución de los Sistemas de Vigilancia e Inteligencia Competitiva mediante Big Data y finalmente se presenta una metodología para el diseño del Sistema, un modelo funcional y un modelo organizativo que lo soporte.",
        "isbn": "9788415061618",
        "numberPages": 252,
        "image": "http://books.google.com/books/content?id=pOFTDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Business & Economics"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "174.40"
      },
      {
        "title": "La ciencia es eso que nos pasa mientras estamos ocupados haciendo otras cosas",
        "authors": [
          "Diego Golombek"
        ],
        "publisher": "Siglo XXI Editores",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "\"¿Cómo se mezcla la ciencia con la vida cotidiana, con la política, con la imaginación que nace en los sueños y las vigilias? Me gusta imaginar la humanidad como el puñado de gente que alguna vez salió de África dispuesta a conquistar el mundo, cruzando charcos y mares, pantanos y montañas. Allí, seguramente, comenzaron las primeras divisiones del trabajo: Grok es buena cazando búfalos, mientras que Grak domina el fuego como nadie. Por su parte, Grik es un genio orientándose en la selva y encontrando hierbas y aguas dulces, mientras Grek se ocupa de los chicos y los despioja con firme dulzura. ¿Cómo fue entonces que apareció Gruk, la que miraba las señales de los cielos y los colores, aquella que pensaba un largo rato y concluía con su lógica qué era lo mejor para el clan? ¿Cuáles fueron los primeros experimentos, esos que movían de a una ficha por vez para entender cómo respondían la naturaleza y los dioses? Quizás así nació el oficio del científico: aquel poeta que observaba, pesaba, cambiaba y luego le contaba al resto las maravillas que había encontrado.\" En este libro, Diego Golombek, nuestro Gruk del siglo XXI, nos invita a mirar la vida cotidiana con sus deslumbrados ojos de científico. Para entender esto que somos y de qué modo el cerebro construye nuestras percepciones, emociones y creencias. Para comprender el sueño de dormir y los sueños de soñar. Para saber por qué nos enamoramos y somos felices. Y hasta para descubrir por qué desaparecen las cucharitas en la cocina. Con ustedes, la ciencia.",
        "isbn": "9789876298865",
        "numberPages": 352,
        "image": "http://books.google.com/books/content?id=lm7ADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Science"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "75.27"
      },
      {
        "title": "Esto es Twitch. Guía práctica",
        "authors": [
          "Aina Ramis"
        ],
        "publisher": "Ma Non Troppo",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Twitch va de personas que se relacionan entre sí. De personas que hablan y construyen vínculos. Así es cómo funciona, y esa está siendo la clave de su éxito. Este medio de comunicación de masas, liderado por jóvenes gamers, puede convertirse en la profesión de cualquier persona con un poco de carisma. Este manual te permitirá aprovechar todas las herramientas que Internet y la tecnología ofrecen para dar tus primeros pasos en Twitch. ¡Si te atreves a adentrarte en este mundo y a darlo todo para dominar Twitch, enciende el ordenador, que empezamos! • Twitch, una plataforma imprescindible más allá de los videojuegos: música, deporte, arte y más. • Redes sociales o cómo fidelizar a tu audiencia. • Ibai, El Rubius, TheGrefg, IamCristinini... cómo ganar dinero en Twitch. • El equipo necesario para hacer stream de calidad. • Elementos visuales y de diseño que favorecen tu canal. • Una auténtica guía de Twitch, muy completa, ideal para los que empiezan y también para los ya iniciados que quieran sacarle el máximo rendimiento. Twitch es una plataforma que reúne cada día a millones de seguidores para ver qué hacen sus streamers favoritos, un lugar para interactuar y crear entretenimiento. Desde su adquisición por parte de Amazon no ha parado de crecer, haciendo frente a Youtube. En los últimos años, Twitch se ha convertido en una de las plataformas líderes en entretenimiento para los más jóvenes, y ha supuesto una llamada de atención a los medios de comunicación tradicionales. Sin duda, Ibai entrevistando a Messi en exclusiva y antes que cualquier periodista ha marcado un antes y un después tanto en el mundo de la comunicación como en el del entretenimiento. Con algunos buenos consejos y un poco de paciencia y tenacidad, montar un canal de Twitch no es difícil. Cualquiera con las herramientas y el carisma adecuado puede adentrarse en este mundo y empezar a transmitir cualquier tipo de contenido. Hay miles de opciones gratuitas que te permitirán tener un canal y una transmisión atractiva, de apariencia profesional, con iconos y mil opciones que facilitarán la vida a la audiencia. Con este manual reflexionaremos sobre el impacto de Twitch en nuestra sociedad tanto pre como post pandemia y te darás cuenta de que una vez aprendidos los primeros conceptos del streaming podrás echar a andar de manera autónoma con una transmisión atractiva y de apariencia profesional. Además de ser un libro ideal para iniciarse en la plataforma, también será muy útil a quienes ya están dentro de ella, ya que podrán aprender nuevos trucos y modos para ser más efectivos. En definitiva una auténtica biblia del Twitch.",
        "isbn": "9788499176734",
        "numberPages": 190,
        "image": "http://books.google.com/books/content?id=SD5wEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "296.79"
      },
      {
        "title": "Su gracia es mayor",
        "authors": [
          "Kyle Idleman"
        ],
        "publisher": "Editorial Portavoz",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "El reconocido autor y pastor Kyle Idleman quiere que todos experimenten la gracia de Dios. A través del poderoso medio de la historia, Grace Is Greater lleva a los lectores más allá de sus complejos hacia una comprensión de la gracia que es más grande que nuestros errores, nuestros fracasos, nuestro deseo de venganza y nuestras situaciones aparentemente imposibles. Bestselling author and pastor Kyle Idleman wants everyone to experience the grace of God. Through the powerful medium of story, Grace Is Greater leads readers past their hang-ups toward an understanding of grace that is bigger than our mistakes, our failures, our desire for revenge, and our seemingly impossible situations.",
        "isbn": "9780825457371",
        "numberPages": 192,
        "image": "http://books.google.com/books/content?id=KeNgDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Religion"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "89.77"
      },
      {
        "title": "Filosofía de la Restauración",
        "authors": [
          "Lino García Morales"
        ],
        "publisher": "BOD GmbH DE",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La Restauración del arte de los nuevos medios es compleja no solo por la propia naturaleza efímera de los medios, sino por la complejidad de las tecnologías involucradas. En Más allá de las cosas se profundiza en la relación causa-efecto (alteración-intervención) que sostiene la Restauración y, fundamentalmente en el arte de los nuevos medios como «cosa» u «objeto» que sostiene la Conservación Evolutiva. El enfoque de este libro es transdisciplinar. No entiende la Restauración como un área de conocimiento estanca, sino como la intersección de múltiples áreas de conocimiento siempre \"en construcción\". No se trata de esto o de lo otro, sino de esto en relación con lo otro, de operadores relacionales que generan una cosmovisión abierta, rizomática. El enfoque fundamental aquí es el cambio; el cambio ortógrado que produce el envejecimiento, versus el cambio contrágado que favorece la antifragilidad. El cambio necesario para que todo siga igual.",
        "isbn": "9788413262963",
        "numberPages": 530,
        "image": "http://books.google.com/books/content?id=BiX5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "87.57"
      },
      {
        "title": "Líderes humanos",
        "authors": [
          "Nancy Cooklin"
        ],
        "publisher": "CONECTA",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Nancy Cooklin -coach, consejera y entrenadora- ha creado un modelo denominado Human Leadership , de gran demanda en contextos empresariales y formativos. A partir de una larga y profunda experiencia de trabajo, en estrecha colaboración con personas, grupos y organizaciones, así como desus viajes a diversas partes del mundo, Nancy Cooklin -coach, consejera y entrenadora- ha creado un modelo denominado Human Leadership , de gran demanda en contextos empresariales y formativos. Su autora lo presenta en este libro ágil, claro y ameno, donde lepropone al lector, a través de ejemplos gráficos y ejercicios sencillos, las herramientas indispensables para mejorar como persona ycomo líder. El liderazgo humano es conciencia, creatividad, coraje y pensamiento sistémico. Poner a la persona en el centro significa, ante todo, que se conozca a sí misma, que identifique su \"propósito\" y lo que realmente quiere, para luego definir un plan de acción con la consciencia de ser parte de un sistema funcional. La clave para orientar grupos de trabajo es simple: estar presentes como personas, ser líderes humanos completos. Reseñas: A diario veo personas que quieren crecer profesionalmente, y claro,pertenecer a equipos donde se sientan valorados. Como nos explica Nancy, con sabiduría, a través de su Human Leadership Model , para lograrlo nos toca asumir la responsabilidad de ser la mejor versión de quienes podemos ser, de dar lo mejor de nosotros y de conocernos profundamente para liderar desde la autenticidad nuestro propio crecimiento y el de nuestros equipos. Inés Temple Presidente LHH DBMPerú & LHH Chile y autora de Usted S.A. Muchas veces se habla del balance de la vida personal y la profesional como si fueran dosespaciosseparados. El buen líder es capaz de integrar las dos y pone su humanidad completa al servicio de sus equipos, entendiendo la importancia del autoconocimiento y autodesarrollo de manera permanente. En Líderes Humanos , Nancy vuelca su experiencia trabajando con muchas personas del mundo laboral y universitario, y nos guía en modo simple y eficaz a lograr esta construcción de un líder humano ¡Recomiendo su lectura! Mariela Garcia de Fabbri Gerente General de Ferreycorp Un libro que tiene la capacidad de presentar de un modo sencillo, herramientas de liderazgo personal probadas y aterrizadas. Muy recomendable a quienes quieran crecerpordentro, reflexionar, tener una perspectiva distinta y decidir mejor. Buenas recetas para poner nuestro liderazgo a disposición de los demás. Muy práctico y directo. Rafael Zavala Director Ejecutivo, Programas de Alta Dirección. PAD",
        "isbn": "9786124275227",
        "numberPages": 145,
        "image": "http://books.google.com/books/content?id=Qz9IEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Business & Economics"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "218.42"
      },
      {
        "title": "Sistemas de telefonía fija y móvil",
        "authors": [
          "DEL RÍO RUIZ, ENRIQUE"
        ],
        "publisher": "Ediciones Paraninfo, S.A.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Desde la telefonía analógica a los actuales sistemas de VoIP. Este libro desarrolla los contenidos del módulo profesional de Sistemas de Telefonía Fija y Móvil, del Ciclo Formativo de grado superior de Técnico Superior en Sistemas de Telecomunicaciones e Informáticos, perteneciente a la familia profesional de Electricidad y Electrónica. Los contenidos fijados para dicho módulo se reparten y se desarrollan a lo largo de las 11 unidades en las que se estructura el libro, en las cuales se aborda de manera detallada y con el mayor rigor posible todo lo relativo a los actuales sistemas de telefonía fija y móvil. Cada unidad incluye un elevado número de ilustraciones, diagramas de funcionamiento y notas aclaratorias con gran interés práctico. Se incluyen también numerosas actividades de ampliación y prácticas guiadas, que han sido testeadas por el autor en su actividad docente como impartidor de este módulo. El libro ofrece, además, un conjunto de útiles anexos como recursos digitales, con nuevas prácticas de telefonía, ejemplos de configuración de centralitas, contenidos actuales relacionados con la telefonía IP y nuevas tecnologías de sistemas de telefonía móvil. A estos materiales se puede acceder a través de la ficha web de la obra (en www.paraninfo.es), mediante un sencillo registro desde la sección de «Recursos previo registro». En definitiva, esta obra puede ser de gran ayuda tanto para los alumnos y los profesores del módulo, como para los docentes que imparten módulos formativos con contenidos de telefonía. También será de interés para los lectores que deseen iniciarse en los sistemas de telefonía fija y móvil. Los alumnos de ciclos formativos encontrarán un completo libro que pretende transmitir de la forma más atractiva posible el funcionamiento de los actuales sistemas de telefonía fija y móvil.",
        "isbn": "9788428340205",
        "numberPages": 234,
        "image": "http://books.google.com/books/content?id=wORaDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Reference"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "204.47"
      },
      {
        "title": "Ingeniería del software y bases de datos",
        "authors": [
          "María Dolores Lozano Pérez"
        ],
        "publisher": "Univ de Castilla La Mancha",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este libro reune las ponencias presentadas en la X Escuela de Verano de Informática, que viene siendo organizada por el Departamento de Informática de la Universidad de Castilla-La Mancha dentro de su campus de Albacete. En esta ocasión, el tema a abordar de manera monográfica es Ingenieria del Software y Bases de Datos. Tendencias Actuales.Prestigiosos investigadores de distintas Universidades españolas han plasmado en este libro aquellos aspectos más relevantes del área de la Ingeniería del Software y las Bases de Datos. En él se pueden encontrar las últimas propuestas asociadas con el ánalisis y diseño de sistemas software (desde la ingeniería de requisitos, las interfaces de usuario, hasta el desarrollo de software basado en componentes), asi como algunas de las más recientes tendencias de sistemas de bases de datos (bases de datos documentales, los sistemas cooperativos o las métrica de calidad, entre otros). Con la recopilación de estas ponencias el lector podrá tener una referencia clara de la situación de esta disciplina y de cuáles son la tendecias actuales en el desarrollo de software.",
        "isbn": "8484270777",
        "numberPages": 264,
        "image": "http://books.google.com/books/content?id=bNDzMt6dwNsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Business & Economics"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "51.26"
      },
      {
        "title": "Traducción y tecnologías",
        "authors": [
          "Antoni Oliver González",
          "Joaquim Moré López",
          "Salvador Climent Roca"
        ],
        "publisher": "Editorial UOC",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este libro está concebido como un manual universitario profesional. Este manual ofrece el conocimiento y la práctica con las herramientas y los recursos informáticos necesarios para aumentar la productividad del traductor, asegurar el aprovechamiento y consistencia de su trabajo, tratar y transformar textos y formados, crear y mantener glosarios terminológicos, gestionar proyectos de traducción y controlar la calidad.",
        "isbn": "9788497883658",
        "numberPages": 317,
        "image": "http://books.google.com/books/content?id=DVRDp_f6lmgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Foreign Language Study"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "125.42"
      },
      {
        "title": "Tecnologías y programación integrativas",
        "authors": [
          "Manuel Arias Calleja"
        ],
        "publisher": "Editorial Universitaria Ramon Areces",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La informática se ha ido desarrollando muy rápidamente, casi de un modo caótico y se han creado soluciones ad hoc a los problemas que se iban presentando. Como consecuencia, los sistemas resultantes ni se comunican bien entre ellos ni funcionan como si fueran un todo. Las tecnologías de programación integrativa tratan de resolver estos problemas tratando de unir de un modo coherente aplicaciones distintas, posiblemente en máquinas separadas para dar una visión homogénea de un sistema.",
        "isbn": "9788499611365",
        "numberPages": 133,
        "image": "http://books.google.com/books/content?id=N3OnDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "163.49"
      },
      {
        "title": "Del arte objetual al arte de concepto",
        "authors": [
          "Simón Marchán Fiz"
        ],
        "publisher": "Ediciones AKAL",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Aspirando a ofrecer un balance de los años 60 y sus estribaciones en la década siguiente, esta obra ahonda en la poética de cada tendencia y logra sintonizar nuestra peculiar situación cultural, artística y política con el panorama artístico internacional. Entre la información positivista y la obsesión fenomenológica por retornar a las obras mismas, Marchán Fiz rebasa todo sociologismo como realismo social, lo que transluce las preocupaciones metodológicas del momento y los estímulos estéticos en sus análisis sobre las figuras de lo moderno y en su preocupación por los lenguajes artísticos. El texto que se convertiría en legitimador de lo “nuevo” y, es ahora, un ensayo clásico sobre el periodo abordado, presenta un epílogo sobre la sensibilidad “postmoderna” junto a numerosas reproducciones y una antología de textos, que permiten contrastar las numerosas oscilaciones experimentadas por el gusto.",
        "isbn": "8476001053",
        "numberPages": 488,
        "image": "http://books.google.com/books/content?id=SFQ0nd4_7sYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Art"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "34.17"
      },
      {
        "title": "Humanidades digitales y pedagogías culturales",
        "authors": [
          "Ricard Huerta",
          "Amparo Alonso Sanz"
        ],
        "publisher": "Editorial UOC",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este libro recoge una serie de reflexiones y análisis sobre los retos y oportunidades que nos ofrecen las pedagogías culturales y las humanidades digitales en la era actual. Cuando hablamos de pedagogía cultural nos referimos al estudio de la dimensión educativa de la cultura para el desarrollo personal y social. Esta concepción se ha visto impulsada y a su vez transformada por lo digital, lo que hace replantearnos sus perspectivas. Desde las humanidades digitales, agrupamos disciplinas vinculadas a las dinámicas culturales y sociales en red para invitar a reflexionar sobre el modo en que nuestras comunidades se ven afectadas.",
        "isbn": "9788491807711",
        "numberPages": 178,
        "image": "http://books.google.com/books/content?id=FLkTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "185.29"
      },
      {
        "title": "La escuela de Nueva York",
        "authors": [
          "Nieves Alberola Crespo"
        ],
        "publisher": "Publicacions de la Universitat Jaume I",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "A documented and informative text written as an introduction to the new aesthetic adventure initiated in New York after the Second World War. It is of great interest not only to English Philology students but also to those who are concerned with poetry and with the evolution of literature in the 20th century. \"The importance of the book lies in the filling of an important gap: it gives access to the north-American universe of poetry that until nowadays only could be done in a fragmented way, as there was not specific bibliography in our linguistic field that allowed to settle the contemporary vanguard\" (Jenaro Talens)",
        "isbn": "8480212926",
        "numberPages": 244,
        "image": "http://books.google.com/books/content?id=kwgqLaFhmLIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Literary Criticism"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "124.51"
      },
      {
        "title": "MF0492_3 Programación Web en el Entorno Servidor.",
        "authors": [
          "Marcos López Sanz"
        ],
        "publisher": "Ra-Ma Editorial",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La presente obra está dirigida a los estudiantes de certificados de profesionalidad de nivel 3, en concreto a los del módulo formativo Programación web en el entorno servidor, que está incluido dentro del certificado de profesionalidad Desarrollo de aplicaciones con tecnologías web. Los contenidos incluidos en este libro abarcan conceptos relacionados con los procesos y paradigmas propios del desarrollo de aplicaciones web de servidor así como los lenguajes y tecnologías involucradas en el soporte de gestión y manipulación en el lado del servidor, pasando por la definición de soluciones arquitectónicas dinámicas y multiplataforma como son las tecnologías de servicios. Los capítulos incluyen todo tipo de ejemplos, imágenes, tablas y casos prácticos con el propósito de facilitar la asimilación de los conocimientos tratados.",
        "isbn": "9788499645988",
        "numberPages": 268,
        "image": "http://books.google.com/books/content?id=L6e6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Internet programming"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "224.06"
      },
      {
        "title": "Intensive Exposure Experiences in Second Language Learning",
        "authors": [
          "Carmen Muñoz"
        ],
        "publisher": "Multilingual Matters",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This volume brings together studies dealing with second language learning in contexts that provide intensive exposure to the target language. In doing so, it highlights the role of intensive exposure as a critical distinctive characteristic in the comparison of learning processes and outcomes from different learning contexts: naturalistic and foreign language instruction, stay abroad and at home, and extensive and intensive instruction programmes. The different chapters represent a wide range of learning contexts and types of learning, as well as different approaches that yield much needed evidence on the role of context of acquisition in second language learning.",
        "isbn": "9781847698070",
        "numberPages": 277,
        "image": "http://books.google.com/books/content?id=jLM8QRj64YkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "AR",
        "stock": 0,
        "price": "210.02"
      },
      {
        "title": "Big Data and Hadoop",
        "authors": [
          "VK Jain"
        ],
        "publisher": "KHANNA PUBLISHING",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book introduces you to the Big Data processing techniques addressing but not limited to various BI (business intelligence) requirements, such as reporting, batch analytics, online analytical processing (OLAP), data mining and Warehousing, and predictive analytics. The book has been written on IBMs Platform of Hadoop framework. IBM Infosphere BigInsight has the highest amount of tutorial matter available free of cost on Internet which makes it easy to acquire proficiency in this technique. This therefore becomes highly vunerable coaching materials in easy to learn steps. The book optimally provides the courseware as per MCA and M. Tech Level Syllabi of most of the Universities. All components of big Data Platform like Jaql, Hive Pig, Sqoop, Flume , Hadoop Streaming, Oozie: HBase, HDFS, FlumeNG, Whirr, Cloudera, Fuse , Zookeeper and Mahout: Machine learning for Hadoop has been discussed in sufficient Detail with hands on Exercises on each.",
        "isbn": "9789382609131",
        "numberPages": 600,
        "image": "http://books.google.com/books/content?id=i6NODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "AR",
        "stock": 0,
        "price": "147.47"
      },
      {
        "title": "El acto de nombrar",
        "authors": [
          "Elena Bazán"
        ],
        "publisher": "AGUILAR",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "EL LENGUAJE IDENTIFICA, DEFINE Y EXPLICA, PERO TAMBIÉN ACOMPAÑA Y CONECTA. En el lenguaje actual de las mujeres nombrar es poder, por eso esta obra propone palabras y situaciones cercanas a las mujeres, pero jamás exclusivas porque, como el lenguaje, este es un libro plural, cualquier persona interesada en el debate de por qué y cómo se expresan, es bienvenida a estas páginas. La autora se ocupa fundamentalmente de palabras, pero también de anécdotas, de casos reales, recuerdos, entrevistas, reflexiones, datos, estadísticas, referentes históricos y actuales; lugares, instituciones, consignas, canciones, lemas... pues cuando se trata de palabras todo suma. El léxico no tiene lugar exclusivo en la boca, en las hojas y en la mente, tiene pulso propio, cambia y nos enfrenta siempre; por esto, escoger entre un término y otro es trascendental y cambia nuestra vida. El acto de nombrar es una amplia reflexión de cómo las palabras nos significan: si supiéramos nombrar y detallar qué sentimos,cómo vivimos, qué nos pasa, tendríamos más herramientas para entender, empatizar, sobrevivir, ganar en el día a día. Las palabras: sororidad, violencia, feminicidio, memoria, elle, techo de cristal, carga mental, amor propio, feminismos y libertad, entre otras, cubren nuestras escuelas, oficinas, los talleres, las fábricas, las calles, los espacios íntimos y públicos, las exigencias sociales, las conversaciones y las expresiones literarias porque hoy, más que nunca, las mujeres apuestan por un lenguaje de inclusión, justicia, tolerancia y reconocimiento para lograr una sociedad más equitativa y una convivencia más luminosa entre todas las personas a través de un lenguaje revulsivo/ disruptivo, encendido/comprendido.",
        "isbn": "9786073826709",
        "numberPages": 235,
        "image": "http://books.google.com/books/content?id=PruqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Social Science"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "170.81"
      },
      {
        "title": "Formalising Natural Languages with Nooj 2014",
        "authors": [
          "Mario Monteleone",
          "Johanna Monti",
          "Max Silberztein"
        ],
        "publisher": "Cambridge Scholars Publishing",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This volume is composed of 22 peer-reviewed contributions selected from among the 52 presentations submitted for the 2014 International NooJ Conference held at the University of Sassari, Italy. NooJ is a linguistic development environment that allows linguists to formalize a wide range of linguistic phenomena, and then test, adapt, share and accumulate each elementary description so as to build linguistic “modules”, that is, structured libraries of linguistic resources. NooJ is also used as a corpus processor that can launch sophisticated queries over large corpora of texts, in order to produce various results, including concordances, statistical analyses, information extraction, and automatic translation. NooJ is used in many research centers all over the world, and linguistic modules are available for more than 20 languages. NooJ is also used by a growing number of software companies to develop various Natural Language Processing applications. Johanna Monti is Associate Professor at the University of Sassari, Italy, where she teaches Translation Studies, Computational Linguistics, and Machine-Translation and Computer-Aided Translation. She has acted as a member of the scientific committees of various renowned international conferences on Natural Language Processing, and as external evaluator for the Italian Ministry for Education, Universities and Research (MIUR) and the Horizon 2020 programme.",
        "isbn": "9781443884648",
        "numberPages": 260,
        "image": "http://books.google.com/books/content?id=v5_WCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "AR",
        "stock": 0,
        "price": "45.92"
      },
      {
        "title": "Construcción y diseño de páginas web con HTML, CSS y JavaScript. Edición 2023",
        "authors": [
          "Pablo Enrique Fernández Casado"
        ],
        "publisher": "Ra-Ma Editorial",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Mucho se habla del diseño de páginas web usando tecnologías que te lo dan todo hecho, pero no de las tecnologías que entienden los navegadores ni de la pérdida de potencia y conocimiento que ello conlleva. Si a esto le sumamos aprendizaje aburrido y sin comprensión de lo que hacemos el resultado es que creamos “cosas” sin ningún fundamento. Esto no te pasará con este libro ya aprenderás las tres tecnologías básicas que entienden los navegadores, HTML, CSS y JavaScript y de esta forma crear sistemas web óptimos con los mínimos recursos. Y todo ello, interactuando con test online y programando diferentes juegos. Cuando finalices este libro no sólo serás de construir y diseñar una página web si no también de resolver la mayoría de los problemas que surgen a la hora de crear un sistema, página o aplicación web y lo habrás aprendido de una forma lúdica y divertida. También, desde la web del libro podrás descargar código fuente que contiene el libro para facilitar el aprendizaje.",
        "isbn": "9788419857170",
        "numberPages": 230,
        "image": "http://books.google.com/books/content?id=0DnCEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "37.66"
      },
      {
        "title": "III Congreso internacional de ingenierías",
        "authors": [
          "Burbano Pulles, Marco",
          "Patiño Hernández, Luis"
        ],
        "publisher": "Universidad Politécnica Estatal del Carchi",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este libro reúne las memorias del III Congreso Internacional de Ingenierías desarrollado en Ipiales y Tulcán. Sus temáticas están relacionadas con los alimentos, la informática, la ingeniería agroindustrial y la computación. Sus autores abordan distintas e importantes temáticas bajo un enfoque científico y acorde a los avances tecnológicos de la región. Su lectura y aplicación resaltará la instauración de la cientificidad y la replicabilidad necesarias para su demostración y difusión hacia la colectividad.",
        "isbn": "9789942914460",
        "numberPages": 246,
        "image": "http://books.google.com/books/content?id=86OLEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Technology & Engineering"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "85.15"
      },
      {
        "title": "Gramática natural",
        "authors": [
          "José Luis Mendívil Giró"
        ],
        "publisher": "Antonio Machado Libros",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Si es cierto que la vida sobre la tierra es un paso más en la evolución hacia la complejidad de la materia que se creó después del Big Bang, el desarrollo del lenguaje humano y especialmente de la gramática, que es su núcleo esencial y diferenciador, constituye la piedra angular del desarrollo de la complejidad alcanzada por el cerebro humano y sus complejas creaciones. Este libro muestra que la gramática es natural en los dos sentidos posibles: en tanto que parte central del lenguaje humano y en tanto que ciencia que la estudia. Como esencia del lenguaje humano, la gramática representa el nexo decisivo entre la complejidad biológica y la complejidad cultural. Como ciencia, la gramática representa el ámbito idóneo en el que las dos culturas tradicionales (\"ciencias y letras\") se funden en la que debería ser la Tercera Cultura.",
        "isbn": "9788491142805",
        "numberPages": 451,
        "image": "http://books.google.com/books/content?id=see4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "165.97"
      },
      {
        "title": "Introducción a la ciencia de datos en R",
        "authors": [
          "Pérez Castillo José Nelson"
        ],
        "publisher": "Editorial Universidad Distrital Francisco José de Caldas",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este libro busca que el lector adquiera la capacidad de utilizar las técnicas y herramientas propias de lo que hoy se conoce como ciencia de datos, teniendo como propósito resolver problemas que involucren diversas fuentes de datos, tanto estructurados como no estructurados, dotándolo de la capacidad de generar valor y diferenciación a las organizaciones a partir del análisis de sus conjuntos de datos.",
        "isbn": "9789587873801",
        "numberPages": 161,
        "image": "http://books.google.com/books/content?id=VXmiEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "72.44"
      },
      {
        "title": "Diseño de interfaces web (GRADO SUPERIOR)",
        "authors": [
          "José Eduardo Córcoles Tendero"
        ],
        "publisher": "Ra-Ma Editorial",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La presente obra está principalmente dirigida a los estudiantes del Ciclo Formativo Desarrollo de Aplicaciones Web de Grado Superior, en concreto para el módulo profesional Diseño de Interfaces Web. Los contenidos incluidos en este libro abarcan los conceptos básicos del diseño de interfaces web, que van desde los conceptos básicos del desarrollo web, las hojas de estilo CSS, el manejo de recursos multimedia, hasta la programación de animaciones con jQuery. Todo ello enmarcado dentro de las pautas y criterios que definen la usabilidad y accesibilidad de las interfaces. Los capítulos incluyen actividades resueltas y ejemplos con el propósito de facilitar la asimilación de los conocimientos tratados. De esta manera, se pretende que el estudiante asimile la teoría desde una perspectiva práctica. Así mismo, se incorporan test de conocimientos y ejercicios propuestos con la finalidad de comprobar que los objetivos de cada capítulo se han asimilado correctamente. Además, reúne los recursos necesarios para incrementar la didáctica del libro, tales como un glosario con los términos informáticos necesarios, bibliografía y documentos para ampliación de los conocimientos.",
        "isbn": "9788499643632",
        "numberPages": 224,
        "image": "http://books.google.com/books/content?id=z6W6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "89.57"
      },
      {
        "title": "Manual teórico-práctico para programar por competencias",
        "authors": [
          "RUBIO ROLDÁN María Julia                               ",
          "MARTÍN CUADRADO Ana María                              ",
          "CABRERIZO DIAGO Jesús                                   "
        ],
        "publisher": "Editorial UNED",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "elementos más importantes para la ordenación, planificación y desarrollo de los procesos educativos; así lo entienden las administraciones que gestionan la Educación en la medida en que exigen al profesorado las programaciones de sus materias al inicio de cada curso escolar. Pero más allá de esa exigencia administrativa, la programación por competencias de una materia es fundamental para la acción docente de cada profesor, siendo considerada en la actualidad uno de los indicadores más fiables y relevantes de la calidad del desempeño profesional docente, además de servir al profesor que la ha desarrollado en las aulas como documento de defensa ante posibles reclamaciones. Esas son las razones que justifican la publicación de este libro; pasados ya los tiempos en los que se utilizaban programaciones obsoletas propias de tiempos pasados, se propone ahora a los profesores que sean protagonistas de su propio trabajo, diseñando su acción profesional en las aulas mediante la elaboración de sus propias programaciones por competencias. Para ayudarles en esa tarea se presentan en este manual algunos elementos teóricos imprescindibles que el profesorado debe conocer para realizar sus programaciones por competencias, y recursos prácticos, actualizados y de calidad para facilitar su elaboración.",
        "isbn": "9788436276558",
        "numberPages": 266,
        "image": "http://books.google.com/books/content?id=5PsGEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "246.14"
      },
      {
        "title": "Calidad del producto y proceso software",
        "authors": [
          "Coral Calero Muñoz",
          "Mario G. Piattini Velthuis",
          "María Ángeles Moraga de la Rubia"
        ],
        "publisher": "Editorial Ra-Ma",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La calidad del software es un tema cada vez más en boga y al que se presta mayor atención, no sólo desde el punto de vista investigador, sino también desde el punto de vista empresarial. Cada vez más las empresas pretenden diferenciarse de sus competidores basándose en la calidad de los productos que ofrecen a sus clientes. Este texto tiene como objetivo ayudar a consolidar, unificar y divulgar conocimientos sobre la calidad de los Sistemas de Información y fomentar el desarrollo y uso de nuevas técnicas y metodologías para garantizar la calidad de los productos y los procesos software. El libro está dividido en tres partes. La primera de ellas cubre aspectos generales de calidad del software: el uso de estándares, los nuevos aspectos de normalización de la calidad en los que ISO está trabajando, la familia SQuaRe (Software Quality Requirements), lenguajes para modelar la medición de la calidad del software, técnicas utilizables para la validación en ingeniería del software, visualización de la calidad y la relación entre la calidad externa de un producto software y su calidad en uso. La segunda parte del libro versa entorno a modelos, métodos, metodologías y medición de calidad: calidad en DSDM (Desarrollo de Software Dirigido por Modelos), en líneas de producto y en componentes software, procesos ETL (Extract, Transform, Load) en almacenes de datos, un plan de medición de calidad de datos, cómo tratar aspectos de calidad en la documentación técnica en un entorno de desarrollo centrado en documentos, como mejorar la calidad software mediante una metodología basada en gestión del conocimiento y la seguridad en ingeniería del software como parte fundamental de la calidad. La tercera y última parte de este libro particulariza algunos de los contenidos expuestos anteriormente, y muestra su aplicación a contextos determinados, o su implementación en herramientas. Teniendo en cuenta la estructura y contenidos de este libro, creemos que puede servir tanto a investigadores como a profesionales de la calidad del software. También podrá servir de referencia en asignaturas de Ingeniería Informática, así como en doctorados y másters dónde se incluyan contenidos de calidad de software.",
        "isbn": "9788478979615",
        "numberPages": 668,
        "image": "http://books.google.com/books/content?id=M4h1WAvbgqQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "268.32"
      },
      {
        "title": "Recursos para atender a la diversidad en contextos educativos",
        "authors": [
          "RUBIO ROLDÁN María Julia                               ",
          "MARTÍN CUADRADO Ana María                              ",
          "CABRERIZO DIAGO Jesús                                   "
        ],
        "publisher": "Editorial UNED",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "En la actualidad, atender a la diversidad del alumnado de un centro es proporcionar una respuesta adecuada y personalizada de todos y cada uno de los alumnos del mismo, en función de sus necesidades educativas, y no solo de los que están adscritos a determinados programas. Esa atención se ha convertido en la esencia misma de la actividad docente, por lo que conocer cuáles son sus necesidades y dar respuesta a las mismas, poniendo en práctica las medidas necesarias en cada caso, es el reto más importante al que se enfrenta diariamente el profesorado. Esa es la razón que explica que uno de los documentos más importantes de un centro sea el Plan de atención a la diversidad, ya que debe recoger el conjunto de medidas, ordinarias y extraordinarias, que el centro ha contemplado para atender a la diversidad de todos sus alumnos. Ante este enorme reto profesional, el centro educativo en general y cada profesor en particular deben saber qué hacer, por qué deben hacerlo y cómo hacerlo. Por ello, y en un intento de ayudar al profesorado, presentamos este libro que, además de aportar algunos elementos teóricos indispensables, proporciona al profesorado criterios, pautas y materiales para diseñar y abordar la respuesta educativa a la diversidad educativa de sus alumnos. En sus páginas, los equipos directivos encontrarán modelos abiertos para organizar y diseñar la forma en que el centro atiende a la diversidad de su alumnado; y los profesores, materiales e instrumentos de gran utilidad para favorecer la personalización de los procesos educativos de sus alumnos.",
        "isbn": "9788436276473",
        "numberPages": 279,
        "image": "http://books.google.com/books/content?id=LkUEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "104.09"
      },
      {
        "title": "Programación en Android",
        "authors": [
          "Clodoaldo Robledo Sacristán",
          "David Robledo Fernández"
        ],
        "publisher": "Ministerio de Educación",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este curso está dirigido a aquellas personas interesadas en aprender este lenguaje de programación en el ámbito de Android en lenguaje JAVA para implementar aplicaciones para dispositivos personales tales como teléfonos, tabletas, etcétera. Android es un sistema operativo, inicialmente diseñado para teléfonos móviles como los sistemas operativos iOS (Apple), Symbian (Nokia) y Blackberry OS.En la actualidad, este sistema operativo se instala no sólo en móviles, sino también en múltiples dispositivos, como tabletas, GPS, televisores, discos duros multimedia, mini ordenadores, etcétera. Está basado en Linux, que es un núcleo de sistema operativo libre, gratuito y multiplataforma. El curso contiene ocho unidades: introducción al entorno de Android; diseño de la Interfaz de usuario en Android; más información sobre Android; trabajando con ficheros; intenciones y seguridad; bases de datos y ficheros XML; proveedores de contenidos, servicios y notificaciones; Android práctico.",
        "isbn": "9788436954319",
        "numberPages": 448,
        "image": "http://books.google.com/books/content?id=Zi8bAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "226.72"
      },
      {
        "title": "Elaboración de documentos web mediante lenguajes de marca",
        "authors": [
          "GANZÁBAL GARCÍA, XABIER"
        ],
        "publisher": "Ediciones Paraninfo, S.A.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "El mundo actual no se puede concebir sin Internet. En la educación, el trabajo y la vida personal son pocas las personas que no utilizan diariamente una página o aplicación web. Por tanto, el desarrollo web se ha convertido en un área fundamental de la informática y el diseño. En su corta historia, el desarrollo web ha experimentado muchos cambios. Este libro trata sobre dos lenguajes básicos para crear páginas web en sus últimas versiones, HTML5 y CSS3. El HTML se usa para estructurar el contenido de la página, mientras que con CSS se añade la información de presentación, como colores, tipos de letra y maquetación. En ambos casos hay muchas novedades respecto a las versiones anteriores. En HTML han aparecido nuevas etiquetas, como las semánticas, y otras han desaparecido o su significado ha cambiado. Las hojas de estilo también han aumentado mucho su funcionalidad y ahora se pueden utilizar para adaptar la página a diferentes dispositivos o para crear animaciones, entre otras novedades. Todo ello se desarrolla siguiendo los contenidos que marca el BOE para esta unidad formativa 1841 Elaboración de documentos web mediante lenguajes de marcas, primera de las tres que integran el módulo formativo 0491_3 Programación web en el entorno cliente. El documento legal que define esta unidad se recoge en el RD 1531/2011, modificado por el RD 628/2013, que regula el certificado de profesionalidad Desarrollo de tecnologías con aplicaciones web. En este manual se incluyen, además, actividades de autoevaluación y desarrollo que complementan pedagógicamente los contenidos formativos.",
        "isbn": "9788428398312",
        "numberPages": 164,
        "image": "http://books.google.com/books/content?id=KuGPBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Reference"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "279.26"
      },
      {
        "title": "Edición en epub",
        "authors": [
          "Adell Español, Ferran"
        ],
        "publisher": "Editorial UOC",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "En el debate sobre si el uso de los smartphones y, a través de ellos, de internet y de las redes sociales crea o no adicción, hay opiniones para todos los gustos y, en ocasiones, grandes desencuentros. Pese a que la adicción a internet no está reconocida como tal en los sistemas de clasificación de enfermedades mentales, conceptos como nomofobia, FoMO, síndrome de la llamada fantasma, efecto Google, mente errática, etc., que irán surgiendo asociados a cada nuevo avance tecnológico, no dejan de ser objeto de noticias en los medios de comunicación y de comentarios de sobremesa, puesto que, exista o no la adicción al móvil, todos somos, cuanto menos, dependientes. El autor analiza con sentido del humor algunas de estas psicopaTIClogías(término utilizado para diferenciarlas de los trastornos reales de salud mental), señalando que, en caso de que se manifiesten, debe considerarse que puedan ser secundarias a otros tipos de problemas de base y dando estrategias para evitarlas.",
        "isbn": "9788491160748",
        "numberPages": 296,
        "image": "http://books.google.com/books/content?id=5KW4DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "189.01"
      },
      {
        "title": "Somos agua (Sin censura)",
        "authors": [
          "Laura Madrueño"
        ],
        "publisher": "AGUILAR",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La periodista y presentadora Laura Madrueño nos ofrece una imprescindible lección de amor a la naturaleza y unareflexión sobre la necesidad de protegernos preservando nuestros océanos. El ser humano siempre ha sentido una gran fascinación por los océanos. La conexión es inevitable porque, más allá de ser humanos, somos agua. Sin embargo, hemos explorado más el espacio exterior que los misterios ocultos en las profundidades de nuestro planeta. Este libro nos invita a descubrir la belleza de ese universo onírico y salvaje tan cercano pero tan desconocido para muchos: el mundo submarino. En sus páginas también habla de cómo hemos contaminado más en los últimos cien años que en toda nuestra historia, haciendo que los fondos del mar se degraden muy peligrosamente por tres grandes problemas: el calentamiento climático antropogénico, el consumo masivo de plásticos y la sobrepesca de especies fundamentales para el equilibrio marino como los tiburones. Laura Madrueño, además de periodista y presentadora de El Tiempo en Telecinco, es una defensora de los mares y en este libro relata sus aventuras como submarinista y documentalista marina, nos conciencia sobre la necesidad imperiosa de realizar un cambio consciente para cuidar nuestros fondos y nos da todas las herramientas para empezar a hacerlo, compartiendo su cuaderno de bitácora con magníficas fotografías e ilustraciones para darnos a conocer nuestro gran azul. Reseñas: «Duele y emociona leer este volumen de Laura Madrueño. Lo que hemos hecho con el planeta tierra es estremecedor... Lo que podemos hacer para cambiar las cosas es grandioso. Hagamos que sea posible». Pedro Piqueras «Si el mar se pudiera leer sería este libro. Laura nos sumerge en sus profundidades a través de cuidadas fotografías y dibujos que abruman por su belleza. Nos muestra su grandeza y nos lanza un grito de socorro». Sonsoles Ónega «Laura Madrueño no ha escrito un libro, ha creado un verdadero bautismo de mar en 3 inmersiones: la pasión de una vida, la emergencia de un planeta y la responsabilidad de cada cual. De esos libros que te cambian,amplían y profundizan en la percepción de las cosas. Después de leerlo, no mojarse ya no es opción». Risto Mejide «La periodista y escritora Laura Madrueño, amante del mar y muy concienciada en materias de sostenibilidad y medio ambiente, refleja en esta obra hasta qué punto dependemos de los océanos y cómo el desconocimiento, el impacto humano, laextinción de especies y la contaminación pueden acabar con el equilibrio y salud de nuestra naturaleza». El Mundo «No dudéis en navegar entre sus páginas porque merecerá la pena». Caosliterario",
        "isbn": "9788403522176",
        "numberPages": 543,
        "image": "http://books.google.com/books/content?id=4MoqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Nature"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "289.05"
      },
      {
        "title": "El derecho de compensación equitativa por copia privada, un debate abierto en la jurisprudencia",
        "authors": [
          "Javier Avilés García"
        ],
        "publisher": "Editorial Reus",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La reforma del Texto refundido de la Ley de Propiedad Intelectual formalmente abierta en el año 2011 con la Ley 2/2011, de 4 de marzo, pretendía cerrarse definitivamente tras la aprobación de la Ley 21/2014, de 4 de noviembre. Pero el legislador estatal, soslayando de facto los problemas de fondo de la cuestión, ha optado por explorar la insólita e inédita vía legal de traspasar una obligación de naturaleza netamente privada a cuenta del erario público (Presupuestos Generales del Estado), con lo que parece haber dado un paso un tanto precip-itado y posiblemente en falso. Existe un muy amplio sector profesional y social preocupado y afectado por el futuro inmediato de la compensación equitativa privada en España, particu-larmente tras la entrada en vigor del Real Decreto 1657/2012, de 7 de diciembre, que tanta zozobra e inquietud ha causado, y cuyo recurso ante el Tribunal Supremo ha propiciado el planteamiento de una relevante cuestión prejudicial de éste ante el Tribunal de Justicia de la Unión Europea sobre la cuestión de fondo y, muy recientemente, la interposición de un recurso de inconstitucionalidad ante el Tribunal Constitucional abre nuevas esperanzas para solucionar definitivamente un problema que aún no está resuelto y que ha sido minuciosa-mente analizado e interpretado en la presente obra.",
        "isbn": "9788429018530",
        "numberPages": 191,
        "image": "http://books.google.com/books/content?id=7L1UDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Law"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "262.73"
      },
      {
        "title": "Aplicaciones microinformáticas e internet para consulta y generación de documentación. IFCT0310",
        "authors": [
          "José Antonio Navarro Gallardo"
        ],
        "publisher": "IC Editorial",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Libro especializado que se ajusta al desarrollo de la cualificación profesional y adquisición de certificados de profesionalidad. Manual imprescindible para la formación y la capacitación, que se basa en los principios de la cualificación y dinamización del conocimiento, como premisas para la mejora de la empleabilidad y eficacia para el desempeño del trabajo.",
        "isbn": "9788416433339",
        "numberPages": 210,
        "image": "http://books.google.com/books/content?id=8U4pEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "88.18"
      },
      {
        "title": "Innovación docente: investigaciones y propuestas",
        "authors": [
          "Raquel Barragán Sánchez",
          "Anna Camps Mundó",
          "Roberto Cuadros-Muñoz",
          "Giulia De Sarlo",
          "M.Isabel de Vicente-Yagüe Jara",
          "Antonio Diez Mediavilla",
          "Elena del Pilar Jiménez Pérez",
          "Santiago Fabregat Barrios",
          "Xavier Fontich Vicens",
          "Mar Galera Núñez",
          "Blanca Garrido Martín",
          "Elena Guichot Muñoz",
          "Natalia Martínez León",
          "Carmen María Sánchez Morillas",
          "Moisés Selfa Sastre"
        ],
        "publisher": "Editorial Graó",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Resum La innovació orientada al canvi dels models didàctics i a la transformació de les funcions que el professorat exerceix a les aules constitueix en l'actualitat una necessitat comuna en els diferents nivells educatius. Aquesta exigència de canvi i de millora, pròpia d'un sistema preocupat per la qualitat de la docència i pel rendiment dels estudiants, explica el pes creixent que les diferents instàncies educatives concedeixen als projectes d'innovació docent (PIN), tant en l'àmbit de l'educació superior com en els nivells educatius no universitaris. Aquest llibre ofereix una resposta pràctica a tots aquells docents que pretenen afrontar l'elaboració i la implementació d'un projecte d'innovació, des de les fases inicials de planificació i estructuració, passant per la redacció d’aquest i per l'execució i avaluació final del projecte. Aquest caràcter de guia pràctica es conjuga en el llibre amb propostes d'investigació centrades en temes d'actualitat --avaluació a l'aula, innovació en l'ensenyament de la llengua, presència dels PIN en els processos d'acreditació del professorat universitari-- i amb l'estudi de diferents aspectes clau en els processos d'innovació educativa, tals com la funció de les tecnologies d'informació i la comunicació (TIC), les línies i models d'actuació més nous, l'anàlisi de les funcions docents o les coordenades pròpies de la innovació en educació infantil, primària i secundària des d'una perspectiva de centre. Índex- Temes centrals Innovación docente: análisis de los procesos de evaluación en el aula universitaria · Procesos de innovación en educación infantil, primaria y secundaria: hacia un cambio en las prácticas de aula · TIC e innovación docente · Planificar un proyecto de innovación docente · Partes de un proyecto de innovación docente · Escribir un proyecto de innovación docente: etapas previas y redacción de la memoria · Llevar a cabo un proyecto de innovación docente · Análisis de los modelos y líneas de actuación en los proyectos de innovación docente · Innovación en la enseñanza de la lengua · Análisis de la investigación y de las funciones docentes · Acreditación vertical: análisis de la presencia de proyectos de innovación docente",
        "isbn": "9788499809984",
        "numberPages": 168,
        "image": "http://books.google.com/books/content?id=_Mu-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "45.76"
      },
      {
        "title": "Lenguajes de Marcas y sistemas de gestión de información (GRADO SUP.)",
        "authors": [
          "Francisco Javier Sánchez Zurdo"
        ],
        "publisher": "Ra-Ma Editorial",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La presente obra está dirigida a los estudiantes de los Ciclos Formativos de Grado Superior de Administración de sistemas informáticos en red y Desarrollo de aplicaciones multiplataforma, en concreto para el Módulo Profesional Lenguajes de Marcas y Sistemas de Gestión de la Información. Los contenidos incluidos en este libro abarcan: el reconocimiento de las características de los lenguajes de marcas, los lenguajes para la visualización de la información (incluyendo HTML, XHTML, CSS), los lenguajes para el almacenamiento y transmisión de información (XML), la definición de esquemas y vocabularios en XML, la conversión y adaptación de documentos XML, el almacenamiento de información en XML, la aplicación de los lenguajes de marcas a la sindicación de contenidos (incluyendo RSS) y los sistemas de gestión empresarial (ERP). Así mismo, se incluye un capítulo donde se indican distintas herramientas que se pueden utilizar para los contenidos indicados anteriormente. Los capítulos incluyen actividades, ejemplos y casos prácticos con el objetivo de facilitar la asimilación de los conocimientos tratados. Así mismo, se incorporan test de conocimientos y ejercicios propuestos con la finalidad de comprobar que los objetivos de cada capítulo se han asimilado correctamente. En la página web de Ra-Ma (www.ra-ma.es) se encuentra disponible el material de apoyo y complementario.",
        "isbn": "9788499643519",
        "numberPages": 237,
        "image": "http://books.google.com/books/content?id=26W6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "HTML (Document markup language)"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "186.35"
      },
      {
        "title": "Mantenimiento de portales de la información",
        "authors": [
          "GARCÍA ROMAN, AGUSTIN JOSE",
          "PEÑA RODRIGUEZ, JAVIER",
          "QUERO CATALINAS, ENRIQUE"
        ],
        "publisher": "Ediciones Paraninfo, S.A.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Esta obra tiene un doble objetivo: proporcionar los conocimientos básicos necesarios para la realización del análisis, desarrollo, implantación y mantenimiento de contenidos y servicios en Internet y, por otro lado, conocer los aspectos jurídicos a tener en cuenta en la creación de portales de información y su mantenimiento. En la denominada sociedad de la información, se ha de tener un conocimiento elemental de la normativa que pudiera ser aplicable para no incurrir en la conculcación de los derechos de terceros.",
        "isbn": "9788497325042",
        "numberPages": 425,
        "image": "http://books.google.com/books/content?id=tetmS1ORsHoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Reference"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "126.13"
      },
      {
        "title": "Las claves de la Cuarta Revolución Industrial",
        "authors": [
          "Fernando Blanco Silva",
          "José Manuel Castro Pérez",
          "Rubén A. Gayoso Taboada",
          "Wilfredo Santana Alonso"
        ],
        "publisher": "Libros de Cabecera",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "¿Qué es la Cuarta Revolución Industrial? ¿Cómo nos va a afectar a las personas y a la sociedad, en general? ¿Cómo pueden adaptarse las empresas? Las claves de la Cuarta Revolución Industrial es un texto divulgativo escrito por cuatro expertos en disciplinas técnicas y en la repercusión de los avances tecnológicos en la sociedad actual. El libro describe las tecnologías que están transformando el mundo, su impacto en los negocios, en los sectores económicos, en el empleo, en la educación y en las personas. El libro va dirigido a los empresarios y directivos inquietos por los cambios que están aconteciendo y por cómo trasladarlos a los negocios; a los empleados, para cuidar su empleabilidad; a los educadores, que quieren saber cómo preparar a las nuevas generaciones y, en general, a cualquier persona que se pregunte cómo va a encajar en la sociedad de la Cuarta Revolución Industrial.",
        "isbn": "9788494907999",
        "numberPages": 210,
        "image": "http://books.google.com/books/content?id=svy0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Business & Economics"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "126.70"
      },
      {
        "title": "Datos abiertos enlazados de archivos, bibliotecas y museos en la web",
        "authors": [
          "Carlos Henrique Marcondes"
        ],
        "publisher": "Editorial UOC",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Archivos, bibliotecas y museos han sido los guardianes de la memoria y la cultura desde el surgimiento de las instituciones. Los catálogos han sido los instrumentos a través delos cuales dichos organismos han divulgado sus acervos. Con la aparición de la Web los catálogos experimentaron un gran avance, pasando a estar accesibles en línea junto con sus colecciones digitalizadas. Sin embargo, la tecnología actual de los sistemas de catálogos en la Web se encuentra limitada por la restricción del acceso y enlazado de los contenidos al contexto exclusivo de su propio sistema,transformándolo en un «silo» que aprisiona la información y limita las posibilidades de integración de diferentes acervos digitales entre sí y con los demás contenidos existentes en la Web.Las tecnologías de datos abiertos enlazados son parte de la Web Semántica y una nueva forma de representar contenidos para que los programas además de publicarlos sean capaces de comprender sus significados y procesarlos de forma más inteligente.El libro analiza en detalle los datos abiertos enlazados, tanto a nivel técnico como de su aplicación en archivos, bibliotecas y museos, presentando y discutiendo también las atribuciones de los profesionales de la información en la curaduría de acervos.",
        "isbn": "9788491803096",
        "numberPages": 142,
        "image": "http://books.google.com/books/content?id=XlgtEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "98.96"
      },
      {
        "title": "Actas del VI Congreso Internacional de Historia de la Lengua Española",
        "authors": [
          "Manuel Casado Velarde",
          "José Jesús de Bustos Tovar",
          "José Luis Girón Alconchel"
        ],
        "publisher": "Universidad Complutense de Madrid",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Estos tres volúmenes recogen los frutos del VI Congreso Internacional de Historia de la Lengua Española, celebrado en Madrid, durante septiembre y octubre de 2003. En total, nueve ponencias plenarias, artículos de tres mesas redondas y más de ciento cincuenta comunicaciones repartidas a lo largo de 3.128 páginas.",
        "isbn": "UVA:X030035417",
        "numberPages": 1326,
        "image": "http://books.google.com/books/content?id=T2xXAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "Spanish language"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "204.72"
      },
      {
        "title": "Lenguajes de programación y procesadores",
        "authors": [
          "Francisco Gortázar Bellas",
          "Raquel Martínez Unanue",
          "Víctor Diego Fresno Fernández"
        ],
        "publisher": "Editorial Centro de Estudios Ramon Areces SA",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este libro ofrece una respuesta a un nuevo enfoque de unificación de las asignaturas de Lenguajes de Programación y Procesadores de Lenguajes, que han adoptado algunos grados relacionados con las Tecnologías de la Información, combinando contenidos de teoría de los lenguajes de programación, procesadores de lenguajes, paradigmas de los lenguajes de programación, aspectos pragmáticos de los lenguajes de programación y lenguajes de marcado.",
        "isbn": "9788499612492",
        "numberPages": 361,
        "image": "http://books.google.com/books/content?id=eHL-DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "292.61"
      },
      {
        "title": "Fábricas de Software: Experiencias, Tecnologías y Organización. 2ª Ed.",
        "authors": [
          "Mario G. Piattini Velthuis"
        ],
        "publisher": "Ra-Ma Editorial",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La fabricación de software es uno de los sectores de mayor crecimiento en los últimos años y representa, cada vez más, una de las principales actividades económicas tanto en los países desarrollados como para los países en vías de desarrollo. Y es que, en efecto, el software se halla presente en la actualidad en la mayor parte de los sistemas que resultan vitales para el funcionamiento y progreso de las sociedades modernas. El concepto de fábrica de software cumple ya más de cuarenta años, desde que en 1968 Bemer lo mencionara por primera vez y afirmara que: “parece que tenemos pocos entornos específicos (instalaciones de fábrica) para la producción económica de programas…”. Un año después, se crearía la primera fábrica de software: Hitachi Software Works. Desde entonces, el término fábrica de software denota llevar a cabo el desarrollo y mantenimiento de software de forma comparable a la producción de otros productos industriales; eso si, salvando las peculiaridades del propio software. A pesar de ello, industrializar la fabricación de software ha demostrado que sirve para reducir los costes y el ciclo de vida de los productos, mejorando la calidad del software. En la última década se han publicado diversos estudios y estándares en los que se exponen los principios que se deben seguir para la fabricación de software, como modelos de mejora (CMMI, SPICE), desarrollo dirigido por modelos (MDA), líneas de producto (SPL), servicios Web, el desarrollo global de software, etc.; que complementan otras cuestiones más conocidas pero por ello no menos importantes en el desarrollo de software como: la gestión de requisitos, las pruebas, la gestión de la configuración, etc. Todo ello además debe venir complementado por aspectos organizativos y de gestión que resultan clave para el éxito de la fabricación de software. La presente obra reúne las contribuciones de los mayores especialistas en aspectos relacionados con la fabricación de software, por lo que se ofrece una visión amplia sobre diferentes factores que se deben tener en consideración para la puesta en marcha y la gestión de una fábrica de software. Además, incluye la experiencia práctica de 13 fábricas de software, grandes y pequeñas, de España, Argentina, México y Venezuela. Frente a la primera edición, en esta segunda se han revisado y modificado todos los capítulos de acuerdo a los cambios que se han producido a lo largo de los tres últimos años en la “evolutiva” Industria del Software. Además, se ha contado con la colaboración de nuevas empresas en el apartado de experiencias y la aportación del Instituto Nacional de Tecnologías de la Información (INTECO) con su visión sobre las factorías de software en España. El libro va dirigido a directores generales (CEO, Chief Executive Officers) de organizaciones, directores de informática (CIO, Chief Information Officers) y directores de desarrollo de sistemas de información de las mismas, personal informático en general (jefes de proyecto, analistas, consultores, etc.) que esté trabajando en el área de desarrollo y mantenimiento de software, así como responsables de calidad de sistemas de información y mejora de procesos software.",
        "isbn": "9788494009051",
        "numberPages": 819,
        "image": "http://books.google.com/books/content?id=baW6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computer software"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "129.26"
      },
      {
        "title": "Administración de sistemas operativos en red",
        "authors": [
          "Miquel Colobran Huguet",
          "Josep Maria Arqués Soldevila",
          "Eduard Marco Galindo"
        ],
        "publisher": "Editorial UOC",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Esta obra quiere proporcionar las bases teóricas sobre cómo diseñar y mantener un sistema informático, atendiendo conceptos tecnológicos y de seguridad, aspectos humanos y de usuarios del sistema y definiciones sociales y la vertiente legal.",
        "isbn": "9788497887601",
        "numberPages": 309,
        "image": "http://books.google.com/books/content?id=w4utLelkYgkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "192.96"
      },
      {
        "title": "Integración de la funcionalidad en productos multimedia. ARGN0110",
        "authors": [
          "Juan Luis Perles García"
        ],
        "publisher": "IC Editorial",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Libro especializado que se ajusta al desarrollo de la cualificación profesional y adquisición de certificados de profesionalidad. Manual imprescindible para la formación y la capacitación, que se basa en los principios de la cualificación y dinamización del conocimiento, como premisas para la mejora de la empleabilidad y eficacia para el desempeño del trabajo.",
        "isbn": "9788417224523",
        "numberPages": 408,
        "image": "http://books.google.com/books/content?id=7U8pEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "12.59"
      },
      {
        "title": "Prensa e internet, ¿dónde está el negocio?",
        "authors": [
          "Pilar Gómez-Borrero Herreros"
        ],
        "publisher": "EOI Escuela de Organización Industrial",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "PRÓLOGO . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 5 | INTRODUCCIÓN . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 7 | Primera parte ¿QUÉ HE HECHO YO PARA MERECER ESTO? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 11 | Capítulo 1 WEB 0.1 SÉ LO QUE HICISTEIS... DE 1995 A 2000 El nacimiento de las ediciones digitales de los principales periódicos españoles . . | 13 | Capítulo 2 EL PERIODISMO TAMBIÉN ES DIGITAL El estado del periodismo. Estrategias editoriales paralelas: papel y online. El caso de los clasificados . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 31 | Capítulo 3 LA BATALLA POR LOS DERECHOS DE PROPIEDAD INTELECTUAL Los cliperos y Google News, en el punto de mira . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 55 | Capítulo 4 INGRESOS POR CONTENIDOS DE UN DIARIO DIGITAL Iniciativas mundiales sobre cobro online de información . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 67 | Capítulo 5 LA GENERACIÓN DEL CAMBIO Profesionales y gestores protagonistas de la transformación, transición y transmisión del conocimiento a la digitalización . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 91 | Capítulo 6 LA MEDICIÓN DE AUDIENCIAS La historia inacabada sobre la búsqueda de una moneda de cambio consensuada en el mercado de Internet . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 119 | Capítulo 7 ANALÍTICA WEB Nuevas herramientas y perfiles profesionales para el análisis del comportamiento de los usuarios online . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 159 |Capítulo 8 RECUPERAR LA PRESCRIPCIÓN 2.0 Sobre la reputación online y los community managers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 183 | Capítulo 9 PUBLICIDAD ONLINE Inversión publicitaria en Internet: ¿cómo están adaptándose al cambio agencias de medios y anunciantes? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 213 | Segunda parte LA TRANSFORMACIÓN NECESARIA: TENDENCIAS, ESTRATEGIAS Y NUEVOS MODELOS DE NEGOCIO . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 247 | Capítulo 10 LA NUEVA COMPETENCIA ES ILIMITADA Diarios únicamente online, agregadores, blogs, agencias... cómo competir en este nuevo escenario . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 249 | Capítulo 11 INTERNET ES MÓVIL Evolución de las prestaciones de los terminales móviles y los nuevos dispositivos inalámbricos: tablets, iPad, etc. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . |303 | Capítulo 12 GOOGLE Y LOS MEDIOS DE COMUNICACIÓN: HISTORIAS CONECTADAS Nuevas experiencias y propuestas de negocio para los gestores de contenidos online . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 341 | CONCLUSIONES: EL NEGOCIO ESTÁ EN... . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 359 | ANEXOS 1. Cronología de Internet. Principales hitos entre 1991-2010 . . . . . . . . . . . . . . . . . . . . . . . . . | 367 | 2. Citas con la Red... y el periodismo digital . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 381 | 3. Anécdotas para no creer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 399 | 4. Defensa de los derechos de la propiedad intelectual: el caso Gedeprensa . . . . . |403| 5. Declaración de Madrid. Texto íntegro sobre las peticiones de editores y diferentes asociaciones del sector a la Unión Europea para mantener la competencia en el entorno digital, proteger la propiedad intelectual, garantizar el periodismo de calidad y la libertad de información . . . . . . . . . . . . . . . . | 411 | 6. El debate sobre la neutralidad en la Red . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 417 | BIBLIOGRAFÍA Y ENTREVISTAS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 423 | AGRADECIMIENTOS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . |429 |",
        "isbn": "9788461449453",
        "numberPages": 436,
        "image": "http://books.google.com/books/content?id=uuVcDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Business & Economics"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "203.60"
      },
      {
        "title": "El nuevo PHP. Conceptos avanzados.",
        "authors": [
          "Vicente Javier Eslava Muñoz"
        ],
        "publisher": "Vicente Javier Eslava Muñoz",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Más de 250 millones de sitios web se han realizado en PHP, entre ellos algunos tan famosos como: Facebook.com, Yahoo INC, Wikipedia.org, Friendster.com, Digg.com, Sourceforge.org, Flickr.com, Meneame.net, etc. Y no únicamente lo utilizan las grandes webs sino que también es utilizado por CMS cómo WordPress y Drupal. Mediante PHP se puede incluso crear aplicaciones móviles para iOS, Android, Windows Phone y BlackBerry. Aprende y practica los conceptos más avanzados de uno de los lenguajes de programación más importantes: acceso a bases de datos, phpMyAdmin, gestión de ficheros, creación de imágenes y gráficos, ficheros PDF, XML, servicios web, gestión de emails, Modelo Vista-Controlador, frameworks actuales, seguridad, gestión de errores, optimización, librerías externas, etc. La presente obra está dirigida a estudiantes de todas las edades y a todas aquellas personas que tengan una inquietud por dominar las nuevas tecnologías. ¡PHP es el lenguaje del presente y del futuro!",
        "isbn": "9788468644349",
        "numberPages": 208,
        "image": "http://books.google.com/books/content?id=NSj3AQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "298.99"
      },
      {
        "title": "Desarrollo de aplicaciones IoT en la nube para Arduino y ESP8266",
        "authors": [
          "Tomás Domínguez Mínguez"
        ],
        "publisher": "Marcombo",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Internet de las cosas (IoT) ha llegado para quedarse. Su presencia se hace notar en campos como la medicina, la industria, el transporte, la energia, la agricultura, las ciudades inteligentes y, especialmente, en los hogares, ambito en el que se centra este libro. Si quiere conocer todo lo necesario para crear sus proyectos de IoT con dispositivos Arduino y ESP8266, este es el libro indicado. Sus explicaciones parten de un nivel basico en Arduino y aumentan su dificultad de forma gradual. Ademas, los conceptos teoricos para conocer los protocolos (HTTP y MQTT) y las arquitecturas utilizadas (cliente]servidor, publicacionsuscripcion y REST) se acompanan con multiples ejercicios practicos en los que se comenta, paso a paso, el codigo de cada programa y la configuracion de los servicios en la nube empleados. Con este libro, desarrollara multitud de aplicaciones IoT y empleara servicios en la nube como Ubidots, Beebotte, Pushbullet o IFTTT, con los que podra interactuar desde cualquier parte del mundo a traves de un navegador web, un telefono movil o los asistentes de voz de Google o Alexa: . Enchufe domotico que permite controlar el encendido o apagado de dispositivos electricos. . Clientes o servidores web con los que leer o escribir datos en los pines de Arduino y ESP8266 desde un navegador. . Aplicacion de visualizacion de datos de sensores o manejo de aparatos electricos desde un telefono movil. . Sistema de alarma por movimiento o apertura de puertas y ventanas, con envio de notificaciones al movil. . Sistema de control de riego con advertencias de humedad por correo electronico. . Boton de emergencia para personas mayores. . Sistema de control de presencia de personas con problemas de orientacion, capaz de enviar alertas al movil de forma automatica cuando salen de casa. . Aplicacion de Google Assitant para el encendido o apagado de luces. . Aplicacion de Amazon Alexa para la apertura de la puerta del garaje. . Control de un dispositivo domotico a traves de un icono de escritorio en el movil. Ademas, en la parte inferior de la primera pagina del libro encontrara el codigo de acceso que le permitira descargar de forma gratuita los contenidos adicionales en www.marcombo.info. Tanto si quiere iniciarse en el mundo del IoT como si es un profesional, este libro no le dejara indiferente. Consiga su ejemplar, haga realidad sus proyectos y vaya mas alla de lo que siempre habia imaginado. Tomas Dominguez es ingeniero de telecomunicacion y doctorado en inteligencia artificial. Su labor profesional se ha desarrollado en una multinacional de telecomunicaciones, donde ha ocupado diversos cargos relacionados con la tecnologia. Asimismo, ha ejercido como profesor universitario de ingenieria informatica en la Universidad Alfonso X el Sabio de Madrid.",
        "isbn": "9788426729750",
        "numberPages": 338,
        "image": "http://books.google.com/books/content?id=rkxOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Technology & Engineering"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "14.56"
      },
      {
        "title": "Búsqueda de información en investigación clínica II",
        "authors": [
          "Raúl Aguilera (editor)"
        ],
        "publisher": "Ediciones UCSC",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este libro busca poner a disposición de quienes se están iniciando en los caminos de la investigación clínica - que muchas veces no se encuentran exentos de dificultades - algunos elementos claves para lograr abordarlo con éxito, que incluye la presentación de distintos diseños de investigación en Epidemiología clínica, la exposición breve de las herramientas de acceso abierto para la búsqueda de información y evidencia científica, así como la introducción a las iniciativas y declaraciones utilizadas para comunicar resultados obtenidos en los distintos estudios, como ensayos clínicos aleatorizados o estudios observacionales, entre otros.",
        "isbn": "9789566068266",
        "numberPages": 136,
        "image": "http://books.google.com/books/content?id=SjdZEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Medical"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "144.36"
      },
      {
        "title": "La suficiencia y la sostenibilidad de las pensiones desde una perspectiva internacional: especial atención a las personas mayores",
        "authors": [
          "Miguel Gutiérrez Bengoechea",
          "Francisco Vila Tierno"
        ],
        "publisher": "ARANZADI / CIVITAS",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Esta monografía responde a la actividad investigadora realizada en el seno de los siguientes proyectos y grupos de investigación: \"Retos, reformas y financiación del sistema de pensiones: ¿sostenibilidad versus suficiencia?\" (RTI2018-094696-B-I00); \"Los mayores en el contexto del empleo y la protección social: un reto para el crecimiento y desarrollo económico\" (P18-RT-2585); \"Las nuevas tecnologías y el impacto en el ámbito laboral y de la seguridad social: el impacto socio-económico de la economía digital\" (UMA18 FEDERJA 028); \"Políticas de Empleo, Igualdad e Inclusión Social\" (PAIDI SEJ-347); y \"Economía y fiscalidad frente al envejecimiento poblacional\" (PAIDI SEJ-587). Como parte de la misma, incluye diferentes trabajos elaborados por 28 expertos, de ámbito multidisciplinar y vinculados a distintas universidades españolas y extranjeras, que han pretendido, a través de estas páginas, plantear un profundo análisis, en perspectiva comparada, de los mecanismos de protección social para mayores. Si bien, ello se contextualiza en un marco en el que la sostenibilidad de los Sistemas Públicos exige un proceso de reformas que se ha globalizado en cuanto a su extensión por países. En cualquier caso, las sociedades, economías, tradiciones, culturas o enfoque y las apuestas por diferentes fórmulas o construcciones, no son comunes. Y ello a pesar de que responden a la finalidad común de preservar el mantenimiento de los sistemas de protección social. Finalidad que obliga a reflexionar sobre las diferentes experiencias y a extraer consecuencias de la comparativa realizada. Se plantea, por tanto -y de este modo-, esta obra, como una herramienta para contribuir al debate del Futuro de las Pensiones y aportar nuevas utilidades -extraídas del análisis comparado- que confluyan en la construcción definitiva de un modelo sostenible. Con la anterior finalidad, esta obra colectiva se presenta con una estructura conformada por tres títulos que abordan, respectivamente, una primera",
        "isbn": "9788413913537",
        "numberPages": 656,
        "image": "http://books.google.com/books/content?id=RipdEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Law"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "52.67"
      },
      {
        "title": "Discriminación algorítmica en el ámbito laboral: perspectiva de género e intervención",
        "authors": [
          "Pilar Rivas Vallejo"
        ],
        "publisher": "ARANZADI / CIVITAS",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Análisis técnico y laboralista del impacto discriminatorio del uso de algoritmos en entornos laborales, y en particular por razón de sexo. Primer estudio transversal en materia de discriminación algorítmica en España, que incluye propuestas novedosas en materia de transparencia, y el análisis de herramientas de gestión que se están utilizando actualmente para calcular rendimientos y salarios, así como el abordaje jurídico de la tutela frente a situaciones de discriminación provocadas por el uso de algoritmos. Se plantea el análisis de la política de empleo y los mecanismos de acceso al empleo desde esta perspectiva, todo ello desde la clave central: la perspectiva de género Se proponen distintos mecanismos para abordar y paliar sus efectos, en el acceso al empleo, en el ámbito salarial (donde se analizan los sistemas automáticos de determinación de salarios y el uso de criptomonedas para garantizar la transparencia salarial), en las condiciones de trabajo en general, o en la salud laboral incluso (v.g. acoso sexista), así como su uso para desencriptar o detectar situaciones de interpretación sesgada de la ley en clave sexista. Asimismo, se aborda cómo intervenir en la formación técnica en computación para atajar los sesgos de diseño y en la minería de datos, a fin de introducir herramientas de inclusividad en el tratamiento de datos que alimentan los algoritmos. La visión interdisciplinar que se aporta pretende canalizarse hacia el ámbito laboral para introducir respuestas preventivas y reactivas o de tutela. Para ello la obra cuenta con iuslaboralistas, pero también con juristas de otras disciplinas, que en todos los casos han profundizado en distintos aspectos de la digitalización del trabajo o en la IA, robótica y tecnología aplicada al trabajo, así como con expertos desde los campos de la computación, referentes en aprendizaje automático y discriminación algorítmica.",
        "isbn": "9788413916347",
        "numberPages": 776,
        "image": "http://books.google.com/books/content?id=3CV9EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Law"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "94.94"
      },
      {
        "title": "Las organizaciones de consumidores y el derecho a una alimentación adecuada",
        "authors": [
          "Organización de las Naciones Unidas para la Agricultura y la Alimentación"
        ],
        "publisher": "Food & Agriculture Org.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Los consumidores son una fuerza poderosa para cambiar el mundo y hacer de éste un lugar que se desarrolle de manera sostenible, no deje a nadie atrás y respete los derechos humanos de toda la población. Esta publicación presenta los vínculos entre la labor de las organizaciones de consumidores y la realización del derecho a una alimentación adecuada a nivel local, nacional, regional y mundial. Destaca la importancia de estas organizaciones para la seguridad alimentaria, las dietas saludables y las transformaciones de los sistemas alimentarios. La publicación puede ayudar a las organizaciones de consumidores a intensificar sus esfuerzos en materia de concienciación y desarrollo de la capacidad y lograr así un impacto aún mayor. También pretende reforzar su posición como asociados vitales en la formulación de políticas y la adopción de decisiones. Esta publicación se ha concebido como un complemento de Organizaciones de consumidores en acción, que muestra las experiencias de organizaciones de consumidores en temas relacionados con la alimentación, facilita la creación de redes y asociaciones, y el intercambio de conocimientos, habilidades, estrategias y buenas prácticas.",
        "isbn": "9789251353875",
        "numberPages": 80,
        "image": "http://books.google.com/books/content?id=pdZWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Political Science"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "114.29"
      },
      {
        "title": "El derecho a entender",
        "authors": [
          "Mario Tascón",
          "Estrella Montolío"
        ],
        "publisher": "LOS LIBROS DE LA CATARATA",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "¿Ha recibido algún documento o notificación de la Administración o de alguna compañía que no haya entendido? ¿Ha necesitado explicaciones telefónicas para comprender el mensaje o sus implicaciones? A la ansiedad que nos genera vernos obligados a solicitar aclaraciones, se añade el desánimo que experimentamos ante pantallas ingratas, plagadas de botones y textos sinuosos cuya aceptación terminamos pulsando. Hace ya más de cincuenta años que los movimientos civiles norteamericanos empezaron a reclamar el derecho de los ciudadanos a entender a su Administración, a recibir una comunicación que puedan comprender sin dificultad. Este libro analiza el concepto del derecho a entender, su desarrollo histórico y la protección que ya se le otorga en numerosos países; las implicaciones que ese derecho exige en la era de Internet y la normativa que lo ampara, particularmente en la Unión Europea. Además, y este es quizá el mayor valor de esta obra, aporta la metodología con la cual lograr una comunicación clara que sitúe a las personas en el centro.",
        "isbn": "9788413520018",
        "numberPages": 169,
        "image": "http://books.google.com/books/content?id=98irEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "71.13"
      },
      {
        "title": "Reingeniería y seguridad en el ciberespacio",
        "authors": [
          "Ediciones Diaz de Santos S.A.",
          "J. A. Calle Guglieri"
        ],
        "publisher": "Ediciones Díaz de Santos",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Reingeniería, seguridad y ciberespacio son temas de máxima actualidad que, en la presente obra, son abordados desde una única perspectiva integradora. Esto representa una visión más realista y eficaz que la usual, de los problemas a los que se enfrenta hoy día la tecnología de la información y la comunicación. Por otra parte, la idea que también ha presidido la redacción del texto ha sido ofrecer, en el momento actual, lo que ha de tenerse en cuenta para abordar los sistemas del futuro inmediato y los previsibles a medio plazo. Por ello se ha procurado sintetizar lo más relevante de conceptos tales como almacén de datos (data warehouse), minería de datos (data mining), redes virtuales corporativas basadas en Internet (intranets), redes con agentes inteligentes (smart networks), y otros muchos, todos de rabiosa actualidad dentro de las nuevas problemáticas y oportunidades que ofrece el fenómeno Internet. Se ha prestado una especial atención a escoger la bibliografía más actual para los temas tratados en el libro ,y se ha incluido, en forma de anexos, una selección de los criterios, estándares y normas que se consideran básicos para la tecnología de la información y comunicación. INDICE: Reingeniería y seguridad en el ciberespacio. Reingeniería. Reingeniería y calidad. Seguridad. Ciberespacio. Seguridad en redes públicas. Reingeniería y seguridad en las futuras redes. Criterios de evaluación de la seguridad. Estándares de telecomunicaciones. Entornos de sistemas abiertos.",
        "isbn": "8479782730",
        "numberPages": 372,
        "image": "http://books.google.com/books/content?id=qB3P2GuD3EsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "232.91"
      },
      {
        "title": "A Companion to Ancient Near Eastern Languages",
        "authors": [
          "Rebecca Hasselbach-Andee"
        ],
        "publisher": "John Wiley & Sons",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Covers the major languages, language families, and writing systems attested in the Ancient Near East Filled with enlightening chapters by noted experts in the field, this book introduces Ancient Near Eastern (ANE) languages and language families used during the time period of roughly 3200 BCE to the second century CE in the areas of Egypt, the Levant, eastern Anatolia, Mesopotamia, and Iran. In addition to providing grammatical sketches of the respective languages, the book focuses on socio-linguistic questions such as language contact, diglossia, the development of literary standard languages, and the development of diplomatic languages or “linguae francae.” It also addresses the interaction of Ancient Near Eastern languages with each other and their roles within the political and cultural systems of ANE societies. Presented in five parts, The Companion to Ancient Near Eastern Languages provides readers with in-depth chapter coverage of the writing systems of ANE, starting with their decipherment. It looks at the emergence of cuneiform writing; the development of Egyptian writing in the fourth and early third millennium BCI; and the emergence of alphabetic scripts. The book also covers many of the individual languages themselves, including Sumerian, Egyptian, Akkadian, Hittite, Pre- and Post-Exilic Hebrew, Phoenician, Ancient South Arabian, and more. Provides an overview of all major language families and writing systems used in the Ancient Near East during the time period from the beginning of writing (approximately 3200 BCE) to the second century CE (end of cuneiform writing) Addresses how the individual languages interacted with each other and how they functioned in the societies that used them Written by leading experts on the languages and topics The Companion to Ancient Near Eastern Languages is an ideal book for undergraduate students and scholars interested in Ancient Near Eastern cultures and languages or certain aspects of these languages.",
        "isbn": "9781119193890",
        "numberPages": 560,
        "image": "http://books.google.com/books/content?id=Hd7SDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "History"
        ],
        "language": "en",
        "countryPublication": "AR",
        "stock": 0,
        "price": "9.07"
      },
      {
        "title": "Aproximación a la ingeniería del software",
        "authors": [
          "Sebastián Rubén Gómez Palomo",
          "Eduardo Moraleda Gil"
        ],
        "publisher": "Editorial Centro de Estudios Ramon Areces SA",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Durante los seis años de la primera edición los autores han descubierto que uno de los objetivos de esta asignatura que más estimula a los alumnos es hacer ingeniería. Por lo que han añadido más ejemplos cortos y sencillos que mostrarán de manera directa los conceptos que se presentan en el libro y que de alguna manera han aparecido en los ejercicios planeados en pasadas pruebas. En este libro se presenta a los alumnos de grado en ingeniería informática y en tecnologías de la información cuáles son las actividades que realiza la ingeniería en estos campos y que actividades de estos campos son de ingeniería. Se presentan los conceptos de ingeniería de software, fases del ciclo de vida del software, diferentes tipos de ciclos de vida, la captura y análisis de requisitos, el diseño, la codificación y las pruebas del software.",
        "isbn": "9788499613291",
        "numberPages": 331,
        "image": "http://books.google.com/books/content?id=8wnUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "40.62"
      },
      {
        "title": "Comunicación femenina inteligente",
        "authors": [
          "Sonia González Boysen"
        ],
        "publisher": "Grupo Nelson",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Un libro que te permitirá entender por fin, la forma en que se comunican las mujeres. A través de una exhaustiva investigación sobre el poder de la Comunicación Femenina Inteligente (CFI), la autora Sonia Gonzalez-Boysen, analiza los diez lenguajes en que se comunican las mujeres, cinco lenguajes brillantes: empatía - intuición - inspiración - multitareas - conexión emocional, y cinco lenguajes opacos: falta de concreción - complicada y compleja - tendencia a controlar - dependencia emocional - actitudes cambiantes y cíclicas. Este no es un libro escrito sólo para mujeres, sino acerca de ellas. A través de estas páginas cambiarás el paradigma sobre la comunicación femenina. Además, podrás disfrutar la amena narración de casos de éxito de mujeres que han marcado la historia con su comunicación, incluyendo el vibrante e impactante testimonio de la autora. Como valor agregado, encontrarás también las claves para el empoderamiento de la Comunicación Femenina Inteligente. Un libro necesario para: analizar la comunicación de las mujeres desde su propia perspectiva. Ser empáticos y ponerse en sus zapatos. Descubrir las fortalezas, impulsarlas y promoverlas de manera más intencional. Comprender las debilidades, y verlas como oportunidades para mejorar. Descifrar el código de la comunicación femenina. Empoderar la comunicación femenina para llevarla a un nuevo nivel de impacto. Tratar de entenderlas, sin fracasar en el intento.",
        "isbn": "9780718091941",
        "numberPages": 257,
        "image": "http://books.google.com/books/content?id=y8xDDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Self-Help"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "242.94"
      },
      {
        "title": "Curso de Programación con iOS: Apps iPhone",
        "authors": [
          "Ángel Arias",
          "Enrique Flores Gonzalo"
        ],
        "publisher": "IT Campus Academy",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Con la evolución de la tecnología cada vez más personas tienen acceso a un ordenador, ya sea en su casa, en la escuela, en el trabajo o en cualquier otro lugar. Los usuarios más curiosos pueden plantearse preguntas como: \"¿cómo consiguen hacer esto? \", \"¿como podría hacerlo o aprenderlo yo?\", \"¿cómo es un ordenador internamente?\" El objetivo de este libro es servir como base a cualquiera que desee introducirse, o simplemente unirse, al maravilloso mundo de la programación, incluso si usted tiene pocos o ningún conocimiento sobre la materia. Este libro también puede servir como una forma de enriquecimiento cultural sobre temas ya olvidados, ya que aborda aspectos de la arquitectura de los procesadores y ordenadores, los cálculos, la lógica y las matemáticas, hasta una breve historia de los lenguajes de programación y programación básica de algoritmos. Este libro va a mostrar con realizar aplicaciones para iPhone usando el IDE XCode, y los lenguajes de programación Objective-C y Swift.",
        "isbn": "9781508837800",
        "numberPages": 591,
        "image": "http://books.google.com/books/content?id=t_qjCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "72.84"
      },
      {
        "title": "Curso de Introducción a la Administración de Bases de Datos",
        "authors": [
          "Miguel Ángel Benítez",
          "Ángel Arias"
        ],
        "publisher": "IT Campus Academy",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "El buen uso de las bases de datos es fundamental para las buenas prácticas en la programación actual. Una base de datos optimizada, con sus backups automatizados, con el uso de triggers, etc… es lo que dará finalmente agilidad al desarrollador de aplicaciones con bases de datos y al rendimiento de las propias aplicaciones que trabajan con bases de datos. Debido al aumento exponencial de las nuevas tecnologías de la información, sumado al uso de las tecnologías móviles con acceso a Internet, el volumen de datos que manejan tanto las empresas, como muchos particulares (con solamente almacenar algunos datos de sus redes sociales y contactos profesionales) se ha incrementado notablemente, con lo cual, a día de hoy es casi imposible imaginar una aplicación que no necesite trabajar con una base de datos. Las Bases de datos son colecciones de información (datos) que se relacionan para crear un sentido y dar más eficiencia a una encuesta, un estudio organizado o la estructura de datos de una empresa. Son de vital importancia para las empresas, y en las últimas décadas se han convertido en la parte principal de los sistemas de información. Normalmente los datos permanecen allí durante varios años sin necesidad de cambiar su estructura. Las bases de datos suelen ser gestionadas por sistemas de gestión de bases de datos (SGBD), que surgieron en los años 70. Antes de estos, las aplicaciones utilizadas en los archivos del sistema operativo para almacenar sus sistemas de información. En los años 80 la tecnología de SGBD relacional llegó a dominar el mercado, y en la actualidad se utiliza casi exclusivamente. Otro tipo de bases de datos destacadas son los SGBD orientados a objetos, donde su estructura o aplicaciones que lo utilizan están en constante cambio. La aplicación principal de la base de datos principal es la que controla todas las operaciones empresariales.",
        "isbn": "9781542964890",
        "numberPages": 193,
        "image": "http://books.google.com/books/content?id=35YSDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "280.74"
      },
      {
        "title": "Curso de Programación y Análisis de Software",
        "authors": [
          "Ángel Arias",
          "Alicia Durango"
        ],
        "publisher": "IT Campus Academy",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este Curso ha sido elaborado por dos prestigiosos profesionales del mundo de la formación informática. La programación y la arquitectura de software son los pilares del crecimiento económico de las últimas décadas, acelerándose enormemente en estos últimos años. Esperamos que con este curso, usted pueda mejorar profesionalmente y le ayude a alcanzar sus objetivos personales. El curso consta de los bloques temáticos de fundamentos de la programación, fundamentos de las bases de datos, introducción al diseño del sotware, introducción a la arquitectura del software, y para finalizar, veremos el lenguaje de programación Java, el cual es el complemento ideal para finalizar este curso.",
        "isbn": "9781537396682",
        "numberPages": 512,
        "image": "http://books.google.com/books/content?id=2Wj0DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "235.44"
      },
      {
        "title": "Cognición social y lenguaje",
        "authors": [
          "Pablo Quintanilla",
          "Carla Mantilla",
          "Paola Cépeda"
        ],
        "publisher": "Fondo Editorial de la PUCP",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Este libro es el resultado de un ingente número de horas de estudio y discusión realizado por los integrantes del Grupo Interdisciplinario de Investigación Mente y Lenguaje, entre los años 2010 y 2013. El libro está conformado por dos partes principales. En la primera parte, los miembros de Mente y Lenguaje elaboraron una investigación conjunta para explicitar las intersecciones entre la psicología,la lingüística y la filosofía, entrecruzando dos ejes: el desarrollo y la evolución tanto de los procesos de cognición social como del lenguaje. Esta primera parte tiene como finalidad generar un terreno transdisciplinario, de manera que los métodos, evidencias y hallazgos de las tres disciplinas puedan dialogar entre sí y mostrar un panorama interconectado del estado de la cuestión en las tres disciplinas que nos convocan. En la segunda parte del libro se publican artículos —en principio independientes— de los miembros del Grupo así como de los investigadores invitados. Cada artículo defiende una tesis en torno al tema del libro, pero ellos no pretenden formar un conjunto y pueden leerse de manera separada. Esta parte se divide en cuatro secciones: la evolución de la cognición social, el desarrollo y la estructura de la misma, la evolución del lenguaje, y el desarrollo y la estructura del mismo. El objetivo de esta segunda parte no es ofrecer una teoría unificada, sino varias posturas, a veces complementarias y en ocasiones discrepantes, sobre el tema común.",
        "isbn": "9786123170080",
        "numberPages": 548,
        "image": "http://books.google.com/books/content?id=DaDNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "64.02"
      },
      {
        "title": "jQuery UI in Action",
        "authors": [
          "TJ VanToll"
        ],
        "publisher": "Simon and Schuster",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Summary jQuery UI in Action is a practical guide to using and customizing jQuery UI library components to build rich, user-friendly web applications. By working through numerous engaging examples, you'll move quickly from placing a datepicker on the page to building a complete user interface that includes features like a contact form and shopping cart. You'll master jQuery UI's five main interactions—draggable, droppable, resizable, selectable, and sortable—and learn UI techniques that work across all devices. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the Book You're only one tag away from richer user interfaces — ‹script src=\"jquery-ui.js\"›. The jQuery UI library simplifies web UI development by providing robust widgets, interactions, and effects you can use immediately. It includes datepickers, autocompletes, tooltips, and a whole lot more. And, jQuery UI's powerful widget factory makes it a snap to customize existing components to meet your needs. jQuery UI in Action is a practical guide to using and customizing jQuery UI library components. By working through numerous examples, you'll quickly master jQuery UI's twelve widgets and five interactions—draggable, droppable, resizable, selectable, and sortable. The engaging examples illustrate techniques that work across all devices. You'll use the widget factory to create reusable plugins and discover jQuery UI's CSS theming system that allows you to create a custom, cohesive look for your sites and your applications. Written for front-end developers and web designers with a basic understanding of jQuery. What's Inside Create interactions that work on any device Customizable widgets for web and mobile apps Written by a member of the core jQuery UI team Covers jQuery UI 1.11 About the Author A professional web developer, TJ VanToll is a member of the jQuery UI core team. Table of Contents PART 1 MEET JQUERY UI Introducing jQuery UI Enhancing UIs with widgetsPART 2 JQUERY UI CORE Building complex web forms with jQuery UI Enhancing interfaces with layout and utility widgets Adding interaction to your interfaces Creating rich animations with effects Theming and styling applications with jQuery UI PART 3 CUSTOMIZATION AND ADVANCED USAGE Using the widget factory to build stateful plugins Extending widgets with the widget factory Preparing your application for production Building a flight-search application Under the hood of jQuery UI",
        "isbn": "9781638356011",
        "numberPages": 384,
        "image": "http://books.google.com/books/content?id=FTgzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "AR",
        "stock": 0,
        "price": "82.46"
      },
      {
        "title": "Nuevas tecnologías en el aula",
        "authors": [
          "Antonio Bartolomé Pina"
        ],
        "publisher": "Grao",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Éste no es un libro para tecnólogos o para locos por las máquinas, es un libro para profesores locos por la enseñanza.",
        "isbn": "8478276076",
        "numberPages": 217,
        "image": "http://books.google.com/books/content?id=q0Cw0Jb8vSgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "165.12"
      },
      {
        "title": "The Meta-Analysis Research in Special Education",
        "authors": [
          "Kenneth A. Kavale"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "First published in 2001. The purpose of this issue is to demonstrate the advantages of meta-analysis in summarizing research in special education. Toward this end, five articles are included in this issue that deal with methodology, interpretation, and application of meta-analyses. The first article is a brief primer on meta-analysis that compares and contrasts it with more traditional review methods and describes the methodological procedures for conducting a quantitative research synthesis. The second article, summarizes findings from 24 meta-analytic efforts. The third article explores the important issue of face validity: Can we be confident about the findings from meta-analyses? The fourth article examines the controversy surrounding the meta-analysis of single-participant research: What is the best metric? The final paper reviews the process of decision making in special education by showing how meta-analytic findings can provide a comprehensive knowledge base that, combined with wisdom and experience, can be used to decide whether to include particular interventions.",
        "isbn": "9781135586478",
        "numberPages": 70,
        "image": "http://books.google.com/books/content?id=vi1AEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "AR",
        "stock": 0,
        "price": "235.40"
      },
      {
        "title": "Android Programming",
        "authors": [
          "Bill Phillips",
          "Chris Stewart",
          "Kristin Marsicano",
          "Brian Gardner"
        ],
        "publisher": "Pearson Technology Group",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Android Programming: The Big Nerd Ranch Guide is an introductory Android book for programmers with Kotlin experience. Based on Big Nerd Ranch’s popular Android Bootcamp, this guide will lead you through the wilderness using hands-on example apps combined with clear explanations of key concepts and APIs. This book focuses on practical techniques for developing apps in Kotlin compatible with Android 5.0 (Lollipop) through Android 8.1 (Oreo) and beyond. Write and run code every step of the way, using Android Studio to create apps that integrate with other apps, download and display pictures from the web, play sounds, and more. Each chapter and app has been designed and tested to provide the knowledge and experience you need to get started in Android development. The Android team is constantly improving and updating Android Studio and other tools. As a result, some of the instructions provided in the book have changed. You can find an addendum addressing breaking changes at: https://github.com/bignerdranch/AndroidCourseResources/raw/master/4thEdition/Errata/4eAddendum.pdf.",
        "isbn": "9780135257562",
        "numberPages": 99998,
        "image": "http://books.google.com/books/content?id=ZeyoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "AR",
        "stock": 0,
        "price": "203.57"
      },
      {
        "title": "Estructura y diseño de computadores",
        "authors": [
          "David A. Patterson",
          "John L. Hennessy"
        ],
        "publisher": "Reverte",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "La audiencia para este libro incluye tanto aquellos que, con poca experiencia en lenguaje ensamblador o diseño lógico, necesitan entender la estructura básica de un computador, como a los que , con conocimientos en lenguaje ensamblador y diseño lógico, deseen aprender a diseñar un Ordenador o entender cómo trabaja un sistema y por qué rinde como lo hace. Este libro se ha escrito de forma que los lectores aprendan más sobre estructura y diseño, aunque se ofrece una introducción completa al lenguaje ensamblador. Usando una arquitectura RISC, los alumnos pueden aprender lo básico de un repertorio de instrucciones y programación en lenguaje ensamblador en menos tiempo del que se suele reservar para cursos de ensamblador basados en CISC. Muchos profesores han encontrado también que usando un simulador, en lugar de ejecutar en modo nativo en una máquina real, proporciona experiencia en programación en lenguaje ensamblador en substancialmente menos tiempo.",
        "isbn": "842912618X",
        "numberPages": 196,
        "image": "http://books.google.com/books/content?id=d4tY-6fryNIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "es",
        "countryPublication": "AR",
        "stock": 0,
        "price": "274.93"
      },
      {
        "title": "XSLT",
        "authors": [
          "Doug Tidwell"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Have you ever needed to convert documents from XML to HTML ? Or from one XML vocabulary to another ? Extensible Stylesheet Transformations (XSLT) provide a critical bridge between XML processing and more familiar HTML, as well as between XML vocabularies. XSLT demonstrates how to use this powerful, but complex, tool for a wide variety of conversions. Examples illustrate many different cases and techniques, giving you working code to explore and modify for your own purposes. Originally created for page layout, XSLT has grown into one of the tore technologies used by most developers processing XML. Through clear and entertaining explanations, this book shows you how to use XSLT as a general-purpose translation tool, a system for reorganizing document content, and a tool for generating multiple results (including HTML, VRML, and SVG) from the same content. Though XSLT is extremely useful, it can also be daunting to new users. XSLT uses an XML-based template syntax combined with a terse vocabulary called XPath that identifies how the template applies to the original document. The understanding of \" variables \" in XSLT is very different from the understanding of \" variables \" in procedural languages, for instance. Getting started with XSLT is difficult, and advanced techniques require a thorough understanding of how XSLT templates work and interact with one another. XSLT brings it all together, giving developers both a thorough tutorial and a reference. It examines both XSLT and XPath, a critical companion standard, and explores subjects ranging from basic transformations to complex sorting and linking. In addition, the book explores extension functions on various XSLT processors and how to combine multiple documents with XSLT. Examples demonstrate all of the techniques described. Examples also illustrate how to use XSLT to generate a ride variety of target document types, including HTML, SVG, JPEG, Java source code, and XSLT stylesheets.",
        "isbn": "0596000537",
        "numberPages": 488,
        "image": "http://books.google.com/books/content?id=wq9_rDx7GX0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Programming languages (Electronic computers)."
        ],
        "language": "en",
        "countryPublication": "AR",
        "stock": 0,
        "price": "111.10"
      },
      {
        "title": "Goldman and His Critics",
        "authors": [
          "Brian P. McLaughlin",
          "Hilary Kornblith"
        ],
        "publisher": "John Wiley & Sons",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Goldman and His Critics presents a series of original essays contributed by influential philosophers who critically examine Alvin Goldman’s work, followed by Goldman’s responses to each essay. Critiques Alvin Goldman’s groundbreaking theories, writings, and ideas on a range of philosophical topics Features contributions from some of the most important and influential contemporary philosophers Covers Goldman’s views on epistemology—both individual and social—in addition to cognitive science and metaphysics Pays special attention to Goldman’s writings on philosophy of mind, including the evolution of his thoughts on Simulation-Theory (ST)",
        "isbn": "9781118609170",
        "numberPages": 400,
        "image": "http://books.google.com/books/content?id=2jcZDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Philosophy"
        ],
        "language": "en",
        "countryPublication": "AR",
        "stock": 0,
        "price": "174.16"
      },
      {
        "title": "The Spanish Language in the Digital Age",
        "authors": [
          "Georg Rehm",
          "Hans Uszkoreit"
        ],
        "publisher": "Springer Science & Business Media",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This white paper is part of a series that promotes knowledge about language technology and its potential. It addresses educators, journalists, politicians, language communities and others. The availability and use of language technology in Europe varies between languages. Consequently, the actions that are required to further support research and development of language technologies also differ for each language. The required actions depend on many factors, such as the complexity of a given language and the size of its community. META-NET, a Network of Excellence funded by the European Commission, has conducted an analysis of current language resources and technologies. This analysis focused on the 23 official European languages as well as other important national and regional languages in Europe. The results of this analysis suggest that there are many significant research gaps for each language. A more detailed expert analysis and assessment of the current situation will help maximise the impact of additional research and minimize any risks. META-NET consists of 54 research centres from 33 countries that are working with stakeholders from commercial businesses, government agencies, industry, research organisations, software companies, technology providers and European universities. Together, they are creating a common technology vision while developing a strategic research agenda that shows how language technology applications can address any research gaps by 2020.",
        "isbn": "9783642308413",
        "numberPages": 79,
        "image": "http://books.google.com/books/content?id=jIFyXFd7R6sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "261.06"
      },
      {
        "title": "The Catalan Language in the Digital Age",
        "authors": [
          "Georg Rehm",
          "Hans Uszkoreit"
        ],
        "publisher": "Springer Science & Business Media",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This white paper is part of a series that promotes knowledge about language technology and its potential. It addresses educators, journalists, politicians, language communities and others. The availability and use of language technology in Europe varies between languages. Consequently, the actions that are required to further support research and development of language technologies also differ for each language. The required actions depend on many factors, such as the complexity of a given language and the size of its community. META-NET, a Network of Excellence funded by the European Commission, has conducted an analysis of current language resources and technologies. This analysis focused on the 23 official European languages as well as other important national and regional languages in Europe. The results of this analysis suggest that there are many significant research gaps for each language. A more detailed expert analysis and assessment of the current situation will help maximise the impact of additional research and minimize any risks. META-NET consists of 54 research centres from 33 countries that are working with stakeholders from commercial businesses, government agencies, industry, research organisations, software companies, technology providers and European universities. Together, they are creating a common technology vision while developing a strategic research agenda that shows how language technology applications can address any research gaps by 2020.",
        "isbn": "9783642306785",
        "numberPages": 75,
        "image": "http://books.google.com/books/content?id=9ZsQZHIelgkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "122.63"
      },
      {
        "title": "The Swedish Language in the Digital Age",
        "authors": [
          "Georg Rehm",
          "Hans Uszkoreit"
        ],
        "publisher": "Springer Science & Business Media",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This white paper is part of a series that promotes knowledge about language technology and its potential. It addresses educators, journalists, politicians, language communities and others. The availability and use of language technology in Europe varies between languages. Consequently, the actions that are required to further support research and development of language technologies also differ for each language. The required actions depend on many factors, such as the complexity of a given language and the size of its community. META-NET, a Network of Excellence funded by the European Commission, has conducted an analysis of current language resources and technologies. This analysis focused on the 23 official European languages as well as other important national and regional languages in Europe. The results of this analysis suggest that there are many significant research gaps for each language. A more detailed expert analysis and assessment of the current situation will help maximise the impact of additional research and minimize any risks. META-NET consists of 54 research centres from 33 countries that are working with stakeholders from commercial businesses, government agencies, industry, research organisations, software companies, technology providers and European universities. Together, they are creating a common technology vision while developing a strategic research agenda that shows how language technology applications can address any research gaps by 2020.",
        "isbn": "9783642308321",
        "numberPages": 79,
        "image": "http://books.google.com/books/content?id=Yf0-ikvR5mEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "192.48"
      },
      {
        "title": "European Identities and Foreign Policy Discourses on Russia",
        "authors": [
          "Marco Siddi"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book examines the relationship between national identity construction and current foreign policy discourses on Russia in selected European Union member states in 2014–2018. It shows that divergent national discourses on Russia derive from the different ways in which the country was constructed in national identity. The book develops an interpretive theoretical framework and argues that policy makers’ agency can profoundly influence the contestation between different identity narratives. It includes case studies in policy areas that are of primary importance for EU–Russia relations, such as energy security (the Nord Stream 2 controversy), the Ukraine crisis and Russia’s military intervention in Syria. Focusing on EU member states that have traditionally taken different stances vis-à-vis Russia (Germany, Poland and Finland), it shows that at the peak of the Ukraine crisis national discourses converged towards a pragmatic, but critical narrative. As the Ukraine crisis subsided and new events took centre stage in foreign policy discussions (i.e. the Syrian civil war, international terrorism), long-standing and identity-based divergences partly re-emerged in the discourses of policy makers. This became particularly evident during the Nord Stream 2 controversy. Deep-rooted and different perceptions of the Russian Other in EU member states are still influential and lead to divergent national agendas for foreign policy towards Russia. This book will be of interest to students and scholars working in European and EU politics, Russian and Soviet politics, and International Relations.",
        "isbn": "9781315315140",
        "numberPages": 168,
        "image": "http://books.google.com/books/content?id=e57qDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Political Science"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "43.40"
      },
      {
        "title": "Language in Cape Town's District Six",
        "authors": [
          "Kay McCormick"
        ],
        "publisher": "Oxford University Press, USA",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The book is a sociolinguistic case study of District Six, an inner-city neighbourhood in Cape Town characterized by language mixing and switching of English and Afrikaans. Its early inhabitants included indigenous people, freed slaves of African and Asian origin, and immigrants from Europe andelsewhere. The ravages of apartheid affected the residents' attitudes towards their languages in various ways, which are described. The book examines the norms and practices regarding language choice for various functions and domains in the only surviving sector of District Six. It also containsdetailed analyses of extended bilingual conversations showing a range of social, linguistic and discourse features. Of particular interest is the paradoxical polarization and blending of the two languages. They are strongly polarized symbolically and functionally, yet they are also habituallyblended in vernacular speech through lexical borrowing and intrasentential language switching. This paradox has interesting implications for the construction of individual, community and language identity.",
        "isbn": "0198235542",
        "numberPages": 280,
        "image": "http://books.google.com/books/content?id=2YrzDhNG-UkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Afrikaans language"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "242.38"
      },
      {
        "title": "Asterisk: The Definitive Guide",
        "authors": [
          "Leif Madsen",
          "Jim Van Meggelen",
          "Russell Bryant"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Design a complete VoIP or analog PBX with Asterisk, even if you have no previous Asterisk experience and only basic telecommunications knowledge. This bestselling guide makes it easy, with a detailed roadmap to installing, configuring, and integrating this open source software into your existing phone system. Ideal for Linux administrators, developers, and power users, this book shows you how to write a basic dialplan step by step, and quickly brings you up to speed on the latest Asterisk features in version 1.8. Integrate Asterisk with analog, VoIP, and digital telephony systems Build a simple interactive dialplan, and dive into advanced concepts Use Asterisk’s voicemail options—including a standalone voicemail server Build a menuing system and add applications that act on caller input Incorporate a relational database with MySQL and Postgre SQL Connect to external services such as LDAP, calendars, XMPP, and Skype Use Automatic Call Distribution to build a call queuing system Learn how to use Asterisk’s security, call routing, and faxing features",
        "isbn": "9781449308308",
        "numberPages": 732,
        "image": "http://books.google.com/books/content?id=kcrdAPCR0DEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "83.80"
      },
      {
        "title": "The Fall of Language in the Age of English",
        "authors": [
          "Minae Mizumura"
        ],
        "publisher": "Columbia University Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Winner of the Kobayashi Hideo Award, this best-selling book by one of JapanÕs most ambitious contemporary fiction writers lays bare the struggle to retain the brilliance of oneÕs own language in an age of English dominance. Born in Tokyo but also raised and educated in the United States, Minae Mizumura acknowledges the value of a universal language in the pursuit of knowledge, yet also appreciates the different ways of seeing offered by the work of multiple tongues. She warns against losing this precious diversity. Universal languages have always played a pivotal role in advancing human societies, Mizumura shows, but in the globalized world of the Internet, English is fast becoming the sole common language of the human race. The process is unstoppable, and striving for total language equality is delusionalÑexcept when a particular knowledge is at stake, gained through writings in a specific language. Mizumura calls these writings ÒtextsÓ and their ultimate form Òliterature.Ó Only through literature, and more fundamentally through the various languages that give birth to a variety of literatures, can we nurture and enrich humanity. Incorporating her own experiences as a writer and a lover of language, and embedding a parallel history of Japanese, Mizumura offers an intimate look at the phenomenona of individual and national expression.",
        "isbn": "9780231163026",
        "numberPages": 238,
        "image": "http://books.google.com/books/content?id=lNLYDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Literary Criticism"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "104.89"
      },
      {
        "title": "Asterisk: The Definitive Guide",
        "authors": [
          "Russell Bryant",
          "Leif Madsen",
          "Jim Van Meggelen"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Design a complete Voice over IP (VoIP) or traditional PBX system with Asterisk, even if you have only basic telecommunications knowledge. This bestselling guide makes it easy, with a detailed roadmap that shows you how to install and configure this open source software, whether you’re upgrading your existing phone system or starting from scratch. Ideal for Linux administrators, developers, and power users, this updated edition shows you how to write a basic dialplan step-by-step, and brings you up to speed on the features in Asterisk 11, the latest long-term support release from Digium. You’ll quickly gain working knowledge to build a simple yet inclusive system. Integrate Asterisk with analog, VoIP, and digital telephony systems Build an interactive dialplan, using best practices for more advanced features Delve into voicemail options, such as storing messages in a database Connect to external services including Google Talk, XMPP, and calendars Incorporate Asterisk features and functions into a relational database to facilitate information sharing Learn how to use Asterisk’s security, call routing, and faxing features Monitor and control your system with the Asterisk Manager Interface (AMI) Plan for expansion by learning tools for building distributed systems",
        "isbn": "9781449332457",
        "numberPages": 1200,
        "image": "http://books.google.com/books/content?id=QNHlZ5FfXm8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "158.08"
      },
      {
        "title": "Early Language Learning Policy in the 21st Century",
        "authors": [
          "Subhan Zein",
          "Maria R. Coady"
        ],
        "publisher": "Springer Nature",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This volume analyses the policymaking, expectations, implementation, progress, and outcomes of early language learning in various education policy contexts worldwide. The contributors to the volume are international researchers specialising in language policy and early language learning and their contributions aim to advance scholarship on early language learning policies and inform policymaking at the global level. The languages considered include learning English as a second language in primary schools in Japan, Mexico, Serbia, Argentina, and Tanzania; Spanish language education in the US and Australia; Arabic as a second language in Israel and Bangladesh; Chinese in South America and Oceania; and finally, early German teaching and learning in France and the UK.",
        "isbn": "9783030762513",
        "numberPages": 317,
        "image": "http://books.google.com/books/content?id=rmpEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "282.85"
      },
      {
        "title": "The Language of Colour in the Bible",
        "authors": [
          "Lourdes García Ureña",
          "Emanuela Valeriani",
          "Anna Angelini",
          "Carlos Santos Carretero",
          "Marina Salvador Gimeno"
        ],
        "publisher": "Walter de Gruyter GmbH & Co KG",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The Bible is one of the books that has aroused the most interest throughout history to the present day. However, there is one topic that has mostly been neglected and which today constitutes one of the most emblematic elements of the visual culture in which we live immersed: the language of colour. Colour is present in the biblical text from its beginning to its end, but it has hardly been studied, and we appear to have forgotten that the detailed study of the colour terms in the Bible is essential to understanding the use and symbolism that the language of colour has acquired in the literature that has forged European culture and art. The objective of the present study is to provide the modern reader with the meaning of colour terms of the lexical families related to the green tonality in order to determine whether they denote only color and, if so, what is the coloration expressed, or whether, together with the chromatic denotation, another reality inseparable from colour underlies/along with the chromatic denotation, there is another underlying reality that is inseparable from colour. We will study the symbolism that/which underpins some of these colour terms, and which European culture has inherited. This lexicographical study requires a methodology that allows us to approach colour not in accordance with our modern and abstract concept of colour, but with the concept of the ancient civilations. This is why the concept of colour that emerges from each of the versions of the Bible is studied and compared with that found in theoretical reflection in both Greek and Latin. Colour thus emerges as a concrete reality, visible on the surface of objects, reflecting in many cases, not an intrinsic quality, but their state. This concept has a reflection in the biblical languages, since the terms of colour always describe an entity (in this sense one can say that they are embodied) and include within them a wide chromatic spectrum, that is, they are mostly polysemic. Structuralism through the componential analysis, although providing interesting contributions, had at the same time serious shortcomings when it came to the study of colour. These were addressed through the theoretical framework provided by cognitive linguistics and some of its tools such as: cognitive domains, metonymy and metaphor. Our study, then, is one of the first to apply some of the contributions of cognitive linguistics to lexicography in general, and particularly with reference to the Hebrew, Greek and Latin versions of the Bible. A further novel contribution of this research is that the meaning is expressed through a definition and not through a list of possible colour terms as happens in dictionaries or in studies referring to colour in antiquity. The definition allows us to delve deeper and discover new nuances that enrich the understanding of colour in the three great civilizations involved in our study: Israel, Greece and Rome.",
        "isbn": "9783110767735",
        "numberPages": 254,
        "image": "http://books.google.com/books/content?id=Pk1mEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Religion"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "219.48"
      },
      {
        "title": "Team Teaching and Team Learning in the Language Classroom",
        "authors": [
          "Akira Tajino",
          "Tim Stewart",
          "David Dalsky"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book reignites discussion on the importance of collaboration and innovation in language education. The pivotal difference highlighted in this volume is the concept of team learning through collaborative relationships such as team teaching. It explores ways in which team learning happens in ELT environments and what emerges from these explorations is a more robust concept of team learning in language education. Coupled with this deeper understanding, the value of participant research is emphasised by defining the notion of ‘team’ to include all participants in the educational experience. Authors in this volume position practice ahead of theory as they struggle to make sense of the complex phenomena of language teaching and learning. The focus of this book is on the nexus between ELT theory and practice as viewed through the lens of collaboration. The volume aims to add to the current knowledge base in order to bridge the theory-practice gap regarding collaboration for innovation in language classrooms.",
        "isbn": "9781317513193",
        "numberPages": 196,
        "image": "http://books.google.com/books/content?id=eLc0CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "237.83"
      },
      {
        "title": "Multilingual Perspectives from Europe and Beyond on Language Policy and Practice",
        "authors": [
          "Bruna Di Sabato",
          "Bronwen Hughes"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This edited volume offers an overarching yet detailed view of fast-changing language policy and practice in Europe and beyond. It provides a thorough investigation of different linguacultural scenarios, exploring how language policy has repercussions on research and initiatives in the field of language education. With contributions from a range of European settings as well as Turkey and the USA, the book discusses topical issues related to language learning and explores how these can shape our identities. Chapters present cutting-edge research on translanguaging, EMI, multilingualism and minority languages in Europe. The volume forecasts what future educational policies might look like, and questions how evaluating and rethinking educational practices can produce positive effects on language practices as well as language policies. The book has a wide-reaching international focus and will be an important resource for researchers, academics, language experts and postgraduate students in the fields of applied linguistics, language education and sociolinguistics.",
        "isbn": "9781000437799",
        "numberPages": 184,
        "image": "http://books.google.com/books/content?id=_X46EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "26.57"
      },
      {
        "title": "Sign Language in Action",
        "authors": [
          "Jemina Napier",
          "Lorraine Leeson"
        ],
        "publisher": "Springer",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book defines the notion of applied sign linguistics by drawing on data from projects that have explored sign language in action in various domains. The book gives professionals working with sign languages, signed language teachers and students, research students and their supervisors, authoritative access to current ideas and practice.",
        "isbn": "9781137309778",
        "numberPages": 339,
        "image": "http://books.google.com/books/content?id=ITrvCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "159.64"
      },
      {
        "title": "International Handbook of English Language Teaching",
        "authors": [
          "Jim Cummins",
          "Chris Davison"
        ],
        "publisher": "Springer Science & Business Media",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This two volume handbook provides a comprehensive examination of policy, practice, research and theory related to English Language Teaching in international contexts. More than 70 chapters highlight the research foundation for best practices, frameworks for policy decisions, and areas of consensus and controversy in second language acquisition and pedagogy. The Handbook provides a unique resource for policy makers, educational administrators, and researchers concerned with meeting the increasing demand for effective English language teaching. It offers a strongly socio-cultural view of language learning and teaching. It is comprehensive and global in perspective with a range of fresh new voices in English language teaching research.",
        "isbn": "9780387463018",
        "numberPages": 1201,
        "image": "http://books.google.com/books/content?id=ZxbUFm3aRkUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "164.60"
      },
      {
        "title": "Derrida on Exile and the Nation",
        "authors": [
          "Herman Rapaport"
        ],
        "publisher": "Bloomsbury Publishing",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Providing crucial scholarship on Derrida's first series of lectures from the Nationality and Philosophical Nationalism cycle, Herman Rapaport brings all 13 parts of the Fantom of the Other series (1984-85) to our critical attention. The series, Rapaport argues, was seminal in laying the foundations for the courses given, and ideas explored, by Derrida over the next twenty years. It is in this vein that the full explication of Derrida's lectures is done, breathing life into the foundational lecture series which has not yet been published in its entirety in English. Derrida's examination of a master signifier of the social relation, Geschlecht, acts as the critical entry point of the series into wide-ranging meditations on the social construction and deconstruction of all possible relations denoted by the core concept, including race, gender, sex, and family. The lecture series' vast engagement with a range of major thinkers, including philosophers and poets alike – Arendt, Adorno, Heidegger, Wittgenstein, Trakl, and Adonis – tackles core themes and debates about philosophical nationalism. Presenting Derrida's lectures on the implications of key 20th century philosopher's understandings of nationalism as they relate to concerns over idiomatic language, notions of race, exile, return, and social relations, adds richly to the literature on Derrida and reveals the potential for further application of his work to current polarising debates between universalism and tribalism.",
        "isbn": "9781350169807",
        "numberPages": 248,
        "image": "http://books.google.com/books/content?id=amcBEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Philosophy"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "59.49"
      },
      {
        "title": "jQuery UI in Action",
        "authors": [
          "TJ VanToll"
        ],
        "publisher": "Simon and Schuster",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Summary jQuery UI in Action is a practical guide to using and customizing jQuery UI library components to build rich, user-friendly web applications. By working through numerous engaging examples, you'll move quickly from placing a datepicker on the page to building a complete user interface that includes features like a contact form and shopping cart. You'll master jQuery UI's five main interactions—draggable, droppable, resizable, selectable, and sortable—and learn UI techniques that work across all devices. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the Book You're only one tag away from richer user interfaces — ‹script src=\"jquery-ui.js\"›. The jQuery UI library simplifies web UI development by providing robust widgets, interactions, and effects you can use immediately. It includes datepickers, autocompletes, tooltips, and a whole lot more. And, jQuery UI's powerful widget factory makes it a snap to customize existing components to meet your needs. jQuery UI in Action is a practical guide to using and customizing jQuery UI library components. By working through numerous examples, you'll quickly master jQuery UI's twelve widgets and five interactions—draggable, droppable, resizable, selectable, and sortable. The engaging examples illustrate techniques that work across all devices. You'll use the widget factory to create reusable plugins and discover jQuery UI's CSS theming system that allows you to create a custom, cohesive look for your sites and your applications. Written for front-end developers and web designers with a basic understanding of jQuery. What's Inside Create interactions that work on any device Customizable widgets for web and mobile apps Written by a member of the core jQuery UI team Covers jQuery UI 1.11 About the Author A professional web developer, TJ VanToll is a member of the jQuery UI core team. Table of Contents PART 1 MEET JQUERY UI Introducing jQuery UI Enhancing UIs with widgetsPART 2 JQUERY UI CORE Building complex web forms with jQuery UI Enhancing interfaces with layout and utility widgets Adding interaction to your interfaces Creating rich animations with effects Theming and styling applications with jQuery UI PART 3 CUSTOMIZATION AND ADVANCED USAGE Using the widget factory to build stateful plugins Extending widgets with the widget factory Preparing your application for production Building a flight-search application Under the hood of jQuery UI",
        "isbn": "9781638356011",
        "numberPages": 384,
        "image": "http://books.google.com/books/content?id=FTgzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "218.13"
      },
      {
        "title": "Controlling Language in Industry",
        "authors": [
          "Stephen Crabbe"
        ],
        "publisher": "Springer",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book provides an in-depth study of controlled languages used in technical documents from both a theoretical and practical perspective. It first explores the history of controlled languages employed by the manufacturing industry to shape and constrain the information in technical documents. The author then offers a comparative analysis of existing controlled languages and distills the best-practice features of those language systems. He concludes by offering innovative models that can be used to develop and trial a new controlled language. This book will be of interest to linguists working in technical and professional communication, as well as writers and practitioners involved in the production of technical documents for companies in multiple industries and geographical locations.",
        "isbn": "9783319527451",
        "numberPages": 118,
        "image": "http://books.google.com/books/content?id=TvoODgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "97.23"
      },
      {
        "title": "Routledge Revivals: Language in Tanzania (1980)",
        "authors": [
          "Edgar C. Polomé",
          "C. P. Hill"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Originally published in 1980, Language in Tanzania presents a comprehensive overview of the Survey of Language Use and Language Teaching in Eastern Africa. Using extensive research carried out by an interdisciplinary group of international and local scholars, the survey also covers Ethiopia, Kenya, Uganda and Zambia. The book represents one of the most in-depth sociolinguistic studies carried out on this region at this time. It provides basic linguistic data necessary to policy-makers, administrators, and educators, and will be of interest to those researching the formulation and execution of language policy.",
        "isbn": "9781351391849",
        "numberPages": 440,
        "image": "http://books.google.com/books/content?id=yG5QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "235.75"
      },
      {
        "title": "Type Noun Constructions in Slavic, Germanic and Romance Languages",
        "authors": [
          "Wiltrud Mihatsch",
          "Inga Hennecke",
          "Anna Kisiel",
          "Alena Kolyaseva",
          "Kristin Davidse",
          "Lieselotte Brems"
        ],
        "publisher": "Walter de Gruyter GmbH & Co KG",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This volume is the first dedicated to the comprehensive, in-depth analysis of constructions with nouns like ‘type’ and ‘sort’. It focuses on type noun constructions in Romance, Germanic and Slavic languages, integrating the different descriptive traditions that had been developed for each language family. As a result, a greater variety of type noun constructions is revealed than in the hitherto more fragmented literature. But attention is also drawn to the cross-linguistic similarity of the new pragmatic meanings, such as ad hoc and approximative categorization, hedging, focus and filler uses, and the new grammatical functions in NPs (e.g. phoric uses), clauses (e.g. adverbial uses) and complex sentences (e.g. quotatives). The volume offers survey chapters of type noun constructions in each language family as well as contributions focusing on specific aspects in one or two languages, such as their grammar, semantics and pragmatics, diachronic development, discursive and sociolinguistic variety. These complementary methodologies elucidate the unique cross-linguistic field of type noun constructions both descriptively and theoretically. Hence, this volume can also serve as a model for similar surveys in other functional domains.",
        "isbn": "9783110701166",
        "numberPages": 648,
        "image": "http://books.google.com/books/content?id=Nhu3EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "124.95"
      },
      {
        "title": "Internet Infrastructure",
        "authors": [
          "Richard Fox",
          "Wei Hao"
        ],
        "publisher": "CRC Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Internet Infrastructure: Networking, Web Services, and Cloud Computing provides a comprehensive introduction to networks and the Internet from several perspectives: the underlying media, the protocols, the hardware, the servers, and their uses. The material in the text is divided into concept chapters that are followed up with case study chapters that examine how to install, configure, and secure a server that offers the given service discussed. The book covers in detail the Bind DNS name server, the Apache web server, and the Squid proxy server. It also provides background on those servers by discussing DNS, DHCP, HTTP, HTTPS, digital certificates and encryption, web caches, and the variety of protocols that support web caching. Introductory networking content, as well as advanced Internet content, is also included in chapters on networks, LANs and WANs, TCP/IP, TCP/IP tools, cloud computing, and an examination of the Amazon Cloud Service. Online resources include supplementary content that is available via the textbook’s companion website, as well useful resources for faculty and students alike, including: a complete lab manual; power point notes, for installing, configuring, securing and experimenting with many of the servers discussed in the text; power point notes; animation tutorials to illustrate some of the concepts; two appendices; and complete input/output listings for the example Amazon cloud operations covered in the book.",
        "isbn": "9781351707176",
        "numberPages": 612,
        "image": "http://books.google.com/books/content?id=5jgPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "260.28"
      },
      {
        "title": "Early Language Learning in Context",
        "authors": [
          "David Hayes"
        ],
        "publisher": "Channel View Publications",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book critically analyses early school foreign language teaching policy and practice, foregrounding the influence of the socioeducational and cultural context on how policies are implemented and assessing the factors which either promote or constrain their effectiveness. It focuses on four Asian contexts – Malaysia, South Korea, Sri Lanka and Thailand – while providing a discussion of policy and practice in Canada and Finland as a comparison. Concentrating on the state school sector, it criticises the worldwide trend for a focus on English as the principal or only foreign language taught in primary schools, founded on a rationale that widespread proficiency in English is important for future national success in a globalised economy. It maintains that the economic rationale is not only largely unfounded and irrelevant to the language learning experiences of young children but also that the focus on English exacerbates system inequalities rather than contributing to their reduction. The book argues for a broader perspective on language learning in primary schools, one that values multilingualism and knowledge of regional and indigenous languages alongside a more diverse range of foreign languages. This book will appeal to educational policymakers, researchers and students interested in early foreign language learning in state educational systems worldwide.",
        "isbn": "9781800415867",
        "numberPages": 265,
        "image": "http://books.google.com/books/content?id=4Tx_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "213.31"
      },
      {
        "title": "Axis Diplomats in American Custody",
        "authors": [
          "Landon Alfriend Dunn",
          "Timothy J. Ryan"
        ],
        "publisher": "McFarland",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "After Pearl Harbor, German, Italian and Japanese diplomats, along with their staffs and families, were relocated to two lavish but isolated resorts in Appalachia, where the State Department insisted they be treated as distinguished guests. As the war progressed, other Axis envoys were similarly detained. (The Japanese ambassador to Germany was captured by U.S. soldiers in Europe and held in a small hotel in rural Pennsylvania, while the War Department argued for treating him as a war criminal and the local population decried his luxurious accommodations.) Informants were recruited, attempts at espionage and escape were foiled, diplomats complained and squabbled endlessly, babies were born and townspeople made threats, while newspapers published outlandish exposés of wild parties. Based on government documents, the recollections of detainees and hotel staff and contemporary newspaper accounts, this book is the first to focus on the day-to-day lives of the nearly 1,000 detainees during their six-month confinement.",
        "isbn": "9781476625393",
        "numberPages": 208,
        "image": "http://books.google.com/books/content?id=2HjpDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "History"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "187.90"
      },
      {
        "title": "English and Translation in the European Union",
        "authors": [
          "Alice Leal"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book explores the growing tension between multilingualism and monolingualism in the European Union in the wake of Brexit, underpinned by the interplay between the rise of English as a lingua franca and the effacement of translations in EU institutions, bodies and agencies. English and Translation in the European Union draws on an interdisciplinary approach, highlighting insights from applied linguistics and sociolinguistics, translation studies, philosophy of language and political theory, while also looking at official documents and online resources, most of which are increasingly produced in English and not translated at all – and the ones which are translated into other languages are not labelled as translations. In analysing this data, Alice Leal explores issues around language hierarchy and the growing difficulty in reconciling the EU’s approach to promoting multilingualism while fostering monolingualism in practice through the diffusion of English as a lingua franca, as well as questions around authenticity in the translation process and the boundaries between source and target texts. The volume also looks ahead to the implications of Brexit for this tension, while proposing potential ways forward, encapsulated in the language turn, the translation turn and the transcultural turn for the EU. Offering unique insights into contemporary debates in the humanities, this book will be of interest to scholars in translation studies, applied linguistics and sociolinguistics, philosophy and political theory.",
        "isbn": "9781000399585",
        "numberPages": 228,
        "image": "http://books.google.com/books/content?id=pfcyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "139.35"
      },
      {
        "title": "Quality and Equity in Education",
        "authors": [
          "Michael Byram",
          "Mike Fleming",
          "Joseph Sheils"
        ],
        "publisher": "Channel View Publications",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The work of the Council of Europe in plurilingual and intercultural education is highly influential in Europe and beyond and has been so for many years. The Common European Framework of Reference and its Companion Volume, and related instruments, provide ways in which to implement policies and a broader vision of providing quality and equity in education across the curriculum, a vision which incorporates the core values of the Council of Europe and which educates children and young people to be plurilingual, intercultural and democratic citizens. This book presents this educational vision, demonstrates how it can be realised through the application of Council of Europe instruments in practice, and does so in a way which is easily and quickly accessible to teachers of all subjects and in all educational institutions, as well as to other educationists, including policymakers.",
        "isbn": "9781800414044",
        "numberPages": 258,
        "image": "http://books.google.com/books/content?id=FMyJEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "101.14"
      },
      {
        "title": "RESTful Web Services Cookbook",
        "authors": [
          "Subbu Allamaraju"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "While the REST design philosophy has captured the imagination of web and enterprise developers alike, using this approach to develop real web services is no picnic. This cookbook includes more than 100 recipes to help you take advantage of REST, HTTP, and the infrastructure of the Web. You'll learn ways to design RESTful web services for client and server applications that meet performance, scalability, reliability, and security goals, no matter what programming language and development framework you use. Each recipe includes one or two problem statements, with easy-to-follow, step-by-step instructions for solving them, as well as examples using HTTP requests and responses, and XML, JSON, and Atom snippets. You'll also get implementation guidelines, and a discussion of the pros, cons, and trade-offs that come with each solution. Learn how to design resources to meet various application scenarios Successfully design representations and URIs Implement the hypertext constraint using links and link headers Understand when and how to use Atom and AtomPub Know what and what not to do to support caching Learn how to implement concurrency control Deal with advanced use cases involving copying, merging, transactions, batch processing, and partial updates Secure web services and support OAuth",
        "isbn": "1449388841",
        "numberPages": 316,
        "image": "http://books.google.com/books/content?id=LDuzpQlVuG4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "198.87"
      },
      {
        "title": "Digital Libraries",
        "authors": [
          "Fabrice Papy"
        ],
        "publisher": "Elsevier",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The technological interoperability of digital libraries must be rethought in order to adapt to new uses and networks. Informative digital environments aimed at responding to heritage, cultural, scientific or commercial demands have taken over the global cyberspace and have redesigned the techno-informative landscape of the Web. However, while the technological models demonstrate their effectiveness and explain to a large extent the creation of digital libraries, archives and deposits, the subjacent concept of uses continues to cause debate. The information technologies used by heterogeneous digital libraries enable a technical interoperability of content. This is not enough to allow the adhesion of a public connected to very different information profiles and techniques. This book explores the avenues of a user-orientated interoperability where the questions of consultation interfaces and content description processes are studied. Discusses Metadata as a resource for linking Provides a practical approach A valuable resource for anyone involved in digital library developments and digital collections and services",
        "isbn": "9780081004869",
        "numberPages": 152,
        "image": "http://books.google.com/books/content?id=emEpBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "297.10"
      },
      {
        "title": "Innovations in Applied Artificial Intelligence",
        "authors": [
          "Bob Orchard",
          "Chunsheng Yang",
          "Ali Moonis"
        ],
        "publisher": "Springer",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "“Intelligent systems must perform in order to be in demand. ” Intelligent systems technology is being applied steadily in solving many day-to-day problems. Each year the list of real-world deployed applications that inconspicuously host the results of research in the area grows considerably. These applications are having a significant impact in industrial operations, in financial circles, in transportation, in education, in medicine, in consumer products, in games and elsewhere. A set of selected papers presented at the seventeenth in the series of conferences on Industrial and Engineering Applications of Artificial Intelligence and Expert Systems (IEA/AIE 2004), sponsored by the International Society of Applied Intelligence, is offered in this manuscript. These papers highlight novel applications of the technology and show how new research could lead to new and innovative applications. We hope that you find these papers to be educational, useful in your own research, and stimulating. In addition, we have introduced some special sessions to emphasize a few areas of artificial intelligence (AI) that are either relatively new, have received considerable attention recently or perhaps have not yet been represented well. To this end, we have included special sessions on e-learning, bioinformatics, and human-robot interaction (HRI) to complement the usual offerings in areas such as data mining, machine learning, intelligent systems, neural networks, genetic algorithms, autonomous agents, natural language processing, intelligent user interfaces, evolutionary computing, fuzzy logic, computer vision and image processing, reasoning, heuristic search, security, Internet applications, constraint satisfaction problems, design, and expert systems.",
        "isbn": "9783540246770",
        "numberPages": 1278,
        "image": "http://books.google.com/books/content?id=Y44HCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "206.79"
      },
      {
        "title": "PIC Circular LII (52) – December 2020",
        "authors": [
          "Food and Agriculture Organization of the United Nations ",
          "United Nations Environment Programme"
        ],
        "publisher": "Food & Agriculture Org.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The PIC Circular is a key document under the Rotterdam Convention, both for the operation of the Prior Informed Consent (PIC) procedure and as a mechanism for the exchange of information. It is published in June and December in English, French, and Spanish. It is done jointly with the UNEP Secretariat of the Basel, Rotterdam, and Stockholm Conventions in Geneva. It directly supports SO2.3.1-stakeholders in implementing international instruments.",
        "isbn": "9789251337844",
        "numberPages": 112,
        "image": "http://books.google.com/books/content?id=JigXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Nature"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "142.28"
      },
      {
        "title": "Present and Future Trends in TEFL",
        "authors": [
          "María Elena García Sánchez"
        ],
        "publisher": "Universidad Almería",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The aim of this book is to develop a framework for describing the field as it currently exists together with well-established views. As far as possible the book describes rather than prescribes, to avoid taking up any single approach or theory regarding what constitutes the legitimate approach to TEFL research. Of course, the personal views of the authors will colour the account provided as it is imposible to separate description from interpretation. Thus, in a way, this book involves the theories, beliefs, knowledge, methods and practices of foreign language teachers and how these can enhance teacher education. This book is planned for pre-service or in-service teachers of a foreign language at primary, secondary or tertiary levels, although the criterions examined are useful to teachers of English as a foreign language, teacher trainers, or modern language teachers involved in teaching any language whether in Spain or overseas. Our main purpose is to help readers to help themselves. Accordingly, the reader is encouraged to be engaged in an examination of foreign language teaching and learning in hope of improving his/her practice and making language teaching more controllable, more interesting and more effective. The chapters are organized into four sections. In Section I, three chapters describe some perspectives in teacher education. In the first chapter, José M. Vez focuses on the hypothesis that the key to producing well-qualified EFL teachers is to greatly strengthen their professional learning across the continuum of a career in the foreign language classroom. He emphasizes the fact that foreign-language teaching must become a learning profession in order to prompt greater learning among foreign language students and describes the innovative aspects of foreign language teacher education. In the second chapter, Sheena Davies provides an overview of language teacher education today, with particular reference to English language teaching, discusses some current issues associated with the field, and gives notice of her experience working with both native speaker and non-native speaker teachers of English from all over the world on a variety of in-service and pre-service courses and seminars. In chapter 3, we examine the perspectives on teacher thinking and teachers' beliefs in general, and about language learning in particular. .",
        "isbn": "9788482403953",
        "numberPages": 384,
        "image": "http://books.google.com/books/content?id=tyMbBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Foreign Language Study"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "205.44"
      },
      {
        "title": "Complementary Therapies for Older People in Care",
        "authors": [
          "Sharon Tay"
        ],
        "publisher": "Singing Dragon",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "An invaluable companion for complementary and beauty therapists working with older people in care, this book offers helpful information and advice on practical issues that are often overlooked in training, including: · Assessing older clients for appropriate treatments · Communicating effectively with older clients, relatives and care staff · Adapting treatments for older clients with particular health conditions, including dementia · Working around beds, wheelchairs, walking frames and medical equipment · Hygiene, safety and ethical considerations · Guidance on using specific complementary therapies and techniques with older clients, including reflexology, aromatherapy and massage · Common pitfalls and difficulties practitioners may encounter, offering encouragement and down-to-earth advice for tackling them. With useful case examples and explanatory photographs throughout, this is an essential handbook for practitioners who have recently started working, or who are training to work with, older people in care, including in care homes, hospitals and in palliative care.",
        "isbn": "9780857011411",
        "numberPages": 216,
        "image": "http://books.google.com/books/content?id=4Qj4AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Medical"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "134.30"
      },
      {
        "title": "Theoretical and Applied Perspectives on Teaching Foreign Languages in Multilingual Settings",
        "authors": [
          "Anna Krulatz",
          "Georgios Neokleous",
          "Anne Dahl"
        ],
        "publisher": "Channel View Publications",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book promotes linguistically responsive foreign language teaching practices in multilingual contexts by facilitating a dialogue between teachers and researchers. It advances a discussion of how to connect the acquisition of subsequent foreign languages with previous language knowledge to create culturally and linguistically inclusive foreign language classrooms, and how to strengthen the connection between research on multilingualism and foreign language teaching practice. The chapters present new approaches to foreign language instruction in multilingual settings, many of them forged in collaboration between foreign language teachers and researchers of multilingualism. The authors report findings of classroom-based research, including case studies and action research on topics such as the functions and applications of translanguaging in the foreign language classroom, the role of learners’ own languages in teaching additional languages, linguistically and culturally inclusive foreign language pedagogies, and teacher and learner attitudes to multilingual teaching approaches.",
        "isbn": "9781788926430",
        "numberPages": 317,
        "image": "http://books.google.com/books/content?id=1A1yEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "56.13"
      },
      {
        "title": "Xamarin.Forms Solutions",
        "authors": [
          "Gerald Versluis",
          "Steven Thewissen"
        ],
        "publisher": "Apress",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Use the solutions provided in this book to handle common challenges in Xamarin.Forms that are encountered on a daily basis. Working examples and techniques are presented that you can modify and drop directly into your own projects. You will be able to deliver working code faster than ever. Examples are made available through GitHub, maximizing the convenience and value this book provides to Xamarin.Forms developers. Solutions in the book are organized broadly into problem domains such as user interface for applications, data and security, connectivity and external services, and more. Within each domain the book presents specific solutions addressing challenges that are commonly faced. Under data and security, for example, you’ll find specific solutions around storing login credentials, local data caching, and sending authorization tokens in HTTP requests. Not only do the solutions in the book solve specific problems, they also present best practices that can inform and improve the quality of the code that you write. Xamarin.Forms Solutions is chock full of practical advice and code examples that no Xamarin.Forms programmer will want to be without. The basics of Xamarin.Forms are provided for beginning developers. What You'll LearnKnow the in-depth basics of Xamarin.Forms and the inner workingsCreate custom renderers and dependency services Manage the appearance of user interfaces through styling and theming, layout options, rotation, and animation Build sophisticated user interfaces using a variety of controls that allow for PDF viewing, barcode interpretation, searching and finding, and other controls Secure your applications, and communicate securely with services via HTTP requestsSign and deploy your apps and optimize the binary file size Who This Book Is For Those building mobile applications on the Xamarin platform for iOS and Android. By mixing together the solutions and a thorough explanation of the basics of Xamarin.Forms, the book spans the needs of beginning through intermediate Xamarin.Forms developers. Even experts will find a few gems to improve the quality and speed of their application development work.",
        "isbn": "9781484241349",
        "numberPages": 291,
        "image": "http://books.google.com/books/content?id=wvt9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "261.03"
      },
      {
        "title": "Community and Communication",
        "authors": [
          "Sue Wright"
        ],
        "publisher": "Multilingual Matters",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book considers the issue of language in the European Union. Without a community of communication, the EU must remain a trading association run in an autocratic way by bilingual patrician technocrats; with a community of communication, the European Union could develop democratic structures and legitimacy and give meaning to its policies of free movement. How to achieve that community of communication is the biggest challenge facing Europe today.",
        "isbn": "1853594849",
        "numberPages": 292,
        "image": "http://books.google.com/books/content?id=Gd5d1CwtI7cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "112.04"
      },
      {
        "title": "Learning Joomla! 3 Extension Development-Third Edition",
        "authors": [
          "Tim Plummer"
        ],
        "publisher": "Packt Publishing Ltd",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "A practical guide with step-by-step examples that build on each other so you can learn by doing and get hands-on knowledge about creating your plugins, modules, and components in Joomla.\"Learning Joomla! 3 Extension Development, Third Edition\" is for developers who want to create their own Joomla extensions. It is assumed you will have some basic PHP, HTML, and CSS knowledge, but you don't need any prior Joomla programming experience. This book will also be useful to people who just want to make minor customizations to existing Joomla extensions and build on the work of others in the open source spirit.",
        "isbn": "9781782168386",
        "numberPages": 458,
        "image": "http://books.google.com/books/content?id=o68lyZWZDJQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "144.87"
      },
      {
        "title": "English in Inclusive Multilingual Preschools",
        "authors": [
          "Kirsten Birsak de Jersey"
        ],
        "publisher": "Narr Francke Attempto Verlag",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The study addresses the question of how preschool teachers who work in regular state inclusive preschools can be qualified to teach English as a foreign language. Through the longitudinal case study, which followed the principles of participatory action research, substantial insights were gained which can be transferred to other pre-primary contexts.",
        "isbn": "9783823395003",
        "numberPages": 423,
        "image": "http://books.google.com/books/content?id=VgAyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Literary Criticism"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "167.75"
      },
      {
        "title": "Advances in Information Technologies",
        "authors": [
          "Jean-Yves Roger",
          "B. Stanford-Smith",
          "Paul T. Kidd"
        ],
        "publisher": "IOS Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Created through a student-tested, faculty-approved review process with input from more than 250 students and faculty, GOVT is an engaging and accessible solution to accommodate the diverse learning styles of today's learners at a value-based price. Focusing on the current and historical conflicts and controversies that define America as a nation, GOVT is a streamlined and extremely current text for the American Government course. Its motivating debate theme and appealing modern format speak directly to today's student. A full suite of learning tools--correlated to the text chapter-by-chapter--are available through CourseMate and include an eBook, Chapter In Review cards, videos, simulations, podcasts, and quizzes that allow students to learn and study wherever they are and whenever they have time.",
        "isbn": "9051993854",
        "numberPages": 952,
        "image": "http://books.google.com/books/content?id=FpNgDWGHOBIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "17.89"
      },
      {
        "title": "Linguistics of American Sign Language",
        "authors": [
          "Clayton Valli",
          "Ceil Lucas"
        ],
        "publisher": "Gallaudet University Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "New 4th Edition completely revised and updated with new DVD now available; isbn 1-56368-283-4",
        "isbn": "1563680971",
        "numberPages": 516,
        "image": "http://books.google.com/books/content?id=mfS3GlTLAUMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "American Sign Language"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "8.50"
      },
      {
        "title": "TESOL Teacher Education in a Transnational World",
        "authors": [
          "Osman Z. Barnawi",
          "Anwar Ahmed"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "TESOL Teacher Education in a Transnational World critically examines theories and practices in contemporary TESOL teacher education to shed new light on the intersection of transnationalism and language teacher education. It emphasizes the scholarship of transnational mobility of language teachers, and showcases critical research from diverse contexts. The book fills a critical research gap by more fully examining the theory and practice of teacher education in a changing time when national identities and cross-border mobilities continue to figure prominently in scholarly discussions. Through a diverse set of epistemological, historical and theoretical perspectives along with methodological innovations, contributors of this volume not only index the dynamism of the scholarship of teacher education, but they also offer new forums for lively pedagogical debates. Featuring contributions from diverse educational and geographical contexts, including Europe, Asia, North America, and Latin America, the book moves the existing scholarship forward to more fully examine TESOL teacher education in relation to transnationalism. This book will be of great interest to academics, scholars, post-graduate students, teacher educators, policymakers, curriculum specialists, administrators, and other stakeholders interested in language teacher education, TESOL and applied linguistics",
        "isbn": "9781000283549",
        "numberPages": 270,
        "image": "http://books.google.com/books/content?id=Q1YFEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "0.78"
      },
      {
        "title": "Content Syndication with RSS",
        "authors": [
          "Ben Hammersley"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "\"Originally developed by Netscape in 1999, RSS (which can stand for RDF Site Summary, Rich Site Summary, or Really Simple Syndication) is an XML-based format that allows web developers to describe and syndicate web site content. Using RSS files allows developers to create a data feed that supplies headlines, links, and article summaries from a web site. Other sites can then incorporate these elements into their pages automatically ... [this text] provides a comprehensive reference to the specifications and the tools that make syndication possible\"--Back cover.",
        "isbn": "0596003838",
        "numberPages": 228,
        "image": "http://books.google.com/books/content?id=ScLY9EvLhiAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Cataloging of computer network resources"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "275.35"
      },
      {
        "title": "Equality and Non-Discrimination in the EU",
        "authors": [
          "Giovanni Zaccaroni"
        ],
        "publisher": "Edward Elgar Publishing",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Discussing the fundamental role played by equality and non-discrimination in the EU legal order, this insightful book explores the positive and negative elements that have contributed to the consolidation of the process of EU legal integration. It provides an in-depth analysis of the three key dimensions of equality in the EU: equality as a value, equality as a principle and equality as a right.",
        "isbn": "9781789904604",
        "numberPages": 232,
        "image": "http://books.google.com/books/content?id=qBodEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Law"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "24.63"
      },
      {
        "title": "Teacher Education in the 21st Century",
        "authors": [
          "Maria Jose Hernández-Serrano"
        ],
        "publisher": "BoD – Books on Demand",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "In the face of unprecedented disruption from the COVID-19 pandemic and the rapid acceleration of digital technologies, it is necessary to rethink the competences required by teachers for meeting new and flexible learning demands. Teacher training is an area constantly evolving along with emerging social challenges that are transforming educational institutions and agents. This book provides teachers with skills, innovative solutions, cutting-edge studies, and methodologies to meet education and training system demands. In our changing world, preparing teachers worldwide for the challenges and shifts of this era involves the opportunity to exchange theories, practices, and experiences such as those contained in this book.",
        "isbn": "9781839687921",
        "numberPages": 379,
        "image": "http://books.google.com/books/content?id=S8A1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "54.68"
      },
      {
        "title": "Computer Performance Evaluation. Modelling Techniques and Tools",
        "authors": [
          "Peter Kemper"
        ],
        "publisher": "Springer Science & Business Media",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book constitutes the refereed proceedings of the 13th International Conference on Modelling Techniques and Tools for Computer Performance Evaluation, TOOLS 2003, held in Urbana, IL, USA, in September 2003. The 17 revised full papers presented together with a keynote paper were carefully reviewed and selected for inclusion in the book. The papers are organized in topical sections on tools for measuring, benchmarking, and online control; tools for evaluation of stochastic models; queueing models; Markovian arrival processes and phase-type distributions; and supporting model-based design of systems.",
        "isbn": "9783540408147",
        "numberPages": 319,
        "image": "http://books.google.com/books/content?id=8L0h0tf_PlQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "40.65"
      },
      {
        "title": "Build Talking Apps for Alexa",
        "authors": [
          "Craig Walls"
        ],
        "publisher": "Pragmatic Bookshelf",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Voice recognition is here at last. Alexa and other voice assistants have now become widespread and mainstream. Is your app ready for voice interaction? Learn how to develop your own voice applications for Amazon Alexa. Start with techniques for building conversational user interfaces and dialog management. Integrate with existing applications and visual interfaces to complement voice-first applications. The future of human-computer interaction is voice, and we'll help you get ready for it. For decades, voice-enabled computers have only existed in the realm of science fiction. But now the Alexa Skills Kit (ASK) lets you develop your own voice-first applications. Leverage ASK to create engaging and natural user interfaces for your applications, enabling them to listen to users and talk back. You'll see how to use voice and sound as first-class components of user-interface design. We'll start with the essentials of building Alexa voice applications, called skills, including useful tools for creating, testing, and deploying your skills. From there, you can define parameters and dialogs that will prompt users for input in a natural, conversational style. Integrate your Alexa skills with Amazon services and other backend services to create a custom user experience. Discover how to tailor Alexa's voice and language to create more engaging responses and speak in the user's own language. Complement the voice-first experience with visual interfaces for users on screen-based devices. Add options for users to buy upgrades or other products from your application. Once all the pieces are in place, learn how to publish your Alexa skill for everyone to use. Create the future of user interfaces using the Alexa Skills Kit today. What You Need: You will need a computer capable of running the latest version of Node.js, a Git client, and internet access.",
        "isbn": "9781680509861",
        "numberPages": 498,
        "image": "http://books.google.com/books/content?id=q4-hEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "12.03"
      },
      {
        "title": "Handbook of Research on Promoting Sustainable Public Transportation Strategies in Urban Environments",
        "authors": [
          "Yilmaz, Zafer",
          "Golem, Silvia",
          "Costescu, Dorinela"
        ],
        "publisher": "IGI Global",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The traditional urban transportation systems around the globe are now being transferred into green public transportation systems in an effort to mitigate CO2 emissions and provide nature-friendly transportation systems in cities and, ultimately, to increase citizens’ wellbeing. Furthermore, the cities are expected to transform their traditional transportation systems to cutting-edge high technology green transportation systems in the near future due to regulations applied by the related authorities such as the EU and UN. At the same time, cities are undergoing a transformation from traditional to smart cities, which is an inevitable process due to swift developments in technologies and smart systems. Sustainable public transportation systems must be developed and adjusted to be applicable in future smart cities. The Handbook of Research on Promoting Sustainable Public Transportation Strategies in Urban Environments considers the challenges and advantages of sustainable public transportation systems in urban areas and provides relevant theoretical frameworks, the latest empirical research findings, and an overview of the latest technological developments on the subject. Covering key topics such as green vehicles, sustainability, and walkable cities, this major reference work is ideal for policymakers, government officials, industry professionals, researchers, scholars, practitioners, academicians, instructors, and students.",
        "isbn": "9781668459980",
        "numberPages": 422,
        "image": "http://books.google.com/books/content?id=DW-pEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Business & Economics"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "72.42"
      },
      {
        "title": "Words in Space and Time",
        "authors": [
          "Tomasz Kamusella"
        ],
        "publisher": "Central European University Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "With forty-two extensively annotated maps, this atlas offers novel insights into the history and mechanics of how Central Europe’s languages have been made, unmade, and deployed for political action. The innovative combination of linguistics, history, and cartography makes a wealth of hard-to-reach knowledge readily available to both specialist and general readers. It combines information on languages, dialects, alphabets, religions, mass violence, or migrations over an extended period of time. The story first focuses on Central Europe’s dialect continua, the emergence of states, and the spread of writing technology from the tenth century onward. Most maps concentrate on the last two centuries. The main storyline opens with the emergence of the Western European concept of the nation, in accord with which the ethnolinguistic nation-states of Italy and Germany were founded. In the Central European view, a “proper” nation is none other than the speech community of a single language. The Atlas aspires to help users make the intellectual leap of perceiving languages as products of human history and part of culture. Like states, nations, universities, towns, associations, art, beauty, religions, injustice, or atheism—languages are artefacts invented and shaped by individuals and their groups.",
        "isbn": "9789633864180",
        "numberPages": 303,
        "image": "http://books.google.com/books/content?id=spRUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "History"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "249.68"
      },
      {
        "title": "Cultural Diversity in Schools",
        "authors": [
          "Robert A. DeVillar",
          "Christian Faltis",
          "James P. Cummins",
          "Jim Cummins"
        ],
        "publisher": "SUNY Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book confronts the patterns of school failure often faced by subordinated minority groups in the United States. It does so by presenting a socioacademic framework that is based on the notion that all groups can have comparable access to quality schooling, comparable participation in the schooling, and derive comparable educational benefits from their participation. Organized around three key, interrelated components--communication, integration, and cooperation--the book combines theoretical concepts with actual classroom practices that support change. It moves us from a position of rhetoric about educational equality to one that actively addresses the socioacademic needs of students in a culturally diverse society.",
        "isbn": "0791416739",
        "numberPages": 426,
        "image": "http://books.google.com/books/content?id=vIhbnRLlVnEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "172.32"
      },
      {
        "title": "An Introduction to Sociolinguistics",
        "authors": [
          "Janet Holmes",
          "Nick Wilson"
        ],
        "publisher": "Taylor & Francis",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "In this best-selling introductory textbook, Janet Holmes and Nick Wilson examine the role of language in a variety of social contexts, considering both how language works and how it can be used to signal and interpret various aspects of social identity. Divided into three sections, this book explains basic sociolinguistic concepts in the light of classic approaches as well as introducing more recent research. This fifth edition has been revised and updated throughout using key concepts and examples to guide the reader through this fascinating area, including: a new chapter on identity that reflects the latest research; a brand new companion website which is fully cross-referenced within this book, and which includes and video and audio materials, interactive activities and links to useful websites; updated and revised examples and exercises which include new material from Tanzania, Wales, Paraguay and Timor-Leste; fully updated further reading and references sections. An Introduction to Sociolinguistics is the essential introductory text for all students of sociolinguistics and a splendid point of reference for students of English language studies, linguistics and applied linguistics.",
        "isbn": "9781317542919",
        "numberPages": 561,
        "image": "http://books.google.com/books/content?id=SC8lDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "28.51"
      },
      {
        "title": "The Oxford History of the Novel in English",
        "authors": [
          "Priscilla Wald",
          "Michael A. Elliott"
        ],
        "publisher": "Oxford University Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Witnessing the end of a war that nearly terminated the nation, the abolition of racial slavery and rise of legal segregation, the rise of Modernism and Hollywood, the closing of the frontier and two World Wars, the literary historical period represented in this volume constitutes the crucible of American literary history. Here, 35 essays by top researchers in the field detail how considerations of race and citizenship; immigration and assimilation; gender and sexuality; nationalism and empire; all reverberate throughout novels written in the United States between 1870 and 1940. Contributors discuss the professionalization of literary production after the Civil War alongside legal and political debates over segregation and citizenship; while chapters on journalism, geography, religion, and immigration offer discussions on everything from the lasting role of literary realism in American fiction to the Spanish-American War's effect on developing theories of aesthetics and popular culture. The volume offers thorough coverage of the emergence of serial fiction, children's fiction, crime and detective fiction, science fiction, and even cinema and comics, as new media and artistic revolutions like the Harlem Renaissance helped usher in the new international aesthetic movement of Modernism. The final chapters in the volume explore the relationship of the novel to the emergence of \"American literature\" as a category in the academy, in public criticism and journalism, and in mass culture.",
        "isbn": "9780199909032",
        "numberPages": 656,
        "image": "http://books.google.com/books/content?id=vmPwAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Literary Criticism"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "166.72"
      },
      {
        "title": "International Handbook of English Language Teaching",
        "authors": [
          "Jim Cummins",
          "Chris Davison"
        ],
        "publisher": "Springer Science & Business Media",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This two volume handbook provides a comprehensive examination of policy, practice, research and theory related to English Language Teaching in international contexts. More than 70 chapters highlight the research foundation for best practices, frameworks for policy decisions, and areas of consensus and controversy in second language acquisition and pedagogy. The Handbook provides a unique resource for policy makers, educational administrators, and researchers concerned with meeting the increasing demand for effective English language teaching. It offers a strongly socio-cultural view of language learning and teaching. It is comprehensive and global in perspective with a range of fresh new voices in English language teaching research.",
        "isbn": "9780387463018",
        "numberPages": 1201,
        "image": "http://books.google.com/books/content?id=ZxbUFm3aRkUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "221.46"
      },
      {
        "title": "Language in Cognitive Development",
        "authors": [
          "Katherine Nelson"
        ],
        "publisher": "Cambridge University Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book discusses the role of language as a cognitive and communicative tool in a child's early development.",
        "isbn": "052162987X",
        "numberPages": 452,
        "image": "http://books.google.com/books/content?id=CpIkpVkL2vAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Psychology"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "192.90"
      },
      {
        "title": "Perl & LWP",
        "authors": [
          "Sean M. Burke"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Perl soared to popularity as a language for creating and managing web content, but with LWP (Library for WWW in Perl), Perl is equally adept at consuming information on the Web. LWP is a suite of modules for fetching and processing web pages.The Web is a vast data source that contains everything from stock prices to movie credits, and with LWP all that data is just a few lines of code away. Anything you do on the Web, whether it's buying or selling, reading or writing, uploading or downloading, news to e-commerce, can be controlled with Perl and LWP. You can automate Web-based purchase orders as easily as you can set up a program to download MP3 files from a web site.Perl & LWP covers: Understanding LWP and its design Fetching and analyzing URLs Extracting information from HTML using regular expressions and tokens Working with the structure of HTML documents using trees Setting and inspecting HTTP headers and response codes Managing cookies Accessing information that requires authentication Extracting links Cooperating with proxy caches Writing web spiders (also known as robots) in a safe fashion Perl & LWP includes many step-by-step examples that show how to apply the various techniques. Programs to extract information from the web sites of BBC News, Altavista, ABEBooks.com, and the Weather Underground, to name just a few, are explained in detail, so that you understand how and why they work.Perl programmers who want to automate and mine the web can pick up this book and be immediately productive. Written by a contributor to LWP, and with a foreword by one of LWP's creators, Perl & LWP is the authoritative guide to this powerful and popular toolkit.",
        "isbn": "9780596552091",
        "numberPages": 262,
        "image": "http://books.google.com/books/content?id=1Cp2-ydxKj4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "288.70"
      },
      {
        "title": "PIC Circular LIV (54) – December 2021",
        "authors": [
          "Food and Agriculture Organization of the United Nations",
          "United Nations Environment Programme"
        ],
        "publisher": "Food & Agriculture Org.",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The PIC Circular is a key document under the Rotterdam Convention, both for the operation of the Prior Informed Consent (PIC) procedure and as a mechanism for the exchange of information. It is published in June and December in English, French and Spanish. It is done jointly with UNEP Secretariat of the Basel, Rotterdam and Stockholm Conventions in Geneva. It directly supports SO2.3.1-stakeholders in implementing international instruments.",
        "isbn": "9789251355565",
        "numberPages": 109,
        "image": "http://books.google.com/books/content?id=TsNfEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Medical"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "268.15"
      },
      {
        "title": "Overcoming the Challenge of Structural Change in Research Organisations",
        "authors": [
          "Angela Wroblewski",
          "Rachel Palmén"
        ],
        "publisher": "Emerald Group Publishing",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The ebook edition of this title is Open Access and freely available to read online. Presenting a reflexive approach to gender equality for research organisations developed within the TARGET project, the authors describe the experiences of the project’s implementation in seven Gender Equality Innovating Institutions.",
        "isbn": "9781802621211",
        "numberPages": 240,
        "image": "http://books.google.com/books/content?id=UpB8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Social Science"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "89.75"
      },
      {
        "title": "HTTP Developer's Handbook",
        "authors": [
          "Chris Shiflett"
        ],
        "publisher": "Sams Publishing",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "HTTP is the protocol that powers the Web. As Web applications become more sophisticated, and as emerging technologies continue to rely heavily on HTTP, understanding this protocol is becoming more and more essential for professional Web developers. By learning HTTP protocol, Web developers gain a deeper understanding of the Web's architecture and can create even better Web applications that are more reliable, faster, and more secure. The HTTP Developer's Handbook is written specifically for Web developers. It begins by introducing the protocol and explaining it in a straightforward manner. It then illustrates how to leverage this information to improve applications. Extensive information and examples are given covering a wide variety of issues, such as state and session management, caching, SSL, software architecture, and application security.",
        "isbn": "0672324547",
        "numberPages": 306,
        "image": "http://books.google.com/books/content?id=oxg8_i9dVakC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Bilgisayar Ağ Protokolü"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "56.33"
      },
      {
        "title": "Handbook of Service Description",
        "authors": [
          "Alistair Barros",
          "Daniel Oberle"
        ],
        "publisher": "Springer Science & Business Media",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The Handbook of Service Description introduces an in-depth overview of service description efforts. The book also highlights the recent Unified Service Description Language (USDL) in detail and discusses its methods. The Handbook of Service Description is the normative scientific reference for the upcoming standardization of the Unified Service Description Language (USDL). Complete documentation is included. The Handbook of Service Description is designed for those working in the service science industry as a reference book. Advanced-level students focused on computer science, engineering and business will also find this book a valuable asset.",
        "isbn": "9781461418641",
        "numberPages": 538,
        "image": "http://books.google.com/books/content?id=BRBLAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "74.29"
      },
      {
        "title": "Discourses of Student Success",
        "authors": [
          "Andrea R. Leone-Pizzighella"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book offers a linguistic ethnographic account of secondary schooling in Umbria, Italy, examining the complex intersection of language, socioeconomic class, social persona, and school choice to provide a holistic portrait of the situatedness of student “success.” The book explores the everyday sociolinguistic practices at the three types of Italian secondary schools in Umbria—the lyceum, the technical institute, and the vocational school—and the language ideologies and de facto language policies associated with them. An analysis of narrative, interviews, and classroom discourse unpacks the ways in which students are socialized by both peers and teachers into specific academic discourses and specialized forms of knowledge throughout their school careers. In those close analyses of the micro-interactional contexts of three classrooms, drawing on a corpus of naturally occurring classroom discourse, the volume illuminates the ways in which certain forms of talk are exalted while others policed and how students either submit to or resist the social labels ascribed to them. This account contributes new insights into the ways in which educational institutions are constructed and maintained via talk. This book will be of interest to students and scholars interested in educational linguistics, linguistic anthropology, classroom discourse, streamed-tracked education systems, and education policy.",
        "isbn": "9781000439823",
        "numberPages": 218,
        "image": "http://books.google.com/books/content?id=Tn08EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "212.63"
      },
      {
        "title": "Agile Engagement",
        "authors": [
          "Santiago Jaramillo",
          "Todd Richardson"
        ],
        "publisher": "John Wiley & Sons",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Achieve unprecedented business value by fostering true employee engagement Many organizations fail to realize and harness the power of their most valuable asset—their employees. Though they can be developed into a true competitive advantage, engagement isn't attainable if the employee isn't invested in the company's overall success. Agile Engagement offers business leaders a concrete strategy for building, maintaining, and utilizing employee engagement to achieve the highest level of business success. The key? Employees must feel like they are a part of their company's culture instead of having it handed down to them. Stories of failed employee engagement initiatives abound, and they all have one thing in common: they begin from the premise of \"initiative\" rather than \"employee.\" True engagement occurs when an employee's heart and mind are activated in a way that leads to their motivation and commitment to positively impact the company's goals and vision. This book shows you how to create an environment that stresses a culture of unity at all levels by showing you how to: Create a clear, compelling vision and corresponding engagement strategy through the Engagement Canvas Communicate your unique culture strategy throughout all levels of your company Foster grassroots, employee-led engagement initiatives Improve engagement continuously with the Emplify Score tool Agile Engagement provides a deeper look into real engagement, helping you foster a work environment that's rewarded with unsurpassed productivity, innovation, and competitive advantage, as well as employees who feel valued, respected, and heard.",
        "isbn": "9781119286929",
        "numberPages": 272,
        "image": "http://books.google.com/books/content?id=APKADQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Business & Economics"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "7.47"
      },
      {
        "title": "Mathematical Logic",
        "authors": [
          "Wei Li"
        ],
        "publisher": "Springer Science & Business Media",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Mathematical logic is a branch of mathematics that takes axiom systems and mathematical proofs as its objects of study. This book shows how it can also provide a foundation for the development of information science and technology. The first five chapters systematically present the core topics of classical mathematical logic, including the syntax and models of first-order languages, formal inference systems, computability and representability, and Gödel’s theorems. The last five chapters present extensions and developments of classical mathematical logic, particularly the concepts of version sequences of formal theories and their limits, the system of revision calculus, proschemes (formal descriptions of proof methods and strategies) and their properties, and the theory of inductive inference. All of these themes contribute to a formal theory of axiomatization and its application to the process of developing information technology and scientific theories. The book also describes the paradigm of three kinds of language environments for theories and it presents the basic properties required of a meta-language environment. Finally, the book brings these themes together by describing a workflow for scientific research in the information era in which formal methods, interactive software and human invention are all used to their advantage. This book represents a valuable reference for graduate and undergraduate students and researchers in mathematics, information science and technology, and other relevant areas of natural sciences. Its first five chapters serve as an undergraduate text in mathematical logic and the last five chapters are addressed to graduate students in relevant disciplines.",
        "isbn": "9783764399771",
        "numberPages": 273,
        "image": "http://books.google.com/books/content?id=u927rHHmylAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Mathematics"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "52.78"
      },
      {
        "title": "The European Parliament and its International Relations",
        "authors": [
          "Stelios Stavridis",
          "Daniela Irrera"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Following the Lisbon Treaty, the powers of the European Parliament in external relations have gradually expanded and it is increasingly influencing the foreign policy of the European Union. This book analyses the role of the European Parliament as an international actor and presents a new debate about its role outside the EU territory. It explores different policy areas including human rights, international aid, trade, crisis management and the environment to provide a systematic analysis of the modern global role of the European Parliament. The book also considers the European Parliament’s regional interactions with Africa, Latin America, the United States, Asia and the Middle East. With a common analytical framework and research covering the lifespan of the European Parliament from its first direct elections in 1979 to the present day, this comprehensive volume presents an unparalleled analysis of one of the most important institutions in the European Union. This book will be of interest to students and scholars of European Union politics and institutions, European policy, government, international relations and European history.",
        "isbn": "9781317499633",
        "numberPages": 336,
        "image": "http://books.google.com/books/content?id=weiTBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Political Science"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "277.22"
      },
      {
        "title": "The Study of Language in 17th-Century England",
        "authors": [
          "Vivian Salmon"
        ],
        "publisher": "John Benjamins Publishing",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This volume brings together a number of papers by Vivian Salmon, previously published in various journals and collections that are unfamiliar, and perhaps even inaccessible, to historians of the study of language. The central theme of the volume is the study of language in England in the 17th century. Papers in the first section treat aspects of the history of language teaching. The second section consists of three articles on the history of grammatical theory. The papers in the third and final section deal with the search for the ‘universal language’.",
        "isbn": "9789027286116",
        "numberPages": 218,
        "image": "http://books.google.com/books/content?id=8bhHAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "22.47"
      },
      {
        "title": "Language in the Mind",
        "authors": [
          "W. H. Hirtle"
        ],
        "publisher": "McGill-Queen's Press - MQUP",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The work of Gustave Guillaume (1883-1960) has had an important influence on French linguistics. But his theory of psychomechanics, which views language as systematic and semiotic, is not well known in the English-speaking world. Language in the Mind is the first detailed study of Guillaumian linguistics in English. Guillaume sees the word as the link between language as potential and as actual discourse. Meaning is both the representation of the speaker's momentary experience and the determining factor in the the word's use in discourse. Walter Hirtle illustrates Guillaume's general principles with examples drawn from contemporary English grammar and uses comparisons with other approaches, especially cognitive linguistics, to situate Guillaume's distinctive view of language as essentially a mental phenomenon. Hirtle is the former director of the Fonds Gustave Guillaume, an archive of 60,000 manuscript pages of the theorist's work, which is housed at Laval University, the principal centre for the study of psychomechanics.",
        "isbn": "UCSC:32106018986924",
        "numberPages": 298,
        "image": "http://books.google.com/books/content?id=YVhsAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "Anglais (Langue)"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "21.51"
      },
      {
        "title": "Always On",
        "authors": [
          "Naomi S. Baron",
          "Professor of Linguistics and Executive Director of the Center for Teaching Research & Learning Naomi S Baron"
        ],
        "publisher": "Oxford University Press on Demand",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Describes the impact that online and mobile technologies have had on our way of communicating with one another. Focuses on our ability to block incoming IMs, disguise ourselves on Facebook, and screen incoming callers. Explores the personal and social benefits of this technology.",
        "isbn": "9780195313055",
        "numberPages": 304,
        "image": "http://books.google.com/books/content?id=ElE77vJqSFcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "294.65"
      },
      {
        "title": "Slam Dunks and No-brainers",
        "authors": [
          "Leslie Savan"
        ],
        "publisher": "Alfred A. Knopf",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "With dazzling wit and acuity, three-time Pulitzer Prize finalist Savan dissects contemporary language to discover what the most popular idioms reveal about America today.",
        "isbn": "UCSC:32106018127800",
        "numberPages": 360,
        "image": "http://books.google.com/books/content?id=f_toAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "English language"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "219.85"
      },
      {
        "title": "Third language acquisition",
        "authors": [
          "Camilla Bardel",
          "Laura Sánchez"
        ],
        "publisher": "BoD – Books on Demand",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book deals with the phenomenon of third language (L3) acquisition. As a research field, L3 acquisition is established as a branch of multilingualism that is concerned with how multilinguals learn additional languages and the role that their multilingual background plays in the process of language learning. The volume points out some current directions in this particular research area with a number of studies that reveal the complexity of multilingual language learning and its typical variation and dynamics. The eight studies gathered in the book represent a wide range of theoretical positions and offer empirical evidence from learners belonging to different age groups, and with varying levels of proficiency in the target language, as well as in other non-native languages belonging to the learner’s repertoire. Diverse linguistic phenomena and language combinations are viewed from a perspective where all previously acquired languages have a potential role to play in the process of learning a new language. In the six empirical studies, contexts of language learning in school or at university level constitute the main outlet for data collection. These studies involve several language backgrounds and language combinations and focus on various linguistic features. The specific target languages in the empirical studies are English, French and Italian. The volume also includes two theoretical chapters. The first one conceptualizes and describes the different types of multilingual language learning investigated in the volume: i) third or additional language learning by learners who are bilinguals from an early age, and ii) third or additional language learning by people who have previous experience of one or more non-native languages learned after the critical period. In particular, issues related to the roles played by age and proficiency in multilingual acquisition are discussed. The other theoretical chapter conceptualizes the grammatical category of aspect, reviewing previous studies on second and third language acquisition of aspect. Different models for L3 learning and their relevance and implications for representations of aspect and for potential differences in the processing of second and third language acquisition are also examined in this chapter. As a whole, the book presents current research into third or additional language learning by young learners or adults, considering some of the most important factors for the complex process of multilingual language learning: the age of onset of the additional language and that of previously acquired languages, social and affective factors, instruction, language proficiency and literacy, the typology of the background languages and the role they play in shaping syntax, lexicon, and other components of a L3. The idea for this book emanates from the symposium Multilingualism, language proficiency and age, organized by Camilla Bardel and Laura Sánchez at Stockholm University, Department of Language Education, in December 2016.",
        "isbn": "9783961102815",
        "numberPages": 277,
        "image": "http://books.google.com/books/content?id=uKUKEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "111.04"
      },
      {
        "title": "Language Planning in Africa",
        "authors": [
          "Nkonko Kamwangamalu",
          "Richard B. Baldauf Jr.",
          "Robert B. Kaplan"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This volume focuses on language planning in the Cameroon, Sudan and Zimbabwe, explaining the linguistic diversity, historical and political contexts, current language situation (including language-in-education planning), the role of the media, the role of religion and the roles of non-indigenous languages. The authors are indigenous to the situations described, and draw on their experience and extensive fieldwork there. The extended case studies contained in this volume draw together the literature on each of the polities to present an overview of the existing research available, while also providing new research-based information. The purpose of this volume is to provide an up-to-date overview of the language situation in each polity based on a series of key questions, in the hope that this might facilitate the development of a richer theory to guide language policy and planning in other polities where similar issues may arise. This book comprises case studies originally published in the journal Current Issues in Language Planning.",
        "isbn": "9781134916887",
        "numberPages": 238,
        "image": "http://books.google.com/books/content?id=t6TsCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "48.91"
      },
      {
        "title": "Language Contact",
        "authors": [
          "Ernst Håkon Jahr"
        ],
        "publisher": "Walter de Gruyter",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "TRENDS IN LINGUISTICS is a series of books that open new perspectives in our understanding of language. The series publishes state-of-the-art work on core areas of linguistics across theoretical frameworks, as well as studies that provide new insights by approaching language from an interdisciplinary perspective. TRENDS IN LINGUISTICS considers itself a forum for cutting-edge research based on solid empirical data on language in its various manifestations, including sign languages. It regards linguistic variation in its synchronic and diachronic dimensions as well as in its social contexts as important sources of insight for a better understanding of the design of linguistic systems and the ecology and evolution of language. TRENDS IN LINGUISTICS publishes monographs and outstanding dissertations as well as edited volumes, which provide the opportunity to address controversial topics from different empirical and theoretical viewpoints. High quality standards are ensured through anonymous reviewing.",
        "isbn": "3110128020",
        "numberPages": 254,
        "image": "http://books.google.com/books/content?id=qfQ4iFhXx4YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Languages in contact"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "242.54"
      },
      {
        "title": "Being and Meaning",
        "authors": [
          "Sebastian Alackapally"
        ],
        "publisher": "Motilal Banarsidass Publishe",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Being and Meaning is a comparative study of the concepts of Being and Language in Bhartrhari and Martin Heidegger, emphasising the universality of their thinking. Language in Bhartrhari's vision is the medium of the self-expression for the Ultimate Reality (Sabdatattva). In Heidegger's thinking language is the Original Utterance (Sage) which Being speaks to man. Being expresses itself in language, and phenomena in the world occur simultaneously with the occurrence of language. Bhartrhari and Heidegger lead one to the belonging togetherness of Being and being beyond all conceptualizing, transcending the bounds of Orient and Occident.",
        "isbn": "8120818032",
        "numberPages": 320,
        "image": "http://books.google.com/books/content?id=liCLrmfnKSoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Ontology"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "264.28"
      },
      {
        "title": "Academic Language in Diverse Classrooms: English Language Arts, Grades K-2",
        "authors": [
          "Margo Gottlieb",
          "Gisela Ernst-Slavit"
        ],
        "publisher": "Corwin Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Make every student fluent in the language of learning. The Common Core and ELD standards provide pathways to academic success through academic language. Using an integrated Curricular Framework, districts, schools and professional learning communities can: Design and implement thematic units for learning Draw from content and language standards to set targets for all students Examine standards-centered materials for academic language Collaborate in planning instruction and assessment within and across lessons Consider linguistic and cultural resources of the students Create differentiated content and language objectives Delve deeply into instructional strategies involving academic language Reflect on teaching and learning",
        "isbn": "9781452278186",
        "numberPages": 201,
        "image": "http://books.google.com/books/content?id=7ZNyAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "229.28"
      },
      {
        "title": "Mothers of Invention",
        "authors": [
          "Miléna Santoro"
        ],
        "publisher": "McGill-Queen's Press - MQUP",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Mothers of Invention draws together innovative works of fiction written by French and Quebec feminists in the mid-1970s. Through an analysis of the strategies adopted by Hlne Cixous, Madeleine Gagnon, Nicole Brossard, and Jeanne Hyvrard as they rework maternal and (pro)creative metaphors and play with language and conventions of genre, Milna Santoro identifies a transatlantic community of women writers who share a subversive aesthetic that participates in, even as it transforms, the tradition of the avant-garde in twentieth-century literature. Santoro elucidates notoriously difficult works by the four \"mothers of invention\" studied - Cixous and Hyvrard from France, and Gagnon and Brossard from Quebec - showing how the rethinking of images associated with femininity and motherhood, a disruptive approach to language, and a subversive relation to novelistic conventions characterize these writers' search for a writing that will best express women's desires and dreams. Mothers of Invention situates such ideologically motivated textual practices within the avant-garde tradition, even as it suggests how women's experimental writings collectively transform our understanding of that tradition. Santoro makes clear the shared ethical and aesthetic commitments that nourished a transatlantic community whose contribution to mainstream literature and cultural productions, including postmodernism, is still being felt today.",
        "isbn": "0773524878",
        "numberPages": 372,
        "image": "http://books.google.com/books/content?id=86ffQpJq868C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Literary Criticism"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "49.59"
      },
      {
        "title": "Sip",
        "authors": [
          "Alan B. Johnston"
        ],
        "publisher": "Artech House",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This cutting-edge book shows you how SIP provides a highly-scalable and cost-effective way to offer new and exciting telecommunication feature sets, helping you design your OC next generationOCO network and develop new applications and software stacks. Other key discussions include SIP as a key component in the Internet multimedia conferencing architecture, request and response messages, devices in a typical network, types of servers, SIP headers, comparisons with existing signaling protocols including H.323, related protocols SDP (Session Description Protocol) and RTP (Real-time Transport Protocol), and the future direction of SIP. Detailed call flow diagrams illustrate how this technology works with other protocols such as H.323 and ISUP. Moreover, this book covers SIP RFC 3261 and the complete set of SIP extension RFCs.\"",
        "isbn": "9781607839965",
        "numberPages": 427,
        "image": "http://books.google.com/books/content?id=AKDgVrDz9mYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "283.47"
      },
      {
        "title": "ENGLISH GRAMMAR THE ENGLISH LA",
        "authors": [
          "William Chauncey 1793-1881 Fowler"
        ],
        "publisher": "Wentworth Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This work has been selected by scholars as being culturally important, and is part of the knowledge base of civilization as we know it. This work was reproduced from the original artifact, and remains as true to the original work as possible. Therefore, you will see the original copyright references, library stamps (as most of these works have been housed in our most important libraries around the world), and other notations in the work. This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work. As a reproduction of a historical artifact, this work may contain missing or blurred pages, poor pictures, errant marks, etc. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
        "isbn": "1362204722",
        "numberPages": 812,
        "image": "http://books.google.com/books/content?id=rL9evgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "History"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "49.99"
      },
      {
        "title": "English as a Lingua Franca",
        "authors": [
          "Ian Mackenzie"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "English as a Lingua Franca: Theorizing and Teaching English examines the English used among non-native speakers around the world today and its relation to English as a native language, as well as the implications for English language teaching. Challenging and incisive, this book analyses positive and negative accounts of English as a lingua franca, and its linguistic features, within the context of: native and World Englishes multilingualism and intercultural communication sociolinguistic issues including accent and identity classroom teaching and learning English as a Lingua Franca is a useful guide for teachers and trainee teachers, and will be essential reading for advanced students and linguists concerned with multilingualism, language contact, language learning, language change, and the place of English in the world today.",
        "isbn": "9781134503810",
        "numberPages": 224,
        "image": "http://books.google.com/books/content?id=f7cTAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "187.79"
      },
      {
        "title": "The Revival of Classical Tongue",
        "authors": [
          "Jack Fellman"
        ],
        "publisher": "Walter de Gruyter",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "CONTRIBUTIONS TO THE SOCIOLOGY OF LANGUAGE brings to students, researchers and practitioners in all of the social and language-related sciences carefully selected book-length publications dealing with sociolinguistic theory, methods, findings and applications. It approaches the study of language in society in its broadest sense, as a truly international and interdisciplinary field in which various approaches, theoretical and empirical, supplement and complement each other. The series invites the attention of linguists, language teachers of all interests, sociologists, political scientists, anthropologists, historians etc. to the development of the sociology of language.",
        "isbn": "9783110879100",
        "numberPages": 151,
        "image": "http://books.google.com/books/content?id=eJnLkfou_BkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Social Science"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "155.65"
      },
      {
        "title": "Linguistic Policies and the Survival of Regional Languages in France and Britain",
        "authors": [
          "A. Judge"
        ],
        "publisher": "Springer",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "It was traditionally assumed that a single official language was necessary for the wellbeing of the state, particularly in France and Britain. This assumption is now questioned, and regional languages are making, in some cases, an impressive comeback. This book analyses a range of languages' development, decline and efforts at regeneration.",
        "isbn": "9780230286177",
        "numberPages": 265,
        "image": "http://books.google.com/books/content?id=siF-DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "227.27"
      },
      {
        "title": "Beginning RSS and Atom Programming",
        "authors": [
          "Danny Ayers",
          "Andrew Watt"
        ],
        "publisher": "Wrox",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Beginning RSS and Atom Programming RSS and Atom are specifications that give users the power to subscribe to information they want to receive and give content developers tools to provide continuous subscriptions to willing recipients in a spam-free setting. RSS and Atom are the technical power behind the growing millions of blogs on the Web. Blogs change the Web from a set of static pages or sites requiring programming expertise to update to an ever changing, constantly updated landscape that anyone can contribute to. RSS and Atom syndication provides users an easy way to track new information on as many Web sites as they want. This book offers you insight to understanding the issues facing the user community so you can meet users' needs by writing software and Web sites using RSS and Atom feeds. As the first book to cover RSS and Atom together, it begins with an introduction to all the current and coming versions of RSS and Atom. You'll go step by step through the process of producing, aggregating, and storing information feeds. When you're finished, you'll be able to produce client software and Web sites that create, manipulate, aggregate, and display information feeds effectively. What you will learn from this book What developers' tools are available to create and customize feeds The various approaches to storing feed data, from XML to SQL to RDF Why RSS and Atom information feeds must follow the rules of XML syntax How XQuery and XSLT can be powerful tools for selecting and manipulating a portion of an RSS or Atom feed What's required to build a tool to aggregate information from multiple feeds The newest use for RSS — podcasting MP3 audio files to iPods or other MP3 devices Who this book is for This book is for beginning programmers who have some programming experience and are looking to add information feeds to their Web sites. No previous programming experience is assumed. \"This book is full of practical advice and tips for consuming, producing, and manipulating information feeds. I only wish I had a book like this when I started writing RSS Bandit.\" — Dare Obasanjo, RSS Bandit creator: http://www.rssbandit.org.",
        "isbn": "UOM:39015060897918",
        "numberPages": 772,
        "image": "http://books.google.com/books/content?id=uYNQAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "Computers"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "64.47"
      },
      {
        "title": "Speaking Chicana",
        "authors": [
          "D. Letticia Galindo",
          "María D. Gonzales"
        ],
        "publisher": "University of Arizona Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Previous studies in the fields of applied linguistics, sociolinguistics, and gender studies have focused upon Chicano linguistic communities as a monolith or have focused entirely upon male-centered aspects of language use, leaving a tremendous gap in works about Chicanas, for Chicanas, and by Chicanas as they pertain to language-related issues. Speaking Chicana bridges that gap, offering for the first time an extensive examination of language issues among Chicanas. Flowing throughout this collection of essays are themes of empowerment and suppression of voice. Combining empirical studies and personal narratives in the form of testimonios, the editors expand the boundaries of linguistic study to include disciplines such as art, law, women's studies, and literature. The result is a multifaceted approach to the study of Chicana speech—one that provides a significant survey of the literature on Chicanas and language production. Ten contributors—from linguistic to lawyer, from poet to art historian—discuss language varieties and attitudes; bilinguality; codeswitching; cultural identity and language; language in literature and art; taboo language; and legal discourse. Speaking Chicana celebrates the complexity and diversity of linguistic contexts and influences reflected in Chicana speech. Various essays explore the speech of rural women; the evolution of linguistic forces over time; the influence of U.S. public education; linguistic dilemmas encountered by literary authors and women in the legal profession; and language used by pachucas and pintas.Speaking Chicana represents a significant contribution, not only to sociolinguistics, but also to other fields, including women's studies, Chicana/o studies, anthropology, and cultural studies. Contents Part 1. Reconstruction: Language Varieties, Language Use, and Language Attitudes 1. Crossing Social and Cultural Borders: The Road to Language Hybridity, María Dolores Gonzales 2. Fighting Words: Latina Girls, Gangs, and Language Attitudes, Norma Mendoza-Denton Part 2. Reflection: Testimonios 3. Speaking as a Chicana: Tracing Cultural Heritage through Silence and Betrayal, Jacqueline M. Martínez 4. The Power of Language: From the Back of the Bus to the Ivory Tower, Christine Marín 5. Challenging Tradition: Opening the Headgate, Ida M. Luján 6. Mexican Blood Runs through My Veins, Aurora E. Orozco Part 3. Innovation: Speaking Creatively/Creatively Speaking 7. Searching for a Voice: Ambiguities and Possibilities, Erlinda Gonzales-Berry 8. Sacred Cults, Subversive Icons: Chicanas and the Pictorial Language of Catholicism, Charlene Villaseñor Black 9. Caló and Taboo Language Use among Chicanas: A Description of Linguistic Appropriation and Innovation, D. Letticia Galindo 10. Máscaras, Trenzas, y Greñas: Un/Masking the Self While Un/Braiding Latina Stories and Legal Discourse, Margaret E. Montoya",
        "isbn": "9780816551200",
        "numberPages": 239,
        "image": "http://books.google.com/books/content?id=3IzAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Literary Criticism"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "15.24"
      },
      {
        "title": "Minerals Yearbook",
        "authors": [
          "Mines Bureau",
          "Geological Survey",
          "Interior Department"
        ],
        "publisher": "Minerals Yearbook: Volume 3: A",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The region of Europe and Central Eurasia defined in this volume encompasses territory that extends from the Atlantic Coast of Europe to the Pacific Coast of the Russian Federation. It includes the British Isles, Iceland, and Greenland (a self- governing part of the Kingdom of Denmark). Included are mineral commodity outlook tables, plus global overview research for particularly commodities within a specific regions/countries are presented throughout the text. Manufacturers of these metals and commodities, along with trade brokers that may specialize in imports and exports, political scientists, and economists may also be interested in this volume. Students pursuing research on specific metals and mineral commodities for world economy courses may be interested in this volume. Related products: Other print volumes in the Minerals Yearbook series can be found here: https://bookstore.gpo.gov/catalog/science-technology/minerals-metals/minerals-yearbook Minerals and Metals resources collection can be found here: https://bookstore.gpo.gov/catalog/science-technology/minerals-metals/minerals-yearbook",
        "isbn": "141134071X",
        "numberPages": 410,
        "image": "http://books.google.com/books/content?id=b5IchKx6eUAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Business & Economics"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "193.47"
      },
      {
        "title": "Antiquities Beyond Humanism",
        "authors": [
          "Emanuela Bianchi",
          "Sara Brill",
          "Brooke Holmes"
        ],
        "publisher": "Oxford University Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Greco-Roman antiquity is often presumed to provide the very paradigm of humanism from the Renaissance to the present. This paradigm has been increasingly challenged by new theoretical currents such as posthumanism and the \"new materialisms\", which point toward entities, forces, and systems that pass through and beyond the human and dislodge it from its primacy as the measure of things. Antiquities beyond Humanismseeks to explode the presumed dichotomy between the ancient tradition and the twenty-first century \"turn\" by exploring the myriad ways in which Greek and Roman philosophy and literature can be understood as foregrounding the non-human. Greek philosophy in particular is filled with metaphysical explanations of the cosmos grounded in observations of the natural world, while other areas of ancient humanistic inquiry - poetry, political theory, medicine - extend into the realms of plant, animal, and even stone life, continually throwing into question the ontological status of living and non-living beings. By casting the ancient non-human or more-than-human in a new light in relation to contemporary questions of gender, ecological networks and non-human communities, voice, eros, and the ethics and the politics of posthumanism, the volume demonstrates that encounters with ancient texts, experienced as both familiar and strange, can help forge new understandings of life, whether understood as physical, psychical, divine, or cosmic.",
        "isbn": "9780192528223",
        "numberPages": 336,
        "image": "http://books.google.com/books/content?id=vO-MDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Literary Criticism"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "206.30"
      },
      {
        "title": "The Politics of Language",
        "authors": [
          "Carol L. Schmid"
        ],
        "publisher": "Oxford University Press on Demand",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This volume surveys and analyzes the historical background of recent controversies over language in the US, and compares the country to two official multilingual societies: Canada and Switzerland.;This book should be suitable for courses in linguistics, political science, and sociology. It is intended for undergraduate students and graduate students interested in the relationship between language and race, ethnic relations, and political sociology.",
        "isbn": "9780195137750",
        "numberPages": 229,
        "image": "http://books.google.com/books/content?id=H3g8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "187.19"
      },
      {
        "title": "The directory of EU information sources",
        "authors": [
          "Rebecca Bomford"
        ],
        "publisher": "Routledge (Taylor & Francis Group)",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This is a new sixteenth edition of the Directory of EU Information Sources. It brings together a broad range of information sources, comprising not only the various constituent institutions of the European Union, their personnel, publications, information websites and representations in Europe and the rest of the world, but also diplomatic representation in Brussels, European-level trade and professional associations and NGOs, consultants and lawyers specializing in EU affairs, Press Agencies, EU grants and loans programmes, and universities offering courses in European integration. This is the most comprehensive compilation of contacts and published information on the European Union, providing access to over 12,500 information sources.",
        "isbn": "1857433564",
        "numberPages": 608,
        "image": "http://books.google.com/books/content?id=pYYnAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "Political Science"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "31.95"
      },
      {
        "title": "English Medium Instruction in Multilingual and Multicultural Universities",
        "authors": [
          "Birgit Henriksen",
          "Anne Holmen",
          "Joyce Kling"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "English Medium Instruction in Multilingual and Multicultural Universities analyses the issues related to EMI at both a local and international level and provides a broad perspective on this topic. Drawing on field studies from a Northern European context and based primarily on research carried out at the University of Copenhagen, this book: introduces a topical global issue that is central to the higher education research agenda; identifies the issues and challenges involved in EMI in relation to central linguistic, pedagogical, sociolinguistic and socio-cultural concepts; captures university lecturers’ experiences in the midst of curricular change and presents reflections on ways to navigate professionally in English to meet the demands of the multilingual and multicultural classroom. English Medium Instruction in Multilingual and Multicultural Universities is key reading for researchers, pre- and in-service teachers, university management, educational planners, and advanced students with an interest in EMI and the multilingual, multicultural university setting.",
        "isbn": "9780429850639",
        "numberPages": 200,
        "image": "http://books.google.com/books/content?id=kDVlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "54.76"
      },
      {
        "title": "Learn English Faster in Half the Time: How to Master the English Language in Rapid Time. Learn Common Mistakes in English, Pass English Examinations.",
        "authors": [
          "The Learning English Team"
        ],
        "publisher": "Independently Published",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "\"Learn English faster in half the time\" will show you how to understand and speak English quickly. It is essential for students as an English textbook for different examinations. \"Learn English faster in half the time\" is highly praised by teachers, pupils and parents. This English book will help you to achieve a high ELS, TOEFL, GCSE, IELTS, SAT, WAEC, TOEIC, etc., scores. \"Learn English faster in half the time\" is ideal for any teacher or parent looking for an English textbook covering the fundamentals of grammar, spelling and punctuation. These are provided throughout the book giving the key skills required for a confident use of the English language and for a confident preparation for English examinations. This book will also teach you how to understand native English speakers and help you to communicate clearly with them when you travel. We know that grammar is important, but remembering vocabulary and phrases will help you to speak English fluently even faster. \"Learn English faster in half the time\" will help you to feel stronger and more confident when speaking English to others, thereby helping you to get better English speaking jobs and most importantly, this book will help you in enjoying the company of English speaking friends worldwide. Get your copy now at this discounted price.",
        "isbn": "1718187173",
        "numberPages": 186,
        "image": "http://books.google.com/books/content?id=AQhYwQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "Foreign Language Study"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "182.42"
      },
      {
        "title": "Language in Context",
        "authors": [
          "Jason Stanley"
        ],
        "publisher": "Clarendon Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Natural languages all contain constructions the interpretation of which depends upon the situation in which they are used. In Language and Context, Jason Stanley presents a series of essays which develop a theory of how the situation in which we speak interacts with the words we use to help produce what we say. The reason we can so smoothly operate with sentences that can be used to express very different items of information, Stanley argues, is that there are linguistically mandated constraints on the effects of the situation on what we say. These linguistically mandated constraints are most evident in the cases of sentences containing explicit pronouns, such as \"She is a mathematician\", where interpretation of the information expressed is guided by the use of the pronoun \"she\". But even when such explicit pronouns are lacking, our sentences provide similar cues to allow our interlocutors to determine the information expressed. We are, in the main, confident that our interlocutors will smoothly grasp what we say, because the grammar and meaning of our sentences encodes these constraints. In defending this theory, Stanley pays close attention to specific cases of context-sensitive constructions, such as quantified noun phrases, comparative adjectives, and conditionals. Philosophers and cognitive scientist have appealed to the dependence of what is intuitively said by a sentence on the situation in which it is uttered to argue against the possibility of a systematic theory of meaning for natural language. The theory developed in this book is a vigorous defense of the possibility of a systematic theory of meaning for natural language against these influential tendencies.",
        "isbn": "UCSC:32106019095600",
        "numberPages": 294,
        "image": "http://books.google.com/books/content?id=wmNsAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "88.22"
      },
      {
        "title": "Emotive Language in Argumentation",
        "authors": [
          "Fabrizio Macagno",
          "Douglas Walton"
        ],
        "publisher": "Cambridge University Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book analyzes the uses and implicit dimensions of emotive language from a pragmatic, dialectical, epistemic and rhetorical perspective.",
        "isbn": "9781107035980",
        "numberPages": 305,
        "image": "http://books.google.com/books/content?id=1RpiAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Business & Economics"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "270.07"
      },
      {
        "title": "Patterns in Language",
        "authors": [
          "Joanna Thornborrow",
          "Shân Wareing"
        ],
        "publisher": "Psychology Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This student-friendly textbook uses the principles of linguistic analysis to investigate the aesthetic use of language in literary (and non-literary) texts.",
        "isbn": "0415140641",
        "numberPages": 284,
        "image": "http://books.google.com/books/content?id=fmWMnbVMxoMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language and languages"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "85.86"
      },
      {
        "title": "Handbook of Early Literacy Research",
        "authors": [
          "Susan B. Neuman",
          "David K. Dickinson"
        ],
        "publisher": "Guilford Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Current research increasingly highlights the role of early literacy in young children's development--and facilitates the growth of practices and policies that promote success among diverse learners. The Handbook of Early Literacy Research presents cutting-edge knowledge on all aspects of literacy learning in the preschool years. Volume 1 covers such essential topics as major theories of early literacy; writing development; understanding learning disabilities, including early intervention approaches; cultural and socioeconomic contexts of literacy development; and tutoring programs and other special intervention efforts.",
        "isbn": "1572308958",
        "numberPages": 516,
        "image": "http://books.google.com/books/content?id=afiqtIdRQGwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "198.61"
      },
      {
        "title": "Talk that Counts",
        "authors": [
          "Ronald K. S. Macaulay"
        ],
        "publisher": "Oxford University Press on Demand",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Here the author provides a new way of examining sociolinguistic variation. Using a sample from 33 speakers of English in Glasgow, he offers a new methodological paradigm to an audience of sociolinguists and others concerned with discourse analysis.",
        "isbn": "9780195173819",
        "numberPages": 236,
        "image": "http://books.google.com/books/content?id=WHw8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "249.25"
      },
      {
        "title": "Gayle",
        "authors": [
          "Ken Cage"
        ],
        "publisher": "Jacana Media",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Publisher Description",
        "isbn": "191993149X",
        "numberPages": 122,
        "image": "http://books.google.com/books/content?id=WSn7026sq_cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "English language"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "10.37"
      },
      {
        "title": "Language and Sustainable Development",
        "authors": [
          "Lisa J. McEntee-Atalianis",
          "Humphrey Tonkin"
        ],
        "publisher": "Springer Nature",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book addresses the importance of language in matters of sustainability and incorporating such concerns in implementing the UN’s Sustainable Development Goals (SDGs). Sustainable language policy must aim to include all groups, including language minorities and marginalized populations, such as refugees and aid recipients, in conditions that allow for their inclusion in making and implementing policy. The book brings together nine studies covering such topics as language and digital resources, sustainable and inclusive multilingual education, national language policy, and language in peacekeeping operations. A final chapter addresses the crucial intersection between sociolinguistics and economics, and the implications of this for development and the SDGs.",
        "isbn": "9783031249181",
        "numberPages": 205,
        "image": "http://books.google.com/books/content?id=n-WxEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Education"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "168.18"
      },
      {
        "title": "Theory in Social and Cultural Anthropology",
        "authors": [
          "R. Jon McGee",
          "Richard L. Warms"
        ],
        "publisher": "SAGE Publications",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Social and cultural anthropology and archaeology are rich subjects with deep connections in the social and physical sciences. Over the past 150 years, the subject matter and different theoretical perspectives have expanded so greatly that no single individual can command all of it. Consequently, both advanced students and professionals may be confronted with theoretical positions and names of theorists with whom they are only partially familiar, if they have heard of them at all. Students, in particular, are likely to turn to the web to find quick background information on theorists and theories. However, most web-based information is inaccurate and/or lacks depth. Students and professionals need a source to provide a quick overview of a particular theory and theorist with just the basics—the \"who, what, where, how, and why,\" if you will. In response, SAGE Reference plans to publish the two-volume Theory in Social and Cultural Anthropology: An Encyclopedia. Features & Benefits: Two volumes containing approximately 335 signed entries provide users with the most authoritative and thorough reference resource available on anthropology theory, both in terms of breadth and depth of coverage. To ease navigation between and among related entries, a Reader's Guide groups entries thematically and each entry is followed by Cross-References. In the electronic version, the Reader's Guide combines with the Cross-References and a detailed Index to provide robust search-and-browse capabilities. An appendix with a Chronology of Anthropology Theory allows students to easily chart directions and trends in thought and theory from early times to the present. Suggestions for Further Reading at the end of each entry and a Master Bibliography at the end guide readers to sources for more detailed research and discussion.",
        "isbn": "9781452276304",
        "numberPages": 1053,
        "image": "http://books.google.com/books/content?id=0sR1AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Social Science"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "231.53"
      },
      {
        "title": "The Impact of Global English on Cultural Identities in the United Arab Emirates",
        "authors": [
          "Sarah Hopkyns"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book provides a nuanced portrait of the complexities of the cultural and linguistic landscape in the United Arab Emirates, unpacking the ever shifting dynamics and attitudes between and about English and Arabic in the region in today’s era of superdiversity.// Employing a qualitative phenomenological approach which draws on a rich set of data from questionnaires and focus groups comprising both Emirati and expatriate students and teachers, Hopkyns problematizes the common binary East-West paradigm focused around the tension between the use of English and Arabic in the UAE. Key issues emerging from the resulting analysis include the differing attitudes toward English and in particular, English Medium Instruction, the impact of this tension on identity, and the ways in which the two languages are employed in distinct ways on an everyday scale. // The volume will be of particular interest to students and scholars interested in issues around language and identity, language policy and planning, multilingualism, translanguaging, and language and education.",
        "isbn": "9781000059618",
        "numberPages": 214,
        "image": "http://books.google.com/books/content?id=RsnXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "137.37"
      },
      {
        "title": "Narrating Stance, Morality, and Political Identity",
        "authors": [
          "Lauren Zentz"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book offers unique insights into the use of Facebook after the 2016 US presidential election, interrogating how users in private groups draw on individual experiences in movement building and identity construction while also critically reflecting on ethnographic practices around social media. The volume draws on the author’s own involvement in a specific Facebook group focused around activism and community organizing in Texas following the 2016 US presidential election. Chapters draw on the frameworks of \"small stories\" and \"stance\" to unpack the ways in which group members use parts of their individual stories to signal beliefs to others, present themselves in relation to the group, and signal virtues of moral authority on various pressing political issues. Building on these analyses, Zentz goes on to address ways in which the scales of politics are being navigated and modified at the grassroots level in our highly networked world. This book contributes to ongoing conversations about the realities of internet use within linguistic anthropology and new media studies, and how researchers might seek to account for social media use and access to this data as these technologies develop further. This book is key reading for students and scholars in linguistic anthropology, media studies, and activism and social movement studies.",
        "isbn": "9781000389364",
        "numberPages": 272,
        "image": "http://books.google.com/books/content?id=jBguEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "291.97"
      },
      {
        "title": "Mappings in Thought and Language",
        "authors": [
          "Gilles Fauconnier"
        ],
        "publisher": "Cambridge University Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Meaning in everyday thought and language is constructed at lightning speed. We are not conscious of the staggering complexity of the cognitive operations that drive our simplest behavior. This book reveals the creativity that underlies our effortless use of language in everyday life, when we engage in conversation, understand humor, or solve puzzles. The capacities and principles that we develop from infancy for ordinary thinking and talking are also the ones that drive scientific and artistic thought, high-level reasoning, and conceptual change. Researchers and graduate students in linguistics, cognitive science, and philosophy of language will find this text to be a fascinating addition to their collections.",
        "isbn": "0521599539",
        "numberPages": 228,
        "image": "http://books.google.com/books/content?id=IbNeKSceXBoC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "Psychology"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "182.46"
      },
      {
        "title": "The Spanish Language in the United States",
        "authors": [
          "José A. Cobas",
          "Bonnie Urciuoli",
          "Joe Feagin",
          "Daniel J. Delgado"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "The Spanish Language in the United States addresses the rootedness of Spanish in the United States, its racialization, and Spanish speakers’ resistance against racialization. This novel approach challenges the \"foreigner\" status of Spanish and shows that racialization victims do not take their oppression meekly. It traces the rootedness of Spanish since the 1500s, when the Spanish empire began the settlement of the new land, till today, when 39 million U.S. Latinos speak Spanish at home. Authors show how whites categorize Spanish speaking in ways that denigrate the non-standard language habits of Spanish speakers—including in schools—highlighting ways of overcoming racism.",
        "isbn": "9781000531107",
        "numberPages": 174,
        "image": "http://books.google.com/books/content?id=KUdWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Social Science"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "60.72"
      },
      {
        "title": "Language Hacking Spanish",
        "authors": [
          "Benny Lewis"
        ],
        "publisher": "Quercus",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "It's true that some people spend years studying Spanish before they finally get around to speaking the language. But here's a better idea. Skip the years of study and jump right to the speaking part. Sound crazy? No, it's language hacking. Unlike most traditional language courses that try to teach you the rules of Spanish, #LanguageHacking shows you how to learn and speak Italian through proven memory techniques, unconventional shortcuts and conversation strategies perfected by one of the world's greatest language learners, Benny Lewis, aka the Irish Polyglot. Using the language hacks -shortcuts that make learning simple - that Benny mastered while learning his 11 languages and his 'speak from the start' method, you will crack the language code and exponentially increase your language abilities so that you can get fluent faster. It's not magic. It's not a language gene. It's not something only \"other people\" can do. It's about being smart with how you learn, learning what's indispensable, skipping what's not, and using what you've learned to have real conversations in Spanish from day one. The Method #LanguageHacking takes a modern approach to language learning, blending the power of online social collaboration with traditional methods. It focuses on the conversations that learners need to master right away, rather than presenting language in order of difficulty like most courses. This means that you can have conversations immediately, not after years of study. Each of the 10 units culminates with a speaking 'mission' that prepares you to use the language you've learned to talk about yourself. Through the language hacker online learner community, you can share your personalized speaking 'missions' with other learners - getting and giving feedback and extending your learning beyond the pages of the book . You don't need to go abroad to learn a language any more.",
        "isbn": "9781473677401",
        "numberPages": 256,
        "image": "http://books.google.com/books/content?id=xMNADwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "Foreign Language Study"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "209.17"
      },
      {
        "title": "Teaching Korean as a Foreign Language",
        "authors": [
          "Young-mee Yu Cho"
        ],
        "publisher": "Routledge",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Teaching Korean as a Foreign Language: Theories and Practices is designed for prospective or in-service Korean as a Foreign Language (KFL) teachers. With contributions from leading experts in the field, readers will gain an understanding of the theoretical framework and practical applications of KFL education in the context of Second Language Acquisition (SLA). The eight chapters explore the history of and current issues in language education, the practicalities of being a classroom teacher, and teaching and evaluation techniques for developing language and cultural proficiency. This comprehensive volume also includes an annotated bibliography which lists over 500 of the most recent and pertinent research articles and doctoral dissertations in the area. This bibliography will be of great service to students, teachers, and any researchers in applied linguistics and second language acquisition interested in Korean language education.",
        "isbn": "0367199637",
        "numberPages": 288,
        "image": "http://books.google.com/books/content?id=lQF7zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "Korean language"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "206.80"
      },
      {
        "title": "Jamieson's Dictionary of the Scottish Language",
        "authors": [
          "John Jamieson"
        ],
        "publisher": "Forgotten Books",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Excerpt from Jamieson's Dictionary of the Scottish Language: In Which the Words Are Explained in Their Different Senses, Authorized by the Names of the Writers by Whom They Are Used, or the Titles of the Works in Which They Occur, and Derived From Their Originals In a work Of such a multifarious nature, and containing SO many words from foreign languages, it would be wonderful if no error had escaped the vigilance of the Editor; but he trusts that such as may be dis covered will only be of a trivial nature, and that many will now possess a reliable key to unlock the valuable stores Of our Scottish literature, which are shut up in a language that is fast; becoming unknown. About the Publisher Forgotten Books publishes hundreds of thousands of rare and classic books. Find more at www.forgottenbooks.com This book is a reproduction of an important historical work. Forgotten Books uses state-of-the-art technology to digitally reconstruct the work, preserving the original format whilst repairing imperfections present in the aged copy. In rare cases, an imperfection in the original, such as a blemish or missing page, may be replicated in our edition. We do, however, repair the vast majority of imperfections successfully; any imperfections that remain are intentionally left to preserve the state of such historical works.",
        "isbn": "0282293302",
        "numberPages": 702,
        "image": "http://books.google.com/books/content?id=AqU3tAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "Foreign Language Study"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "13.81"
      },
      {
        "title": "Investigating English in Europe",
        "authors": [
          "Andrew Linn"
        ],
        "publisher": "Walter de Gruyter GmbH & Co KG",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This book is an invaluable resource for anyone interested in researching or just learning more about the changing role and status of English across Europe. The status of English today is explained in its historical context before the authors present some of the key debates and ideas relating to the challenge English poses for learners, teachers, and language policy makers.",
        "isbn": "9781501500565",
        "numberPages": 335,
        "image": "http://books.google.com/books/content?id=0nnqDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "156.33"
      },
      {
        "title": "Buddhist Philosophy of Language in India",
        "authors": [
          "Lawrence J. McCrea",
          "Parimal G. Patil"
        ],
        "publisher": "Columbia University Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Jnanasrimitra (975-1025) was regarded by both Buddhists and non-Buddhists as the most important Indian philosopher of his generation. His theory of exclusion combined a philosophy of language with a theory of conceptual content to explore the nature of words and thought. Jnanasrimitra's theory informed much of the work accomplished at Vikramasila, a monastic and educational complex instrumental to the growth of Buddhism. His ideas were also passionately debated among successive Hindu and Jain philosophers. This volume marks the first English translation of Jnanasrimitra's Monograph on Exclusion, a careful, critical investigation into language, perception, and conceptual awareness. Featuring the rival arguments of Buddhist and Hindu intellectuals, among other thinkers, the Monograph reflects more than half a millennium of competing claims while providing an invaluable introduction to a crucial philosopher. Lawrence J. McCrea and Parimal G. Patil familiarize the reader with the author, themes, and topics of the text and situate Jnanasrimitra's findings within his larger intellectual milieu. Their clear, accessible, and accurate translation proves the influence of Jnanasrimitra on the foundations of Buddhist and Indian philosophy.",
        "isbn": "9780231521918",
        "numberPages": 240,
        "image": "http://books.google.com/books/content?id=OlhuTIXx7GEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Philosophy"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "252.71"
      },
      {
        "title": "Logic and Language in the Middle Ages",
        "authors": [
          "Jakob Leth Fink",
          "Heine Hansen",
          "Ana María Mora-Marquez"
        ],
        "publisher": "BRILL",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This volume honours Sten Ebbesen with a series of essays on logical and linguistic analysis in the Middle Ages. Included are studies focusing on textual criticism, new finds of logical texts, and philosophical analysis and interpretation.",
        "isbn": "9789004235922",
        "numberPages": 492,
        "image": "http://books.google.com/books/content?id=llWhw2J9Y0wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "History"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "144.54"
      },
      {
        "title": "Sociolinguistic Patterns",
        "authors": [
          "William Labov"
        ],
        "publisher": "University of Pennsylvania Press",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "This classic volume, by a well-known linguist, constitutes a systematic introduction to sociolinguistics, unmatched in the clarity and forcefulness of its approach, and to the study of language in its social setting.",
        "isbn": "0812210522",
        "numberPages": 374,
        "image": "http://books.google.com/books/content?id=hD0PNMu8CfQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "categories": [
          "Language Arts & Disciplines"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "68.49"
      },
      {
        "title": "Otto Dempwolff's Grammar of the Jabem Language in New Guinea",
        "authors": [
          "Otto Dempwolff"
        ],
        "publisher": "Oceanic Linguistics Special Pu",
        "datePublication": "2017-04-19T03:00:00.000Z",
        "description": "Otto Dempwolff is far better known for his historical and comparative work than for his descriptive and theoretical contributions to linguistics. However, the work to which he devoted his last efforts before he died in 1938 was a grammatical description of Jabêm, an Austronesian language adopted and spread as a church and school lingua franca by the German Lutheran mission in what is now Morobe Province, Papua New Guinea. Although Jabêm is one of the best-documented languages in Melanesia (at least in Jabêm and German), the only materials available in English have been Streicher’s (1982) Jabêm-English Dictionary, a brief grammar sketch in Tryon’s (1995) Comparative Austronesian Dictionary, and sporadic articles on Jabêm tonogenesis and verb serialization. This translation of Otto Dempwolff’s grammar now adds a comprehensive overview and data-rich synthesis of Jabêm grammar. Because he wrote his grammar at the request of the Lutheran missionaries, Dempwolff took care to make his description understandable to an audience of educated lay people as well as to linguists by explaining his terminology and reasoning as he introduced new topics. This task was made all the more necessary because he considered Jabêm to be the most difficult Melanesian language he had ever encountered, one for which European grammatical models proved entirely inadequate. The result is a highly original, yet surprisingly accessible grammatical description by one of the founders of Austronesian comparative linguistics.",
        "isbn": "UVA:X004810225",
        "numberPages": 136,
        "image": "http://books.google.com/books/content?id=l1EOAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "categories": [
          "Foreign Language Study"
        ],
        "language": "en",
        "countryPublication": "USA",
        "stock": 0,
        "price": "240.23"
      }
    ];
    

    // Verificar y crear los idiomas necesarios
    const languageCodes = books.map(book => book.language);
    const uniqueLanguageCodes = [...new Set(languageCodes)];

    for (const languageCode of uniqueLanguageCodes) {
      await checkAndCreateLanguage(languageCode);
    }

    // Iterar sobre los libros
    for (const book of books) {
      const foundBook = await Book.findOne({
        where: {
          title: {
            [Op.iLike]: book.title
          }
        }
      });

      if (!foundBook) {
        // Crear el libro si no existe
        const createdBook = await Book.create(book);
        console.log('Libro creado:', createdBook);

        // Asignar autores y categorías al libro creado
        if (book.authors && book.authors.length > 0) {
          const foundAuthors = [];
          for (const authorName of book.authors) {
            const foundAuthor = await Author.findOne({
              where: {
                name: {
                  [Op.iLike]: authorName.trim()
                }
              }
            });

            if (!foundAuthor) {
              // El autor no existe en la base de datos, crearlo
              const newAuthor = await Author.create({ name: authorName.trim() });
              foundAuthors.push(newAuthor);
            } else {
              foundAuthors.push(foundAuthor);
            }
          }

          await createdBook.setAuthors(foundAuthors);
        }

        if (book.categories && book.categories.length > 0) {
          const foundCategories = [];
          for (const categoryName of book.categories) {
            const foundCategory = await Category.findOne({
              where: {
                name: {
                  [Op.iLike]: categoryName.trim()
                }
              }
            });

            if (!foundCategory) {
              // La categoría no existe en la base de datos, crearla
              const newCategory = await Category.create({ name: categoryName.trim() });
              foundCategories.push(newCategory);
            } else {
              foundCategories.push(foundCategory);
            }
          }

          await createdBook.setCategories(foundCategories);
        }
      } else {
        console.log('El libro ya existe:', foundBook.title);
      }
    }

    console.log('Proceso de creación de libros finalizado.');
  } catch (error) {
    console.error('Error al crear los libros:', error);
  }
}

module.exports = bulkCreateBooksFromFile;