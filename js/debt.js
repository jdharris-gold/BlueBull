document.addEventListener("DOMContentLoaded", async () => {
    const data = await bluebullLoad("debt");

    if (data) {
        document.getElementById("totalDebt").value = data.totalDebt || "";
        document.getElementById("monthlyPayment").value = data.monthlyPayment || "";
        document.getElementById("remainingDebt").innerText = data.remainingDebt || 0;
    }
});

document.getElementById("saveDebt").addEventListener("click", async () => {
    const totalDebt = Number(document.getElementById("totalDebt").value);
    const monthlyPayment = Number(document.getElementById("monthlyPayment").value);

    const remainingDebt = totalDebt - monthlyPayment;

    document.getElementById("remainingDebt").innerText = remainingDebt;

    await bluebullSave("debt", {
        totalDebt,
        monthlyPayment,
        remainingDebt
    });
});
