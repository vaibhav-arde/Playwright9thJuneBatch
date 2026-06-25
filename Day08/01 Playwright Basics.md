---
share_link: https://share.note.sx/b9btxkff#mURfUK1TyrsXOfzd59Wflc7wrmcjtfvHV7aASv+PxaU
share_updated: 2026-03-03T11:51:36+05:30
Author: VaibhaV Arde
---
![[python.png]]

![[OVERVIEW OF.png]]
![[SUPPORTED.png]]
![[KEY FEATURES AT A GLANCE.png]]

# Implicit Wait vs Explicit Wait vs Auto-Waiting

## (Selenium vs Playwright Notes)

---

## 1️⃣ Implicit Wait (Selenium)

### Definition

Implicit wait tells Selenium to wait for a defined time while locating
elements before throwing `NoSuchElementException`. It is a **global
wait** applied to all element searches.

### Key Characteristics

- Global configuration
- Waits only for element presence
- Not condition-based
- Can introduce unpredictable delays
- Not recommended for complex dynamic apps

### Example (JavaScript)

```js

driver.manage().setTimeouts({ implicit: 10000 });

driver.findElement(By.id("loginBtn"));
```

### Limitations

- Does NOT wait for visibility or clickability
- Mixing implicit and explicit waits can cause flaky tests

---

## 2️⃣ Explicit Wait (Selenium)

### Definition

Explicit wait allows waiting for a **specific condition** before
proceeding.

### Key Characteristics

- Condition-based waiting
- More reliable than implicit waits
- Fine-grained control over synchronization

### Common Conditions

- elementLocated
- elementIsVisible
- elementIsEnabled
- titleContains
- urlContains

### Example

```js

const wait = new WebDriverWait(driver, 10000);

await wait.until(until.elementLocated(By.id("submitBtn")));
```

### Advantages

- Reduces flaky tests
- Works well with dynamic UI behaviour

---

## 3️⃣ Auto-Waiting (Playwright)

### Definition

Playwright provides built-in intelligent waiting. Most actions
automatically wait until the element becomes actionable.

### What Playwright Automatically Waits For

- Element is attached to DOM
- Element is visible
- Element is stable
- Element is enabled
- Element can receive events

### Example

```js

await page.locator('#loginBtn').click();

// Auto-wait happens internally
```

### Key Characteristics

- No manual waits required in most cases
- Cleaner test code
- High reliability and reduced flakiness

---

## Selenium vs Playwright --- Key Differences

---

Feature Implicit Wait Explicit Wait Auto Waiting
(Selenium) (Selenium) (Playwright)

---

Scope Global Specific Built-in

Condition based No Yes Yes (Automatic)

Code required Low Medium Very Low

Reliability Medium High Very High

Modern approach Old Standard Default

Flaky tests More chances Less Minimal

---

## Real Interview Insight

### Selenium Philosophy

Test engineer manages synchronization manually.

### Playwright Philosophy

Framework handles synchronization automatically.

---

## When Explicit Wait Is Still Needed in Playwright

- Waiting for API responses
- Waiting for navigation
- Waiting for custom states

Examples:

```js

await expect(locator).toBeVisible();

await page.waitForURL();

await page.waitForResponse();
```

---

## Easy Memory Trick

Implicit Wait → Blind global wait
Explicit Wait → Smart manual wait
Auto Wait → Intelligent framework wait

---

## Practical Best Practices

### Avoid

- Hard waits (sleep)
- Mixing implicit and explicit waits

### Selenium Best Practice

Use Explicit Waits

### Playwright Best Practice

Rely on Auto Waiting + Assertions

---

![[Screenshot 2026-02-23 at 10.53.51 AM.png]]![[Screenshot 2026-02-23 at 10.54.53 AM.png]]

![[Screenshot 2026-02-23 at 10.56.44 AM.png]]![[Screenshot 2026-02-23 at 10.58.27 AM.png]]

![[Screenshot 2026-02-23 at 10.59.05 AM.png]]![[Screenshot 2026-02-23 at 11.01.52 AM.png]]

![[Screenshot 2026-02-23 at 11.03.20 AM.png]]

![[Screenshot 2026-02-23 at 11.04.13 AM.png]]

---

---

## Install IDE like VSCode or Antigravity

## Install Nodejs

## Install NVM

check it with command  :

- npm version
- nvm --version

---

---

