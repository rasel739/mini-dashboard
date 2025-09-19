# 🧪 Mini Dashboard

It is a **mini dashboard** built using **Next.js 15+, TypeScript, Tailwind CSS, and Framer Motion**.

---

## Getting Started

```bash
npm install
# or
yarn install
```

## Add Credentials

```javascript

NEXT_PUBLIC_API_URL=

NEXTAUTH_SECRET=
NEXTAUTH_URL=

AUTH_WEBAPP_GOOGLE_CLIENT_ID=
AUTH_WEBAPP_GOOGLE_CLIENT_SECRET=


```

And, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎯 Objective

- ✅ Clean component structure and reusability
- ✅ Handling API data with hooks & state
- ✅ Meaningful animations using Framer Motion
- ✅ Proper error handling & loading states
- ✅ Clear commit history and deployment

---

## 🛠 Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router + TypeScript)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for posts & users
- [Auth.js / NextAuth](https://authjs.dev/) for authentication

---

## 📂 Features & Pages

### `/` → Dashboard Home

- Static summary
- Small animated element

### `/posts` → Posts Page

- Fetch posts from **JSONPlaceholder** API
- Display in reusable **Card** components
- Each card links to `/posts/[id]`

### `/posts/[id]` → Post Details

- Fetch and display details for a single post

### `/users` → Users Page

- Fetch users from **JSONPlaceholder** API
- Show them in a responsive **table**
- Row click → open a **modal with details**

---

## 🔄 Reusability

- **Component** → Reusable Components
- **Custom Hook** → `useFetch` for API calls

---

## 🎬 Animations (Framer Motion)

- Animated **Sidebar** (collapsible with smooth transitions)
- **Staggered Card Animations** on posts page
- Animated **Modal** for user details

---

## ⚠️ Error Handling & Loading

- Loading states while fetching
- Error boundaries for failed requests

---

## 🔑 Authentication

- **Google Login** with **NextAuth**

---

---

## 🧑‍💻 Author

- **Rasel Hossain**
- GitHub: [@rasel739](https://github.com/rasel739)
- Email: raselhossain6059@gmail.com
