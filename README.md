# 📚 Angular Book Tracker

An Angular app to practice **Reactive Forms** and **RxJS operators** (`combineLatest`, `debounceTime`, `distinctUntilChanged`) with the **Google Books API**. Includes add, edit, delete, and filter functionality.

---

## 🚀 Features

* Search books using the **Google Books API**
* Manage personal library (Add / Edit / Delete)
* Reactive filters (status, search, rating)
* Observables for form inputs + API data
* RxJS operators: `combineLatest`, `debounceTime`, `distinctUntilChanged`
* Optimistic updates with error handling

---

## 🛠️ Tech Stack

* **Angular 17+** (standalone components, new template syntax `@if`, `@for`)
* **RxJS** for reactive streams
* **Reactive Forms** for filters & search
* **Google Books API** as data source
* **SCSS** for styling (ellipsis truncation, responsive design)

---

## 📂 Project Structure

```
src/
 ├─ app/
 │   ├─ books/
 │   │   ├─ books.component.ts
 │   │   ├─ books.component.html
 │   │   ├─ books.service.ts
 │   │   └─ book.model.ts
 │   ├─ shared/
 │   │   └─ components/...
 │   └─ app.component.ts
 └─ assets/
```

---

## ⚡ Quick Start

```bash
# Clone the repo
git clone https://github.com/your-username/angular-book-tracker.git
cd angular-book-tracker

# Install dependencies
npm install

# Run locally
ng serve

# Open in browser
http://localhost:4200/
```

---

## 🔑 Environment Setup

Get a Google Books API key (optional for small usage):

```ts
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
```

---

## 📖 Usage

1. Type in the search box → triggers API calls with `debounceTime`
2. Select filters (category, rating, status)
3. Add, edit, or delete books from your personal list
4. Filtered results update reactively with `combineLatest`

---

## ✅ Learning Goals

* Practice Angular **Reactive Forms**
* Build a mini **RxJS store** with `BehaviorSubject`
* Combine multiple streams (`combineLatest`)
* Handle async flows (`switchMap`, `catchError`)
* Style with SCSS (ellipsis, responsive design)

---

## 📌 License

MIT © 2025 Claudio Campos
