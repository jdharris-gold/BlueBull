document.addEventListener("DOMContentLoaded", async () => {
    const data = await bluebullLoad("subscriptions");

    if (data) {
        document.getElementById("subsTotal").value = data.subsTotal || "";
        document.getElementById("subsCount").value = data.subsCount || "";
        document.getElementById("avgSubs").innerText = data.avgSubs || 0;
    }
});

document.getElementById("saveSubs").addEventListener("click", async () => {
    const subsTotal = Number(document.getElementById("subsTotal").value);
    const subsCount = Number(document.getElementById("subsCount").value);

    const avgSubs = subsCount > 0 ? (subsTotal / subsCount).toFixed(2) : 0;

    document.getElementById("avgSubs").innerText = avgSubs;

    await bluebullSave("subscriptions", {
        subsTotal,
        subsCount,
        avgSubs
    });
});
