document.addEventListener("DOMContentLoaded", async () => {
    const data = await bluebullLoad("cashflow");

    if (data) {
        document.getElementById("incomeCF").value = data.incomeCF || "";
        document.getElementById("expensesCF").value = data.expensesCF || "";
        document.getElementById("cashFlow").innerText = data.cashFlow || 0;
    }
});

document.getElementById("saveCashFlow").addEventListener("click", async () => {
    const incomeCF = Number(document.getElementById("incomeCF").value);
    const expensesCF = Number(document.getElementById("expensesCF").value);

    const cashFlow = incomeCF - expensesCF;

    document.getElementById("cashFlow").innerText = cashFlow;

    await bluebullSave("cashflow", {
        incomeCF,
        expensesCF,
        cashFlow
    });
});
