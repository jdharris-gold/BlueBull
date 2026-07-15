document.addEventListener("DOMContentLoaded", async () => {
    const data = await bluebullLoad("savings");

    if (data) {
        document.getElementById("currentSavings").value = data.currentSavings || "";
        document.getElementById("savingsGoal").value = data.savingsGoal || "";
        document.getElementById("savingsProgress").innerText = data.savingsProgress || "0%";
    }
});

document.getElementById("saveSavings").addEventListener("click", async () => {
    const currentSavings = Number(document.getElementById("currentSavings").value);
    const savingsGoal = Number(document.getElementById("savingsGoal").value);

    const savingsProgress = savingsGoal > 0
        ? ((currentSavings / savingsGoal) * 100).toFixed(1) + "%"
        : "0%";

    document.getElementById("savingsProgress").innerText = savingsProgress;

    await bluebullSave("savings", {
        currentSavings,
        savingsGoal,
        savingsProgress
    });
});
