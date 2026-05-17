// ============================================
// PROMISE - গভীর ব্যাখ্যা এবং বাস্তব উদাহরণ
// ============================================

console.log("=== ১. PROMISE কি? ===\n");

/*
PROMISE হলো একটি OBJECT যা ভবিষ্যতে একটি মূল্য প্রদানের প্রতিশ্রুতি দেয়।

Promise এর ৩টি স্টেট:
1. PENDING (অপেক্ষমাণ) - কাজ চলছে
2. FULFILLED (সফল) - কাজ সম্পন্ন, ডাটা পেয়েছি (resolve)
3. REJECTED (ব্যর্থ) - কাজ ব্যর্থ, Error পেয়েছি (reject)

একবার PENDING থেকে বের হলে আর ফিরে যায় না!
*/

// ============================================
console.log("\n=== ২. PROMISE তৈরি করা (Constructor) ===\n");

// সাধারণ Promise
const myPromise = new Promise((resolve, reject) => {
    // resolve = কাজ সফল
    // reject = কাজ ব্যর্থ

    setTimeout(() => {
        const isSuccess = true;

        if (isSuccess) {
            resolve("ডাটা পেয়েছি! ✅");
        } else {
            reject("Error হয়েছে! ❌");
        }
    }, 1000);
});

console.log("Promise তৈরি হয়েছে (PENDING অবস্থায়):", myPromise);

// ============================================
console.log("\n=== ৩. PROMISE consume করা - .then() / .catch() ===\n");

myPromise
    .then((data) => {
        console.log("সফল:", data);
    })
    .catch((error) => {
        console.log("ব্যর্থ:", error);
    });

// ============================================
console.log("\n=== ৪. রিয়েল ওয়ার্ল্ড এক্সাম্পল: ডাটাবেস থেকে ইউজার ফেচ করা ===\n");

// ফেক ডাটাবেস
const database = {
    users: [
        { id: 1, name: "সাফায়েত", email: "safayet@gmail.com" },
        { id: 2, name: "হেমা", email: "hema@gmail.com" },
        { id: 3, name: "ওহী", email: "ohee@gmail.com" }
    ]
};

// ডাটাবেস কোয়েরি সিমুলেশন
function fetchUserFromDB(userId) {
    return new Promise((resolve, reject) => {
        console.log(`🔍 ডাটাবেস থেকে ইউজার ${userId} খুঁজছি...`);

        setTimeout(() => {
            const user = database.users.find((u) => u.id === userId);

            if (user) {
                resolve(user);
            } else {
                reject(`ইউজার ${userId} পাওয়া যায়নি!`);
            }
        }, 1000);
    });
}

// ব্যবহার
fetchUserFromDB(1)
    .then((user) => {
        console.log("✅ ইউজার পেয়েছি:", user);
    })
    .catch((error) => {
        console.log("❌ Error:", error);
    });

// ============================================
console.log("\n=== ৫. PROMISE CHAINING - একটার পর একটা কাজ করা ===\n");

/*
যেমন:
1. ইউজার ফেচ করো
2. তারপর সেই ইউজারের পোস্ট ফেচ করো
3. তারপর পোস্টের কমেন্ট ফেচ করো
*/

function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: "সাফায়েত" });
        }, 500);
    });
}

function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { postId: 1, title: "JavaScript শিখছি", userId: userId },
                { postId: 2, title: "Promise বুঝছি", userId: userId }
            ]);
        }, 500);
    });
}

function getComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { commentId: 1, text: "দুর্দান্ত!" },
                { commentId: 2, text: "খুব ভালো ব্যাখ্যা" }
            ]);
        }, 500);
    });
}

// Chaining করা
getUser(1)
    .then((user) => {
        console.log("পাইছি ইউজার:", user.name);
        return getPosts(user.id); // পরবর্তী Promise এ যাচ্ছি
    })
    .then((posts) => {
        console.log("পাইছি পোস্ট:", posts.length, "টা");
        return getComments(posts[0].postId); // প্রথম পোস্টের কমেন্ট
    })
    .then((comments) => {
        console.log("পাইছি কমেন্ট:", comments.length, "টা");
    })
    .catch((error) => {
        console.log("কোথাও Error হয়েছে:", error);
    });

// ============================================
console.log("\n=== ৬. .finally() - সব সময় চলবে ===\n");

const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ডাটা এসেছে");
    }, 500);
});

apiCall
    .then((data) => {
        console.log("✅", data);
    })
    .catch((error) => {
        console.log("❌", error);
    })
    .finally(() => {
        console.log("⏹️ Loading/Process শেষ (success বা fail যাই হোক)");
    });

// ============================================
console.log("\n=== ৭. Promise.all() - সব Promise এর জন্য অপেক্ষা করা ===\n");

const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("প্রথম"), 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("দ্বিতীয়"), 500);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("তৃতীয়"), 800);
});

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("সব Promise সম্পন্ন:", results);
    })
    .catch((error) => {
        console.log("কোনো একটা ব্যর্থ:", error);
    });

// ============================================
console.log("\n=== ৮. Promise.race() - প্রথমটা জিতলো ===\n");

const fast = new Promise((resolve) => {
    setTimeout(() => resolve("দ্রুত"), 100);
});

const slow = new Promise((resolve) => {
    setTimeout(() => resolve("ধীর"), 1000);
});

Promise.race([fast, slow])
    .then((result) => {
        console.log("প্রথমে আসলো:", result);
    });

// ============================================
console.log("\n=== ৯. গুরুত্বপূর্ণ দিকগুলো ===\n");

/*
✅ Promise এর সুবিধা:
- Callback Hell এড়ানো যায়
- Error handling সহজ (.catch() দিয়ে)
- Chaining সম্ভব
- readability ভালো

❌ সাধারণ ভুল:
- resolve/reject ফেরত না দেওয়া
- .catch() ভুলে যাওয়া
- Promise ফেরত না করা chaining এ

⚡ মনে রাখার কথা:
- Promise একবার settle হলে আর বদলায় না
- .then() সবসময় নতুন Promise ফেরত দেয়
- async/await Promise এর উপরে বানানো
*/