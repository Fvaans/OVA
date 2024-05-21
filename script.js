// Capturamos los elementos de los enlaces
const pages = document.querySelectorAll('.pagination a');
// Capturamos el contenedor de contenido
const content = document.querySelector('.content');

// Definimos el contenido de cada página
const pageContent = {
    page1: `<h2>Classification of Living Beings</h2>
            <div class="image-container">
                <img src="img/page1.png" alt="Descripción de la imagen">
            </div>`,
    page2: `<h2>Learning Objective</h2>
            <div><p>• Identifying the classification of living beings in order to understand and represent biological diversity.</p></div>
            <div class="image-container">
                <img src="img/page2.jpg" alt="">
            </div>`,
    page3: `<h2>Introductory video</h2>
            <h2>Video:</h2>
            <video controls>
            <source src="img/page4.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video>`,
    page4: `<h2>Definition:</h2>
            <div><p>The classification of living beings is the process of organizing and categorizing living organisms into groups or categories based on their shared characteristics. This classification system helps scientists understand the diversity of life on Earth and communicate effectively about the different types of organisms.</p></div>
            <h2>Kingdoms</h2>
            <div><p>Living beings have been classified by scientists into large groups called "kingdoms". There are five kingdoms: </p></div>
            <ul>
                <li>1. Animal Kingdom</li>
                <li>2. Fungi Kingdom</li>
                <li>3. Protista Kingdom</li>
                <li>4. Monera Kingdom</li>
                <li>5. Plant Kingdom</li>
            </ul>
            <div class="image-container">
                <img src="img/page4.png" alt="Descripción de la imagen">
            </div>`,
    page5: `
            <h2>MONERA KINGDOM</h2>
            <p>The Monera kingdom groups all microscopic and unicellular organisms. These organisms nourish themselves through absorption or photosynthesis. They reproduce asexually, by binary fission, such as bacteria. All bacteria and cyanobacteria, also known as green-blue algae, are included in this kingdom. Most bacteria cause diseases, such as pneumonia, tuberculosis, or cholera, which are produced by bacteria.</p>
            <div class="image-container">
                <img src="img/page51.png" alt="Descripción de la imagen">
                <img src="img/page52.png" alt="Descripción de la imagen">
            </div>`,
    page6: `
            <h2>PROTISTA KINGDOM</h2>
            <p>Another group of living beings is the Protista kingdom, which comprises multicellular microscopic organisms known as eukaryotes. They are usually larger than bacteria and are endowed with mobility. Protists are aquatic, whether marine, freshwater, or inhabitants of the moist tissues of other organisms. Several types of algae also belong to this kingdom. These beings contain chlorophyll and are photosynthetic. Examples of protozoa include amoebas, paramecia, and euglenas.</p>
            <div class="image-container">
                <img src="img/page6.png" alt="Descripción de la imagen">
            </div>`,
    page7: `
            <h2>FUNGI KINGDOM</h2>
            <p>On the other hand, the Fungi kingdom groups common fungi. Fungi obtain their food by absorbing nutrients from decomposed matter. They thrive in dark and shaded places. They produce spores that have great resistance to heat and dryness. Some fungi live on vegetation, while others are highly specialized parasites that live at the expense of animals and humans. Examples include mushrooms, toadstools, bread and fruit molds, penicillium, etc.</p>
            <div class="image-container">
                <img src="img/page71.png" alt="Descripción de la imagen">
                <img src="img/page72.png" alt="Descripción de la imagen">
            </div>`,
    page8: `
            <h2>PLANT KINGDOM</h2>
            <p>The Plantae kingdom comprises all the plants that exist on our planet. They are the ones that produce the food consumed by animals and humans. Without them, our way of life would not exist. They also produce fibers, coal, and many useful materials. Plants have the ability to transform solar energy into food and, in addition, produce oxygen through photosynthesis. Examples include mosses, ferns, pines, and roses.</p>
            <div class="image-container">
                <img src="img/page81.png" alt="Descripción de la imagen">
                <img src="img/page82.png" alt="Descripción de la imagen">
            </div>
            <h3>•	Additional information</h3>
            <div class="image-container">
                <img src="img/page83.png" alt="Descripción de la imagen">
            </div>
             `,
    page9: `
            <h2>ANIMAL KINGDOM</h2>
            <p>All animals are multicellular and heterotrophic, meaning they are incapable of producing their own food. Their cells lack photosynthetic pigments, so animals obtain their nutrients by devouring other organisms. Their reproduction is usually sexual. Complex animals have a high degree of tissue specialization, and their bodies are highly organized. These characteristics arose alongside mobility, complex sensory organs, nervous systems, and muscular systems. Unlike plants, which manufacture their own nutrients, animals have the need to seek food and, at the same time, avoid becoming prey to carnivorous species; this necessity drove them to develop locomotion and sensory organs.</p>
            <div class="image-container">
                <img src="img/page9.png" alt="Descripción de la imagen">
            </div>
            `,
    page10: `
            <h2>Activitis</h2>
            <ul>
                <li><a href="https://www.youtube.com/watch?v=SIbFuiCfkr8">Video</a></li>
                <li><a href="https://view.genial.ly/66397b3bb7c0cf00140afa6d/interactive-content-order-the-words">Interactive Content: Order the Words</a></li>
                <li><a href="https://view.genial.ly/663970f137da1400141c31bf/interactive-content-relate-the-kindogs">Interactive Content: Relate the Kindogs</a></li>
                <li><a href="https://quizizz.com/join?gc=71582420">Quizizz</a></li>
            </ul>
            <div class="image-container">
                <img src="img/page10.jpg" alt="Descripción de la imagen">
            </div>
                `
};

// Función para cambiar el contenido según el enlace seleccionado
function changeContent(pageId) {
    content.innerHTML = pageContent[pageId];
}

// Añadimos eventos de clic a cada enlace para cambiar el contenido
pages.forEach(page => {
    page.addEventListener('click', function () {
        changeContent(page.id);
    });
});
