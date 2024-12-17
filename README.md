# Wallet App

A full-stack wallet application built with React Native for mobile users and an Express backend for API services. The app features user authentication, transaction management, wallet balance display, and recurring transaction tracking.

---

## Features

### Mobile App (React Native)
- **Authentication**: User login/logout functionality with unique usernames.
- **Wallet Management**:
  - View wallet balance.
  - Add transactions (send/receive).
  - Filter transaction history by category, date range, etc.
  - Add recurring transactions.
  - Predefined transaction categories (e.g., Food, Salary, Savings).
- **Interactive UI**:
  - Custom components like `TransactionCard` and `WalletBalanceCard`.
  - Modals for advanced filtering.

### Backend (Express)
- **APIs** for managing users, wallets, and transactions.
- **Database**: Models implemented using Prisma:
  - `User`: Stores user details (id, username, email).
  - `Wallet`: Tracks user wallet balances.
  - `Transaction`: Stores transaction details (id, walletId, type, amount, category).
- **CRUD operations**: Complete backend for managing all app data.

---

## Installation Guide

### Prerequisites
Ensure you have the following installed:
- Node.js (>=14.x)
- npm or yarn
- Prisma CLI
- Expo CLI

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/wallet-app.git
   cd wallet-app/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   expo start
   ```

4. Use the Expo Go app on your mobile device to scan the QR code and preview the app.

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd wallet-app/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the Prisma database:
   ```bash
   npx prisma migrate dev
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

5. The API will be available at `http://localhost:3000`.

---

## File Structure

### Frontend
- **`src/screens`**:
  - `HomeScreen.tsx`: Displays wallet balance and transaction options.
  - `AddTransactionScreen.tsx`: Add new transactions.
  - `TransactionHistoryScreen.tsx`: View transaction history.
  - `RecurringTransactionsScreen.tsx`: Manage recurring transactions.
  - `LoginScreen.tsx`: Handles user authentication.
  - `Register.tsx`: Handles user new registeration(Sign Up).
- **`src/components`**:
  - `TransactionCard.tsx`: Displays individual transaction details.
  - `WalletBalanceCard.tsx`: Displays the wallet balance.
  - `FilterModal.tsx`: A modal for applying filters to transactions.
- **`src/context`**:
  - `AuthContext.tsx`: Provides global state for authentication.
- **`src/navigation`**:
  - `AppNavigator.tsx`: Configures navigation between screens.
  ** `src/service`**
    -`api`: For api calls.
    -`auth`: for managing axoin.
  **`src/util`**:
    
  ### App
`App.tsx`**: Root component that integrates authentication and navigation.

### Backend
- **`src/prisma`**:
  - `schema.prisma`: Defines database schema for users, wallets, and transactions.
- **`src/routes`**:
  - `userRoutes.ts`: CRUD operations for users.
  - `walletRoutes.ts`: CRUD operations for wallets.
  - `transactionRoutes.ts`: CRUD operations for transactions.
- **`src/controllers`**:
  - Logic for handling API requests.
- **`src/server.ts`**:
  - Express server setup and route integration.

---

## Usage
1. Start both the frontend and backend servers.
2. Log in or sign up as a new user.
3. Add transactions, view wallet balance, and manage recurring transactions.
4. Use the filter options to explore transaction history.

---

## Technologies Used
- **Frontend**:
  - React Native
  - Expo CLI
  - TypeScript
  - React Navigation
- **Backend**:
  - Express.js
  - Prisma ORM
  - TypeScript
- **Database**: SQLite (for development) / PostgreSQL (for production)

---

## Future Improvements
- Implement push notifications for recurring transactions.
- Add support for multiple wallets per user.
- Integrate a third-party authentication system (e.g., Firebase or OAuth).
- Enhance UI/UX with animations.

---

## Contributing
Feel free to open issues or create pull requests to contribute to this project. For major changes, please open an issue first to discuss what you would like to change.

---

## License
This project is licensed under the MIT License.

