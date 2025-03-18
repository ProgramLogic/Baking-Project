const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
    }
};

request.onsuccess = function (event) {
    console.log("Database opened successfully!");
};