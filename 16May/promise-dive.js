// ============================================
// Promise.all vs Promise.allSettled vs Promise.race vs Promise.any
// ============================================

// Helper function to create promises with delays
const p1 = () => new Promise(resolve => setTimeout(() => resolve('Result 1'), 1000));
const p2 = () => new Promise(resolve => setTimeout(() => resolve('Result 2'), 2000));
const p3 = () => new Promise((_, reject) => setTimeout(() => reject('Error 3'), 1500));
const p4 = () => new Promise(resolve => setTimeout(() => resolve('Result 4'), 500));

console.log('\n========== PROMISE.ALL ==========');
console.log('✓ Returns array of results IF all promises fulfill');
console.log('✗ Rejects IMMEDIATELY if ANY promise rejects');
console.log('⏱️ Waits for ALL promises to settle\n');

// Success case
Promise.all([p1(), p2(), p4()])
    .then(results => console.log('Promise.all SUCCESS:', results))
    .catch(err => console.log('Promise.all ERROR:', err));

// Failure case
Promise.all([p1(), p3(), p4()])
    .then(results => console.log('Promise.all SUCCESS:', results))
    .catch(err => console.log('Promise.all ERROR:', err));


console.log('\n========== PROMISE.allSettled ==========');
console.log('✓ NEVER rejects');
console.log('✓ Returns array with {status, value/reason} for each promise');
console.log('⏱️ Waits for ALL promises to settle\n');

Promise.allSettled([p1(), p3(), p4()])
    .then(results => {
        console.log('Promise.allSettled RESULTS:');
        results.forEach((result, idx) => {
            if (result.status === 'fulfilled') {
                console.log(`  [${idx}] ✓ ${result.value}`);
            } else {
                console.log(`  [${idx}] ✗ ${result.reason}`);
            }
        });
    });


console.log('\n========== PROMISE.RACE ==========');
console.log('✓ Returns result of FIRST settled promise (fulfill OR reject)');
console.log('⏱️ Stops waiting as soon as ONE promise settles\n');

Promise.race([p2(), p4(), p3()])
    .then(result => console.log('Promise.race SUCCESS:', result))
    .catch(err => console.log('Promise.race ERROR:', err));

Promise.race([p3(), p1()]) // p3 rejects first (1500ms)
    .then(result => console.log('Promise.race SUCCESS:', result))
    .catch(err => console.log('Promise.race ERROR:', err));


console.log('\n========== PROMISE.ANY ==========');
console.log('✓ Returns result of FIRST fulfilled promise');
console.log('✗ Rejects with AggregateError if ALL promises reject');
console.log('⏱️ Ignores rejections, stops at first success\n');

const pFail1 = () => new Promise((_, reject) => setTimeout(() => reject('Error A'), 500));
const pFail2 = () => new Promise((_, reject) => setTimeout(() => reject('Error B'), 1000));
const pSuccess = () => new Promise(resolve => setTimeout(() => resolve('Success!'), 1500));

Promise.any([pFail1(), pSuccess(), pFail2()])
    .then(result => console.log('Promise.any SUCCESS:', result))
    .catch(err => console.log('Promise.any ERROR:', err.errors));

Promise.any([pFail1(), pFail2()])
    .then(result => console.log('Promise.any SUCCESS:', result))
    .catch(err => console.log('Promise.any ALL FAILED:', err.errors));


console.log('\n========== COMPARISON TABLE ==========');
console.log(`
┌─────────────────┬──────────────┬─────────────┬───────────────┬─────────────┐
│ Method          │ Returns      │ On Reject   │ Waits For     │ Returns On  │
├─────────────────┼──────────────┼─────────────┼───────────────┼─────────────┤
│ .all()          │ Array        │ Immediately │ All           │ First reject│
│ .allSettled()   │ Array        │ Never       │ All           │ Never       │
│ .race()         │ Value/Error  │ Immediately │ First settle  │ First settle│
│ .any()          │ Value        │ AggregateErr│ All           │ First value │
└─────────────────┴──────────────┴─────────────┴───────────────┴─────────────┘
`);