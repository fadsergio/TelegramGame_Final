    (() => {
      const tg = window.Telegram?.WebApp;
      if (tg) {
        tg.expand();
        tg.ready();
        try { tg.BackButton.hide(); } catch { }
      }

      // ---------- Small audio (SFX) ----------
      let audioCtx = null;
      function ensureAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      function beep(freq = 440, durMs = 80, type = "sine", gain = 0.05) {
        if (!settings.sfx) return;
        try {
          ensureAudio();
          const t0 = audioCtx.currentTime;
          const osc = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          osc.type = type;
          osc.frequency.value = freq;
          g.gain.value = gain;
          osc.connect(g);
          g.connect(audioCtx.destination);
          osc.start(t0);
          osc.stop(t0 + durMs / 1000);
        } catch { }
      }

      // ---------- TTS ----------
      function speak(text) {
        if (!settings.tts) return;
        if (!("speechSynthesis" in window)) return;
        try {
          const u = new SpeechSynthesisUtterance(text);
          u.lang = "ru-RU";
          u.rate = 1.05;
          u.pitch = 1.0;
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(u);
        } catch { }
      }

      // ---------- UI refs ----------
      const screenMenu = document.getElementById("screenMenu");
      const screenGame = document.getElementById("screenGame");

      const topSub = document.getElementById("topSub");
      const pillProgress = document.getElementById("pillProgress");
      const pillHint = document.getElementById("pillHint");

      const card = document.getElementById("card");
      const lvlTag = document.getElementById("lvlTag");
      const lvlText = document.getElementById("lvlText");
      const lvlSub = document.getElementById("lvlSub");
      const btnRow = document.getElementById("btnRow");
      const footerHint = document.getElementById("footerHint");

      const overlay = document.getElementById("overlay");
      const modal = document.getElementById("modal");
      const modalTitle = document.getElementById("modalTitle");
      const modalText = document.getElementById("modalText");
      const modalRule = document.getElementById("modalRule");
      const btnNext = document.getElementById("btnNext");
      const btnRetry = document.getElementById("btnRetry");
      const btnMenu = document.getElementById("btnMenu");

      const btnStart = document.getElementById("btnStart");
      const btnRestartAll = document.getElementById("btnRestartAll");

      const swSfx = document.getElementById("swSfx");
      const swTts = document.getElementById("swTts");

      // ---------- Settings ----------
      const settings = {
        sfx: localStorage.getItem("yo_sfx") !== "0",
        tts: localStorage.getItem("yo_tts") === "1"
      };

})(); // Closing the IIFE manually for testing
