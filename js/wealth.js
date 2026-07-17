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
    alert("Fired 1!"); //This alert fired successfully
    document.getElementById("netWealth").innerText = netWealth; // This executed successfully
    console.log("Reached BEFORE second alert");
    alert("Fired 2!"); // This executed successfully

    console.log("Calling bluebullSave now...");
     alert("Fired 3!"); // This executed successfully
    
    try {
        await bluebullSave("wealth", { assets, debts, netWealth });
        alert("Fired 4!"); // This executed successfully
    } catch (err) {
        alert("ERROR: " + err.message);
        console.error(err);
    }
    
   // await bluebullSave("wealth", {
   //     assets,
   //     debts,
    //    netWealth
   // });
});
