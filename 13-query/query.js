const data = {
    search: "Вася",
    take: 10,
}

function transformQuery(data) {
    const arr = [];
    for (const [key, value] of Object.entries(data)) {
        arr.push(`${key}=${value}`)
    };
    return arr.join('&')
}
