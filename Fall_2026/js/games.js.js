// ==========================================
// 1. GLOBAL VOCABULARY DATABASE
// ==========================================
const vocabData = {
  // Mars Lesson
  "colony": {
    word: "colony",
    translation: "殖民地",
    pos: "noun",
    pronunciation: "/ˈkɑː.lə.ni/",
    example: "Scientists want to build a colony on Mars.",
    img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=300",
    lessons: ["Life on Mars", "Future Technology"]
  },
  "atmosphere": {
    word: "atmosphere",
    translation: "大氣層",
    pos: "noun",
    pronunciation: "/ˈæt.məs.fɪr/",
    example: "The atmosphere on Mars is very thin.",
    img: "https://images.unsplash.com/photo-1536697246787-1f27dc3950f0?w=300",
    lessons: ["Life on Mars"]
  },
  // Brain Rot Lesson
  "algorithm": {
    word: "algorithm",
    translation: "演算法",
    pos: "noun",
    pronunciation: "/ˈæl.ɡə.rɪ.ðəm/",
    example: "The algorithm learns what videos you like to watch.",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=300",
    lessons: ["The Age of Brain Rot", "Rise of AI"]
  },
  "dopamine": {
    word: "dopamine",
    translation: "多巴胺",
    pos: "noun",
    pronunciation: "/ˈdoʊ.pə.miːn/",
    example: "Dopamine is a chemical in the brain that makes you feel happy.",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300",
    lessons: ["The Age of Brain Rot", "The Psychology of Color"]
  },
  "fomo": {
    word: "FOMO",
    translation: "錯失恐懼症",
    pos: "noun",
    pronunciation: "/ˈfoʊ.moʊ/",
    example: "He bought the new shoes because of FOMO.",
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=300",
    lessons: ["The Age of Brain Rot", "Social Media"]
  },
  "prefrontal_cortex": {
    word: "prefrontal cortex",
    translation: "前額葉皮質",
    pos: "noun",
    pronunciation: "/ˌpriː.frʌn.təl ˈkɔːr.teks/",
    example: "The prefrontal cortex helps you make good decisions.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300",
    lessons: ["The Age of Brain Rot"]
  },
  "neuroplasticity": {
    word: "neuroplasticity",
    translation: "神經可塑性",
    pos: "noun",
    pronunciation: "/ˌnʊr.oʊ.plæsˈtɪs.ə.t̬i/",
    example: "Neuroplasticity means your brain can learn new things.",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=300",
    lessons: ["The Age of Brain Rot"]
  },
  "absurd": {
    word: "absurd",
    translation: "荒謬的",
    pos: "adjective",
    pronunciation: "/əbˈsɝːd/",
    example: "The video about dancing toilets was completely absurd.",
    img: "https://images.unsplash.com/photo-1492681290082-e9328336bb18?w=300",
    lessons: ["The Age of Brain Rot"]
  }
};

// ==========================================
// 2. LESSON PAGE: BASIC / INTERMEDIATE TOGGLE
// ==========================================
function toggleLevel(level) {
  const basicContent = document.getElementById('content-basic');
  const intContent = document.getElementById('content-intermediate');
  const btnBasic = document.getElementById('btn-basic');
  const btnInt = document.getElementById('btn-intermediate');

  if (!basicContent) return; 

  if (level === 'basic') {
    basicContent.classList.replace('hidden-section', 'active-section');
    intContent.classList.replace('active-section', 'hidden-section');
    
    btnBasic.classList.add('bg-white', 'shadow-sm', 'text-indigo-600');
    btnBasic.classList.remove('text-gray-600');
    btnInt.classList.remove('bg-white', 'shadow-sm', 'text-indigo-600');
    btnInt.classList.add('text-gray-600');
  } else {
    intContent.classList.replace('hidden-section', 'active-section');
    basicContent.classList.replace('active-section', 'hidden-section');
    
    btnInt.classList.add('bg-white', 'shadow-sm', 'text-indigo-600');
    btnInt.classList.remove('text-gray-600');
    btnBasic.classList.remove('bg-white', 'shadow-sm', 'text-indigo-600');
    btnBasic.classList.add('text-gray-600');
  }
}

