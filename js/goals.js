document.addEventListener("DOMContentLoaded", async () => {
    const data = await bluebullLoad("goals");

    if (data) {
        document.getElementById("goalName").value = data.goalName || "";
        document.getElementById("goalAmount").value = data.goalAmount || "";
        document.getElementById("goalCurrent").value = data.goalCurrent || "";
        document.getElementById("goalPercent").innerText = data.goalPercent || "0%";
    }
});

document.getElementById("saveGoal").addEventListener("click", async () => {
    const goalName = document.getElementById("goalName").value;
    const goalAmount = Number(document.getElementById("goalAmount").value);
    const goalCurrent = Number(document.getElementById("goalCurrent").value);

    const goalPercent = goalAmount > 0
        ? ((goalCurrent / goalAmount) * 100).toFixed(1) + "%"
        : "0%";

    document.getElementById("goalPercent").innerText = goalPercent;

    await bluebullSave("goals", {
        goalName,
        goalAmount,
        goalCurrent,
        goalPercent
    });
});
