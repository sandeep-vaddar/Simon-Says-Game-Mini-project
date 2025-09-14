import axios from "axios";   // for Node.js

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact); // only prints the fact
    } catch (e) {
        console.log("ERROR -", e.message);
    }
}

getFacts();
