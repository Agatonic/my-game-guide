// app/page.js (Next.js 13+)
'use client'
import { useState } from 'react';
import { guides } from '../data/guides'; // 상대경로 맞춰서 조정!

export default function Home() {
  const [query, setQuery] = useState('');

  const filtered = guides.filter(guide =>
    guide.title.toLowerCase().includes(query.toLowerCase()) ||
    guide.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🎮 내 게임 가이드</h1>
      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded mb-6"
      />
      <ul className="space-y-4">
        {filtered.map((guide, idx) => (
          <li key={idx} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{guide.title}</h2>
            <p>{guide.content}</p>
          </li>
        ))}
        {filtered.length === 0 && <p>검색 결과가 없습니다 🫥</p>}
      </ul>
    </main>
  );
}
