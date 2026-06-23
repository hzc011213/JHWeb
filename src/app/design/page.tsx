'use client';

import CardSwap, { Card } from '@/components/react-bits/CardSwap';

export default function DesignPage() {
  return (
    <main>
      <div style={{ height: '600px', position: 'relative' }}>
        <CardSwap
          cardDistance={-10}
          verticalDistance={30}
          delay={3000}
          pauseOnHover={false}
          skewAmount={-10}
        >
          <Card>
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>
    </main>
  );
}
