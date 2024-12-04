# Nacelle Frontend Challenge

This is Andrew Magill's submission for Nacelle's Frontend Challenge.

## Project Description

This project is built using React, Redux Toolkit, TypeScript, and Tailwind CSS. It includes a dismissable notification system and modal dialog component.

## Running the Project

1. **Clone the repository**:
   ```terminal
   git clone https://github.com/andymagill/nacelle-frontend-challenge-andymagill.git
   ```

2. **Install dependencies**:
   ```terminal
   npm install
   ```

3. **Start the development server**:
   ```terminal
   npm start
   ```

4. **Open the app**:
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Testing the Project

**Run the tests**:
   ```terminal
   npm test
   ```

### Assumptions Made

Github Copilot was used for project setup, creating a basic scaffold, and troublshooting any errors I encountered. 

Notifcations need to be added using the button and are not shown for 1st time visitors. Active notifications are currently saved to local storage when created, displayed on page load, and deleted from storage when dismissed. This may differ from expectations for the challenge. 

I also did not perform any source control methods. In a real-world scenario, I would have feature branches for notifications and modals, merge my changes into a develop branch, and submit a PR to the main branch for deployment. 

## Project Structure

```
nacelle-challenge/
  ├── src/
  │   ├── App.css
  │   ├── App.test.tsx
  │   ├── App.tsx
  │   ├── components/
  │   │   ├── AddNotificationButton.tsx
  │   │   ├── Modal.tsx
  │   │   ├── Notification.tsx
  │   │   └── NotificationList.tsx
  │   ├── index.css
  │   ├── index.tsx
  │   ├── react-app-env.d.ts
  │   ├── reportWebVitals.ts
  │   ├── setupTests.ts
  │   ├── store/
  │   │   ├── notificationsSlice.ts
  │   │   └── store.ts
  │   └── tests/
  │       ├── modal.test.tsx
  │       └── notifications.test.tsx
  ├── .gitignore
  ├── package.json
  ├── postcss.config.js
  ├── public/
  │   ├── index.html
  │   ├── manifest.json
  │   └── robots.txt
  ├── README.md
  ├── tailwind.config.js
  └── tsconfig.json
```
