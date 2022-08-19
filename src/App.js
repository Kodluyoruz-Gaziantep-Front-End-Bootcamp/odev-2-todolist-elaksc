
import React, { useState } from "react";
import "./index.css";

const INITIAL_STATE = [
  { id: 1, baslik: "React Çalış", tamamlandi: false },
  { id: 2, baslik: "Spor Yap", tamamlandi: true },
  { id: 3, baslik: "Alışveriş Yap", tamamlandi: false },
  { id: 4, baslik: "Kitap Oku", tamamlandi: true },

];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniEleman, setYeniEleman] = useState("");
  const addNew = (title) => {
    setListe([...liste, { id: Date.now(), baslik: title, tamamlandi: false }]);
    setYeniEleman("");
  }
  const markCompleted = id => {
    setListe(
      liste.map((el) =>
        el.id === id ? { ...el, tamamlandi: !el.tamamlandi } : el
      )
    )
  }
  ;
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className="ekleme_formu">
        <input
          value={yeniEleman}
          onChange={(e) => setYeniEleman(e.target.value)}
          placeholer="listeye ekle"
        /><br/><br/>
        <button
          onClick={() => {
            addNew(yeniEleman);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {liste.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              markCompleted(item.id)
            }
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <br/><br/>
      <button
        onClick={() => setListe(liste.filter((item) => !item.tamamlandi))}
        className="temizle"
      >
        Tamamlananları Temizle
      </button>
    </div>
  );
}
