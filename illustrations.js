// Hanukkah High-Quality SVG Illustrations
const SVGS = {
  chanukiah: `
    <svg viewBox="0 0 300 240" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFE885"/>
          <stop offset="40%" stop-color="#FFC107"/>
          <stop offset="80%" stop-color="#E65100"/>
          <stop offset="100%" stop-color="#FFA000"/>
        </linearGradient>
        <radialGradient id="flameGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="25%" stop-color="#FFF59D"/>
          <stop offset="60%" stop-color="#FF9800"/>
          <stop offset="100%" stop-color="#E65100"/>
        </radialGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      <!-- Base and Stand -->
      <path d="M110 220 Q150 205 190 220 L200 230 L100 230 Z" fill="url(#goldGrad)"/>
      <rect x="143" y="100" width="14" height="115" rx="5" fill="url(#goldGrad)"/>
      <ellipse cx="150" cy="205" rx="28" ry="8" fill="url(#goldGrad)"/>
      
      <!-- Symmetrical Branches -->
      <!-- Branch 1 (outermost) -->
      <path d="M40 100 Q40 170 150 170 Q260 170 260 100" fill="none" stroke="url(#goldGrad)" stroke-width="8" stroke-linecap="round"/>
      <!-- Branch 2 -->
      <path d="M68 110 Q68 160 150 160 Q232 160 232 110" fill="none" stroke="url(#goldGrad)" stroke-width="8" stroke-linecap="round"/>
      <!-- Branch 3 -->
      <path d="M95 120 Q95 150 150 150 Q205 150 205 120" fill="none" stroke="url(#goldGrad)" stroke-width="8" stroke-linecap="round"/>
      <!-- Branch 4 -->
      <path d="M122 130 Q122 142 150 142 Q178 142 178 130" fill="none" stroke="url(#goldGrad)" stroke-width="8" stroke-linecap="round"/>

      <!-- Candle holders (cups) -->
      <!-- Left 4 -->
      <path d="M33 95 L47 95 L44 105 L36 105 Z" fill="url(#goldGrad)"/>
      <path d="M61 105 L75 105 L72 115 L64 115 Z" fill="url(#goldGrad)"/>
      <path d="M88 115 L102 115 L99 125 L91 125 Z" fill="url(#goldGrad)"/>
      <path d="M115 125 L129 125 L126 135 L118 135 Z" fill="url(#goldGrad)"/>
      <!-- Center Shamash (Higher) -->
      <path d="M141 78 L159 78 L156 90 L144 90 Z" fill="url(#goldGrad)"/>
      <!-- Right 4 -->
      <path d="M171 125 L185 125 L182 135 L174 135 Z" fill="url(#goldGrad)"/>
      <path d="M198 115 L212 115 L209 125 L201 125 Z" fill="url(#goldGrad)"/>
      <path d="M225 105 L239 105 L236 115 L228 115 Z" fill="url(#goldGrad)"/>
      <path d="M253 95 L267 95 L264 105 L256 105 Z" fill="url(#goldGrad)"/>

      <!-- Candles -->
      <!-- Left 4 -->
      <rect x="36" y="65" width="8" height="30" rx="3" fill="#00bcd4"/>
      <rect x="64" y="75" width="8" height="30" rx="3" fill="#e91e63"/>
      <rect x="91" y="85" width="8" height="30" rx="3" fill="#4caf50"/>
      <rect x="118" y="95" width="8" height="30" rx="3" fill="#ff9800"/>
      <!-- Shamash (Higher) -->
      <rect x="146" y="45" width="8" height="33" rx="3" fill="#9c27b0"/>
      <!-- Right 4 -->
      <rect x="174" y="95" width="8" height="30" rx="3" fill="#2196f3"/>
      <rect x="201" y="85" width="8" height="30" rx="3" fill="#ffeb3b"/>
      <rect x="228" y="75" width="8" height="30" rx="3" fill="#e91e63"/>
      <rect x="256" y="65" width="8" height="30" rx="3" fill="#00bcd4"/>

      <!-- Wicks -->
      <line x1="40" y1="65" x2="40" y2="59" stroke="#333" stroke-width="2"/>
      <line x1="68" y1="75" x2="68" y2="69" stroke="#333" stroke-width="2"/>
      <line x1="95" y1="85" x2="95" y2="79" stroke="#333" stroke-width="2"/>
      <line x1="122" y1="95" x2="122" y2="89" stroke="#333" stroke-width="2"/>
      <line x1="150" y1="45" x2="150" y2="39" stroke="#333" stroke-width="2"/>
      <line x1="178" y1="95" x2="178" y2="89" stroke="#333" stroke-width="2"/>
      <line x1="205" y1="85" x2="205" y2="79" stroke="#333" stroke-width="2"/>
      <line x1="232" y1="75" x2="232" y2="69" stroke="#333" stroke-width="2"/>
      <line x1="260" y1="65" x2="260" y2="59" stroke="#333" stroke-width="2"/>

      <!-- Glowing Flames with pulse animation class -->
      <g filter="url(#glow)">
        <path class="flame-flicker" d="M40 59 Q45 52 40 43 Q35 52 40 59 Z" fill="url(#flameGrad)"/>
        <path class="flame-flicker" d="M68 69 Q73 62 68 53 Q63 62 68 69 Z" fill="url(#flameGrad)"/>
        <path class="flame-flicker" d="M95 79 Q100 72 95 63 Q90 72 95 79 Z" fill="url(#flameGrad)"/>
        <path class="flame-flicker" d="M122 89 Q127 82 122 73 Q117 82 122 89 Z" fill="url(#flameGrad)"/>
        <!-- Shamash flame (larger) -->
        <path class="flame-flicker-lead" d="M150 39 Q157 30 150 18 Q143 30 150 39 Z" fill="url(#flameGrad)"/>
        <path class="flame-flicker" d="M178 89 Q183 82 178 73 Q173 82 178 89 Z" fill="url(#flameGrad)"/>
        <path class="flame-flicker" d="M205 79 Q210 72 205 63 Q200 72 205 79 Z" fill="url(#flameGrad)"/>
        <path class="flame-flicker" d="M232 69 Q237 62 232 53 Q227 62 232 69 Z" fill="url(#flameGrad)"/>
        <path class="flame-flicker" d="M260 59 Q265 52 260 43 Q255 52 260 59 Z" fill="url(#flameGrad)"/>
      </g>
    </svg>
  `,

  candles: `
    <svg viewBox="0 0 240 240" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="flameGradCandles" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="30%" stop-color="#FFEE58"/>
          <stop offset="70%" stop-color="#FF9800"/>
          <stop offset="100%" stop-color="#E65100"/>
        </radialGradient>
        <linearGradient id="c1Grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0288D1"/>
          <stop offset="50%" stop-color="#4FC3F7"/>
          <stop offset="100%" stop-color="#0277BD"/>
        </linearGradient>
        <linearGradient id="c2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#C2185B"/>
          <stop offset="50%" stop-color="#F48FB1"/>
          <stop offset="100%" stop-color="#AD1457"/>
        </linearGradient>
        <linearGradient id="c3Grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#F57C00"/>
          <stop offset="50%" stop-color="#FFE082"/>
          <stop offset="100%" stop-color="#EF6C00"/>
        </linearGradient>
        <filter id="candleGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      <!-- Base plate / surface -->
      <ellipse cx="120" cy="210" rx="90" ry="16" fill="#EDE7F6"/>
      <ellipse cx="120" cy="206" rx="84" ry="12" fill="#D1C4E9"/>

      <!-- Candle 1 (Left, Blue) -->
      <rect x="52" y="100" width="28" height="100" rx="6" fill="url(#c1Grad)"/>
      <ellipse cx="66" cy="100" rx="14" ry="5" fill="#81D4FA"/>
      <path d="M52 108 C55 118 60 115 62 128 C64 122 66 112 66 100" fill="#B3E5FC" opacity="0.8"/>
      <!-- Wick & Flame -->
      <line x1="66" y1="100" x2="66" y2="86" stroke="#424242" stroke-width="2.5"/>
      <g filter="url(#candleGlow)">
        <path class="flame-flicker" d="M66 86 C74 72 70 54 66 44 C62 54 58 72 66 86 Z" fill="url(#flameGradCandles)"/>
      </g>

      <!-- Candle 2 (Middle, Tall, Pink/Magenta) -->
      <rect x="106" y="70" width="28" height="130" rx="6" fill="url(#c2Grad)"/>
      <ellipse cx="120" cy="70" rx="14" ry="5" fill="#F8BBD0"/>
      <path d="M110 78 C113 90 116 88 118 102 C120 95 122 84 122 70" fill="#FFCDD2" opacity="0.8"/>
      <!-- Wick & Flame -->
      <line x1="120" y1="70" x2="120" y2="54" stroke="#424242" stroke-width="2.5"/>
      <g filter="url(#candleGlow)">
        <path class="flame-flicker-lead" d="M120 54 C130 38 125 18 120 8 C115 18 110 38 120 54 Z" fill="url(#flameGradCandles)"/>
      </g>

      <!-- Candle 3 (Right, Orange/Gold) -->
      <rect x="160" y="115" width="28" height="85" rx="6" fill="url(#c3Grad)"/>
      <ellipse cx="174" cy="115" rx="14" ry="5" fill="#FFF8E1"/>
      <!-- Wick & Flame -->
      <line x1="174" y1="115" x2="174" y2="101" stroke="#424242" stroke-width="2.5"/>
      <g filter="url(#candleGlow)">
        <path class="flame-flicker" d="M174 101 C182 87 178 70 174 60 C170 70 166 87 174 101 Z" fill="url(#flameGradCandles)"/>
      </g>
    </svg>
  `,

  dreidel: `
    <svg viewBox="0 0 240 240" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pegGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#D7CCC8"/>
          <stop offset="50%" stop-color="#BCAAA4"/>
          <stop offset="100%" stop-color="#8D6E63"/>
        </linearGradient>
        <linearGradient id="dreidelBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#42A5F5"/>
          <stop offset="50%" stop-color="#1E88E5"/>
          <stop offset="100%" stop-color="#1565C0"/>
        </linearGradient>
        <linearGradient id="dreidelSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1976D2"/>
          <stop offset="100%" stop-color="#0D47A1"/>
        </linearGradient>
        <linearGradient id="dreidelTop" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#64B5F6"/>
          <stop offset="100%" stop-color="#BBDEFB"/>
        </linearGradient>
        <filter id="dreidelShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="10" stdDeviation="6" flood-opacity="0.25"/>
        </filter>
      </defs>
      <g filter="url(#dreidelShadow)">
        <!-- Top Peg / Handle -->
        <rect x="110" y="22" width="20" height="38" rx="5" fill="url(#pegGrad)"/>
        <ellipse cx="120" cy="22" rx="10" ry="4" fill="#EFEBE9"/>

        <!-- Top Diamond Surface -->
        <polygon points="120,50 185,75 120,100 55,75" fill="url(#dreidelTop)"/>

        <!-- Front-Left Face -->
        <polygon points="55,75 120,100 120,175 55,150" fill="url(#dreidelBody)"/>
        <!-- Front-Right Face -->
        <polygon points="120,100 185,75 185,150 120,175" fill="url(#dreidelSide)"/>

        <!-- Bottom Pyramid Tip (Left) -->
        <polygon points="55,150 120,175 120,222" fill="#1565C0"/>
        <!-- Bottom Pyramid Tip (Right) -->
        <polygon points="120,175 185,150 120,222" fill="#0D47A1"/>

        <!-- Golden Hebrew Letters -->
        <!-- Letter Nun on left face -->
        <text x="88" y="148" font-family="'Rubik', 'Assistant', sans-serif" font-weight="900" font-size="44" fill="#FFD54F" text-anchor="middle" transform="skewY(12)">נ</text>
        <!-- Letter Gimel on right face -->
        <text x="152" y="148" font-family="'Rubik', 'Assistant', sans-serif" font-weight="900" font-size="44" fill="#FFE082" text-anchor="middle" transform="skewY(-12)">ג</text>

        <!-- Sparkles / Motion -->
        <circle cx="40" cy="85" r="4" fill="#FFEB3B"/>
        <polygon points="200,60 203,68 211,71 203,74 200,82 197,74 189,71 197,68" fill="#FFCA28"/>
        <polygon points="35,160 37,165 42,167 37,169 35,174 33,169 28,167 33,165" fill="#FFCA28"/>
      </g>
    </svg>
  `,

  latke: `
    <svg viewBox="0 0 240 240" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E1F5FE"/>
          <stop offset="100%" stop-color="#81D4FA"/>
        </linearGradient>
        <radialGradient id="latkeColor1" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#FFE082"/>
          <stop offset="45%" stop-color="#FFB300"/>
          <stop offset="85%" stop-color="#B26A00"/>
          <stop offset="100%" stop-color="#6D3D00"/>
        </radialGradient>
        <radialGradient id="latkeColor2" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#FFF8E1"/>
          <stop offset="50%" stop-color="#FFA000"/>
          <stop offset="85%" stop-color="#BF360C"/>
          <stop offset="100%" stop-color="#5D4037"/>
        </radialGradient>
      </defs>
      <!-- Ceramic Plate -->
      <ellipse cx="120" cy="140" rx="100" ry="55" fill="url(#plateGrad)" stroke="#29B6F6" stroke-width="3"/>
      <ellipse cx="120" cy="138" rx="84" ry="43" fill="#FFFFFF"/>

      <!-- Latke 1 (Back Left) -->
      <path d="M50 135 Q55 105 85 105 Q115 110 110 140 Q105 160 75 160 Q48 155 50 135 Z" fill="url(#latkeColor1)"/>
      <!-- Crispy bits / shredded potato texture -->
      <path d="M48 128 L42 125 M55 105 L52 98 M90 102 L95 96 M112 120 L118 118 M108 152 L114 156 M62 160 L58 166" stroke="#B26A00" stroke-width="3" stroke-linecap="round"/>

      <!-- Latke 2 (Back Right) -->
      <path d="M125 125 Q135 95 165 98 Q195 105 190 135 Q185 158 155 156 Q122 150 125 125 Z" fill="url(#latkeColor1)"/>
      <path d="M130 100 L126 94 M168 94 L172 88 M195 115 L202 112 M190 145 L196 150 M142 158 L140 164" stroke="#B26A00" stroke-width="3" stroke-linecap="round"/>

      <!-- Latke 3 (Front Center - Crispy & Golden) -->
      <path d="M80 150 Q90 120 125 122 Q160 125 155 158 Q148 185 115 182 Q75 178 80 150 Z" fill="url(#latkeColor2)"/>
      <path d="M78 140 L72 136 M92 118 L90 112 M130 118 L134 112 M158 140 L165 138 M155 170 L162 175 M105 185 L102 192 M85 172 L78 178" stroke="#BF360C" stroke-width="3" stroke-linecap="round"/>

      <!-- Bowl of Apple Sauce or Sour Cream -->
      <ellipse cx="65" cy="85" rx="25" ry="14" fill="#E0E0E0"/>
      <ellipse cx="65" cy="83" rx="22" ry="11" fill="#FFF9C4"/>
      <path d="M60 81 Q65 76 70 81" stroke="#FBC02D" stroke-width="2" fill="none"/>
      <!-- Mint leaf garnish -->
      <ellipse cx="68" cy="78" rx="5" ry="3" fill="#4CAF50" transform="rotate(-20 68 78)"/>

      <!-- Rising Fresh Steam lines -->
      <path d="M105 110 Q98 95 108 80" stroke="#B0BEC5" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
      <path d="M125 105 Q135 90 125 75" stroke="#B0BEC5" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
      <path d="M145 110 Q140 95 150 80" stroke="#B0BEC5" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
    </svg>
  `,

  sufganiya: `
    <svg viewBox="0 0 240 240" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="doughGrad" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#FFE0B2"/>
          <stop offset="50%" stop-color="#FFB74D"/>
          <stop offset="85%" stop-color="#F57C00"/>
          <stop offset="100%" stop-color="#C66900"/>
        </radialGradient>
        <radialGradient id="jamGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#FF5252"/>
          <stop offset="50%" stop-color="#D50000"/>
          <stop offset="100%" stop-color="#880E4F"/>
        </radialGradient>
        <filter id="powderGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.2"/>
        </filter>
      </defs>
      <!-- Plate shadow -->
      <ellipse cx="120" cy="205" rx="80" ry="16" fill="#D7CCC8" opacity="0.6"/>

      <g filter="url(#powderGlow)">
        <!-- Lower bun / body -->
        <ellipse cx="120" cy="145" rx="88" ry="55" fill="url(#doughGrad)"/>
        
        <!-- White fried ring (The traditional "pash" / pale belt in authentic fried donuts!) -->
        <path d="M34 140 Q120 162 206 140 Q120 150 34 140 Z" fill="#FFF3E0" opacity="0.85"/>

        <!-- Top rounded dome -->
        <ellipse cx="120" cy="120" rx="82" ry="46" fill="url(#doughGrad)"/>

        <!-- Generous Dusting of Powdered Sugar -->
        <ellipse cx="120" cy="112" rx="65" ry="32" fill="#FFFFFF" opacity="0.85"/>
        <ellipse cx="120" cy="110" rx="55" ry="24" fill="#FFFFFF" opacity="0.95"/>
        <!-- Scattered sugar sparkles -->
        <circle cx="55" cy="120" r="2.5" fill="#FFFFFF"/>
        <circle cx="70" cy="98" r="3" fill="#FFFFFF"/>
        <circle cx="170" cy="100" r="3" fill="#FFFFFF"/>
        <circle cx="185" cy="125" r="2.5" fill="#FFFFFF"/>
        <circle cx="95" cy="85" r="2" fill="#FFFFFF"/>
        <circle cx="145" cy="86" r="2.5" fill="#FFFFFF"/>

        <!-- Glossy Strawberry Jelly (ריבה אדומה) -->
        <circle cx="120" cy="102" rx="16" ry="14" fill="url(#jamGrad)"/>
        <ellipse cx="120" cy="100" rx="15" ry="13" fill="url(#jamGrad)"/>
        <!-- Jelly drop dripping down slightly -->
        <path d="M112 105 Q120 120 125 116 Q128 108 126 102 Z" fill="url(#jamGrad)"/>
        <!-- Jelly glossy highlight -->
        <ellipse cx="116" cy="96" rx="4" ry="2.5" fill="#FFFFFF" opacity="0.85" transform="rotate(-20 116 96)"/>
      </g>
    </svg>
  `,

  clay_jar: `
    <svg viewBox="0 0 240 240" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="clayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFAB91"/>
          <stop offset="35%" stop-color="#FF7043"/>
          <stop offset="75%" stop-color="#D84315"/>
          <stop offset="100%" stop-color="#872300"/>
        </linearGradient>
        <radialGradient id="oilDrops" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FFEE58"/>
          <stop offset="60%" stop-color="#FBC02D"/>
          <stop offset="100%" stop-color="#F57F17"/>
        </radialGradient>
      </defs>
      <!-- Ground Shadow -->
      <ellipse cx="120" cy="216" rx="55" ry="12" fill="#CFD8DC"/>

      <!-- Jug Handle (Left) -->
      <path d="M85 85 C45 85 40 155 88 165 C78 152 75 100 90 92 Z" fill="#D84315"/>
      <path d="M87 90 C55 95 52 148 88 158" stroke="#BF360C" stroke-width="2" fill="none"/>

      <!-- Clay Jug Main Body (פך שמן עתיק) -->
      <!-- Neck -->
      <path d="M96 60 L144 60 L136 90 L104 90 Z" fill="url(#clayGrad)"/>
      <!-- Rim / Spout -->
      <ellipse cx="120" cy="58" rx="26" ry="8" fill="#FFAB91"/>
      <ellipse cx="120" cy="57" rx="21" ry="5" fill="#872300"/>
      <!-- Pot Belly -->
      <path d="M104 90 C70 105 60 170 85 198 C100 215 140 215 155 198 C180 170 170 105 136 90 Z" fill="url(#clayGrad)"/>

      <!-- Ancient High Priest Seal (חותם כהן גדול) -->
      <circle cx="120" cy="148" r="22" fill="#BF360C" stroke="#FFE0B2" stroke-width="2" stroke-dasharray="3,2"/>
      <!-- 7-branch menorah impression on the seal -->
      <path d="M112 142 Q120 148 128 142 M114 146 Q120 151 126 146 M120 138 L120 156 M116 156 L124 156" stroke="#FFE0B2" stroke-width="2" fill="none" stroke-linecap="round"/>

      <!-- Golden Droplet of pure olive oil coming from spout -->
      <path d="M142 58 Q148 50 144 42 Q140 50 142 58 Z" fill="url(#oilDrops)"/>
      <!-- Sparkle on the jug -->
      <polygon points="152,115 154,120 159,122 154,124 152,129 150,124 145,122 150,120" fill="#FFF59D"/>
    </svg>
  `,

  olive_oil: `
    <svg viewBox="0 0 240 240" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="oilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#C0CA33"/>
          <stop offset="50%" stop-color="#FDD835"/>
          <stop offset="100%" stop-color="#F57F17"/>
        </linearGradient>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0F7FA" stop-opacity="0.8"/>
          <stop offset="50%" stop-color="#B2EBF2" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#80DEEA" stop-opacity="0.6"/>
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="120" cy="214" rx="60" ry="12" fill="#ECEFF1"/>

      <!-- Olive Branch & Olives behind/beside -->
      <path d="M50 190 Q90 170 140 185" stroke="#5D4037" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Leaves -->
      <path d="M60 180 Q75 160 90 175 Q75 185 60 180 Z" fill="#689F38"/>
      <path d="M75 195 Q95 210 110 195 Q95 185 75 195 Z" fill="#558B2F"/>
      <!-- Olives -->
      <ellipse cx="56" cy="188" rx="10" ry="14" fill="#33691E" transform="rotate(25 56 188)"/>
      <ellipse cx="90" cy="192" rx="11" ry="15" fill="#2E7D32" transform="rotate(-15 90 192)"/>
      <ellipse cx="108" cy="180" rx="9" ry="12" fill="#212121" transform="rotate(35 108 180)"/> <!-- Ripe black olive -->

      <!-- Glass Carafe / Bottle -->
      <!-- Cork stopper -->
      <polygon points="112,30 128,30 125,44 115,44" fill="#8D6E63"/>
      <!-- Neck -->
      <rect x="114" y="44" width="12" height="35" fill="url(#glassGrad)"/>
      <!-- Flask Body -->
      <path d="M114 78 Q75 105 75 165 C75 200 165 200 165 165 Q165 105 126 78 Z" fill="url(#glassGrad)" stroke="#B2EBF2" stroke-width="2"/>

      <!-- Pure Golden Oil Inside Flask -->
      <path d="M80 165 C80 195 160 195 160 165 C160 135 130 100 120 100 C110 100 80 135 80 165 Z" fill="url(#oilGrad)"/>
      <!-- Oil surface curve -->
      <ellipse cx="120" cy="120" rx="22" ry="6" fill="#FFEE58"/>

      <!-- Glass shine reflections -->
      <path d="M88 130 Q83 155 86 175" stroke="#FFFFFF" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8"/>
      <path d="M148 135 Q152 155 150 170" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
    </svg>
  `,

  beit_hamikdash: `
    <svg viewBox="0 0 260 220" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="templeGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFF9C4"/>
          <stop offset="35%" stop-color="#FFD54F"/>
          <stop offset="85%" stop-color="#FFA000"/>
          <stop offset="100%" stop-color="#FF6F00"/>
        </linearGradient>
        <linearGradient id="marbleStone" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ECEFF1"/>
          <stop offset="50%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#CFD8DC"/>
        </linearGradient>
        <linearGradient id="templeSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#E1F5FE"/>
          <stop offset="100%" stop-color="#B3E5FC"/>
        </linearGradient>
      </defs>
      <!-- Radiant Sky Background -->
      <rect x="10" y="10" width="240" height="200" rx="16" fill="url(#templeSky)"/>

      <!-- Sunbeams behind the sanctuary -->
      <path d="M130 30 L50 10 M130 30 L90 5 M130 30 L170 5 M130 30 L210 10" stroke="#FFF59D" stroke-width="3" stroke-linecap="round" opacity="0.7"/>

      <!-- Temple Steps (Ma'alot) -->
      <rect x="40" y="185" width="180" height="12" fill="#B0BEC5"/>
      <rect x="50" y="175" width="160" height="10" fill="#CFD8DC"/>
      <rect x="60" y="165" width="140" height="10" fill="#ECEFF1"/>

      <!-- Main Temple Sanctuary Body -->
      <rect x="68" y="65" width="124" height="100" fill="url(#marbleStone)" stroke="#90A4AE" stroke-width="2"/>

      <!-- Golden Roof / Cornice (Koteret) -->
      <polygon points="56,65 204,65 190,40 70,40" fill="url(#templeGold)"/>
      <!-- Golden Spikes / Ornaments on top (Kilyon Orev) -->
      <path d="M72 40 L72 32 M90 40 L90 32 M110 40 L110 32 M130 40 L130 30 M150 40 L150 32 M170 40 L170 32 M188 40 L188 32" stroke="#FFA000" stroke-width="3" stroke-linecap="round"/>

      <!-- Massive Grand Pillars (Amudim) -->
      <rect x="74" y="65" width="16" height="100" fill="url(#marbleStone)" stroke="#B0BEC5"/>
      <rect x="94" y="65" width="12" height="100" fill="url(#marbleStone)" stroke="#B0BEC5"/>
      <rect x="154" y="65" width="12" height="100" fill="url(#marbleStone)" stroke="#B0BEC5"/>
      <rect x="170" y="65" width="16" height="100" fill="url(#marbleStone)" stroke="#B0BEC5"/>

      <!-- Grand Golden Entrance Gate (Sha'ar Zahav) -->
      <path d="M110 165 L110 95 C110 82 150 82 150 95 L150 165 Z" fill="url(#templeGold)" stroke="#E65100" stroke-width="2"/>
      <!-- Gate Vine / Grape motif (Gefen Zahav) -->
      <path d="M130 92 L130 165" stroke="#E65100" stroke-width="1.5"/>
      <circle cx="123" cy="115" r="3" fill="#FFE082"/>
      <circle cx="137" cy="115" r="3" fill="#FFE082"/>
      <circle cx="123" cy="140" r="3" fill="#FFE082"/>
      <circle cx="137" cy="140" r="3" fill="#FFE082"/>
    </svg>
  `,

  judah_maccabee: `
    <svg viewBox="0 0 240 240" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFE082"/>
          <stop offset="40%" stop-color="#FFB300"/>
          <stop offset="100%" stop-color="#E65100"/>
        </linearGradient>
        <linearGradient id="capeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E88E5"/>
          <stop offset="100%" stop-color="#0D47A1"/>
        </linearGradient>
      </defs>
      <!-- Heroic Blue Cape -->
      <path d="M75 110 C50 140 40 200 55 220 C85 210 100 170 105 150 Z" fill="url(#capeGrad)"/>
      <path d="M165 110 C190 140 200 200 185 220 C155 210 140 170 135 150 Z" fill="url(#capeGrad)"/>

      <!-- Body / Armor (Tunic) -->
      <path d="M90 115 L150 115 L145 195 L95 195 Z" fill="#ECEFF1" stroke="#90A4AE" stroke-width="2"/>
      <path d="M92 135 L148 135 M95 155 L145 155" stroke="#B0BEC5" stroke-width="2"/>
      <!-- Belt -->
      <rect x="93" y="165" width="54" height="10" fill="#8D6E63"/>
      <rect x="114" y="162" width="12" height="16" fill="#FFC107"/>

      <!-- Cheerful Heroic Face -->
      <ellipse cx="120" cy="85" rx="26" ry="28" fill="#FFCCBC"/>
      <!-- Friendly Eyes -->
      <circle cx="111" cy="84" r="3.5" fill="#37474F"/>
      <circle cx="129" cy="84" r="3.5" fill="#37474F"/>
      <circle cx="112" cy="82" r="1.2" fill="#FFFFFF"/>
      <circle cx="130" cy="82" r="1.2" fill="#FFFFFF"/>
      <!-- Warm Smile -->
      <path d="M112 98 Q120 106 128 98" stroke="#D84315" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Rosy Cheeks -->
      <circle cx="104" cy="94" r="5" fill="#FF8A80" opacity="0.5"/>
      <circle cx="136" cy="94" r="5" fill="#FF8A80" opacity="0.5"/>

      <!-- Ancient Judean Golden Helmet with Plume -->
      <path d="M92 75 C92 50 148 50 148 75 Z" fill="url(#shieldGold)"/>
      <rect x="90" y="70" width="60" height="7" rx="3" fill="#FFA000"/>
      <!-- Majestic Plume / Crest -->
      <path d="M120 50 C120 20 105 10 95 15 C115 15 115 35 110 50 Z" fill="#29B6F6"/>
      <path d="M120 50 C125 22 135 12 145 18 C128 20 125 38 126 50 Z" fill="#0288D1"/>

      <!-- Golden Round Shield in Hand -->
      <circle cx="70" cy="155" r="34" fill="url(#shieldGold)" stroke="#FF8F00" stroke-width="3"/>
      <circle cx="70" cy="155" r="26" fill="none" stroke="#FFE082" stroke-width="2" stroke-dasharray="4,2"/>
      <!-- Emblem on Shield (Hammer - מקבת / מגן) -->
      <polygon points="70,135 78,145 74,145 74,175 66,175 66,145 62,145" fill="#FFFFFF"/>

      <!-- Raised Hand with Olive Branch of Victory -->
      <path d="M162 135 L178 120" stroke="#FFCCBC" stroke-width="8" stroke-linecap="round"/>
      <path d="M178 115 Q195 95 200 80" stroke="#4CAF50" stroke-width="3" fill="none"/>
      <ellipse cx="190" cy="90" rx="6" ry="3" fill="#66BB6A" transform="rotate(-30 190 90)"/>
      <ellipse cx="198" cy="80" rx="5" ry="3" fill="#81C784" transform="rotate(20 198 80)"/>
    </svg>
  `,

  antiochus: `
    <svg viewBox="0 0 240 240" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="greekPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#BA68C8"/>
          <stop offset="50%" stop-color="#7B1FA2"/>
          <stop offset="100%" stop-color="#4A148C"/>
        </linearGradient>
        <linearGradient id="greekGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF59D"/>
          <stop offset="50%" stop-color="#FFD54F"/>
          <stop offset="100%" stop-color="#FF8F00"/>
        </linearGradient>
      </defs>
      <!-- Royal Purple Greek Mantle / Chlamys -->
      <path d="M70 120 C50 160 45 220 85 220 L155 220 C195 220 190 160 170 120 Z" fill="url(#greekPurple)"/>
      <!-- Golden Meander Trim at Collar -->
      <path d="M85 125 Q120 145 155 125" stroke="url(#greekGold)" stroke-width="6" fill="none" stroke-linecap="round"/>
      <!-- Golden Brooch / Fibula on shoulder -->
      <circle cx="85" cy="120" r="9" fill="url(#greekGold)" stroke="#E65100" stroke-width="2"/>

      <!-- Royal Head & Face -->
      <ellipse cx="120" cy="85" rx="27" ry="29" fill="#FFE0B2"/>
      <!-- Regal curly dark hair -->
      <path d="M88 80 C85 60 100 50 120 50 C140 50 155 60 152 80 C156 95 150 105 145 105 C145 90 142 62 120 62 C98 62 95 90 95 105 C90 105 84 95 88 80 Z" fill="#4E342E"/>
      
      <!-- Haughty / Stern Eyes & Eyebrows -->
      <path d="M104 76 L116 80 M136 76 L124 80" stroke="#3E2723" stroke-width="3" stroke-linecap="round"/>
      <circle cx="111" cy="85" r="3" fill="#3E2723"/>
      <circle cx="129" cy="85" r="3" fill="#3E2723"/>
      <!-- Nose & Mouth (Strict king expression) -->
      <path d="M120 83 L122 93 L117 95" stroke="#D7CCC8" stroke-width="2" fill="none"/>
      <line x1="113" y1="102" x2="127" y2="102" stroke="#B08573" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Golden Laurel Wreath Crown (זר דפנה מזהב) -->
      <path d="M90 68 Q120 54 150 68" stroke="url(#greekGold)" stroke-width="3" fill="none"/>
      <!-- Golden Laurel Leaves -->
      <ellipse cx="94" cy="67" rx="5" ry="3" fill="url(#greekGold)" transform="rotate(-30 94 67)"/>
      <ellipse cx="106" cy="62" rx="6" ry="3.5" fill="url(#greekGold)" transform="rotate(-15 106 62)"/>
      <ellipse cx="120" cy="59" rx="6" ry="3.5" fill="url(#greekGold)"/>
      <ellipse cx="134" cy="62" rx="6" ry="3.5" fill="url(#greekGold)" transform="rotate(15 134 62)"/>
      <ellipse cx="146" cy="67" rx="5" ry="3" fill="url(#greekGold)" transform="rotate(30 146 67)"/>

      <!-- Scepter in hand -->
      <line x1="175" y1="90" x2="185" y2="180" stroke="url(#greekGold)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="174" cy="88" r="8" fill="#FF1744"/>
    </svg>
  `,

  greeks: `
    <svg viewBox="0 0 240 240" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFE082"/>
          <stop offset="40%" stop-color="#FFB300"/>
          <stop offset="80%" stop-color="#8D6E63"/>
          <stop offset="100%" stop-color="#4E342E"/>
        </linearGradient>
      </defs>
      <!-- Round Greek Hoplon Shield -->
      <circle cx="120" cy="120" r="85" fill="url(#bronzeGrad)" stroke="#3E2723" stroke-width="4"/>
      <!-- Inner rim with Greek Meander Geometric Pattern -->
      <circle cx="120" cy="120" r="72" fill="#D32F2F" stroke="#FFE082" stroke-width="3"/>
      
      <!-- Greek Meander wave band -->
      <circle cx="120" cy="120" r="56" fill="url(#bronzeGrad)"/>

      <!-- Corinthian Greek Helmet in center of shield emblem -->
      <path d="M100 100 C100 80 140 80 140 100 L142 125 L128 128 L128 140 L120 140 L120 128 L106 125 L98 125 Z" fill="#FFE082" stroke="#3E2723" stroke-width="2"/>
      <!-- Eye slits -->
      <ellipse cx="112" cy="115" rx="5" ry="3" fill="#212121" transform="rotate(15 112 115)"/>
      <ellipse cx="128" cy="115" rx="5" ry="3" fill="#212121" transform="rotate(-15 128 115)"/>
      <!-- Red crest of horsehair on helmet -->
      <path d="M120 78 C95 78 85 95 85 95 C98 85 110 84 120 84 C130 84 142 85 155 95 C155 95 145 78 120 78 Z" fill="#D50000"/>

      <!-- Greek Spears crossing in the background -->
      <line x1="25" y1="215" x2="215" y2="25" stroke="#5D4037" stroke-width="5" stroke-linecap="round"/>
      <polygon points="215,25 210,40 225,35" fill="#CFD8DC"/>
      <line x1="215" y1="215" x2="25" y2="25" stroke="#5D4037" stroke-width="5" stroke-linecap="round"/>
      <polygon points="25,25 30,40 15,35" fill="#CFD8DC"/>
    </svg>
  `,

  temple_menorah: `
    <svg viewBox="0 0 280 240" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pureGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF9C4"/>
          <stop offset="30%" stop-color="#FFEE58"/>
          <stop offset="70%" stop-color="#FFC107"/>
          <stop offset="100%" stop-color="#FFA000"/>
        </linearGradient>
        <radialGradient id="sacredFlame" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="25%" stop-color="#FFF9C4"/>
          <stop offset="60%" stop-color="#FF9800"/>
          <stop offset="100%" stop-color="#E65100"/>
        </radialGradient>
        <filter id="holyGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      <!-- Hexagonal / Stepped Golden Base (ירך) -->
      <polygon points="105,225 175,225 185,232 95,232" fill="url(#pureGold)"/>
      <polygon points="115,215 165,215 170,225 110,225" fill="url(#pureGold)"/>
      <rect x="134" y="90" width="12" height="125" fill="url(#pureGold)"/>

      <!-- 7 Branches (3 pairs + central stem, exactly as described in the Bible / Exodus) -->
      <!-- Branch Pair 1 (Outer) -->
      <path d="M50 85 Q50 175 140 175 Q230 175 230 85" fill="none" stroke="url(#pureGold)" stroke-width="8" stroke-linecap="round"/>
      <!-- Branch Pair 2 (Middle) -->
      <path d="M80 95 Q80 155 140 155 Q200 155 200 95" fill="none" stroke="url(#pureGold)" stroke-width="8" stroke-linecap="round"/>
      <!-- Branch Pair 3 (Inner) -->
      <path d="M110 105 Q110 135 140 135 Q170 135 170 105" fill="none" stroke="url(#pureGold)" stroke-width="8" stroke-linecap="round"/>

      <!-- Cups / Knobs / Flowers (גביעים, כפתורים ופרחים) -->
      <ellipse cx="140" cy="120" rx="9" ry="5" fill="#FFE082"/>
      <ellipse cx="140" cy="150" rx="10" ry="5" fill="#FFE082"/>
      <ellipse cx="140" cy="180" rx="11" ry="6" fill="#FFE082"/>

      <!-- 7 Oil Lamps / Bowls at Top (7 קנים בלבד!) -->
      <ellipse cx="50" cy="85" rx="10" ry="5" fill="url(#pureGold)"/>
      <ellipse cx="80" cy="95" rx="10" ry="5" fill="url(#pureGold)"/>
      <ellipse cx="110" cy="105" rx="10" ry="5" fill="url(#pureGold)"/>
      <ellipse cx="140" cy="85" rx="10" ry="5" fill="url(#pureGold)"/>
      <ellipse cx="170" cy="105" rx="10" ry="5" fill="url(#pureGold)"/>
      <ellipse cx="200" cy="95" rx="10" ry="5" fill="url(#pureGold)"/>
      <ellipse cx="230" cy="85" rx="10" ry="5" fill="url(#pureGold)"/>

      <!-- 7 Sacred Golden Flames -->
      <g filter="url(#holyGlow)">
        <path class="flame-flicker" d="M50 82 Q56 68 50 52 Q44 68 50 82 Z" fill="url(#sacredFlame)"/>
        <path class="flame-flicker" d="M80 92 Q86 78 80 62 Q74 78 80 92 Z" fill="url(#sacredFlame)"/>
        <path class="flame-flicker" d="M110 102 Q116 88 110 72 Q104 88 110 102 Z" fill="url(#sacredFlame)"/>
        <!-- Central Flame (Ner HaMa'aravi) -->
        <path class="flame-flicker-lead" d="M140 82 Q147 64 140 48 Q133 64 140 82 Z" fill="url(#sacredFlame)"/>
        <path class="flame-flicker" d="M170 102 Q176 88 170 72 Q164 88 170 102 Z" fill="url(#sacredFlame)"/>
        <path class="flame-flicker" d="M200 92 Q206 78 200 62 Q194 78 200 92 Z" fill="url(#sacredFlame)"/>
        <path class="flame-flicker" d="M230 82 Q236 68 230 52 Q224 68 230 82 Z" fill="url(#sacredFlame)"/>
      </g>

      <!-- Educational Badge Tag: 7 קָנִים -->
      <g transform="translate(140, 20)">
        <rect x="-45" y="0" width="90" height="24" rx="12" fill="#FFF9C4" stroke="#F57F17" stroke-width="1.5"/>
        <text x="0" y="16" font-family="'Rubik', sans-serif" font-weight="bold" font-size="13" fill="#E65100" text-anchor="middle">7 קָנִים בְּמִקְדָּשׁ</text>
      </g>
    </svg>
  `,

  eight_days: `
    <svg viewBox="0 0 260 200" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="calGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0288D1"/>
          <stop offset="100%" stop-color="#01579B"/>
        </linearGradient>
      </defs>
      <!-- Calendar Backing -->
      <rect x="25" y="25" width="210" height="155" rx="18" fill="#FFFFFF" stroke="#0288D1" stroke-width="4"/>
      <!-- Header Bar -->
      <path d="M25 43 C25 33 33 25 43 25 L217 25 C227 25 235 33 235 43 L235 65 L25 65 Z" fill="url(#calGrad)"/>
      <text x="130" y="52" font-family="'Rubik', sans-serif" font-weight="bold" font-size="18" fill="#FFFFFF" text-anchor="middle">נֵס שְׁמוֹנַת הַיָּמִים</text>

      <!-- 8 Glowing Light Circles with Days 1-8 -->
      <!-- Day 1 -->
      <circle cx="55" cy="95" r="16" fill="#FFF9C4" stroke="#FFA000" stroke-width="2"/>
      <text x="55" y="101" font-family="'Rubik', sans-serif" font-weight="900" font-size="16" fill="#E65100" text-anchor="middle">1</text>
      <!-- Day 2 -->
      <circle cx="105" cy="95" r="16" fill="#FFF9C4" stroke="#FFA000" stroke-width="2"/>
      <text x="105" y="101" font-family="'Rubik', sans-serif" font-weight="900" font-size="16" fill="#E65100" text-anchor="middle">2</text>
      <!-- Day 3 -->
      <circle cx="155" cy="95" r="16" fill="#FFF9C4" stroke="#FFA000" stroke-width="2"/>
      <text x="155" y="101" font-family="'Rubik', sans-serif" font-weight="900" font-size="16" fill="#E65100" text-anchor="middle">3</text>
      <!-- Day 4 -->
      <circle cx="205" cy="95" r="16" fill="#FFF9C4" stroke="#FFA000" stroke-width="2"/>
      <text x="205" y="101" font-family="'Rubik', sans-serif" font-weight="900" font-size="16" fill="#E65100" text-anchor="middle">4</text>

      <!-- Day 5 -->
      <circle cx="55" cy="145" r="16" fill="#FFF9C4" stroke="#FFA000" stroke-width="2"/>
      <text x="55" y="151" font-family="'Rubik', sans-serif" font-weight="900" font-size="16" fill="#E65100" text-anchor="middle">5</text>
      <!-- Day 6 -->
      <circle cx="105" cy="145" r="16" fill="#FFF9C4" stroke="#FFA000" stroke-width="2"/>
      <text x="105" y="151" font-family="'Rubik', sans-serif" font-weight="900" font-size="16" fill="#E65100" text-anchor="middle">6</text>
      <!-- Day 7 -->
      <circle cx="155" cy="145" r="16" fill="#FFF9C4" stroke="#FFA000" stroke-width="2"/>
      <text x="155" y="151" font-family="'Rubik', sans-serif" font-weight="900" font-size="16" fill="#E65100" text-anchor="middle">7</text>
      <!-- Day 8 (Miracle light!) -->
      <circle cx="205" cy="145" r="17" fill="#FFD54F" stroke="#FF6F00" stroke-width="3"/>
      <text x="205" y="151" font-family="'Rubik', sans-serif" font-weight="900" font-size="17" fill="#BF360C" text-anchor="middle">8</text>

      <!-- Little flame over 8 -->
      <path d="M205 125 Q208 118 205 110 Q202 118 205 125 Z" fill="#FF5722"/>
    </svg>
  `,

  nes_gadol: `
    <svg viewBox="0 0 280 200" class="game-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bannerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E91E63"/>
          <stop offset="50%" stop-color="#9C27B0"/>
          <stop offset="100%" stop-color="#2196F3"/>
        </linearGradient>
      </defs>
      <!-- Dreidel letter badges: N G H P -->
      <g transform="translate(20, 20)">
        <polygon points="25,5 45,5 35,28" fill="#42A5F5"/>
        <rect x="18" y="5" width="34" height="26" rx="4" fill="#1E88E5"/>
        <text x="35" y="25" font-family="'Rubik', sans-serif" font-weight="bold" font-size="18" fill="#FFF" text-anchor="middle">נ</text>
      </g>
      <g transform="translate(80, 20)">
        <polygon points="25,5 45,5 35,28" fill="#66BB6A"/>
        <rect x="18" y="5" width="34" height="26" rx="4" fill="#43A047"/>
        <text x="35" y="25" font-family="'Rubik', sans-serif" font-weight="bold" font-size="18" fill="#FFF" text-anchor="middle">ג</text>
      </g>
      <g transform="translate(140, 20)">
        <polygon points="25,5 45,5 35,28" fill="#FFA726"/>
        <rect x="18" y="5" width="34" height="26" rx="4" fill="#FB8C00"/>
        <text x="35" y="25" font-family="'Rubik', sans-serif" font-weight="bold" font-size="18" fill="#FFF" text-anchor="middle">ה</text>
      </g>
      <g transform="translate(200, 20)">
        <polygon points="25,5 45,5 35,28" fill="#AB47BC"/>
        <rect x="18" y="5" width="34" height="26" rx="4" fill="#8E24AA"/>
        <text x="35" y="25" font-family="'Rubik', sans-serif" font-weight="bold" font-size="18" fill="#FFF" text-anchor="middle">פ</text>
      </g>

      <!-- Festive Ribbon Banner -->
      <path d="M20 115 Q140 90 260 115 L250 165 Q140 140 30 165 Z" fill="url(#bannerGrad)"/>
      <path d="M10 120 L25 115 L35 160 L18 165 L26 140 Z" fill="#AD1457"/>
      <path d="M270 120 L255 115 L245 160 L262 165 L254 140 Z" fill="#1565C0"/>

      <text x="140" y="142" font-family="'Rubik', sans-serif" font-weight="900" font-size="21" fill="#FFFFFF" text-anchor="middle">נֵס גָּדוֹל הָיָה פֹּה!</text>

      <!-- Golden sparkling stars -->
      <polygon points="45,85 48,93 56,96 48,99 45,107 42,99 34,96 42,93" fill="#FFD54F"/>
      <polygon points="235,85 238,93 246,96 238,99 235,107 232,99 224,96 232,93" fill="#FFD54F"/>
      <circle cx="140" cy="85" r="4" fill="#FFEB3B"/>
    </svg>
  `
};