// ==========================================
// 3. VOCABULARY POPUP LOGIC
// ==========================================
function showVocab(wordKey) {
  const data = vocabData[wordKey];
  if (!data) return;

  document.getElementById('vocab-word').innerText = data.word;
  document.getElementById('vocab-translation').innerText = data.translation;
  document.getElementById('vocab-pos').innerText = data.pos;
  document.getElementById('vocab-pronunciation').innerText = data.pronunciation;
  document.getElementById('vocab-example').innerText = `"${data.example}"`;
  document.getElementById('vocab-img').src = data.img;

  const modal = document.getElementById('vocab-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeVocab() {
  const modal = document.getElementById('vocab-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ==========================================
// 4. DICTIONARY PAGE RENDER LOGIC
// ==========================================
const dictGrid = document.getElementById('dictionary-grid');

if (dictGrid && typeof vocabData !== 'undefined') {
  dictGrid.innerHTML = ''; 
  
  Object.values(vocabData).forEach(vocab => {
    const card = document.createElement('div');
    card.className = 'ui-card p-8 flex flex-col hover:shadow-xl transition-shadow duration-300';
    
    // Format the lesson tags
    let linksHTML = vocab.lessons.map(l => 
      `<span class="text-xs font-bold text-slate-500 border border-slate-200 rounded-full px-3 py-1 bg-white uppercase tracking-wider"><i class="fa-solid fa-check text-green-500 mr-2"></i>${l}</span>`
    ).join('');

    // Construct the card matching the provided screenshot design
    card.innerHTML = `
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-3xl font-black text-[#1a202c] capitalize">${vocab.word}</h3>
        <button class="bg-slate-100 hover:bg-slate-200 text-slate-600 w-10 h-10 rounded-full flex items-center justify-center transition" aria-label="Listen to pronunciation">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      </div>
      <p class="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
        ${vocab.pronunciation} <span class="mx-1">•</span> ${vocab.pos}
      </p>
      
      <p class="text-2xl text-[#6174e1] font-bold mb-6">${vocab.translation}</p>
      
      <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-6 italic text-slate-600 font-medium leading-relaxed">
        "${vocab.example}"
      </div>
      
      <div class="mt-auto border-t border-slate-100 pt-5">
        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Appears In</p>
        <div class="flex flex-wrap gap-2">${linksHTML}</div>
      </div>
    `;
    dictGrid.appendChild(card);
  });
}
// ==========================================
// 1. READING COMPREHENSION LOGIC
// ==========================================
function checkAnswer(btn, isCorrect) {
  const feedback = document.getElementById('quiz-feedback');
  feedback.classList.remove('hidden');
  
  if (isCorrect) {
    btn.classList.add('bg-green-100', 'text-green-800', 'border-green-500');
    feedback.innerText = "Correct! Great job.";
    feedback.classList.remove('text-red-600');
    feedback.classList.add('text-green-600');
  } else {
    btn.classList.add('bg-red-100', 'text-red-800', 'border-red-500');
    feedback.innerText = "Not quite. Try again!";
    feedback.classList.remove('text-green-600');
    feedback.classList.add('text-red-600');
  }
}

// ==========================================
// 2. SENTENCE UNJUMBLE ENGINE
// ==========================================
const sentence = ["Scientists", "are", "looking", "for", "water", "on", "Mars."];
let currentJumble = [...sentence].sort(() => Math.random() - 0.5); // Shuffle array

const wordsContainer = document.getElementById('unjumble-words');
const dropzone = document.getElementById('unjumble-dropzone');

// Initialize Unjumble UI if elements exist on the page
if (wordsContainer) {
  currentJumble.forEach(word => {
    const wordBtn = document.createElement('button');
    // Using the updated UI button styling for consistency
    wordBtn.className = 'px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 font-bold text-slate-700 transition';
    wordBtn.innerText = word;
    wordBtn.onclick = () => moveWord(wordBtn);
    wordsContainer.appendChild(wordBtn);
  });
}

// Move words between the word bank and the dropzone
function moveWord(btn) {
  if (btn.parentElement.id === 'unjumble-words') {
    dropzone.appendChild(btn);
  } else {
    wordsContainer.appendChild(btn);
  }
}

// Check if the current order matches the target sentence
function checkUnjumble() {
  const currentOrder = Array.from(dropzone.children).map(btn => btn.innerText);
  
  if (currentOrder.join(" ") === sentence.join(" ")) {
    dropzone.classList.remove('bg-gray-100', 'bg-red-100');
    dropzone.classList.add('bg-green-100');
    alert("Perfect! You unjumbled the sentence.");
  } else {
    dropzone.classList.add('bg-red-100');
    setTimeout(() => {
      dropzone.classList.remove('bg-red-100');
    }, 1000);
  }
}