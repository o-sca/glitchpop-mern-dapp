export function toggleConnectButton() {
    let connect = document.querySelector("#connect").style;
    let dc = document.querySelector("#disconnect").style;

    if (connect.display === "block") {
        connect.setProperty("display", "none")
    } else {
        connect.setProperty("display", "block")
    }

    if (dc.display === "block") {
        dc.setProperty("display", "none")
    } else {
        dc.setProperty("display", "block")
    }
};