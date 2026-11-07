// ============================================================================
// Hanukkah Educational Learning Application Logic - Grade 1 (כִּיתָה א')
// Early Hebrew Reading, Holiday Symbols, Audio Music Player & Celebration
// ============================================================================

class HanukkahApp {
  constructor() {
    this.stations = GAME_STATIONS;
    this.currentStationIdx = 0;
    this.currentQuestionIdx = 0;
    this.stars = 0;
    this.completedStations = new Set();
    
    // Scrambled letters state
    this.scrambledState = {
      userLetters: [],
      usedIndices: []
    };

    // Word search state
    this.wordSearchState = {
      selectedCells: [],
      foundOccurrences: new Set()
    };

    this.hasAnsweredCurrent = false;
  }

  init() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    this.renderStationsNav();
    this.renderCurrentQuestion();
    this.bindGlobalEvents();
    this.updateStarsDisplay();
    this.initMusicPlayerUI();
  }

  bindGlobalEvents() {
    // Sound Effects Mute Toggle
    const soundBtn = document.getElementById('btn-sound-toggle');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const isMuted = soundManager.toggleMute();
        soundBtn.textContent = isMuted ? '🔇' : '🔊';
        soundBtn.title = isMuted ? 'הַפְעֵל צְלִילִים' : 'הַשְׁתֵּק צְלִילִים';
      });
    }

    // Modal Close / Next Stage
    const modalBtn = document.getElementById('btn-modal-advance');
    if (modalBtn) {
      modalBtn.addEventListener('click', () => {
        this.closeCelebrationModal();
        if (this.currentStationIdx < this.stations.length - 1) {
          this.switchStation(this.currentStationIdx + 1);
        } else {
          // Restart to station 0 after grand finale
          this.switchStation(0);
        }
      });
    }

    // Glossary Modal Toggle
    const glossaryBtn = document.getElementById('btn-open-glossary');
    const closeGlossaryBtn = document.getElementById('btn-close-glossary');
    const glossaryModal = document.getElementById('glossary-modal');

    if (glossaryBtn && glossaryModal) {
      glossaryBtn.addEventListener('click', () => {
        soundManager.playClick();
        this.renderGlossaryContent();
        glossaryModal.classList.add('active');
      });
    }
    if (closeGlossaryBtn && glossaryModal) {
      closeGlossaryBtn.addEventListener('click', () => {
        soundManager.playClick();
        glossaryModal.classList.remove('active');
      });
    }
  }

  // ==========================================================================
  // Hanukkah Background Music Controls UI
  // ==========================================================================
  initMusicPlayerUI() {
    const playBtn = document.getElementById('btn-music-toggle');
    const nextBtn = document.getElementById('btn-music-next');
    const titleEl = document.getElementById('music-track-title');
    const iconEl = document.getElementById('music-play-icon');

    const updateTitle = () => {
      const cur = musicPlayer.getCurrentSong();
      if (titleEl && cur) {
        titleEl.textContent = cur.name;
      }
      if (iconEl) {
        iconEl.textContent = musicPlayer.isPlaying ? '⏸️' : '▶️';
      }
    };

    updateTitle();

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        soundManager.playClick();
        musicPlayer.togglePlay();
        updateTitle();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        soundManager.playClick();
        musicPlayer.nextSong();
        updateTitle();
      });
    }
  }

  // ==========================================================================
  // Stations Navigation
  // ==========================================================================
  renderStationsNav() {
    const navContainer = document.getElementById('stations-nav-bar');
    if (!navContainer) return;

    navContainer.innerHTML = '';
    this.stations.forEach((st, idx) => {
      const btn = document.createElement('button');
      btn.className = `station-nav-btn ${idx === this.currentStationIdx ? 'active' : ''} ${this.completedStations.has(idx) ? 'completed' : ''}`;
      btn.innerHTML = `<span>${st.icon}</span> <span>${st.title}</span>`;
      btn.addEventListener('click', () => {
        soundManager.playClick();
        this.switchStation(idx);
      });
      navContainer.appendChild(btn);
    });
  }

  switchStation(newIndex) {
    if (newIndex < 0 || newIndex >= this.stations.length) return;
    this.currentStationIdx = newIndex;
    this.currentQuestionIdx = 0;
    this.hasAnsweredCurrent = false;
    this.renderStationsNav();
    this.renderCurrentQuestion();
    
    // Always keep page at the top so branding, music and navigation are visible
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateStarsDisplay() {
    const el = document.getElementById('stars-counter-val');
    if (el) el.textContent = this.stars;
  }

  get currentStation() {
    return this.stations[this.currentStationIdx];
  }

  get currentQuestion() {
    return this.currentStation.questions[this.currentQuestionIdx];
  }

  // ==========================================================================
  // Question Rendering Dispatcher
  // ==========================================================================
  renderCurrentQuestion() {
    const st = this.currentStation;
    const q = this.currentQuestion;
    this.hasAnsweredCurrent = false;

    // Header info
    document.getElementById('station-badge-num').textContent = st.stationNumber;
    document.getElementById('station-title-text').textContent = st.title;
    document.getElementById('progress-text').textContent = `מְשִׂימָה ${this.currentQuestionIdx + 1} מִתּוֹךְ ${st.questions.length}`;
    document.getElementById('instruction-text').textContent = st.instruction;

    // Reset feedback banner
    const feedbackBanner = document.getElementById('feedback-banner');
    feedbackBanner.className = 'feedback-banner';
    feedbackBanner.innerHTML = '';

    // Render activity area based on station type
    const activityContainer = document.getElementById('activity-content');
    activityContainer.innerHTML = '';

    switch (st.type) {
      case 'first_letter':
        this.renderFirstLetter(activityContainer, q);
        break;
      case 'missing_syllable':
        this.renderMissingSyllable(activityContainer, q);
        break;
      case 'scrambled_letters':
        this.renderScrambledLetters(activityContainer, q);
        break;
      case 'picture_word_match':
        this.renderPictureWordMatch(activityContainer, q);
        break;
      case 'odd_one_out':
        this.renderOddOneOut(activityContainer, q);
        break;
      case 'action_matching':
        this.renderActionMatching(activityContainer, q);
        break;
      case 'word_search_easy':
        this.renderWordSearchEasy(activityContainer, q);
        break;
      case 'dreidel_letters':
        this.renderDreidelLetters(activityContainer, q);
        break;
      default:
        activityContainer.textContent = 'שְׁגִיאָה בִּטְעִינַת הַפְּעִילוּת.';
    }
  }

  // ==========================================================================
  // STATION 1: בְּאֵיזוֹ אוֹת מַתְחִיל הָאִיּוּר? (First letter recognition)
  // ==========================================================================
  renderFirstLetter(container, q) {
    const stage = document.createElement('div');
    stage.className = 'first-letter-layout';

    // SVG Illustration box
    const illWrap = document.createElement('div');
    illWrap.className = 'illustration-wrapper';
    illWrap.innerHTML = SVGS[q.svgKey] || '';

    // Interactive Right Column
    const interactiveCol = document.createElement('div');
    interactiveCol.className = 'interactive-column';

    const promptCard = document.createElement('div');
    promptCard.className = 'prompt-question-card';
    promptCard.innerHTML = `
      <div class="prompt-main-text">בְּאֵיזוֹ אוֹת מַתְחִיל הָאִיּוּר?</div>
      <div class="prompt-sub-hint">לַחֲצוּ עַל הָאוֹת הַנְּכוֹנָה:</div>
    `;

    const choicesGrid = document.createElement('div');
    choicesGrid.className = 'letter-choices-grid';

    q.options.forEach((letter, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn-letter-choice';
      btn.innerHTML = `<span class="letter-char">${letter}</span>`;

      btn.addEventListener('click', () => {
        if (this.hasAnsweredCurrent) return;
        soundManager.playClick();

        if (idx === q.correctIndex) {
          // Success
          this.hasAnsweredCurrent = true;
          btn.classList.add('correct');
          this.handleCorrectAnswer(q.explanation);
        } else {
          // Retry
          btn.classList.add('wrong', 'shake');
          soundManager.playRetry();
          this.showRetryFeedback(`לֹא נוֹרָא, נַסּוּ שׁוּב! 🌸 מָה הָאוֹת הָרִאשׁוֹנָה שֶׁשּׁוֹמְעִים בַּמִּלָּה ${q.word}?`);
          setTimeout(() => btn.classList.remove('wrong', 'shake'), 900);
        }
      });

      choicesGrid.appendChild(btn);
    });

    interactiveCol.appendChild(promptCard);
    interactiveCol.appendChild(choicesGrid);

    stage.appendChild(illWrap);
    stage.appendChild(interactiveCol);
    container.appendChild(stage);
  }

  // ==========================================================================
  // STATION 2: מָה הַצֵּרוּף הַפּוֹתֵחַ שֶׁחָסֵר בַּמִּלָּה? (Missing opening syllable)
  // ==========================================================================
  renderMissingSyllable(container, q) {
    const stage = document.createElement('div');
    stage.className = 'syllable-layout';

    // Illustration
    const illWrap = document.createElement('div');
    illWrap.className = 'illustration-wrapper';
    illWrap.innerHTML = SVGS[q.svgKey] || '';

    // Question content
    const content = document.createElement('div');
    content.className = 'interactive-column';

    // Word display with missing syllable placeholder
    const stemBox = document.createElement('div');
    stemBox.className = 'stem-display';
    stemBox.innerHTML = `
      <span class="stem-missing-slot" id="missing-slot-target">___</span>
      <span class="stem-rest-text">${q.stem.replace('___', '')}</span>
    `;

    const hintText = document.createElement('div');
    hintText.className = 'choice-instruction-hint';
    hintText.textContent = 'בִּחֲרוּ אֶת הַצֵּרוּף הַפּוֹתֵחַ הַמַּתְאִים:';

    const choicesGrid = document.createElement('div');
    choicesGrid.className = 'syllable-choices-grid';

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn-syllable-choice';
      btn.textContent = opt;

      btn.addEventListener('click', () => {
        if (this.hasAnsweredCurrent) return;
        soundManager.playClick();

        if (idx === q.correctIndex) {
          this.hasAnsweredCurrent = true;
          btn.classList.add('correct');
          
          // Complete the missing slot
          const slot = document.getElementById('missing-slot-target');
          if (slot) {
            slot.textContent = opt;
            slot.classList.add('filled');
          }

          this.handleCorrectAnswer(q.explanation);
        } else {
          btn.classList.add('wrong', 'shake');
          soundManager.playRetry();
          this.showRetryFeedback('לֹא נוֹרָא, נַסּוּ שׁוּב! 🌸 הַקְשִׁיבוּ לַצְּלִיל הַפּוֹתֵחַ שֶׁל הַמִּלָּה.');
          setTimeout(() => btn.classList.remove('wrong', 'shake'), 900);
        }
      });

      choicesGrid.appendChild(btn);
    });

    content.appendChild(stemBox);
    content.appendChild(hintText);
    content.appendChild(choicesGrid);

    stage.appendChild(illWrap);
    stage.appendChild(content);
    container.appendChild(stage);
  }

  // ==========================================================================
  // STATION 3: מִלָּה מְבֻלְבֶּלֶת (Scrambled letters for Grade 1)
  // ==========================================================================
  renderScrambledLetters(container, q) {
    this.scrambledState.userLetters = [];
    this.scrambledState.usedIndices = [];

    const stage = document.createElement('div');
    stage.className = 'scrambled-layout';

    // Illustration
    const illWrap = document.createElement('div');
    illWrap.className = 'illustration-wrapper';
    illWrap.innerHTML = SVGS[q.svgKey] || '';

    const content = document.createElement('div');
    content.className = 'interactive-column';

    // Prompt info with vocalized target hint
    const wordHint = document.createElement('div');
    wordHint.className = 'target-word-hint';
    wordHint.innerHTML = `הַרְכִּיבוּ אֶת הַמִּלָּה: <strong>${q.wordNikkud}</strong>`;

    // Target empty slots box
    const slotsRow = document.createElement('div');
    slotsRow.className = 'scrambled-slots-row';
    slotsRow.id = 'scrambled-slots-row';

    for (let i = 0; i < q.targetWord.length; i++) {
      const slot = document.createElement('div');
      slot.className = 'letter-slot-box';
      slot.id = `slot-${i}`;
      slot.title = 'לַחֲצוּ כְּדֵי לְהָסִיר אֶת הָאוֹת הָאַחֲרוֹנָה';
      slot.addEventListener('click', () => {
        if (this.hasAnsweredCurrent) return;
        this.undoLastScrambledLetter(q);
      });
      slotsRow.appendChild(slot);
    }

    // Letter buttons to click
    const poolWrap = document.createElement('div');
    poolWrap.className = 'scrambled-pool-wrap';

    const lettersGrid = document.createElement('div');
    lettersGrid.className = 'scrambled-letters-grid';
    lettersGrid.id = 'scrambled-letters-grid';

    q.scrambled.forEach((letter, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn-scrambled-token';
      btn.id = `letter-token-${idx}`;
      btn.textContent = letter;

      btn.addEventListener('click', () => {
        if (this.hasAnsweredCurrent) return;
        if (this.scrambledState.usedIndices.includes(idx)) return;

        soundManager.playClick();
        this.addScrambledLetter(letter, idx, q);
      });

      lettersGrid.appendChild(btn);
    });

    poolWrap.appendChild(lettersGrid);

    // Reset button
    const actionsRow = document.createElement('div');
    actionsRow.className = 'scrambled-actions-row';

    const resetBtn = document.createElement('button');
    resetBtn.className = 'btn-scrambled-reset';
    resetBtn.innerHTML = '<span>↺</span> <span>הַתְחֵל מֵחָדָשׁ</span>';
    resetBtn.addEventListener('click', () => {
      soundManager.playClick();
      this.resetScrambledWord(q);
    });

    actionsRow.appendChild(resetBtn);

    content.appendChild(wordHint);
    content.appendChild(slotsRow);
    content.appendChild(poolWrap);
    content.appendChild(actionsRow);

    stage.appendChild(illWrap);
    stage.appendChild(content);
    container.appendChild(stage);
  }

  addScrambledLetter(letter, tokenIndex, q) {
    if (this.scrambledState.userLetters.length >= q.targetWord.length) return;

    this.scrambledState.userLetters.push(letter);
    this.scrambledState.usedIndices.push(tokenIndex);

    const slotIdx = this.scrambledState.userLetters.length - 1;
    const slot = document.getElementById(`slot-${slotIdx}`);
    if (slot) {
      slot.textContent = letter;
      slot.classList.add('filled');
    }

    const tokenBtn = document.getElementById(`letter-token-${tokenIndex}`);
    if (tokenBtn) {
      tokenBtn.classList.add('used');
    }

    // Check if word complete
    if (this.scrambledState.userLetters.length === q.targetWord.length) {
      this.checkScrambledWord(q);
    }
  }

  undoLastScrambledLetter(q) {
    if (this.scrambledState.userLetters.length === 0) return;

    soundManager.playClick();
    const lastLetter = this.scrambledState.userLetters.pop();
    const lastIdx = this.scrambledState.usedIndices.pop();
    const slotIdx = this.scrambledState.userLetters.length;

    const slot = document.getElementById(`slot-${slotIdx}`);
    if (slot) {
      slot.textContent = '';
      slot.classList.remove('filled');
    }

    const tokenBtn = document.getElementById(`letter-token-${lastIdx}`);
    if (tokenBtn) {
      tokenBtn.classList.remove('used');
    }
  }

  resetScrambledWord(q) {
    this.scrambledState.userLetters = [];
    this.scrambledState.usedIndices = [];

    for (let i = 0; i < q.targetWord.length; i++) {
      const slot = document.getElementById(`slot-${i}`);
      if (slot) {
        slot.textContent = '';
        slot.classList.remove('filled');
      }
    }

    q.scrambled.forEach((_, idx) => {
      const btn = document.getElementById(`letter-token-${idx}`);
      if (btn) btn.classList.remove('used');
    });

    const banner = document.getElementById('feedback-banner');
    if (banner) {
      banner.className = 'feedback-banner';
      banner.innerHTML = '';
    }
  }

  checkScrambledWord(q) {
    const constructed = this.scrambledState.userLetters.join('');
    if (constructed === q.targetWord) {
      this.hasAnsweredCurrent = true;
      const slotsRow = document.getElementById('scrambled-slots-row');
      if (slotsRow) slotsRow.classList.add('correct');
      this.handleCorrectAnswer(q.explanation);
    } else {
      const slotsRow = document.getElementById('scrambled-slots-row');
      if (slotsRow) {
        slotsRow.classList.add('shake', 'wrong');
        setTimeout(() => slotsRow.classList.remove('shake', 'wrong'), 900);
      }
      soundManager.playRetry();
      this.showRetryFeedback('סֵדֶר הָאוֹתִיּוֹת עֲדַיִן לֹא מְדֻיָּק. נַסּוּ שׁוּב! 🌸 לַחֲצוּ עַל ↺ כְּדֵי לְהַתְחִיל מֵחָדָשׁ.');
    }
  }

  // ==========================================================================
  // STATION 4: הַתְאָמַת מִלָּה לָאִיּוּר (Word to illustration matching)
  // ==========================================================================
  renderPictureWordMatch(container, q) {
    const stage = document.createElement('div');
    stage.className = 'picture-word-layout';

    // Illustration
    const illWrap = document.createElement('div');
    illWrap.className = 'illustration-wrapper';
    illWrap.innerHTML = SVGS[q.svgKey] || '';

    // Word Choices
    const choicesList = document.createElement('div');
    choicesList.className = 'choices-list';

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn-choice btn-word-choice';
      btn.innerHTML = `<span class="word-choice-text">${opt}</span>`;

      btn.addEventListener('click', () => {
        if (this.hasAnsweredCurrent) return;
        soundManager.playClick();

        if (idx === q.correctIndex) {
          this.hasAnsweredCurrent = true;
          btn.classList.add('correct');
          this.handleCorrectAnswer(q.explanation);
        } else {
          btn.classList.add('wrong', 'shake');
          soundManager.playRetry();
          this.showRetryFeedback('לֹא נוֹרָא, נַסּוּ שׁוּב! 🌸 קִרְאוּ אֶת הַמִּלִּים בְּנַחַת וּבִחֲרוּ אֶת הַמַּתְאִימָה.');
          setTimeout(() => btn.classList.remove('wrong', 'shake'), 900);
        }
      });

      choicesList.appendChild(btn);
    });

    stage.appendChild(illWrap);
    stage.appendChild(choicesList);
    container.appendChild(stage);
  }

  // ==========================================================================
  // STATION 5: מִי יוֹצֵא דּוֹפֶן? (מִתּוֹךְ 3 אֶפְשָׁרֻיּוֹת) (Odd one out)
  // ==========================================================================
  renderOddOneOut(container, q) {
    const stage = document.createElement('div');
    stage.className = 'odd-one-out-stage';

    const promptCard = document.createElement('div');
    promptCard.className = 'odd-prompt-card';
    promptCard.innerHTML = `
      <div class="odd-prompt-text">מִי יוֹצֵא דּוֹפֶן וְלֹא מַתְאִים לַקְּבוּצָה?</div>
      <div class="odd-prompt-sub">הַבִּיטוּ בִּשְׁלֹשֶׁת הָאִיּוּרִים וּבִחֲרוּ אֶת הַיּוֹצֵא דּוֹפֶן:</div>
    `;

    const cardsRow = document.createElement('div');
    cardsRow.className = 'odd-cards-row';

    q.options.forEach((opt, idx) => {
      const card = document.createElement('button');
      card.className = 'odd-item-card';

      card.innerHTML = `
        <div class="odd-card-thumb">
          ${SVGS[opt.svgKey] || ''}
        </div>
        <div class="odd-card-label">${opt.word}</div>
      `;

      card.addEventListener('click', () => {
        if (this.hasAnsweredCurrent) return;
        soundManager.playClick();

        if (idx === q.correctIndex) {
          this.hasAnsweredCurrent = true;
          card.classList.add('correct');
          
          // Dim other cards slightly
          document.querySelectorAll('.odd-item-card').forEach((other, oIdx) => {
            if (oIdx !== idx) other.classList.add('dimmed');
          });

          this.handleCorrectAnswer(q.explanation);
        } else {
          card.classList.add('wrong', 'shake');
          soundManager.playRetry();
          this.showRetryFeedback('חִשְׁבוּ שׁוּב! מָה מְשֻׁתָּף לִשְׁנַיִם מֵהֶם? נַסּוּ שׁוּב! 🌸');
          setTimeout(() => card.classList.remove('wrong', 'shake'), 900);
        }
      });

      cardsRow.appendChild(card);
    });

    stage.appendChild(promptCard);
    stage.appendChild(cardsRow);
    container.appendChild(stage);
  }

  // ==========================================================================
  // STATION 6: הַתְאָמַת עֶצֶם לִפְעֻלָּה (Object to action matching)
  // למשל: בסביבון מסובבים, נרות מדליקים, לביבה מטגנים, שמן מוזגים...
  // ==========================================================================
  renderActionMatching(container, q) {
    const stage = document.createElement('div');
    stage.className = 'action-matching-stage';

    // Left: Illustration
    const illWrap = document.createElement('div');
    illWrap.className = 'illustration-wrapper';
    illWrap.innerHTML = SVGS[q.svgKey] || '';

    // Right: Action Questions & Choices
    const interactiveCol = document.createElement('div');
    interactiveCol.className = 'interactive-column';

    const questionCard = document.createElement('div');
    questionCard.className = 'action-question-card';
    questionCard.innerHTML = `
      <div class="action-item-badge">${q.itemLabel}</div>
      <div class="action-main-prompt">מָה הַפְּעֻלָּה שֶׁעוֹשִׂים?</div>
    `;

    const choicesList = document.createElement('div');
    choicesList.className = 'choices-list';

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn-choice btn-action-choice';
      btn.innerHTML = `<span class="action-choice-text">${opt}</span>`;

      btn.addEventListener('click', () => {
        if (this.hasAnsweredCurrent) return;
        soundManager.playClick();

        if (idx === q.correctIndex) {
          this.hasAnsweredCurrent = true;
          btn.classList.add('correct');
          this.handleCorrectAnswer(q.explanation);
        } else {
          btn.classList.add('wrong', 'shake');
          soundManager.playRetry();
          this.showRetryFeedback('חִשְׁבוּ שׁוּב: מָה אֲנַחְנוּ עוֹשִׂים עִם עֶצֶם זֶה בַּחַג? נַסּוּ שׁוּב! 🌸');
          setTimeout(() => btn.classList.remove('wrong', 'shake'), 900);
        }
      });

      choicesList.appendChild(btn);
    });

    interactiveCol.appendChild(questionCard);
    interactiveCol.appendChild(choicesList);

    stage.appendChild(illWrap);
    stage.appendChild(interactiveCol);
    container.appendChild(stage);
  }

  // ==========================================================================
  // STATION 7: תַּפְזוֹרוֹת קַלּוֹת מְאוֹד לְכִיתָה א' (Word search easy)
  // למשל: נמצא את המלה כד בתפזורת. כמה פעמים מצאתם את המלה כד בתפזורת?
  // ==========================================================================
  renderWordSearchEasy(container, q) {
    this.wordSearchState.selectedCells = [];
    this.wordSearchState.foundOccurrences = new Set();

    const stage = document.createElement('div');
    stage.className = 'wordsearch-stage';

    // Top: Task Info with Illustration & Counter Badge
    const headerRow = document.createElement('div');
    headerRow.className = 'wordsearch-header-row';

    const illThumb = document.createElement('div');
    illThumb.className = 'wordsearch-ill-thumb';
    illThumb.innerHTML = SVGS[q.svgKey] || '';

    const infoCol = document.createElement('div');
    infoCol.className = 'wordsearch-info-col';
    infoCol.innerHTML = `
      <div class="wordsearch-target-banner">
        מִצְאוּ אֶת הַמִּלָּה: <span class="highlight-target-word">${q.targetWordNikkud}</span>
      </div>
      <div class="wordsearch-prompt-question">${q.promptQuestion}</div>
      <div class="wordsearch-counter-badge" id="wordsearch-counter-badge">
        מְצָאתֶם: 0 מִתּוֹךְ ${q.totalToFind} פְּעָמִים ⭐
      </div>
    `;

    headerRow.appendChild(illThumb);
    headerRow.appendChild(infoCol);

    // Grid Container
    const gridWrapper = document.createElement('div');
    gridWrapper.className = 'wordsearch-grid-wrapper';

    const gridEl = document.createElement('div');
    gridEl.className = 'wordsearch-grid';
    gridEl.style.gridTemplateColumns = `repeat(${q.gridSize.cols}, 1fr)`;

    q.grid.forEach((row, rIdx) => {
      row.forEach((letter, cIdx) => {
        const cellBtn = document.createElement('button');
        cellBtn.className = 'wordsearch-cell';
        cellBtn.id = `ws-cell-${rIdx}-${cIdx}`;
        cellBtn.textContent = letter;

        cellBtn.addEventListener('click', () => {
          if (this.hasAnsweredCurrent) return;
          this.handleWordSearchCellClick(rIdx, cIdx, q);
        });

        gridEl.appendChild(cellBtn);
      });
    });

    gridWrapper.appendChild(gridEl);

    stage.appendChild(headerRow);
    stage.appendChild(gridWrapper);
    container.appendChild(stage);
  }

  handleWordSearchCellClick(r, c, q) {
    soundManager.playClick();
    const cellId = `ws-cell-${r}-${c}`;
    const cellEl = document.getElementById(cellId);
    if (!cellEl) return;

    // Toggle cell selection
    const existsIdx = this.wordSearchState.selectedCells.findIndex(item => item.r === r && item.c === c);
    if (existsIdx >= 0) {
      this.wordSearchState.selectedCells.splice(existsIdx, 1);
      cellEl.classList.remove('selected');
      return;
    }

    this.wordSearchState.selectedCells.push({ r, c });
    cellEl.classList.add('selected');

    // Check if current selection matches any remaining occurrence
    q.occurrences.forEach((occ, occIdx) => {
      if (this.wordSearchState.foundOccurrences.has(occIdx)) return;

      if (this.isOccurrenceMatched(this.wordSearchState.selectedCells, occ)) {
        // Occurrence Found!
        this.wordSearchState.foundOccurrences.add(occIdx);
        soundManager.playSuccess();

        // Mark cells as permanently found
        occ.forEach(coord => {
          const el = document.getElementById(`ws-cell-${coord.r}-${coord.c}`);
          if (el) {
            el.classList.remove('selected');
            el.classList.add('found');
          }
        });

        // Clear current active selection
        this.wordSearchState.selectedCells = [];

        // Update Counter
        const counterEl = document.getElementById('wordsearch-counter-badge');
        if (counterEl) {
          counterEl.textContent = `מְצָאתֶם: ${this.wordSearchState.foundOccurrences.size} מִתּוֹךְ ${q.totalToFind} פְּעָמִים ⭐`;
          counterEl.classList.add('pulse');
          setTimeout(() => counterEl.classList.remove('pulse'), 600);
        }

        // Check if all occurrences found!
        if (this.wordSearchState.foundOccurrences.size === q.totalToFind) {
          this.hasAnsweredCurrent = true;
          this.handleCorrectAnswer(q.explanation);
        }
      }
    });

    // If selection exceeds word length and didn't match, clear active selection smoothly
    if (this.wordSearchState.selectedCells.length >= q.targetWord.length + 1) {
      this.wordSearchState.selectedCells.forEach(coord => {
        const el = document.getElementById(`ws-cell-${coord.r}-${coord.c}`);
        if (el && !el.classList.contains('found')) {
          el.classList.remove('selected');
        }
      });
      this.wordSearchState.selectedCells = [];
    }
  }

  isOccurrenceMatched(selected, targetCoords) {
    if (selected.length !== targetCoords.length) return false;
    return targetCoords.every(tc => selected.some(sc => sc.r === tc.r && sc.c === tc.c));
  }

  // ==========================================================================
  // STATION 8: אוֹתִיּוֹת הַסְּבִיבוֹן: נ=נֵס, ג=גָּדוֹל, ה=הָיָה, פ=פֹּה
  // ==========================================================================
  renderDreidelLetters(container, q) {
    const stage = document.createElement('div');
    stage.className = 'dreidel-letters-stage';

    // Top: Spinning Dreidel Graphic with 4 Letters
    const topRow = document.createElement('div');
    topRow.className = 'dreidel-interactive-row';

    const dreidelWrap = document.createElement('div');
    dreidelWrap.className = 'dreidel-spinner-wrap';
    dreidelWrap.innerHTML = `
      <div class="dreidel-spinner-svg rotating">
        ${SVGS['dreidel'] || ''}
      </div>
    `;

    const letterHighlightBadge = document.createElement('div');
    letterHighlightBadge.className = 'dreidel-target-letter-badge';
    letterHighlightBadge.innerHTML = `
      <div class="letter-badge-sub">הָאוֹת עַל הַסְּבִיבוֹן:</div>
      <div class="letter-badge-char">${q.letter}</div>
      <div class="letter-badge-name">${q.letterName}</div>
    `;

    topRow.appendChild(dreidelWrap);
    topRow.appendChild(letterHighlightBadge);

    // Question & Word Choices
    const questionCard = document.createElement('div');
    questionCard.className = 'dreidel-prompt-card';
    questionCard.innerHTML = `
      <div class="dreidel-prompt-text">מָה הַמִּלָּה שֶׁמַּתְחִילָה בָּאוֹת <strong>${q.letter}'</strong> עַל הַסְּבִיבוֹן?</div>
      <div class="dreidel-prompt-phrase">נֵס גָּדוֹל הָיָה פֹּה</div>
    `;

    const choicesGrid = document.createElement('div');
    choicesGrid.className = 'dreidel-choices-grid';

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn-choice btn-dreidel-choice';
      btn.innerHTML = `<span class="dreidel-word-text">${opt}</span>`;

      btn.addEventListener('click', () => {
        if (this.hasAnsweredCurrent) return;
        soundManager.playClick();

        if (idx === q.correctIndex) {
          this.hasAnsweredCurrent = true;
          btn.classList.add('correct');
          this.handleCorrectAnswer(q.explanation);
        } else {
          btn.classList.add('wrong', 'shake');
          soundManager.playRetry();
          this.showRetryFeedback(`חִשְׁבוּ עַל הַמִּשְׁפָּט: נֵס גָּדוֹל הָיָה פֹּה. מָה הַמִּלָּה שֶׁמַּתְחִילָה בָּאוֹת ${q.letter}'? 🌸`);
          setTimeout(() => btn.classList.remove('wrong', 'shake'), 900);
        }
      });

      choicesGrid.appendChild(btn);
    });

    stage.appendChild(topRow);
    stage.appendChild(questionCard);
    stage.appendChild(choicesGrid);
    container.appendChild(stage);
  }

  // ==========================================================================
  // Positive Reinforcement & Retry Handlers
  // ==========================================================================
  handleCorrectAnswer(explanationText) {
    soundManager.playSuccess();
    this.stars += 1;
    this.updateStarsDisplay();

    const banner = document.getElementById('feedback-banner');
    if (!banner) return;

    banner.className = 'feedback-banner success pop-in';
    banner.innerHTML = `
      <div class="feedback-icon">🎉</div>
      <div class="feedback-body">
        <div class="feedback-title">כָּל הַכָּבוֹד! תְּשׁוּבָה נְכוֹנָה! ⭐</div>
        <div class="feedback-text">${explanationText}</div>
      </div>
      <button class="btn-next-question" id="btn-next-question">
        <span>הַמְשֵׁךְ לַמְּשִׂימָה הַבָּאָה</span>
        <span>⬅️</span>
      </button>
    `;

    const nextBtn = document.getElementById('btn-next-question');
    if (nextBtn) {
      nextBtn.focus();
      nextBtn.addEventListener('click', () => {
        soundManager.playClick();
        this.advanceNextQuestion();
      });
    }
  }

  showRetryFeedback(messageText) {
    const banner = document.getElementById('feedback-banner');
    if (!banner) return;

    banner.className = 'feedback-banner retry pop-in';
    banner.innerHTML = `
      <div class="feedback-icon">💡</div>
      <div class="feedback-body">
        <div class="feedback-title">נַסּוּ שׁוּב!</div>
        <div class="feedback-text">${messageText}</div>
      </div>
    `;
  }

  advanceNextQuestion() {
    const st = this.currentStation;
    if (this.currentQuestionIdx < st.questions.length - 1) {
      this.currentQuestionIdx += 1;
      this.renderCurrentQuestion();
    } else {
      // Completed all questions in this station!
      this.completedStations.add(this.currentStationIdx);
      this.renderStationsNav();
      this.showCelebrationModal();
    }
  }

  // ==========================================================================
  // Celebration & Bouncing Trophy Modal
  // ==========================================================================
  showCelebrationModal() {
    const modal = document.getElementById('trophy-modal');
    if (!modal) return;

    soundManager.playApplause();
    confetti.launch(5500);

    const st = this.currentStation;
    const isGrandFinale = (this.completedStations.size === this.stations.length);

    const titleEl = document.getElementById('trophy-stage-title');
    const infoEl = document.getElementById('trophy-stars-info');
    const advanceBtn = document.getElementById('btn-modal-advance');

    if (isGrandFinale) {
      // Grand Finale for all Grade 1 Hanukkah stations!
      document.querySelector('.trophy-title').textContent = 'אַלּוּפֵי חֲנֻכָּה שֶׁל כִּיתָה א\'! 🏆';
      if (titleEl) titleEl.textContent = 'סִיַּמְתֶּם אֶת כָּל מְשִׂימוֹת סִמְלֵי חַג הַחֲנֻכָּה בְּהַצְלָחָה!';
      if (infoEl) infoEl.textContent = `צְבַרְתֶּם סַךְ הַכֹּל ${this.stars} כּוֹכָבֵי הַצְלָחָה! ⭐ חַג חֲנֻכָּה מֵאִיר וְשָׂמֵחַ!`;
      if (advanceBtn) {
        advanceBtn.innerHTML = '<span>שַׂחֲקוּ שׁוּב מֵהַתְחָלָה!</span> <span>🔄</span>';
      }
    } else {
      document.querySelector('.trophy-title').textContent = 'כָּל הַכָּבוֹד! 🏆';
      if (titleEl) titleEl.textContent = `סִיַּמְתֶּם אֶת תַּחֲנָה ${st.stationNumber}: ${st.title}!`;
      if (infoEl) infoEl.textContent = `צְבַרְתֶּם ${this.stars} כּוֹכָבִים עַד כֹּה! ⭐`;
      if (advanceBtn) {
        advanceBtn.innerHTML = '<span>עֲבֹר לַתַּחֲנָה הַבָּאָה</span> <span>🏆</span>';
      }
    }

    modal.classList.add('active');
  }

  closeCelebrationModal() {
    const modal = document.getElementById('trophy-modal');
    if (modal) {
      modal.classList.remove('active');
    }
    confetti.stop();
  }

  // ==========================================================================
  // Holiday Visual Glossary
  // ==========================================================================
  renderGlossaryContent() {
    const grid = document.getElementById('glossary-grid');
    if (!grid) return;

    grid.innerHTML = '';
    HANUKKAH_GLOSSARY.forEach(item => {
      const card = document.createElement('div');
      card.className = 'glossary-card';
      card.innerHTML = `
        <div class="glossary-thumb">${SVGS[item.svgKey] || ''}</div>
        <div class="glossary-body">
          <div class="glossary-word">${item.word}</div>
          <div class="glossary-desc">${item.desc}</div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
}

// Instantiate and initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new HanukkahApp();
  window.app.init();
});
