   // Quiz questions data (example shown, replace with full 378)
    const quizQuestions = [

{
  question: "Which of the following was the main political system of the Yoruba before 1800?",
  options: ["Gerontocracy", "Theocratic monarchy", "Constitutional monarchy", "Feudal system"],
  answer: "B",
  explanation: "The Yoruba people practiced a theocratic monarchy, combining spiritual and political authority under rulers like the Ooni and Alaafin."
},
{
  question: "The spiritual and political head of the Yoruba people in Ife is known as the—",
  options: ["Ooni", "Alaafin", "Oba", "Olubadan"],
  answer: "A",
  explanation: "The Ooni of Ife is regarded as the supreme spiritual and political head of the Yoruba people."
},
{
  question: "Which of the following was the most prominent Yoruba kingdom before 1800?",
  options: ["Ife", "Oyo", "Ijebu", "Ibadan"],
  answer: "B",
  explanation: "The Oyo Empire was the most powerful Yoruba kingdom before 1800 due to its military strength and political organization."
},
{
  question: "What was the title of the king in the Oyo Empire?",
  options: ["Obi", "Sultan", "Obong", "Alaafin"],
  answer: "D",
  explanation: "The king of the Oyo Empire was called the Alaafin."
},
{
  question: "The Oyo Mesi in Yoruba political structure served as—",
  options: ["Military commanders", "Priests", "Kingmakers and advisers", "Tax collectors"],
  answer: "C",
  explanation: "The Oyo Mesi were kingmakers and advisers who checked the powers of the Alaafin."
},
{
  question: "Which ethnic group is associated with the Nok culture?",
  options: ["Yoruba", "Hausa", "Igbo", "Jukun"],
  answer: "B",
  explanation: "The Nok culture was located in the Middle Belt but is historically linked with Hausa-speaking areas."
},
{
  question: "Nok culture is particularly famous for its—",
  options: ["Bronze masks", "Terracotta sculptures", "Wooden carvings", "Wall paintings"],
  answer: "B",
  explanation: "The Nok culture is most famous for its terracotta sculptures."
},
{
  question: "Which of these is a major Igbo festival that predates colonialism?",
  options: ["New Yam Festival", "Sallah", "Argungu", "Osun Festival"],
  answer: "A",
  explanation: "The New Yam Festival is a traditional Igbo festival marking the beginning of harvest."
},
{
  question: "The traditional political structure before 1800 can best be described as—",
  options: ["Centralized monarchy", "Federal monarchy", "Gerontocracy and acephalous society", "Military dictatorship"],
  answer: "C",
  explanation: "Many Nigerian societies were organized into gerontocracies (rule by elders) or acephalous (headless) societies."
},
{
  question: "The Hausa city-states were known as—",
  options: ["Emirates", "Oyo towns", "Zangoes", "Bakwai"],
  answer: "A",
  explanation: "The Hausa city-states were organized into emirates, especially after the spread of Islam."
},
{
  question: "The Hausa Bakwai are believed to be—",
  options: ["Slave camps", "Ancient cities founded by foreign traders", "The original seven Hausa states", "Islamic shrines"],
  answer: "C",
  explanation: "The Hausa Bakwai refers to the original seven Hausa states."
},
{
  question: "Which of these states was part of the Hausa Bakwai?",
  options: ["Ife", "Katsina", "Calabar", "Aba"],
  answer: "B",
  explanation: "Katsina was one of the original Hausa Bakwai states."
},
{
  question: "The introduction of Islam into the Hausa states was largely through—",
  options: ["Military conquest", "Missionaries", "Trade and scholarship", "Colonization"],
  answer: "C",
  explanation: "Islam spread into Hausa states through trans-Saharan trade and Islamic scholarship."
},
{
  question: "Which minority group is known for its unique bronze art similar to that of Benin and Ife?",
  options: ["Nupe", "Ibibio", "Jukun", "Tiv"],
  answer: "A",
  explanation: "The Nupe people are known for their distinctive bronze artworks."
},
{
  question: "Which of these was an ancient kingdom located in what is now Cross River State?",
  options: ["Nri", "Kamen", "Kwararafa", "Akwa Akpa (Old Calabar)"],
  answer: "D",
  explanation: "Akwa Akpa, or Old Calabar, was an ancient kingdom in present-day Cross River State."
},
{
  question: "Which of the following ancient Nigerian civilizations is most associated with bronze casting?",
  options: ["Nok", "Ife", "Tiv", "Ibadan"],
  answer: "B",
  explanation: "Ife is most associated with bronze and brass casting, producing sophisticated artworks."
},
{
  question: "The title “Oba” is commonly used by rulers in which region of Nigeria?",
  options: ["North", "East", "South-West", "South-South"],
  answer: "C",
  explanation: "The title 'Oba' is common among Yoruba rulers in South-West Nigeria."
},
{
  question: "The Igbo-Ukwu archaeological site is important because it reveals—",
  options: ["Evidence of iron smelting", "Early Islamic influence", "A complex metalworking culture", "Slave trading posts"],
  answer: "C",
  explanation: "Igbo-Ukwu is known for its sophisticated metalworking culture, especially bronze artifacts."
},
{
  question: "The Bini Kingdom is best known for—",
  options: ["Rock paintings", "Large-scale agriculture", "Bronze sculptures and royal court art", "Islamic scholarship"],
  answer: "C",
  explanation: "The Benin Kingdom is famous for its bronze sculptures and royal court artworks."
},
{
  question: "Which of these Nigerian ethnic groups practiced a confederal form of government before 1800?",
  options: ["Yoruba", "Hausa", "Igbo", "Nupe"],
  answer: "C",
  explanation: "The Igbo practiced a confederal and acephalous system of government."
},
{
  question: "Which European country first established formal colonial rule in Nigeria?",
  options: ["Germany", "Portugal", "Britain", "France"],
  answer: "C",
  explanation: "Britain formally established colonial rule in Nigeria."
},
{
  question: "The annexation of Lagos in 1861 was done through which agreement?",
  options: ["Treaty of Egun", "Treaty of Berlin", "Treaty of Lagos", "Treaty of Cession"],
  answer: "D",
  explanation: "The Treaty of Cession of 1861 ceded Lagos to the British Crown."
},
{
  question: "Which organization was responsible for governing Southern Nigeria before formal colonial administration?",
  options: ["British Colonial Company", "Royal Niger Company", "United African Company", "British Trading Council"],
  answer: "B",
  explanation: "The Royal Niger Company administered Southern Nigeria before colonial rule."
},
{
  question: "The Royal Niger Company was headed by:",
  options: ["Lord Lugard", "Sir George Goldie", "Hugh Clifford", "Macpherson"],
  answer: "B",
  explanation: "Sir George Goldie was the founder and head of the Royal Niger Company."
},
{
  question: "The Berlin Conference of 1884–1885 was important because it:",
  options: ["Gave Nigeria independence", "Divided Africa among European powers", "United African states", "Brought missionaries to Nigeria"],
  answer: "B",
  explanation: "The Berlin Conference divided Africa among European powers, legitimizing colonialism."
},
{
  question: "British conquest of Northern Nigeria was completed by:",
  options: ["1890", "1900", "1903", "1914"],
  answer: "C",
  explanation: "The British conquest of Northern Nigeria was completed in 1903 after defeating the Sokoto Caliphate."
},
{
  question: "The amalgamation of the Northern and Southern Protectorates of Nigeria took place in:",
  options: ["1906", "1914", "1922", "1931"],
  answer: "B",
  explanation: "The amalgamation of Northern and Southern Nigeria occurred in 1914."
},
{
  question: "The main reason for the amalgamation of Nigeria in 1914 was to:",
  options: ["Give independence", "Increase British settlers", "Ensure administrative efficiency", "Promote democracy"],
  answer: "C",
  explanation: "The amalgamation aimed at reducing administrative costs and improving efficiency."
},
{
  question: "The person who amalgamated Nigeria in 1914 was:",
  options: ["Hugh Clifford", "Sir George Goldie", "Lord Lugard", "Macpherson"],
  answer: "C",
  explanation: "Lord Lugard was the Governor-General who amalgamated Nigeria in 1914."
},
{
  question: "The first capital of colonial Nigeria was:",
  options: ["Calabar", "Lagos", "Kaduna", "Lokoja"],
  answer: "D",
  explanation: "Lokoja was the first capital of colonial Nigeria under British administration."
},


{
  question: "When did the first military coup in Nigeria take place?",
  options: ["1960", "1963", "1966", "1975"],
  answer: "C",
  explanation: "The first military coup in Nigeria occurred in January 1966, led by young army officers."
},
{
  question: "Who was Nigeria’s first military Head of State?",
  options: ["Yakubu Gowon", "Chukwumeka Ojukwu", "Murtala Mohammed", "Aguiyi Ironsi"],
  answer: "D",
  explanation: "Major General Johnson Aguiyi Ironsi became Nigeria’s first military Head of State in 1966."
},
{
  question: "The 1966 coup was primarily led by which ethnic group?",
  options: ["Yoruba", "Hausa", "Igbo", "Fulani"],
  answer: "C",
  explanation: "The January 1966 coup was led mostly by Igbo military officers."
},
{
  question: "Which of the following is a consequence of military rule in Nigeria?",
  options: ["Frequent elections", "Stable democracy", "Suppression of civil liberties", "Independent judiciary"],
  answer: "C",
  explanation: "Military regimes in Nigeria often suspended constitutions and suppressed civil liberties."
},
{
  question: "Who succeeded General Aguiyi Ironsi after the July 1966 counter-coup?",
  options: ["Olusegun Obasanjo", "Yakubu Gowon", "Murtala Mohammed", "Ibrahim Babangida"],
  answer: "B",
  explanation: "General Yakubu Gowon took power after the July 1966 counter-coup."
},
{
  question: "Which military regime created the most states in Nigeria?",
  options: ["Gen. I. Babangida", "General Abacha", "General Gowon", "General Murtala Mohammed"],
  answer: "C",
  explanation: "General Yakubu Gowon's regime created the largest number of states, particularly during the Nigerian Civil War period."
},
{
  question: "One major reason for military intervention in Nigerian politics was:",
  options: ["Academic excellence", "Political instability and corruption", "Religious tolerance", "Economic recession"],
  answer: "B",
  explanation: "Political instability and corruption were major reasons cited for military takeovers in Nigeria."
},
{
  question: "What year did the military hand over power to a civilian government in Nigeria for the second time?",
  options: ["1974", "1979", "1983", "1993"],
  answer: "B",
  explanation: "The military handed over to Shehu Shagari’s civilian government in 1979, marking the Second Republic."
},
{
  question: "Which of the following is not a feature of military government?",
  options: ["Decrees and edicts", "Rule by force", "Separation of powers", "Suspension of the constitution"],
  answer: "C",
  explanation: "Military regimes typically do not uphold separation of powers as seen in civilian democracies."
},
{
  question: "Military rule in Nigeria encouraged:",
  options: ["Multiparty democracy", "Federal character principle", "Centralized decision-making", "Transparency and accountability"],
  answer: "C",
  explanation: "Military governments centralized power and decision-making."
},
{
  question: "Which of the following are causes of the Nigerian Civil War?",
  options: ["Religious crisis", "Secession", "Biafra", "Foreign invasion"],
  answer: "B",
  explanation: "The Nigerian Civil War (1967–1970) was caused primarily by the attempt of Biafra to secede."
},
{
  question: "Who was the leader of Biafra during the Nigerian Civil War?",
  options: ["Nnamdi Azikiwe", "Emeka Anyaoku", "Odumegwu Ojukwu", "Chinua Achebe"],
  answer: "C",
  explanation: "Colonel Odumegwu Ojukwu was the leader of Biafra during the Nigerian Civil War."
},
{
  question: "When did the Nigerian Civil War begin?",
  options: ["May 1966", "July 1966", "January 1967", "July 1967"],
  answer: "D",
  explanation: "The Nigerian Civil War began in July 1967 after Biafra declared independence."
},
{
  question: "Which slogan was used by the Nigerian government during the civil war?",
  options: ["One Nigeria", "Unity is Strength", "To keep Nigeria one is a task that must be done", "Federalism forever"],
  answer: "C",
  explanation: "The slogan 'To keep Nigeria one is a task that must be done' was used during the war."
},
{
  question: "Which country supported Biafra during the civil war?",
  options: ["Ghana", "United States", "France", "Soviet Union"],
  answer: "C",
  explanation: "France was one of the countries that supported Biafra diplomatically and with aid."
},
{
  question: "One major humanitarian crisis during the Nigerian Civil War was:",
  options: ["Flood disaster", "Famine in Biafra", "Earthquake in the East", "Oil spillage"],
  answer: "B",
  explanation: "The blockade of Biafra led to famine, one of the worst humanitarian crises of the war."
},
{
  question: "The Nigerian Civil War ended in:",
  options: ["1970", "1972", "1969", "1971"],
  answer: "A",
  explanation: "The war ended in January 1970 after the surrender of Biafran forces."
},
{
  question: "The policy of 'No victor, no vanquished' was declared by:",
  options: ["Olusegun Obasanjo", "Yakubu Gowon", "Murtala Mohammed", "Aguiyi Ironsi"],
  answer: "B",
  explanation: "General Yakubu Gowon declared the policy of 'No victor, no vanquished' after the war."
},
{
  question: "The immediate cause of the civil war was:",
  options: ["Creation of more states", "Refusal to implement Aburi Accord", "Religious violence", "Boundary disputes"],
  answer: "B",
  explanation: "The refusal to implement the Aburi Accord of 1967 was the immediate trigger of the civil war."
},
{
  question: "A major impact of the Nigerian Civil War was:",
  options: ["Total disintegration of Nigeria", "End of federalism", "Massive loss of lives and property", "Emergence of new political parties"],
  answer: "C",
  explanation: "The war caused massive loss of lives and property, though Nigeria remained united."
},
{
  question: "What is the primary feature of indigenous trade in Nigeria?",
  options: ["Dependence on payment systems", "Use of sophisticated retail chains", "Use of traditional market days and barter system", "Reliance on technology"],
  answer: "C",
  explanation: "Indigenous trade in Nigeria was based on traditional markets and barter system before money became widespread."
},
{
  question: "Which of the following best describes a traditional market in Nigeria?",
  options: ["Only operates during weekends", "Operates using modern supermarkets", "Is based on community gathering and periodic market days", "Requires international trade licenses"],
  answer: "C",
  explanation: "Traditional markets in Nigeria were based on periodic community gatherings."
},
{
  question: "In the pre-colonial Nigerian market system, trade was mainly conducted through:",
  options: ["E-commerce platforms", "Cryptocurrency", "Barter and later cowries", "Credit cards"],
  answer: "C",
  explanation: "Trade was conducted through barter and later cowries as a medium of exchange."
},
{
  question: "Which of these is a common indigenous unit of trade in traditional Nigerian markets?",
  options: ["Dollar", "Cartons", "Calabashes and baskets", "Pounds"],
  answer: "C",
  explanation: "Indigenous units of trade included calabashes, baskets, and other local measures."
},
{
  question: "One key role of traditional Nigerian markets is to:",
  options: ["Promote foreign investments", "Serve as centers of cultural and social exchange", "Ban rural development", "Enforce tax payments"],
  answer: "B",
  explanation: "Traditional markets were not only economic centers but also cultural and social meeting points."
},
{
  question: "Which ethnic group in Nigeria is especially known for its indigenous apprenticeship system in trade?",
  options: ["Fulani", "Yoruba", "Igbo", "Tiv"],
  answer: "C",
  explanation: "The Igbo are renowned for their indigenous apprenticeship system (Igba-boi)."
},
{
  question: "The Igbo apprenticeship system is best described as:",
  options: ["Formal university education system", "System where youths are trained and later settled to start their own business", "Government employment scheme", "Pension plan"],
  answer: "B",
  explanation: "The Igbo apprenticeship system trains youths under masters before they are settled to start their own businesses."
},
{
  question: "What is the key benefit of the indigenous apprenticeship system?",
  options: ["It reduces family ties", "It promotes idleness", "It builds entrepreneurship and self-reliance", "It discourages business growth"],
  answer: "C",
  explanation: "The system builds entrepreneurship, skills, and self-reliance among the apprentices."
},
{
  question: "In the indigenous apprenticeship system, 'settlement' means:",
  options: ["Sending the apprentice to jail", "Terminating the apprenticeship with punishment", "Giving the apprentice money or goods to start a business", "Returning the apprentice to the village"],
  answer: "C",
  explanation: "Settlement refers to giving the apprentice money, goods, or shops to start their own business."
},
{
  question: "Which of the following is NOT a characteristic of the indigenous apprenticeship system?",
  options: ["Knowledge transfer", "Skills acquisition", "Free distribution of goods", "Mentorship"],
  answer: "C",
  explanation: "The system involves mentorship, skill transfer, and eventual settlement, not free distribution of goods."
},
{
  question: "Skill acquisition is important in trade because it:",
  options: ["Reduces productivity", "Promotes laziness", "Equips individuals to be self-reliant", "Deters economic development"],
  answer: "C",
  explanation: "Skill acquisition equips individuals to be productive and self-reliant."
},



{
  question: "When did the first military coup in Nigeria take place?",
  options: ["1960", "1963", "1966", "1975"],
  answer: "C",
  explanation: "The first military coup in Nigeria occurred in January 1966, led by young army officers."
},
{
  question: "Who was Nigeria’s first military Head of State?",
  options: ["Yakubu Gowon", "Chukwumeka Ojukwu", "Murtala Mohammed", "Aguiyi Ironsi"],
  answer: "D",
  explanation: "Major General Johnson Aguiyi Ironsi became Nigeria’s first military Head of State in 1966."
},
{
  question: "The 1966 coup was primarily led by which ethnic group?",
  options: ["Yoruba", "Hausa", "Igbo", "Fulani"],
  answer: "C",
  explanation: "The January 1966 coup was led mostly by Igbo military officers."
},
{
  question: "Which of the following is a consequence of military rule in Nigeria?",
  options: ["Frequent elections", "Stable democracy", "Suppression of civil liberties", "Independent judiciary"],
  answer: "C",
  explanation: "Military regimes in Nigeria often suspended constitutions and suppressed civil liberties."
},
{
  question: "Who succeeded General Aguiyi Ironsi after the July 1966 counter-coup?",
  options: ["Olusegun Obasanjo", "Yakubu Gowon", "Murtala Mohammed", "Ibrahim Babangida"],
  answer: "B",
  explanation: "General Yakubu Gowon took power after the July 1966 counter-coup."
},
{
  question: "Which military regime created the most states in Nigeria?",
  options: ["Gen. I. Babangida", "General Abacha", "General Gowon", "General Murtala Mohammed"],
  answer: "C",
  explanation: "General Yakubu Gowon's regime created the largest number of states, particularly during the Nigerian Civil War period."
},
{
  question: "One major reason for military intervention in Nigerian politics was:",
  options: ["Academic excellence", "Political instability and corruption", "Religious tolerance", "Economic recession"],
  answer: "B",
  explanation: "Political instability and corruption were major reasons cited for military takeovers in Nigeria."
},
{
  question: "What year did the military hand over power to a civilian government in Nigeria for the second time?",
  options: ["1974", "1979", "1983", "1993"],
  answer: "B",
  explanation: "The military handed over to Shehu Shagari’s civilian government in 1979, marking the Second Republic."
},
{
  question: "Which of the following is not a feature of military government?",
  options: ["Decrees and edicts", "Rule by force", "Separation of powers", "Suspension of the constitution"],
  answer: "C",
  explanation: "Military regimes typically do not uphold separation of powers as seen in civilian democracies."
},
{
  question: "Military rule in Nigeria encouraged:",
  options: ["Multiparty democracy", "Federal character principle", "Centralized decision-making", "Transparency and accountability"],
  answer: "C",
  explanation: "Military governments centralized power and decision-making."
},
{
  question: "Which of the following are causes of the Nigerian Civil War?",
  options: ["Religious crisis", "Secession", "Biafra", "Foreign invasion"],
  answer: "B",
  explanation: "The Nigerian Civil War (1967–1970) was caused primarily by the attempt of Biafra to secede."
},
{
  question: "Who was the leader of Biafra during the Nigerian Civil War?",
  options: ["Nnamdi Azikiwe", "Emeka Anyaoku", "Odumegwu Ojukwu", "Chinua Achebe"],
  answer: "C",
  explanation: "Colonel Odumegwu Ojukwu was the leader of Biafra during the Nigerian Civil War."
},
{
  question: "When did the Nigerian Civil War begin?",
  options: ["May 1966", "July 1966", "January 1967", "July 1967"],
  answer: "D",
  explanation: "The Nigerian Civil War began in July 1967 after Biafra declared independence."
},
{
  question: "Which slogan was used by the Nigerian government during the civil war?",
  options: ["One Nigeria", "Unity is Strength", "To keep Nigeria one is a task that must be done", "Federalism forever"],
  answer: "C",
  explanation: "The slogan 'To keep Nigeria one is a task that must be done' was used during the war."
},
{
  question: "Which country supported Biafra during the civil war?",
  options: ["Ghana", "United States", "France", "Soviet Union"],
  answer: "C",
  explanation: "France was one of the countries that supported Biafra diplomatically and with aid."
},
{
  question: "One major humanitarian crisis during the Nigerian Civil War was:",
  options: ["Flood disaster", "Famine in Biafra", "Earthquake in the East", "Oil spillage"],
  answer: "B",
  explanation: "The blockade of Biafra led to famine, one of the worst humanitarian crises of the war."
},
{
  question: "The Nigerian Civil War ended in:",
  options: ["1970", "1972", "1969", "1971"],
  answer: "A",
  explanation: "The war ended in January 1970 after the surrender of Biafran forces."
},
{
  question: "The policy of 'No victor, no vanquished' was declared by:",
  options: ["Olusegun Obasanjo", "Yakubu Gowon", "Murtala Mohammed", "Aguiyi Ironsi"],
  answer: "B",
  explanation: "General Yakubu Gowon declared the policy of 'No victor, no vanquished' after the war."
},
{
  question: "The immediate cause of the civil war was:",
  options: ["Creation of more states", "Refusal to implement Aburi Accord", "Religious violence", "Boundary disputes"],
  answer: "B",
  explanation: "The refusal to implement the Aburi Accord of 1967 was the immediate trigger of the civil war."
},
{
  question: "A major impact of the Nigerian Civil War was:",
  options: ["Total disintegration of Nigeria", "End of federalism", "Massive loss of lives and property", "Emergence of new political parties"],
  answer: "C",
  explanation: "The war caused massive loss of lives and property, though Nigeria remained united."
},
{
  question: "What is the primary feature of indigenous trade in Nigeria?",
  options: ["Dependence on payment systems", "Use of sophisticated retail chains", "Use of traditional market days and barter system", "Reliance on technology"],
  answer: "C",
  explanation: "Indigenous trade in Nigeria was based on traditional markets and barter system before money became widespread."
},
{
  question: "Which of the following best describes a traditional market in Nigeria?",
  options: ["Only operates during weekends", "Operates using modern supermarkets", "Is based on community gathering and periodic market days", "Requires international trade licenses"],
  answer: "C",
  explanation: "Traditional markets in Nigeria were based on periodic community gatherings."
},
{
  question: "In the pre-colonial Nigerian market system, trade was mainly conducted through:",
  options: ["E-commerce platforms", "Cryptocurrency", "Barter and later cowries", "Credit cards"],
  answer: "C",
  explanation: "Trade was conducted through barter and later cowries as a medium of exchange."
},
{
  question: "Which of these is a common indigenous unit of trade in traditional Nigerian markets?",
  options: ["Dollar", "Cartons", "Calabashes and baskets", "Pounds"],
  answer: "C",
  explanation: "Indigenous units of trade included calabashes, baskets, and other local measures."
},
{
  question: "One key role of traditional Nigerian markets is to:",
  options: ["Promote foreign investments", "Serve as centers of cultural and social exchange", "Ban rural development", "Enforce tax payments"],
  answer: "B",
  explanation: "Traditional markets were not only economic centers but also cultural and social meeting points."
},
{
  question: "Which ethnic group in Nigeria is especially known for its indigenous apprenticeship system in trade?",
  options: ["Fulani", "Yoruba", "Igbo", "Tiv"],
  answer: "C",
  explanation: "The Igbo are renowned for their indigenous apprenticeship system (Igba-boi)."
},
{
  question: "The Igbo apprenticeship system is best described as:",
  options: ["Formal university education system", "System where youths are trained and later settled to start their own business", "Government employment scheme", "Pension plan"],
  answer: "B",
  explanation: "The Igbo apprenticeship system trains youths under masters before they are settled to start their own businesses."
},
{
  question: "What is the key benefit of the indigenous apprenticeship system?",
  options: ["It reduces family ties", "It promotes idleness", "It builds entrepreneurship and self-reliance", "It discourages business growth"],
  answer: "C",
  explanation: "The system builds entrepreneurship, skills, and self-reliance among the apprentices."
},
{
  question: "In the indigenous apprenticeship system, 'settlement' means:",
  options: ["Sending the apprentice to jail", "Terminating the apprenticeship with punishment", "Giving the apprentice money or goods to start a business", "Returning the apprentice to the village"],
  answer: "C",
  explanation: "Settlement refers to giving the apprentice money, goods, or shops to start their own business."
},
{
  question: "Which of the following is NOT a characteristic of the indigenous apprenticeship system?",
  options: ["Knowledge transfer", "Skills acquisition", "Free distribution of goods", "Mentorship"],
  answer: "C",
  explanation: "The system involves mentorship, skill transfer, and eventual settlement, not free distribution of goods."
},
{
  question: "Skill acquisition is important in trade because it:",
  options: ["Reduces productivity", "Promotes laziness", "Equips individuals to be self-reliant", "Deters economic development"],
  answer: "C",
  explanation: "Skill acquisition equips individuals to be productive and self-reliant."
}


        // ... add all your questions here
    ];

    // Initialize variables
    let currentQuestion = 0;
    let userAnswers = Array(quizQuestions.length).fill(null);
    let score = 0;
    let isLearningMode = false;
    let quizSubmitted = false;
    let darkMode = false;

    // DOM Elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionNumbersContainer = document.getElementById('question-numbers');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const currentElement = document.getElementById('current');
    const totalElement = document.getElementById('total');
    const scoreValue = document.getElementById('score-value');
    const maxScore = document.getElementById('max-score');
    const resultsContainer = document.getElementById('results-container');
    const finalScore = document.getElementById('final-score');
    const totalQuestions = document.getElementById('total-questions');
    const attempted = document.getElementById('attempted');
    const correctCount = document.getElementById('correct-count');
    const incorrectCount = document.getElementById('incorrect-count');
    const reviewQuestions = document.getElementById('review-questions');
    const scoreCircle = document.getElementById('score-circle');
    const feedback = document.getElementById('feedback');
    const clearBtn = document.getElementById('clear-btn');
    const resetBtn = document.getElementById('reset-btn');
    const quizModeBtn = document.getElementById('quiz-mode');
    const learningModeBtn = document.getElementById('learning-mode');
    const themeToggle = document.getElementById('theme-toggle');
    const answeredCountEl = document.getElementById('answered-count');
    const totalAnsweredEl = document.getElementById('total-answered');
    const progressBar = document.getElementById('progress-bar');
    const progressPercent = document.getElementById('progress-percent');
    const answeredSummary = document.getElementById('answered-summary');

    // Initialize quiz
    function initQuiz() {
        const savedProgress = localStorage.getItem('quizProgress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            currentQuestion = progress.currentQuestion || 0;
            userAnswers = progress.userAnswers || Array(quizQuestions.length).fill(null);
            score = progress.score || 0;
            isLearningMode = progress.isLearningMode || false;
            quizSubmitted = progress.quizSubmitted || false;
            darkMode = progress.darkMode || false;

            if (darkMode) {
                document.body.classList.add('dark-mode');
                themeToggle.textContent = '☀️';
            }
            if (isLearningMode) {
                quizModeBtn.classList.remove('active');
                learningModeBtn.classList.add('active');
            }
        }

        totalElement.textContent = quizQuestions.length;
        maxScore.textContent = quizQuestions.length;
        totalQuestions.textContent = quizQuestions.length;
        totalAnsweredEl.textContent = quizQuestions.length;

        generateQuestionNumbers();
        loadQuestion(currentQuestion);
        updateScoreDisplay();
        updateProgress();

        if (quizSubmitted) showResults();
    }

    function generateQuestionNumbers() {
        questionNumbersContainer.innerHTML = '';
        quizQuestions.forEach((_, index) => {
            const numberElement = document.createElement('div');
            numberElement.className = 'question-number';
            numberElement.textContent = index + 1;
            numberElement.addEventListener('click', () => {
                if (!quizSubmitted) {
                    currentQuestion = index;
                    loadQuestion(currentQuestion);
                }
            });
            if (userAnswers[index] !== null) numberElement.classList.add('answered');
            if (index === currentQuestion) numberElement.classList.add('current');
            questionNumbersContainer.appendChild(numberElement);
        });
    }

    function loadQuestion(index) {
        if (index < 0 || index >= quizQuestions.length) return;
        currentQuestion = index;
        currentElement.textContent = index + 1;
        const question = quizQuestions[index];
        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';

        question.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = `${String.fromCharCode(65 + optionIndex)}) ${option}`;
            optionElement.dataset.value = String.fromCharCode(65 + optionIndex);

            if (userAnswers[index] === optionElement.dataset.value) {
                optionElement.classList.add('selected');
            }

            optionElement.addEventListener('click', () => {
                if (quizSubmitted) return;
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                optionElement.classList.add('selected');
                userAnswers[index] = optionElement.dataset.value;
                updateQuestionNumbers();
                updateProgress();
                if (isLearningMode) checkAnswer(index, optionElement.dataset.value);
                saveProgress();
            });

            optionsContainer.appendChild(optionElement);
        });

        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === quizQuestions.length - 1;
        updateQuestionNumbers();
        feedback.style.display = 'none';
    }

    function updateQuestionNumbers() {
        const questionNumbers = document.querySelectorAll('.question-number');
        questionNumbers.forEach((number, index) => {
            number.classList.remove('current', 'answered');
            if (index === currentQuestion) number.classList.add('current');
            if (userAnswers[index] !== null) number.classList.add('answered');
        });
    }

    function checkAnswer(questionIndex, selectedOption) {
        const question = quizQuestions[questionIndex];
        const isCorrect = selectedOption === question.answer;
        feedback.textContent = isCorrect
            ? `Correct! ${question.explanation}`
            : `Incorrect. The correct answer is ${question.answer}) ${question.options[question.answer.charCodeAt(0) - 65]}. ${question.explanation}`;
        feedback.className = isCorrect ? 'feedback correct' : 'feedback incorrect';
        feedback.style.display = 'block';
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('correct', 'incorrect');
            if (option.dataset.value === question.answer) option.classList.add('correct');
            else if (option.dataset.value === selectedOption && !isCorrect) option.classList.add('incorrect');
        });
        if (isCorrect && userAnswers[questionIndex] !== question.answer) {
            score++;
            updateScoreDisplay();
        }
        saveProgress();
    }

    function updateScoreDisplay() { scoreValue.textContent = score; }

    function updateProgress() {
        const answered = userAnswers.filter(a => a !== null).length;
        answeredCountEl.textContent = answered;
        answeredSummary.textContent = answered;
        const percent = Math.round((answered / quizQuestions.length) * 100);
        progressBar.style.width = percent + '%';
        progressPercent.textContent = percent + '%';
    }

    nextBtn.addEventListener('click', () => {
        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            loadQuestion(currentQuestion);
        }
    });
    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            loadQuestion(currentQuestion);
        }
    });

    submitBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to submit the quiz?")) {
            calculateScore();
            showResults();
            quizSubmitted = true;
            saveProgress();
        }
    });

    function calculateScore() {
        score = 0;
        userAnswers.forEach((answer, i) => {
            if (answer === quizQuestions[i].answer) score++;
        });
    }

    function showResults() {
        document.querySelector('.main-content').style.display = 'none';
        document.querySelector('.quiz-info').style.display = 'none';
        document.querySelector('.mode-toggle').style.display = 'none';
        resultsContainer.style.display = 'block';

        const attemptedCount = userAnswers.filter(a => a !== null).length;
        const correctAnswers = userAnswers.filter((a, i) => a === quizQuestions[i].answer).length;
        const incorrectAnswers = attemptedCount - correctAnswers;

        finalScore.textContent = score;
        attempted.textContent = attemptedCount;
        correctCount.textContent = correctAnswers;
        incorrectCount.textContent = incorrectAnswers;

        const percentage = (score / quizQuestions.length) * 100;
        if (percentage >= 70) scoreCircle.className = 'score-circle score-high';
        else if (percentage >= 50) scoreCircle.className = 'score-circle score-medium';
        else scoreCircle.className = 'score-circle score-low';

        reviewQuestions.innerHTML = '';
        quizQuestions.forEach((q, i) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            const questionElement = document.createElement('div');
            questionElement.className = 'review-question';
            questionElement.textContent = `${i + 1}. ${q.question}`;
            reviewItem.appendChild(questionElement);
            const userAnswer = userAnswers[i];
            const isCorrect = userAnswer === q.answer;
            const answerElement = document.createElement('div');
            if (userAnswer !== null) {
                answerElement.className = isCorrect ? 'review-answer review-correct' : 'review-answer review-incorrect';
                answerElement.innerHTML = `
                    <strong>Your answer:</strong> ${userAnswer}) ${q.options[userAnswer.charCodeAt(0) - 65]}
                    ${!isCorrect ? `<br><strong>Correct answer:</strong> ${q.answer}) ${q.options[q.answer.charCodeAt(0) - 65]}` : ''}
                    <br><strong>Explanation:</strong> ${q.explanation}`;
            } else {
                answerElement.className = 'review-answer';
                answerElement.innerHTML = `
                    <strong>Not attempted</strong>
                    <br><strong>Correct answer:</strong> ${q.answer}) ${q.options[q.answer.charCodeAt(0) - 65]}
                    <br><strong>Explanation:</strong> ${q.explanation}`;
            }
            reviewItem.appendChild(answerElement);
            reviewQuestions.appendChild(reviewItem);
        });
    }

    // Clear previous attempts
    clearBtn.addEventListener('click', () => {
        if (confirm("Clear all previous attempts? This cannot be undone.")) {
            localStorage.removeItem('quizProgress');
            newAttempt();
        }
    });

    // New attempt button
    resetBtn.addEventListener('click', () => {
        if (confirm("Start a new attempt? Your current answers will be lost.")) {
            newAttempt();
        }
    });

    function newAttempt() {
        currentQuestion = 0;
        userAnswers = Array(quizQuestions.length).fill(null);
        score = 0;
        quizSubmitted = false;
        resultsContainer.style.display = 'none';
        document.querySelector('.main-content').style.display = 'flex';
        document.querySelector('.quiz-info').style.display = 'flex';
        document.querySelector('.mode-toggle').style.display = 'flex';
        loadQuestion(currentQuestion);
        updateScoreDisplay();
        updateProgress();
        saveProgress();
    }

    quizModeBtn.addEventListener('click', () => {
        if (isLearningMode) {
            isLearningMode = false;
            quizModeBtn.classList.add('active');
            learningModeBtn.classList.remove('active');
            saveProgress();
        }
    });
    learningModeBtn.addEventListener('click', () => {
        if (!isLearningMode) {
            isLearningMode = true;
            learningModeBtn.classList.add('active');
            quizModeBtn.classList.remove('active');
            saveProgress();
            if (userAnswers[currentQuestion] !== null) {
                checkAnswer(currentQuestion, userAnswers[currentQuestion]);
            }
        }
    });

    themeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.textContent = '🌙';
        }
        saveProgress();
    });

    function saveProgress() {
        const progress = { currentQuestion, userAnswers, score, isLearningMode, quizSubmitted, darkMode };
        localStorage.setItem('quizProgress', JSON.stringify(progress));
    }

    window.addEventListener('load', initQuiz);

    const toggleQuestions = document.getElementById("toggle-questions");
const questionGrid = document.getElementById("question-numbers");

toggleQuestions.addEventListener("click", () => {
  questionGrid.classList.toggle("collapsed");
  toggleQuestions.textContent = questionGrid.classList.contains("collapsed")
    ? "Questions ▸"
    : "Questions ▾";
});

