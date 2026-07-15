// -------------------------------
// Budget Dashboard Logic
// -------------------------------

document.addEventListener("DOMContentLoaded", async () => {
    const data = await bluebullLoad("budget");

    if (data) {
        document.getElementById("income").value = data.income || "";
        document.getElementById("fixed").value = data.fixed || "";
        document.getElementById("variable").value = data.variable || "";
        document.getElementById("remaining").innerText = data.remaining || 0;
    }
});

// Save button handler
document.getElementById("saveBudget").addEventListener("click", async () => {
    const income = Number(document.getElementById("income").value);
    const fixed = Number(document.getElementById("fixed").value);
    const variable = Number(document.getElementById("variable").value);

    const remaining = income - fixed - variable;

    document.getElementById("remaining").innerText = remaining;

    await bluebullSave("budget", {
        income,
        fixed,
        variable,
        remaining
    });
});
