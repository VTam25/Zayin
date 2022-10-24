// document.getElementById('file').addEventListener("change", (event) => {
//     const image = document.getElementById("output");
//     image.src = URL.createObjectURL(event.target.files[0]);
// });

document.getElementById('file').addEventListener("change", loadFile);

function loadFile(event) {
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};

