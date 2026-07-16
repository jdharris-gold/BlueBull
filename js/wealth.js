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

    document.getElementById("netWealth").innerText = netWealth;
    alert("bluebullSave() fired!");
    
    await bluebullSave("wealth", {
        assets,
        debts,
        netWealth
    });
});
