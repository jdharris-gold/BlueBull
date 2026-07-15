document.addEventListener("DOMContentLoaded", async () => {
    const data = await bluebullLoad("investing");

    if (data) {
        document.getElementById("portfolioValue").value = data.portfolioValue || "";
        document.getElementById("monthlyContrib").value = data.monthlyContrib || "";
        document.getElementById("growth").innerText = data.growth || 0;
    }
});

document.getElementById("saveInvesting").addEventListener("click", async () => {
    const portfolioValue = Number(document.getElementById("portfolioValue").value);
    const monthlyContrib = Number(document.getElementById("monthlyContrib").value);

    const growth = portfolioValue + (monthlyContrib * 12);

    document.getElementById("growth").innerText = growth;

    await bluebullSave("investing", {
        portfolioValue,
        monthlyContrib,
        growth
    });
});
