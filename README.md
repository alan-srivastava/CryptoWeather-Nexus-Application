# CryptoWeather Nexus Application 🌦️💰

A modern dashboard that combines real-time weather data with cryptocurrency market information, providing users with a comprehensive view of both meteorological and financial conditions.

![Dashboard Preview](https://github.com/user-attachments/assets/700e39ab-dd77-462e-8726-23f99e438f5c)
![Weather Section](https://github.com/user-attachments/assets/373e7d11-a42f-49d0-a479-34de775343fe)
![Crypto Section](https://github.com/user-attachments/assets/0aa316ca-8523-4d72-9cf4-2ee6162066ea)

[![Live Demo](https://img.shields.io/badge/Live_Demo-Available-green)](https://v0-next-js-dashboard-lake.vercel.app/)

## 🚀 Features

### Multi-Page Architecture
- Dashboard with Weather, Cryptocurrency, and News sections
- Detailed city weather pages with historical data and forecasts
- Comprehensive cryptocurrency detail pages with price history and market metrics

### Real-Time Data
- Live cryptocurrency price updates via WebSocket
- Real-time weather alerts and notifications
- Interactive price and weather charts

### User Preferences
- Favorite cities and cryptocurrencies
- Persistent user preferences with localStorage
- Dark/light mode toggle

### Responsive Design
- Mobile-first approach
- Seamless experience from mobile to desktop
- Optimized layouts for different screen sizes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **State Management**: Redux with Redux Thunk
- **Styling**: Tailwind CSS with shadcn/ui components
- **Charts**: Recharts for data visualization
- **Real-Time**: WebSocket for live data updates

## 📊 API Integrations

- **Weather Data**: OpenWeatherMap API
- **Cryptocurrency Data**: CoinGecko/CoinCap API
- **News Headlines**: NewsData.io API

## � Directory Structure
/app
/crypto # Cryptocurrency detail pages
/weather # Weather detail pages
layout.tsx # Root layout with providers
page.tsx # Dashboard page
/components
/crypto # Cryptocurrency components
/dashboard # Dashboard section components
/news # News components
/ui # UI components (shadcn/ui)
/weather # Weather components
/lib
/api # API integration
websocket.ts # WebSocket setup
/redux
/features # Redux slices
provider.tsx # Redux provider
store.ts # Redux store configuration

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
git clone https://github.com/yourusername/CryptoWeather-Nexus-Application.git

Install dependencies:

npm install
# or
yarn install
Create a .env.local file in the root directory with your API keys:

NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
NEXT_PUBLIC_COINCAP_API_KEY=your_coincap_api_key
NEXT_PUBLIC_NEWSDATA_API_KEY=your_newsdata_api_key

Start the development server:

npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser.

🧪 Testing
Run the test suite:

npm test
# or
yarn test

🚢 Deployment
The application is deployed on Vercel and can be accessed at:
https://v0-next-js-dashboard-lake.vercel.app/

📝 License
This project is licensed under the MIT License.

🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request.
