// key for access and saving data in local storage
const CACHE_KEY = "calculation_history";

// return boolean value from web browser
function checkForStorage() {
 return typeof(Storage) !== "undefined"
}

function putHistory(data) {
    if (checkForStorage()) {
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
            /* JSON.parse() yang mana digunakan untuk mengubah nilai objek dalam bentuk string kembali 
            pada bentuk objek JavaScript */
        }
 
        historyData.unshift(data);
        /* unshift(), fungsi ini digunakan untuk menambahkan nilai baru pada array yang ditempatkan pada awal index. 
           Fungsi ini juga mengembalikan nilai panjang array setelah ditambahkan dengan nilai baru. */
 
        if (historyData.length > 5) {
            historyData.pop();
        }
 
        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
        // JSON.stringify() digunakan untuk mengubah objek JavaScript ke dalam bentuk String.
    }
}

function showHistory() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

showHistory()