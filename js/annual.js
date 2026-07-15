document.addEventListener("DOMContentLoaded", async () => {
    const data = await bluebullLoad("annual");

    if (data) {
        document.getElementById("annualIncome").value = data.annualIncome || "";
        document.getElementById("annualSavings").value = data.annualSavings || "";
        document.getElementById("annualProgress").innerText = data.annualProgress || "0%";
    }
});

document.getElementById("saveAnnual").addEventListener("click", async () => {
    const annualIncome = Number(document.getElementById("annualIncome").value);
    const annualSavings = Number(document.getElementById("annualSavings").value);

    const annualProgress = annualIncome > 0
        ? ((annualSavings / annualIncome) * 100).toFixed(1) + "%"
        : "0%";

    document.getElementById("annualProgress").innerText = annualProgress;

    await bluebullSave("annual", {
        annualIncome,
        annualSavings,
        annualProgress
    });
});