Create A Salesforce Developer Account: [developer.salesforce.com/signup](https://developer.salesforce.com/signup).

---

## Playwright Installation

- npm init playwright@latest
- Update Playwright and download new browser binaries and their dependencies:
  - npm install -D @playwright/test@latest
  - npx playwright install --with-deps

If any issues in windows then follow below commands:
![[Screenshot 2026-02-23 at 12.08.05 PM.png]]

---

# Task

- Install IDE like VSCode or Antigravity
- Install Nodejs
- Install NVM
- Create a developer account of Salesforce
- Install playwright in your machine

---

---

# Why JavaScript is Synchronous by Default

## JavaScript is synchronous

JavaScript executes code line-by-line using a single call stack. Each
statement must finish before the next one runs.

```js

console.log("Step 1");

function task() {

console.log("Step 2");

}

task();

console.log("Step 3");
```

Output:

- Step 1
- Step 2
- Step 3

This proves JavaScript waits for execution to finish → synchronous
behavior.

## Blocking example

```js

console.log("Start");

for (let i = 0; i < 5e9; i++) {}

console.log("End");
```

The UI freezes because JS runs synchronously. If JS were async by
default, it would not block.

## Why async behavior exists

Async features come from browser/Node APIs like `setTimeout`, `fetch`,
file system, etc.

```js

console.log("Start");

setTimeout(() => {

console.log("Async Task");

}, 0);

console.log("End");
```

Output:

Start
End
Async Task

JavaScript core stays synchronous; runtime APIs enable async behavior
via the event loop.

---

# Why `await` Looks Synchronous but is Actually Asynchronous

## Sequential syntax illusion

```js

await page.click("#login");

await page.fill("#user","vaibhav");
```

It looks step-by-step, but internally uses Promises and the event loop.

## Real behavior

`await` pauses only the current async function, not the JS thread.

```js

console.log("Start");

async function test() {

console.log("Inside 1");

await Promise.resolve();

console.log("Inside 2");

}

test();

console.log("End");
```

Output:

Start
Inside 1
End
Inside 2

Execution flow: 1. Code runs until `await`. 2. Function pauses. 3.
Remaining work goes to microtask queue. 4. JS continues executing other
code. 5. Event loop resumes function later.

## Equivalent Promise form

```js

somePromise().then(() => {

// continuation after await

});
```

## Key idea

`await` ≠ blocking JavaScript
`await` = pause this async function and resume later.

## Interview summary

JavaScript is synchronous by default. Async/await provides sequential
syntax but still runs asynchronously using Promises, microtasks, and the
event loop.

---

---

## Basic Playwright Test Syntax

```js
import { test, expect } from '@playwright/test';

test('My First Test', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('#login');
  await page.fill('#username', 'vaibhav');
  await page.fill('#password', '123');
  await expect(page).toHaveURL(/dashboard/);
});
```

### Basic Syntax Using `browser` Fixture

```js
import { test, expect } from '@playwright/test';

test('using browser fixture', async ({ browser }) => {
  // Create new browser context
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
  await context.close();
});
```

---

# ⭐⭐⭐ How to use **browser context** to skip login

Here’s a **real Playwright example** showing how to use **browser context** to skip login 👍
(This is the common enterprise pattern using `storageState`.)

Idea:

👉 Login once
👉 Save session
👉 Reuse session → skip login UI

---

# ✅ Step 1 — Create Auth Setup (Login Once)

## auth.setup.ts

```js
import { test as setup } from '@playwright/test';  
  
setup('login and save session', async ({ page }) => {  
  await page.goto('https://example.com/login');  
  
  await page.fill('#username', 'vaibhav');  
  await page.fill('#password', '123');  
  await page.click('#login');  
  
  // wait for successful login  
  await page.waitForURL('**/dashboard');  
  
  // save browser context storage (cookies + localStorage)  
  await page.context().storageState({  
    path: 'auth.json'  
  });  
});
```

👉 This file creates `auth.json`.

---

# ✅ Step 2 — Use Browser Context with Saved Login

## playwright.config.ts

```js
import { defineConfig } from '@playwright/test';  
  
export default defineConfig({  
  use: {  
    baseURL: 'https://example.com',  
    storageState: 'auth.json' // 👈 skip login automatically  
  }  
});
```

Now every test starts already logged in.

---

# ✅ Step 3 — Test Without Login Steps

## dashboard.spec.ts

```js
import { test, expect } from '@playwright/test';  
  
test('dashboard loads without login', async ({ page }) => {  
  await page.goto('/dashboard');  
  
  await expect(page.locator('h1')).toHaveText('Dashboard');  
});
```

🔥 No login code needed — session reused.

---

# 🧠 How Browser Context Skips Login

Playwright loads:

cookies
localStorage
sessionStorage

from `auth.json` into a new **browser context**.

So app thinks user is already logged in.

---

# ⭐ Alternative — Manual Browser Context Creation

If you want full control:

```js
import { test, expect } from '@playwright/test';  
  
test('skip login using browser context', async ({ browser }) => {  
  
  const context = await browser.newContext({  
    storageState: 'auth.json'  
  });  
  
  const page = await context.newPage();  
  
  await page.goto('/dashboard');  
  
  await expect(page.locator('h1')).toHaveText('Dashboard');  
  
});
```

---

# 🚀 Why This Pattern is Used in Real QA Frameworks

Since you build automation frameworks, this is important:

✅ Faster tests (no UI login each time)
✅ Stable execution
✅ Parallel sessions
✅ Multi-role testing (admin/user contexts)

---

# 🎯 Super Short Summary

```Plain
Login once → save storageState → reuse context → skip login UI
```

---

---

## 🧠 What is a Fixture?

A fixture is simply something Playwright **creates and gives to your test automatically**.
A fixture in Playwright is a **reusable setup unit that initializes resources and injects them into tests, enabling cleaner, scalable, and maintainable automation.**

## Built-in Fixtures (Most Used)

Playwright already provides fixtures:

- `browser`
- `context`
- `page`
- `request`
- `baseURL`

## Custom Fixture (VERY IMPORTANT)

```js
import { test as base } from '@playwright/test';

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    await page.goto('/login');
    await page.fill('#user', 'vaibhav');
    await page.fill('#pass', '123');
    await page.click('#login');

    await use(page); // provide fixture to test
  },
});
```

Using Custom Fixture

```js
import { test, expect } from './fixtures';

test('dashboard test', async ({ loggedInPage }) => {
  await expect(loggedInPage.locator('h1')).toHaveText('Dashboard');
});
```

---

In JavaScript / Playwright / Node.js, when we say **two types of path**, we usually mean:

✅ **Absolute Path**
✅ **Relative Path**

These define how you locate files or folders in a project.

---

# 📂 1️⃣ Absolute Path

👉 Full path starting from the **root** of the system.

It does NOT depend on current file location.

## ✅ Example

```js
const file = '/Users/vaibhav/projects/tests/data.json';
```

Mac/Linux root starts with `/`
Windows example:

```js
C:\Users\Vaibhav\tests\data.json
```

### ✔ Characteristics

- Always same location
- Independent of current file
- Less flexible in shared projects

---

# 📁 2️⃣ Relative Path

👉 Path relative to **current file location**.

Used MOST in Playwright and JS imports.

## ✅ Example Structure

```js
project/  
 ├── tests/  
 │    └── login.spec.ts  
 └── data/  
      └── users.json
```

From `login.spec.ts`:

```js
import users from '../data/users.json';
```

### Symbols

| Symbol  | Meaning        |
| ------- | -------------- |
| `./`  | current folder |
| `../` | parent folder  |

---

## 🔥 Example 1 — Same Folder

```js
import config from './config.js';
```

---

## 🔥 Example 2 — Parent Folder

```js
import data from '../data.json';
```

---

# 🧠 Absolute vs Relative — Quick Comparison

| Feature         | Absolute Path  | Relative Path    |
| --------------- | -------------- | ---------------- |
| Starts from     | Root folder    | Current file     |
| Portable        | ❌ No          | ✅ Yes           |
| Used in imports | Rare           | Very common      |
| Example         | `/Users/...` | `../data.json` |

---

# 🚀 Playwright Example (Real Automation Usage)

import testData from '../test-data/loginData.json';

Playwright projects mostly use **relative paths** because tests run on different machines.

---

# 🎯 Super Simple Rule

Absolute Path = Full address
Relative Path = Direction from where you are

---

---

# Playwright Configurations

Here are the **most important Playwright configurations** you’ll use in real automation frameworks 👍
(All of these are defined inside **`playwright.config.ts` / `.js`**)

---

# ✅ 1️⃣ `use` — Browser & Test Settings (MOST IMPORTANT)

Defines default settings for every test.

```js
import { defineConfig } from '@playwright/test';  
  
export default defineConfig({  
  use: {  
    headless: true,  
    baseURL: 'https://example.com',  
    screenshot: 'only-on-failure',  
    video: 'retain-on-failure',  
    trace: 'on-first-retry'  
  }  
});
```

### What it controls

- browser behavior
- screenshots
- videos
- tracing
- base URL

👉 Then in test:

```js
await page.goto('/login'); // uses baseURL automatically
```

---

# ✅ 2️⃣ `projects` — Run Tests in Multiple Browsers

Very common in enterprise QA.

```js
export default defineConfig({  
  projects: [  
    { name: 'chromium', use: { browserName: 'chromium' } },  
    { name: 'firefox', use: { browserName: 'firefox' } },  
    { name: 'webkit', use: { browserName: 'webkit' } }  
  ]  
});
```

👉 Same tests run across multiple browsers.

---

# ✅ 3️⃣ `retries` — Auto Retry Failed Tests

```js
export default defineConfig({  
  retries: 2  
});
```

Useful for flaky tests in CI.

---

# ✅ 4️⃣ `workers` — Parallel Execution

Controls how many tests run simultaneously.

```js
export default defineConfig({  
  workers: 4  
});
```

Or:

```js
workers: process.env.CI ? 2 : undefined
```

👉 Faster execution.

---

# ✅ 5️⃣ `timeout` — Global Test Timeout

```js
export default defineConfig({  
  timeout: 30000  
});
```

Each test allowed 30 seconds.

---

# ✅ 6️⃣ `expect` Timeout (Assertion Timeout)

```js
export default defineConfig({  
  expect: {  
    timeout: 5000  
  }  
});
```

Controls waiting time for:

```js
await expect(locator).toBeVisible();
```

---

# ✅ 7️⃣ `testDir` — Where Tests Live

```js
export default defineConfig({  
  testDir: './tests'  
});
```

Playwright will only scan this folder.

---

# ✅ 8️⃣ `reporter` — Test Reports

```js
export default defineConfig({  
  reporter: [  
    ['list'],  
    ['html']  
  ]  
});
```

Run:

```js
npx playwright show-report
```

---

# ✅ 9️⃣ `fullyParallel` — Run Tests Parallel

```js
export default defineConfig({  
  fullyParallel: true  
});
```

Runs tests in parallel by default.

---

# ✅ 🔟 `webServer` — Start App Automatically

Very useful for local automation.

```js
export default defineConfig({  
  webServer: {  
    command: 'npm run start',  
    url: 'http://localhost:3000',  
    reuseExistingServer: true  
  }  
});
```

👉 Playwright starts your app before tests run.

---

# ⭐ Full Example Config (Real-World Style)

import { defineConfig } from '@playwright/test';

```js
export default defineConfig({  
  testDir: './tests',  
  timeout: 30000,  
  retries: 1,  
  fullyParallel: true,  
  reporter: [['html']],  
  use: {  
    baseURL: 'https://example.com',  
    headless: true,  
    screenshot: 'only-on-failure',  
    trace: 'on-first-retry'  
  },  
  projects: [  
    { name: 'chromium', use: { browserName: 'chromium' } }  
  ]  
});
```

---

# 🎯 Quick Summary (Most Important Configs)

| Config        | Purpose                |
| ------------- | ---------------------- |
| `use`       | browser settings       |
| `projects`  | multi-browser runs     |
| `retries`   | rerun failures         |
| `workers`   | parallel execution     |
| `timeout`   | test time limit        |
| `reporter`  | reporting              |
| `webServer` | start app before tests |

---

---

# ✅ 1️⃣ Environment-Based Config (dev / stage / prod)

Idea: Change `baseURL`, credentials, or settings based on environment.

## 📂 Folder Example

```js
config/  
 ├── dev.env.js  
 ├── stage.env.js  
 └── prod.env.js  
playwright.config.ts
```

---

## dev.env.js

```js
export default {  
  baseURL: 'https://dev.example.com',  
  user: 'dev_user'  
};
```

## stage.env.js

```js
export default {  
  baseURL: 'https://stage.example.com',  
  user: 'stage_user'  
};
```

---

## playwright.config.ts

```js
import { defineConfig } from '@playwright/test';  
import dev from './config/dev.env.js';  
import stage from './config/stage.env.js';  
import prod from './config/prod.env.js';  
  
const ENV = process.env.TEST_ENV || 'dev';  
  
const envConfig = {  
  dev,  
  stage,  
  prod  
}[ENV];  
  
export default defineConfig({  
  use: {  
    baseURL: envConfig.baseURL  
  }  
});
```

Run:

```js
TEST_ENV=stage npx playwright test
```

🔥 Now tests automatically run against stage.

---

# ✅ 1️⃣ Tag Inside Test Title (Basic Way)

You add the tag directly in the test name.

```js
import { test, expect } from '@playwright/test';  
  
test('Login works @smoke', async ({ page }) => {  
  await page.goto('/login');  
});  
  
test('Checkout flow @regression', async ({ page }) => {  
  await page.goto('/checkout');  
});
```

### ▶ Run only smoke tests

```js
npx playwright test -g @smoke
```

👉 Playwright searches text using regex.

---

# ✅ 2️⃣ Tag Using `tag` Option (Cleaner Enterprise Way ⭐)

Instead of mixing tags in title, use metadata.

```js
import { test, expect } from '@playwright/test';  
  
test('Login works', { tag: '@smoke' }, async ({ page }) => {  
  await page.goto('/login');  
});  
  
test('Checkout flow', { tag: ['@regression', '@e2e'] }, async ({ page }) => {  
  await page.goto('/checkout');  
});
```

### ▶ Run smoke tests

```js
npx playwright test -g @smoke
```

---

# 🔥 Tag Entire Describe Block

```js
import { test } from '@playwright/test';  
  
test.describe('User Module', { tag: '@regression' }, () => {  
  
  test('create user', async ({ page }) => {});  
  test('delete user', async ({ page }) => {});  
  
});
```

👉 All tests inside inherit the tag automatically.

---

# 🧠 Difference Between Both Ways

| Method        | Example               | Best For            |
| ------------- | --------------------- | ------------------- |
| Title tagging | `'Login @smoke'`    | Quick/simple        |
| Tag option    | `{ tag: '@smoke' }` | Large frameworks ⭐ |

---

# 🎯 Recommendation

Use:

```js
{ tag: '@smoke' }
```

because:

✅ Cleaner reporting
✅ No messy test names
✅ Better maintainability in big Playwright frameworks

---

---

# Assertion

Here are the **most important assertions in Playwright** you’ll use daily 👍
All assertions come from:

```js
import { test, expect } from '@playwright/test';
```

---

# ✅ 1️⃣ `toBeVisible()` — Check Element Visibility ⭐

Used to verify UI element appears on screen.

```js
await expect(page.locator('#loginBtn')).toBeVisible();
```

✔ Waits automatically until visible.

---

# ✅ 2️⃣ `toHaveText()` — Exact Text Validation

Checks full text match.

```js
await expect(page.locator('h1')).toHaveText('Dashboard');
```

⚠️ Fails if text differs even slightly.

---

# ✅ 3️⃣ `toContainText()` — Partial Text (Very Common)

Best for dynamic content.

```js
await expect(page.locator('h1')).toContainText('Dash');
```

Matches:

Dashboard Home

---

# ✅ 4️⃣ `toHaveURL()` — Validate Page URL

```js
await expect(page).toHaveURL('https://example.com/home');
```

Partial match:

```js
await expect(page).toHaveURL(/home/);
```

---

# ✅ 5️⃣ `toHaveTitle()` — Page Title Check

```js
await expect(page).toHaveTitle('My App');
```

Regex:

```js
await expect(page).toHaveTitle(/App/);
```

---

# ✅ 6️⃣ `toBeEnabled()` / `toBeDisabled()`

```js
await expect(page.locator('#submit')).toBeEnabled();  
await expect(page.locator('#submit')).toBeDisabled();
```

---

# ✅ 7️⃣ `toBeChecked()` — Checkbox / Radio

```js
await expect(page.locator('#remember')).toBeChecked();
```

---

# ✅ 8️⃣ `toHaveValue()` — Input Field Value

```js
await expect(page.locator('#username')).toHaveValue('vaibhav');
```

---

# ✅ 9️⃣ `toHaveCount()` — Multiple Elements

Useful for tables/lists.

```js
await expect(page.locator('.row')).toHaveCount(5);
```

---

# ✅ 🔟 `toBeHidden()` — Element Not Visible

```js
await expect(page.locator('#loader')).toBeHidden();
```

---

# 🔥 Real Automation Example (Combined)

```js
test('Dashboard validation', async ({ page }) => {  
  
  await page.goto('/dashboard');  
  
  await expect(page).toHaveURL(/dashboard/);  
  await expect(page.locator('h1')).toContainText('Dashboard');  
  await expect(page.locator('#logout')).toBeVisible();  
  
});
```

---

# 🧠 Why Playwright Assertions Are Powerful

Unlike Selenium-style checks:

✔ Auto-wait built-in
✔ Retry until timeout
✔ Less flaky tests

No need for manual waits 👍

---

# 🎯 Quick Cheat Sheet (Most Used)

```js
await expect(locator).toBeVisible();  
await expect(locator).toContainText('text');  
await expect(page).toHaveURL(/url/);  
await expect(locator).toHaveValue('value');  
await expect(locator).toHaveCount(n);
```

---

# Polling

`expect.poll()` in Playwright is used when you want to **repeatedly check a value** until it becomes correct — very useful for:

✅ API responses
✅ Database/data updates
✅ Background jobs
✅ Dynamic counters

👉 Instead of waiting for UI, you keep polling a function until the assertion passes.

---

# ✅ Basic Syntax

```js
await expect.poll(async () => {  
  // return some value  
}).toBe(expectedValue);
```

Playwright will:

- run the function repeatedly
- retry until timeout
- pass when condition matches

---

# 🧠 Simple Example — Polling a Number

```js
import { test, expect } from '@playwright/test';  
  
test('poll example', async () => {  
  let count = 0;  
  
  setTimeout(() => {  
    count = 5; // simulate async update  
  }, 2000);  
  
  await expect.poll(() => count).toBe(5);  
});
```

👉 Playwright keeps checking `count` until it becomes `5`.

---

# 🔥 Real Example — API Status Check (Very Practical)

Suppose backend takes time to process order.

```js
test('order status becomes completed', async ({ request }) => {  
  
  await expect.poll(async () => {  
  
    const res = await request.get('/api/order/123');  
    const body = await res.json();  
  
    return body.status;  
  
  }).toBe('completed');  
  
});
```

✔ Keeps calling API until status = completed.

This is SUPER useful in enterprise automation 👍.

---

# ✅ Poll with Custom Interval & Timeout

```js
await expect.poll(  
  async () => {  
    const res = await request.get('/api/job');  
    return (await res.json()).state;  
  },  
  {  
    timeout: 10000, // total wait  
    intervals: [1000] // check every 1s  
  }  
).toBe('done');
```

---

# ⭐ UI + API Hybrid Example

```js
await expect.poll(async () => {  
  return await page.locator('#counter').textContent();  
}).toContain('10');
```

Useful when UI updates slowly.

---

# 🧩 Why Use `expect.poll()` Instead of `waitForTimeout()`?

❌ Bad:

```js
await page.waitForTimeout(5000);
```

✔ Good:

```js
await expect.poll(() => getStatus()).toBe('ready');
```

Because:

- auto retries
- faster when condition becomes true early
- less flaky tests

---

# 🎯 Quick Cheat Sheet

```js
await expect.poll(() => value).toBe(x);  
await expect.poll(async () => apiCall()).toContain('ok');
```

---

---

# **XPath + CSS Cheat Sheet**

Here’s a **detailed but practical XPath + CSS Cheat Sheet** you can use for Playwright / Selenium / Automation 👍
(I’ve structured it like real QA notes — easy for revision.)

---

# 🧭 XPath Cheat Sheet

## ✅ Basic Syntax

```xpath
//tagname  
//*[@attribute="value"]  
//tag[@attr="value"]
```

Examples:

```xpath
//input  
//input[@id="username"]  
//button[@type="submit"]
```

---

## ✅ Attribute Selectors

```
//*[@id="user"]  
//input[@placeholder="Username"]  
//a[@href="/home"]
```

Rule:

@attribute   ← XPath uses @

---

## ✅ Partial Matching (VERY IMPORTANT ⭐)

### contains()

```xpath
//*[contains(@id,"user")]  
//input[contains(@placeholder,"User")]
```

### starts-with()

```xpath
//*[starts-with(@id,"user")]
```

---

## ✅ Text-Based XPath

```xpath
//button[text()="Login"]  
//button[contains(text(),"Log")]
```

---

## ✅ Parent / Child / Sibling

### Direct child

```xpath
//form/div/input
```

### Any descendant

```xpath
//form//input
```

### Parent

```xpath
//input[@id="user"]/..
```

### Following sibling

```xpath
//label[text()="Username"]/following-sibling::input
```

---

## ✅ Indexing

```xpath
(//input)[1]  
(//div[@class="row"])[3]
```

---

## ✅ Multiple Conditions

```xpath
//input[@type="text" and @name="user"]  
//button[@type="submit" or @id="login"]
```

---

## ✅ XPath Axes (Advanced — Interview Level)

```
ancestor::  
descendant::  
following::  
preceding::  
parent::  
child::
```

Example:

```xpath
//input[@id="user"]/ancestor::form
```

---

# 🎯 Common XPath Patterns (Automation)

```xpath
//input[@id="username"]  
//button[contains(text(),"Login")]  
//label[text()="User"]/following-sibling::input  
//*[@data-testid="submit"]
```

---

# 🎨 CSS Selector Cheat Sheet

## ✅ Basic Syntax

```css
tag  
.class  
#id
```

Examples:

```css
input  
.form_input  
#username
```

---

## ✅ Attribute Selectors

```css
input[placeholder="Username"]  
button[type="submit"]
```

⚠️ No `@` in CSS.

---

## ✅ Partial Attribute Matching ⭐

```css
[placeholder*="User"]   /* contains */  
[id^="user"]            /* starts with */  
[id$="name"]            /* ends with */
```

---

## ✅ Parent → Child

```css
form > input        /* direct child */  
form input          /* any descendant */
```

---

## ✅ Multiple Classes

```css
.form_input.active
```

---

## ✅ Indexing

```css
div:nth-child(2)  
input:first-child  
li:last-child
```

---

## ✅ Sibling Selectors

```css
label + input     /* next sibling */  
label ~ input     /* all siblings */
```

---

# ⚔️ XPath vs CSS — Quick Comparison

| Feature           | XPath   | CSS         |
| ----------------- | ------- | ----------- |
| Attribute syntax  | `@id` | `[id=""]` |
| Text matching     | ✅ Yes  | ❌ No       |
| Parent navigation | ✅ Yes  | ❌ Limited  |
| Speed             | Slower  | Faster ⭐   |
| Readability       | Medium  | Clean       |

---

# 🚀 Playwright Best Practice (VERY IMPORTANT)

Prefer Playwright locators over raw XPath/CSS:

```js
page.getByRole('button', { name: 'Login' })  
page.getByPlaceholder('Username')  
page.getByLabel('Password')
```

Because:

✅ Auto-wait
✅ Stable
✅ Less flaky

---

# 🔥 Real QA Automation Examples

### XPath

```xpath
//input[@id="username"]  
//button[contains(text(),"Submit")]
```

### CSS

```css
#username  
button[type="submit"]
```

---

# 🧠 Pro Tips (Senior QA Level)

✔ Use **CSS** when possible → faster
✔ Use **XPath** when needing text or parent traversal
✔ Avoid long absolute XPath like:

```xpath
/html/body/div[2]/form/div/input ❌
```

---

# 🎯 Ultra-Short Memory Cheatsheet

## XPath

```xpath
//tag[@attr="value"]  
//*[contains(@attr,"text")]  
//tag[text()="Exact"]
```

## CSS

```css
#id  
.class  
[attr="value"]  
[attr*="text"]
```

---

---

# Task

## Create a login test for <https://www.saucedemo.com/>

- use locators
- use actions like fill, click
- for invalid login identify error message
- validate error message

---

---

# Handle Multiple elements

Here are **short, clear notes** on handling **multiple elements in Playwright** using `.first()`, `.last()`, `.nth()` 👍

---

# 🎯 When Do We Need These?

When a locator matches **multiple elements**, like:

```js
const items = page.locator('.product');
```

If there are 10 `.product` elements, Playwright needs help selecting one.

---

# ✅ 1️⃣ `.first()` — Select First Element

Selects the first matched element (index 0).

```js
await page.locator('.product').first().click();
```

Equivalent to:

```js
await page.locator('.product').nth(0).click();
```

✔ Use when you always need the first item.

---

# ✅ 2️⃣ `.last()` — Select Last Element

Selects the last matched element.

```js
await page.locator('.product').last().click();
```

✔ Useful for dynamic lists (like latest item).

---

# ✅ 3️⃣ `.nth(index)` — Select Specific Index

Index starts from **0**.

```js
await page.locator('.product').nth(2).click();
```

👉 Clicks the **3rd element**.

---

# 🔥 Example — Handling Multiple Buttons

HTML:

```html
<button>Save</button>  
<button>Save</button>  
<button>Save</button>
```

Playwright:

const buttons = page.locator('button');

```js
await buttons.first().click();  // first Save  
await buttons.nth(1).click();   // second Save  
await buttons.last().click();   // third Save
```

---

# ✅ 4️⃣ Get Count of Elements

```js
const count = await page.locator('.row').count();  
console.log(count);
```

Very useful before using `.nth()`.

---

# ✅ 5️⃣ Loop Through Multiple Elements

```js
const items = page.locator('.product');  
const count = await items.count();  
  
for (let i = 0; i < count; i++) {  
  console.log(await items.nth(i).textContent());  
}
```

---

# ⚠️ Important Notes

✔ `.nth()` is zero-based index
✔ Works only if element exists
✔ Playwright auto-waits for elements

---

# 🚀 Best Practice (Cleaner Way)

Instead of:

```js
page.locator('.btn').nth(0)
```

If possible, use better locator:

```js
page.getByRole('button', { name: 'Save' }).first();
```

More stable 👍

---

# 🎯 Quick Cheat Sheet

```js
locator.first()  
locator.last()  
locator.nth(index)  
locator.count()
```

---

---

# 🧠 What is `chromium.launchPersistentContext()`?

`chromium.launchPersistentContext()` launches a **browser with a permanent user profile directory**, instead of creating a temporary incognito session.

👉 It means:

> The browser keeps cookies, localStorage, cache, login session between runs.

---

# 🆚 Normal vs Persistent Context

## ✅ Normal (Default Playwright Way)

```js
const browser = await chromium.launch();  
const context = await browser.newContext();
```

👉 Creates a **temporary incognito-like session**
👉 Everything is deleted after test finishes

---

## ✅ Persistent Context

import { chromium } from 'playwright';

```js
const context = await chromium.launchPersistentContext(  
  './user-data',   // folder to store profile  
  {  
    headless: false  
  }  
);  
  
const page = await context.newPage();  
await page.goto('https://example.com');
```

👉 `./user-data` stores:

- cookies
- localStorage
- sessionStorage
- browser cache
- login session

Even after closing browser, data stays.

---

# 📂 What is `./user-data`?

It’s a **real browser profile folder** like Chrome user profile.

If you log in once, next time you run test — you're already logged in.

---

# 🔥 Real Use Case — Skip Login Without storageState

```js
const context = await chromium.launchPersistentContext('./profile');  
const page = await context.newPage();  
  
await page.goto('https://example.com/dashboard');
```

If profile already has login cookies → dashboard opens directly.

---

# ⚙️ Important Behavior

| Feature             | newContext() | launchPersistentContext() |
| ------------------- | ------------ | ------------------------- |
| Incognito           | ✅ Yes       | ❌ No                     |
| Session saved       | ❌ No        | ✅ Yes                    |
| storageState needed | Sometimes    | Not required              |
| Good for automation | ✅ Yes       | ⚠️ Limited              |

---

# ⚠️ Important Limitations

🚨 You cannot create multiple contexts from persistent context.

This will fail:

```js
context.newContext() ❌
```

Because persistent context = already a full browser context.

---

# ⭐ When Should You Use It?

Use it when:

✅ Testing Chrome extensions
✅ Testing real user profile
✅ Debugging login session
✅ Manual testing scenarios

Avoid it in:

❌ Parallel CI runs
❌ Clean isolated test execution

---

# 🎯 Super Short Meaning

launchPersistentContext = Launch browser with saved user profile

---

# 🚀 Senior-Level Tip (Important for You)

In automation frameworks:

👉 Prefer `storageState` for login reuse
👉 Use `launchPersistentContext()` only when needed

Because persistent context:

- Not fully isolated
- Harder to parallelize

---

---

# 🧠 What is Auto-Waiting?

Auto-wait means Playwright will automatically wait for:

- Element to appear
- Element to be visible
- Element to be enabled
- Element to be stable (not moving)

Before performing the action.

---

# ✅ Methods That FOLLOW Auto-Waiting (Most Important ⭐)

These automatically wait for element to be ready.

## 🔹 1️⃣ Locator Actions (MOST IMPORTANT)

```js
locator.click()  
locator.fill()  
locator.check()  
locator.uncheck()  
locator.selectOption()  
locator.hover()  
locator.press()
```

### Why?

Because Playwright ensures:

- element is attached to DOM
- visible
- stable
- enabled

---

## 🔹 2️⃣ Assertions (`expect()`)

```js
await expect(locator).toBeVisible();  
await expect(locator).toHaveText();  
await expect(page).toHaveURL();
```

### Why?

Assertions retry until timeout.

---

## 🔹 3️⃣ `page.goto()`

```js
await page.goto('https://example.com');
```

### Why?

Waits for page load (default: load event).

---

## 🔹 4️⃣ `page.waitForURL()`

Auto-waits for navigation to match.

---

# ❌ Methods That DO NOT Auto-Wait

These require manual handling.

---

## 🔸 1️⃣ `page.$()` (Avoid This ⚠️)

```js
const element = await page.$('.btn');
```

### Why?

Returns immediately.
Does NOT wait for visibility or stability.

Better:

page.locator('.btn')

---

## 🔸 2️⃣ `page.$$()`

Same issue — no auto-wait.

---

## 🔸 3️⃣ `page.evaluate()`

```js
await page.evaluate(() => {...});
```

### Why?

Runs immediately in browser context.
No waiting for element state.

---

## 🔸 4️⃣ `page.waitForTimeout()` ❌

```js
await page.waitForTimeout(5000);
```

### Why?

Static wait — no smart waiting.

---

## 🔸 5️⃣ `locator.all()` (Be Careful)

Returns array of elements immediately.

---

# ⚖️ Locator vs Page API (VERY IMPORTANT)

| API Type            | Auto-Wait?   | Recommended |
| ------------------- | ------------ | ----------- |
| `locator.click()` | ✅ Yes       | ⭐ Yes      |
| `page.click()`    | ⚠️ Limited | Avoid       |
| `page.$()`        | ❌ No        | ❌ No       |
| `expect()`        | ✅ Yes       | ⭐ Yes      |

---

# 🚀 Why Locator API Auto-Waits?

Because Playwright design principle is:

> Actions should simulate real user behavior.

So it ensures:

- element visible
- not covered
- stable position
- enabled

Before interaction.

---

# 🎯 Golden Rule (For You As QA Engineer)

Always prefer:

```js
page.locator()  
page.getByRole()  
page.getByText()  
expect(locator)
```

Avoid:

```js
page.$()  
page.$$()  
waitForTimeout()
```

---

# 🔥 Real Interview-Level Summary

Auto-wait applies to:

- Locator-based actions
- Assertions
- Navigation methods

Does NOT apply to:

- Element handle methods (`$`, `$$`)
- `evaluate()`
- Static waits

Because auto-wait is implemented inside **Locator and Expect APIs**, not low-level element handles.

---

---

# 🧠 What Are Dynamic Waits?

Dynamic waits =
👉 Waiting **until a condition is met**, instead of waiting fixed time.

❌ Bad (Static Wait):

```js
await page.waitForTimeout(5000);
```

This always waits 5 seconds, even if page loads in 1 sec.

---

# ✅ Dynamic Waits (Smart Waiting)

Playwright waits automatically based on:

- Element visibility
- Network response
- URL change
- State change
- Assertions

---

# 🔥 1️⃣ Locator Auto-Wait (Most Important ⭐)

```js
await page.locator('#login').click();
```

Playwright automatically waits for:

- element attached to DOM
- visible
- enabled
- stable (not moving)

No manual wait needed.

---

# 🔥 2️⃣ Assertion-Based Wait

```js
await expect(page.locator('#success')).toBeVisible();
```

Playwright retries until:

- condition becomes true
- timeout reached

---

# 🔥 3️⃣ Wait for URL Change

```js
await page.waitForURL('**/dashboard');
```

Waits until navigation matches.

---

# 🔥 4️⃣ Wait for Selector (Less Needed Now)

```js
await page.waitForSelector('#message');
```

Waits until element appears.

But usually prefer:

```js
await expect(locator).toBeVisible();
```

---

# 🔥 5️⃣ Wait for Response (API-Based Dynamic Wait)

```js
await page.waitForResponse(response =>  
  response.url().includes('/api/login') &&  
  response.status() === 200  
);
```

Great for backend sync.

---

# 🔥 6️⃣ Wait for Load State

```js
await page.waitForLoadState('networkidle');
```

Waits until no network requests for 500ms.

Options:

- `'load'`
- `'domcontentloaded'`
- `'networkidle'`

---

# 🔥 7️⃣ `expect.poll()` (Advanced Dynamic Wait)

Used for API or DB validation.

```js
await expect.poll(async () => {  
  return await getStatus();  
}).toBe('COMPLETED');
```

Keeps retrying until condition matches.

---

# 🧠 Why Dynamic Waits Are Important

Instead of:

```js
await page.waitForTimeout(10000);
```

Use:

```js
await expect(locator).toBeVisible();
```

Because:

✔ Faster
✔ Less flaky
✔ Smarter
✔ CI-friendly

---

# ⚠️ When Static Wait Is BAD

```js
await page.waitForTimeout(5000);
```

Problems:

- Slows tests
- Flaky if 5 sec not enough
- Waste time if element appears early

---

# 🎯 Summary Table

| Wait Type         | Dynamic? | Recommended |
| ----------------- | -------- | ----------- |
| locator.click()   | ✅ Yes   | ⭐ Yes      |
| expect()          | ✅ Yes   | ⭐ Yes      |
| waitForURL()      | ✅ Yes   | Yes         |
| waitForResponse() | ✅ Yes   | Yes         |
| waitForTimeout()  | ❌ No    | ❌ Avoid    |

---

# 🚀 Golden Rule (For You As QA Engineer)

> Use Playwright’s built-in auto-wait and assertions instead of manual waits.

---

## **Difference between these load states** in

```js
await page.waitForLoadState('networkidle');
```

Options:

- `'load'`
- `'domcontentloaded'`
- `'networkidle'`

---

# 🧠 1️⃣ `'domcontentloaded'`

```js
await page.waitForLoadState('domcontentloaded');
```

### ✅ What it means

Waits until:

- HTML is fully parsed
- DOM tree is built

🚫 Does NOT wait for:

- Images
- CSS
- Fonts
- API calls

### 📌 Equivalent browser event

DOMContentLoaded

### 🔥 When to use

- When you only need DOM ready
- Fast navigation checks
- SPA apps where content renders quickly

---

# 🧠 2️⃣ `'load'`

```js
await page.waitForLoadState('load');
```

### ✅ What it means

Waits until:

- DOM is ready
- All images loaded
- CSS loaded
- Scripts loaded

🚫 May still have:

- Ongoing API calls

### 📌 Equivalent browser event

```js
window.onload
```

### 🔥 When to use

- Traditional websites
- When page fully visually loaded matters

---

# 🧠 3️⃣ `'networkidle'` ⭐

```
await page.waitForLoadState('networkidle');
```

### ✅ What it means

Waits until:

- No network requests for 500ms

✔ Ensures:

- APIs finished
- Background requests done

### 🚨 Important

If app continuously polls server → may NEVER reach networkidle.

---

# ⚖️ Comparison Table

| Option               | Waits For DOM | Waits Images/CSS | Waits API | Best For          |
| -------------------- | ------------- | ---------------- | --------- | ----------------- |
| `domcontentloaded` | ✅ Yes        | ❌ No            | ❌ No     | Fast DOM checks   |
| `load`             | ✅ Yes        | ✅ Yes           | ❌ No     | Traditional sites |
| `networkidle`      | ✅ Yes        | ✅ Yes           | ✅ Yes    | API-heavy apps ⭐ |

---

# 🎯 Visual Timeline

Navigation starts
   ↓
DOM built → domcontentloaded
   ↓
Images/CSS loaded → load
   ↓
All network quiet → networkidle

---

# 🚀 Important Playwright Insight

You usually **do NOT need** this:

```js
await page.waitForLoadState(...)
```

Because:

- `page.goto()` already waits for `'load'` by default.
- Locator actions auto-wait.

Use `networkidle` carefully in SPA apps.

---

# 🧠 Senior-Level Advice

For modern React/Angular apps:
✔ Prefer waiting for a specific element:

```js
await expect(page.locator('#dashboard')).toBeVisible();
```

Instead of:

```js
await page.waitForLoadState('networkidle');
```

More reliable and less flaky.

---

---

# Dropdown Handling

There are mainly **2 types** in web apps:

1️⃣ Native `<select>` dropdown
2️⃣ Custom (div-based / React / UI library) dropdown

Let’s handle both the Playwright way 👇

---

# ✅ 1️⃣ Handling Native `<select>` Dropdown

HTML:

```html
<select id="country">  
  <option value="in">India</option>  
  <option value="us">USA</option>  
  <option value="uk">UK</option>  
</select>
```

---

## ⭐ Playwright Method → `selectOption()`

### Select by value

```js
await page.selectOption('#country', 'in');
```

### Select by visible text

```js
await page.selectOption('#country', { label: 'India' });
```

### Select by index

```js
await page.selectOption('#country', { index: 1 });
```

---

## Get selected value

```js
const value = await page.locator('#country').inputValue();  
console.log(value);
```

---

# ✅ 2️⃣ Handling Custom Dropdown (Div-based)

HTML (Example):

```html
<div class="dropdown">  
  <button id="countryBtn">Select</button>  
  <ul>  
    <li>India</li>  
    <li>USA</li>  
  </ul>  
</div>
```

---

## ⭐ Playwright Way

### Step 1: Click to open dropdown

```js
await page.click('#countryBtn');
```

### Step 2: Click option by text

```js
await page.click('text=India');
```

---

## Better Locator Way (Recommended)

```js
await page.getByRole('button', { name: 'Select' }).click();  
await page.getByText('India').click();
```

Cleaner and more stable 👍

---

# ✅ 3️⃣ Searchable Dropdown (React / Autocomplete)

Example:

```js
await page.click('.react-select');  
await page.fill('.react-select input', 'Ind');  
await page.getByText('India').click();
```

---

# ✅ 4️⃣ Multi-Select Dropdown

For native multi-select:

```js
await page.selectOption('#countries', ['in', 'us']);
```

---

# 🧠 How to Identify Dropdown Type (Important)

Inspect element:

✔ If you see `<select>` → use `selectOption()`
✔ If you see `<div>` / `<ul>` → use `click()` strategy

---

# 🎯 Most Recommended Practice

Prefer:

```js
page.getByRole('combobox')  
page.getByRole('option')
```

Example:

```js
await page.getByRole('combobox').selectOption('in');
```

---

# ⚠️ Common Mistake

❌ Trying `selectOption()` on div-based dropdown → will fail.

Because `selectOption()` works **only for `<select>` elements**.

---

# 🚀 Quick Cheat Sheet

// Native dropdown

```js
await page.selectOption(selector, value);
```

// Custom dropdown

```js
await page.click(trigger);  
await page.click('text=Option');
```

---

---

# Handling **radio buttons** and **checkboxes** in **Playwright**

---

# ✅ Checkbox in Playwright

Playwright has built-in methods:

- `check()`
- `uncheck()`
- `isChecked()`

### 🔹 Example HTML

```html
<input type="checkbox" id="subscribe" />
```

### 🔹 Playwright Code

```js
import { test, expect } from '@playwright/test';  
  
test('Handle checkbox', async ({ page }) => {  
  await page.goto('https://example.com');  
  // Check the checkbox  
  await page.locator('#subscribe').check();  
  // Verify it is checked  
  await expect(page.locator('#subscribe')).toBeChecked();  
  // Uncheck it  
  await page.locator('#subscribe').uncheck();  
});
```

### 🔎 Important

- `check()` works only for checkbox/radio inputs.
- Playwright auto-waits until element is actionable.

---

# 🔘 Radio Button in Playwright

Radio buttons use the same `check()` method.

### 🔹 Example HTML

```html
<input type="radio" name="gender" value="male" />  
<input type="radio" name="gender" value="female" />
```

### 🔹 Playwright Code

```js
test('Handle radio button', async ({ page }) => {  
  await page.goto('https://example.com');  
  // Select female radio button  
  await page.locator('input[value="female"]').check();  
  // Verify selected  
  await expect(page.locator('input[value="female"]')).toBeChecked();  
});
```

---

# ⚡ Best Practice (Recommended Way)

Use **getByRole()** (more stable & readable):

```js
await page.getByRole('checkbox', { name: 'Subscribe' }).check();  
await page.getByRole('radio', { name: 'Female' }).check();
```

Better for real-world automation (less brittle than CSS selectors).

---

# 🧠 Interview Tip (Important Difference)

| Method      | When to Use                                        |
| ----------- | -------------------------------------------------- |
| `check()` | For checkbox & radio only                          |
| `click()` | Generic click (not recommended for checkbox/radio) |

Why prefer `check()`?

- Ensures element is actually checked
- Throws error if not checkbox/radio
- Handles already-checked state safely

---

---

# Handling **browser tabs (multiple pages)** in **Playwright (JavaScript)** 👇

---

# 🧠 Key Concept

In Playwright:

- **Browser** → contains multiple contexts
- **BrowserContext** → contains multiple pages (tabs)
- **Page** → single tab

When a new tab opens → Playwright creates a **new Page object**.

---

# ✅ Scenario: Clicking a link opens a new tab

### 🔹 Example

```js
import { test, expect } from '@playwright/test';  
  
test('Handle new tab', async ({ page, context }) => {  
  await page.goto('https://example.com');  
  // Wait for new tab while clicking  
  const [newPage] = await Promise.all([  
    context.waitForEvent('page'),  // waits for new tab  
    page.click('text=Open New Tab')  
  ]);  
  // Wait for new page to load  
  await newPage.waitForLoadState();  
  // Work on new tab  
  await expect(newPage).toHaveTitle(/Example/);  
  console.log(await newPage.url());  
  // Close new tab  
  await newPage.close();  
});
```

---

# ⚡ Alternative (Recommended Cleaner Way)

Use `page.waitForEvent('popup')`:

```js
const [newPage] = await Promise.all([  
  page.waitForEvent('popup'),  
  page.click('text=Open New Tab')  
]);
```

👉 Use this when the tab is opened by clicking something on the same page.

---

# 🔄 Switching Between Tabs

```js
const pages = context.pages();  
  
await pages[0].bringToFront();  // first tab  
await pages[1].bringToFront();  // second tab
```

---

# 🎯 Quick Summary

| Method                           | Use Case                     |
| -------------------------------- | ---------------------------- |
| `context.waitForEvent('page')` | Any new tab opens            |
| `page.waitForEvent('popup')`   | Tab opened from current page |
| `context.pages()`              | Get all open tabs            |
| `bringToFront()`               | Switch tab                   |

---

# 🚀 Interview Tip

Playwright does **NOT** use:

- ❌ window handles (like Selenium)
- ❌ switchTo()

It uses **Page objects** instead (cleaner & modern approach).

---

In Playwright, you can handle **two pages** in two ways:

# ✅ 1️⃣ Two Tabs (Same Browser Context)

👉 Use this when:

- Same session/cookies are fine
- Just two tabs open in same browser

```js
import { test, expect } from '@playwright/test';  
  
test('Two tabs - same session', async ({ browser }) => {  
  
  const context = await browser.newContext();  
  
  const page1 = await context.newPage();  
  const page2 = await context.newPage();  
  
  // Page 1 Login  
  await page1.goto('https://example.com/login');  
  await page1.fill('#username', 'user1');  
  await page1.fill('#password', 'pass1');  
  await page1.click('button[type=submit]');  
  
  // Page 2 (Same session cookies shared)  
  await page2.goto('https://example.com/dashboard');  
  
  console.log(await page2.url());  
});
```

⚠ Both pages share:

- Cookies
- LocalStorage
- Session

---

# ✅ 2️⃣ Two Separate Logins (Different Users) ✅ Recommended

👉 Use **two BrowserContexts**
This gives full isolation (like two different browsers).

```js
test('Two users login - isolated sessions', async ({ browser }) => {  
  
  // User 1 Context  
  const context1 = await browser.newContext();  
  const page1 = await context1.newPage();  
  
  await page1.goto('https://example.com/login');  
  await page1.fill('#username', 'admin');  
  await page1.fill('#password', 'admin123');  
  await page1.click('button[type=submit]');  
  
  // User 2 Context  
  const context2 = await browser.newContext();  
  const page2 = await context2.newPage();  
  
  await page2.goto('https://example.com/login');  
  await page2.fill('#username', 'user');  
  await page2.fill('#password', 'user123');  
  await page2.click('button[type=submit]');  
  
});
```

✅ Now:

- Different cookies
- Different sessions
- Fully independent users

---

# 🧠 Real-World Example

Imagine:

- Admin approves request
- User sees update instantly

You would:

```js
await page1.click('Approve');  
await page2.reload();  
await expect(page2.locator('text=Approved')).toBeVisible();
```

---

# 🎯 Interview-Level Explanation

| Scenario                   | Use                      |
| -------------------------- | ------------------------ |
| Multiple tabs same user    | `context.newPage()`    |
| Multiple users             | `browser.newContext()` |
| Session isolation needed   | New Context              |
| Just navigation separation | New Page                 |

---

# 🚀 Best Practice (Important)

For multi-user testing:

- Always use separate **BrowserContext**
- Never reuse same context for different login users

---
