import { useState } from "react";

export default function Home() {
  const [siteUrl, setSiteUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    setLoading(true);
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ siteUrl })
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 600, margin: "auto" }}>
      <h1>Slot Analiz Paneli</h1>
      <input
        type="text"
        value={siteUrl}
        onChange={(e) => setSiteUrl(e.target.value)}
        placeholder="Site URL’sini yapıştır"
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />
      <button onClick={analyze} style={{ padding: 10, width: "100%", background: "#0070f3", color: "#fff" }}>
        {loading ? "Analiz ediliyor..." : "Analizi Başlat"}
      </button>
      {result && (
        <pre style={{ background: "#f4f4f4", padding: 10, marginTop: 20 }}>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}