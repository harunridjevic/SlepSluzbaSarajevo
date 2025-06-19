// app/blocked/page.tsx
export default function Blocked() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100 text-center px-4">
        <div>
          <h1 className="text-3xl font-bold text-red-600 mb-4">🚫 Pristup zabranjen</h1>
          <p className="text-lg">Vaš IP je blokiran. Ako mislite da je ovo greška, kontaktirajte nas.</p>
        </div>
      </div>
    );
  }
  