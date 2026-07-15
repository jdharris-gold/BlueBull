document.addEventListener("DOMContentLoaded", async () => {
    const wealth = await bluebullLoad("wealth");
    const budget = await bluebullLoad("budget");
    const cashflow = await bluebullLoad("cashflow");
    const debt = await bluebullLoad("debt");
    const savings = await bluebullLoad("savings");
    const investing = await bluebullLoad("investing");
    const subs = await bluebullLoad("subscriptions");
    const annual = await bluebullLoad("annual");
    const goals = await bluebullLoad("goals");

    console.log("Master Dashboard Loaded:", {
        wealth, budget, cashflow, debt,
        savings, investing, subs, annual, goals
    });
});
