# 🚀 Solana Token Launchpad

A **basic token launchpad** built with **React** and **Solana Web3.js**, allowing users to **connect their wallet** and **create their own SPL tokens** on the Solana blockchain.

---

## 📌 Features

- ✅ **Wallet Connection**: Connects to Phantom Wallet  
- ✅ **Token Creation**: Generates new SPL tokens on Solana  
- ✅ **Transaction Approval**: Prompts user approval for transactions  
- ✅ **User-Friendly UI**: Simple and intuitive design  

---

## 🛠 Tech Stack

- **React** - Frontend framework  
- **Solana Web3.js** - Solana blockchain API  
- **Phantom Wallet** - Wallet connection  
- **Vite** - Fast development build tool  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Akshatt10/Token-launchpad.git
cd Solana-Llaunchpad

npm install

npm run dev
```

📖 Usage Guide
🔗 Connect Wallet
Click the "Connect Wallet" button.
Approve the connection in Phantom Wallet.
🪙 Create a Token
Click "Create Token".
Approve the transaction in Phantom.
Your new SPL Token is created!


```
/src
 ├── components
 │   ├── TokenLaunchpad.jsx  # Token creation logic
 ├── App.jsx
 ├── main.jsx
 ├── index.css
```
🛠 Dependencies
This project uses the following npm packages:
```
{
  "dependencies": {
    "@solana/web3.js": "^1.75.0",
    "@solana/wallet-adapter-react": "^0.15.0",
    "@solana/wallet-adapter-react-ui": "^0.15.0",
    "@solana/wallet-adapter-phantom": "^0.15.0",
    "react": "^18.2.0",
    "vite": "^4.0.0"
  }
}
```
To install all dependencies, run:
```
npm install
```
