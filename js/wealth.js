// -------------------------------
// Wealth Dashboard Logic
// -------------------------------

document.addEventListener("DOMContentLoaded", async () => {
    const data = await bluebullLoad("wealth");

    if (data) {
        document.getElementById("assets").value = data.assets || "";
        document.getElementById("debts").value = data.debts || "";
        document.getElementById("netWealth").innerText = data.netWealth || "";
    }
});

// Save button handler
document.getElementById("saveWealth").addEventListener("click", async () => {
    const assets = Number(document.getElementById("assets").value);
    const debts = Number(document.getElementById("debts").value);
    const netWealth = assets - debts;
    alert("bluebullSave() fired!"); //This alert fired successfully
    document.getElementById("netWealth").innerText = netWealth; // This executed successfully
    alert("bluebullSave() fired!"); //This alert did not fire
    
    await bluebullSave("wealth", {
        assets,
        debts,
        netWealth
    });
});
