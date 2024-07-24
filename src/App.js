import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Board from "./pages/Board/board.js";
import Createboard from "./pages/Board/createboard.js";
import Modal from "./pages/Board/Modal.js";
import Modaldetail from "./pages/Board/modaldetail.js";
import './App.css';
import Translation from "./pages/Board/translation.js";
import Main from "./pages/Board/main.js";

import TranslationRecord from "./pages/Board/translationRecord.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> {/* 메인 */}
        <Route path="/translation" element={<Translation />} /> {/* 번역 기능 */}
        <Route path="/translation_record_1" element={<TranslationRecord />} /> {/* 번역 기록 1 */}
        <Route path="/board" element={<Board />} /> {/* MZ 언어 게시판 */}
        <Route path="/createboard" element={<Createboard />} /> {/* MZ 언어 작성 */}
        <Route path="/modal" element={<Modal />} /> {/* 작성하기 모달창 */}
        <Route path="/modaldetail" element={<Modaldetail />} /> {/* 언어 게시판 모달창 */}
        <Route path="/translationrecord" element={<Translationrecord />} /> {/* 언어 게시판 모달창 */}        
      </Routes>
    </Router>
  );
}

export default App;
