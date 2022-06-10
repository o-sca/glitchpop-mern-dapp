export async function fetchContract() {
  const response = await fetch("/api/contract", {
    method: "GET"
  })
  if (response.status !== 200) return false;
  return await response.json();
}