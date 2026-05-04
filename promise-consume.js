// ============================================
// FETCH এবং PROMISE - কীভাবে কাজ করে বিস্তারিত
// ============================================

console.log("=== ১. FETCH হলো একটি Promise ===\n");

/*
fetch() = একটি বিল্ট-ইন ফাংশন যা HTTP request পাঠায়
এটি সবসময় একটি Promise ফেরত দেয়
*/

// fetch একাই একটি Promise
const promise = fetch('https://jsonplaceholder.typicode.com/users');
console.log("fetch ফেরত দেয়:", promise); // Promise { <pending> }

// ============================================
console.log("\n=== ২. res কি? ===\n");

/*
fetch() সফল হলে:
res = Response Object (HTTP Response)
এতে আছে:
- status (200, 404, etc.)
- headers
- body (কিন্তু এটা readable stream)

res.json() = body কে JSON তে রূপান্তরিত করে
এটিও একটি Promise!
*/

console.log("উদাহরণ:");

function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            // এখানে res আছে
            console.log("res আসলে কি:");
            console.log("- status:", res.status); // 200
            console.log("- type:", typeof res); // object
            console.log("- body আছে কিন্তু readable stream");
            console.log("- json() method আছে");

            // res.json() ফেরত দিচ্ছি পরবর্তী .then() এ যেতে
            return res.json(); // এটিও একটি Promise!
        })
        .then(data => {
            // এখানে data আছে - আসল JSON ডাটা
            console.log("\ndata আসলে কি:");
            console.log("- Array:", Array.isArray(data));
            console.log("- Length:", data.length);
            console.log("- প্রথম user:", data[0]);

            return data; // Consumer এ এটা পাবে
        })
        .catch(err => {
            // কোথাও Error হলে এখানে আসবে
            console.log("Error হয়েছে:", err.message);
        });
}

// ============================================
console.log("\n=== ৩. এখন CONSUME করা ===\n");

getUsers()
    .then(users => {
        // এখানে 'users' হলো আমরা যা ফেরত দিয়েছি
        console.log("Consumer এ পেয়েছি:", users.length, "টা user");
        console.log("প্রথম user:", users[0].name);
    })
    .catch(err => {
        console.log("Consumer Error:", err);
    });

// ============================================
console.log("\n=== ৪. সম্পূর্ণ Flow ===\n");

/*
Step 1: fetch() কল করা
  ↓ (HTTP request)
Step 2: Server থেকে Response আসা (res)
  ↓ (.then(res => ...))
Step 3: res.json() কল করা (JSON parse করা)
  ↓ (একটি নতুন Promise)
Step 4: parsed data আসা (data)
  ↓ (.then(data => ...))
Step 5: data return করা
  ↓
Step 6: Consumer .then() এ data পায়
  ↓
Step 7: Consumer তার কাজ করে
*/

// ============================================
console.log("\n=== ৫. একটি সম্পূর্ণ রিয়েল এক্সাম্পল ===\n");

function fetchAndDisplay() {
    console.log("🔍 Fetching users...\n");

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response = Response Object
            console.log("✅ Response পেয়েছি");
            console.log(`   Status: ${response.status}`);
            console.log(`   Content-Type: ${response.headers.get('content-type')}`);

            // JSON এ পরিবর্তন করছি
            return response.json();
        })
        .then(userData => {
            // userData = parsed JSON array
            console.log(`\n✅ Data পেয়েছি - ${userData.length} টা user\n`);

            // Consumer এর কাজ
            userData.slice(0, 3).forEach(user => {
                console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
            });
        })
        .catch(error => {
            // কোথাও error হলে
            console.error(`❌ Error: ${error.message}`);
        });
}

// কল করছি
fetchAndDisplay();

// ============================================
console.log("\n=== ৬. আরো সহজ - ASYNC/AWAIT (Modern way) ===\n");

/*
async/await Promise এর syntax sugar
এটা Promise এর চেয়ে পড়তে সহজ
*/

async function fetchUsersModern() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();

        console.log("ASYNC/AWAIT দিয়ে পেয়েছি:", userData.length, "টা user");
        console.log("প্রথম user:", userData[0].name);

        return userData;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// ============================================
console.log("\n=== ৭. Key Points ===\n");

/*
✅ res = Response Object (HTTP response)
   - এতে status, headers, body আছে
   - সরাসরি JSON ডাটা নয়

✅ data = Parsed JSON (আসল ডাটা)
   - res.json() এর পরে পাই
   - এটাই Consumer ব্যবহার করে

✅ err = Error Object
   - Network error, JSON parse error, etc.
   - .catch() এ handle করি

✅ Consumer জানে কি আছে?
   - যখন আমরা return করি, Consumer সেটা .then() এ পায়
   - Parameter এর নাম যাই হোক, value সেটাই থাকে
   - res => {} , response => {} , r => {} সব এক

✅ গুরুত্বপূর্ণ:
   - Promise chain এ .then() যা ফেরত দেয় তাই পরবর্তী .then() পায়
   - .catch() যেকোনো জায়গার error ধরে
*/

// ============================================
console.log("\n=== ৮. Simple Example ===\n");

// প্রোডিউসার (যে Promise তৈরি করে)
function getAge(name) {
    return new Promise((resolve, reject) => {
        if (name === "Safayet") {
            resolve(25); // এটা Consumer পাবে
        } else {
            reject("Name not found"); // এটা Consumer পাবে Error হিসেবে
        }
    });
}

// কনজিউমার (যে ব্যবহার করে)
getAge("Safayet")
    .then(age => {
        // এখানে age = 25 (যা resolve দিয়েছি)
        console.log("Age পেয়েছি:", age);
    })
    .catch(err => {
        // এখানে err = "Name not found" (যা reject দিয়েছি)
        console.log("Error:", err);
    });
