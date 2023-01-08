// ./plugins/SelectionColor.js 
//

export default defineNuxtPlugin(nuxtApp => {
// export default function (nuxtApp) {
    const colors = [ 
        "#ef4444", 
        "#f97316", 
        "#f59e0b", 
        "#eab308", 
        "#84cc16", 
        "#22c55e", 
        "#10b981", 
        "#14b8a6", 
        "#06b6d4", 
        "#0ea5e9", 
        "#3b82f6", 
        "#6366f1", 
        "#8b5cf6", 
        "#a855f7", 
        "#d946ef", 
        "#ec4899", 
        "#f43f5e",  
        "#8b5cf6"
    ];
    window.addEventListener("mousedown", (e) => {
        const color = colors.shift();

        colors.push(color); });
})
