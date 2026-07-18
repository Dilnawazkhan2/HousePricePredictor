const form = document.getElementById("predictionForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        const area = document.getElementById("area").value;
        const bedrooms = document.getElementById("bedrooms").value;
        const bathrooms = document.getElementById("bathrooms").value;

        const response = await fetch("/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                area,
                bedrooms,
                bathrooms
            })
        });

        if (!response.ok) {
            throw new Error("Server Error: " + response.status);
        }

        const data = await response.json();

        result.innerHTML = `
            <h2>Estimated Price</h2>
            <h1>$${Number(data.price).toLocaleString()}</h1>
        `;

    } catch (err) {
        console.error(err);
        result.innerHTML = `<p style="color:red;">${err.message}</p>`;
    }
});

const heroButton = document.getElementById("predictBtn");

heroButton.addEventListener("click", () => {
    document.getElementById("predictSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});