# Playwright TypeScript Automation Framework

A scalable end-to-end test automation framework built using **Playwright** and **TypeScript**.

---

**Prerequisites**

Ensure the following are installed:

* Node.js (v16 or higher)
* npm (comes with Node.js)
* Git

---

**Playwright + TypeScript Setup (Fresh Installation)**

If you're setting up from scratch:

### 1. Initialize Project

```bash
npm init -y
```

### 2. Install Playwright

```bash
npm init playwright@latest
```

> Select:
> * TypeScript ✔
> * tests folder ✔
> * GitHub Actions (optional)

---

## 📥 Clone & Run the Framework Locally

Follow these steps to download and execute the framework on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/balasubramanian-r-123/pepagoraAutomation.git
cd your-repo-name
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Install Playwright Browsers

```bash
npx playwright install
```

---

### 4. Run Tests

Run all tests:

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run a specific test:

```bash
npx playwright test "example.spec.ts"
```

Run tests sequentially:

```bash
npx playwright test --workers=1
```

---

### 6. View HTML Report

```bash
npx playwright show-report
```

---

## 📁 Project Structure

```
project-root/
├── pages                 # Locator files
├── tests/                # Test files
├── playwright.config.ts  # Configuration
├── package.json          # Dependencies
├── .gitignore
```

---

**Tech Stack**

* Playwright
* TypeScript
* Node.js

---

## Notes

* Run `npx playwright install` after cloning (important)
* Do not commit `.env` or report folders
* Ensure dependencies are installed before execution

---

## Author
Balasubramanian R 
