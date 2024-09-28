// app/dashboard/error.tsx

'use client'; // Mark this as a Client Component

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function DashboardError({ error, reset }: ErrorProps) {
  
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Dashboard Error caught:", error);
  }, [error]);

  return (
    
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Oops! Something went wrong in the Dashboard.</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>

    </div>
  );
}
