import React from 'react';
import Card from './components/Card';
import PartnerData from './components/PartnerData';
import TedData from './components/TedData';
import BankslipData from './components/BankslipData';
import BankstatementData from './components/BankstatementData';

function App() {
  return (
    <div className="App container">
      <form className="form">
        <PartnerData />
        <div className="accordion">
          <Card title="TED"><TedData /></Card>
          <Card title="Bankslip"><BankslipData /></Card>
          <Card title="Bankstatement"><BankstatementData /></Card>
        </div>
      </form>
    </div>
  );
}

export default App;
