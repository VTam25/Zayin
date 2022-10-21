document.getElementById('file').addEventListener("change", (event) => {
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
});

