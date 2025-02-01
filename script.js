document.addEventListener("DOMContentLoaded", () => {
    const membersGrid = document.querySelector(".members-grid");
    const members = [
        { name: "Alice", role: "Designer" },
        { name: "Bob", role: "Developer" },
        { name: "Charlie", role: "Manager" }
    ];

    members.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("member");
        memberDiv.innerHTML = `<h4>${member.name}</h4><p>${member.role}</p>`;
        membersGrid.appendChild(memberDiv);
    });
});
