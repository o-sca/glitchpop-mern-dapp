const fetchContract = async () => {
    let response = await fetch("/api/contract", { method: "GET"});
    return await response.json();
};

const getStatus = async () => {
    let response = await fetch("/api/status", { method: "GET"});
    return await response.json();
};