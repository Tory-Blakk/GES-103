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
},

{
  question: "Which of the following is not a principle of social justice?",
  options: ["Equity", "Human rights", "Discrimination", "Participation"],
  answer: "C",
  explanation: "Discrimination is against the principles of social justice, which emphasize equity, human rights, and participation."
},
{
  question: "A key indicator of national development is:",
  options: ["Increased population", "High illiteracy rate", "Technological advancement", "Political unrest"],
  answer: "C",
  explanation: "Technological advancement drives innovation, productivity, and improved living standards, making it a key indicator of national development."
},
{
  question: "Which sector plays the most critical role in achieving national development?",
  options: ["The entertainment sector", "The informal sector", "The education sector", "The criminal sector"],
  answer: "C",
  explanation: "The education sector develops human capital and provides the knowledge base required for sustainable national development."
},
{
  question: "Social justice ensures that every individual:",
  options: ["Gets rich", "Is treated fairly regardless of background", "Rules the nation", "Gains immunity from the law"],
  answer: "B",
  explanation: "Social justice guarantees fairness and equality, ensuring all individuals are treated without bias or discrimination."
},
{
  question: "Which of these promotes national development through fairness in resource allocation?",
  options: ["Nepotism", "Meritocracy", "Ethnocentrism", "Favoritism"],
  answer: "B",
  explanation: "Meritocracy promotes fairness by allocating opportunities and resources based on ability and competence rather than favoritism or ethnicity."
},
{
  question: "What is the best definition of law?",
  options: ["Rules made by individuals", "The customs of a community", "A set of rules enforceable by courts", "Religious beliefs of a people"],
  answer: "C",
  explanation: "Law is a set of rules created and enforced by legitimate authority, especially the courts, to regulate behavior in society."
},
{
  question: "Which of the following is a characteristic of law?",
  options: ["Optional compliance", "Arbitrary judgment", "Enforceability", "Religious origin"],
  answer: "C",
  explanation: "A key characteristic of law is enforceability, meaning it can be applied and upheld by the state through institutions like the judiciary."
},
{
  question: "Public law governs the relationship between:",
  options: ["Private individuals only", "Citizens and their families", "Individuals and the state", "Political parties"],
  answer: "C",
  explanation: "Public law regulates the relationship between individuals and the state, including constitutional and administrative law."
},
{
  question: "An example of criminal law is:",
  options: ["Divorce proceedings", "Will and inheritance", "Theft and assault", "Property dispute"],
  answer: "C",
  explanation: "Criminal law deals with acts considered harmful to society, such as theft and assault, which are punishable by law."
},
{
  question: "Civil law deals with:",
  options: ["Military operations", "Crimes and punishments", "Disputes between individuals", "Government elections"],
  answer: "C",
  explanation: "Civil law regulates private disputes between individuals or organizations, such as contracts, property, and family issues."
},

  {
    question: "Which of the following best defines self-reliance?",
    options: ["Ability to depend on foreign goods", "Ability to live without producing anything", "Ability to meet one's needs through personal effort and local resources", "Dependence on government aid"],
    answer: "C",
    explanation: "Self-reliance means using one’s own skills, effort, and local resources to meet needs without over-dependence on external help."
  },
  {
    question: "An example of a self-reliant activity in Nigeria is:",
    options: ["Importing all food items", "Learning tailoring and opening a fashion shop", "Depending on monthly allowance", "Waiting for foreign investors"],
    answer: "B",
    explanation: "Learning a skill like tailoring and starting a business is a self-reliant activity that promotes independence."
  },
  {
    question: "Which sector mostly benefits from indigenous skill acquisition programs?",
    options: ["Oil and gas", "Fashion and crafts", "International banking", "Importation services"],
    answer: "B",
    explanation: "Skill acquisition programs often focus on fashion, crafts, and trades that encourage local enterprise."
  },
  {
    question: "The relationship between trade and self-reliance is that trade:",
    options: ["Makes people dependent on others", "Encourages waste", "Provides a platform for people to exchange goods and services for livelihood", "Weakens local production"],
    answer: "C",
    explanation: "Trade supports self-reliance by allowing people to exchange goods and services to meet their needs."
  },
  {
    question: "The use of local materials and human resources for development defines:",
    options: ["Importation", "Indigenous production", "Globalization", "Digital marketing"],
    answer: "B",
    explanation: "Indigenous production involves using local resources and labor to create goods and services."
  },
  {
    question: "One way to promote indigenous trade is to:",
    options: ["Rely only on imported goods", "Devalue the local currency", "Support local producers and craftspeople", "Ban local markets"],
    answer: "C",
    explanation: "Supporting local producers strengthens indigenous trade and promotes economic self-sufficiency."
  },
  {
    question: "Which of the following discourages self-reliance in a society?",
    options: ["Entrepreneurship education", "High dependence on imported goods", "Vocational training", "Local content development"],
    answer: "B",
    explanation: "Dependence on imported goods weakens local industries and reduces self-reliance."
  },
  {
    question: "Vocational and technical education promotes self-reliance by:",
    options: ["Making students dependent on others", "Providing practical skills for employment or business", "Focusing only on theory", "Discouraging creativity"],
    answer: "B",
    explanation: "Vocational education provides practical skills that enable individuals to become self-employed or employable."
  },
  {
    question: "Igba Boi also called Imu Ahia is a unique indigenous entrepreneurship model of which tribe in Nigeria?",
    options: ["Igbo", "Abakaliki Imu Ahia", "Anambra Igba Boi", "Yoruba"],
    answer: "A",
    explanation: "Igba Boi, also known as Imu Ahia, is an indigenous apprenticeship system practiced by the Igbo people of Nigeria."
  },
  {
    question: "What does social justice primarily aim to promote in a society?",
    options: ["Personal wealth", "Equality and fairness", "Political rivalry", "Cultural dominance"],
    answer: "B",
    explanation: "Social justice focuses on fairness, equality, and protection of rights for all members of society."
  },
  {
    question: "Which of the following best describes social justice?",
    options: ["The enforcement of religious law", "Equal distribution of wealth and opportunities", "Political manipulation of resources", "Suppression of minority voices"],
    answer: "B",
    explanation: "Social justice ensures fair distribution of resources and opportunities to promote inclusivity."
  },
  {
    question: "One major objective of national development is:",
    options: ["Economic monopoly", "Social discrimination", "Improved standard of living", "Tribal favoritism"],
    answer: "C",
    explanation: "National development aims at improving the standard of living through economic growth, social progress, and justice."
  },
  {
    question: "Social justice contributes to national development by:",
    options: ["Dividing society by class", "Encouraging inequality", "Promoting unity and stability", "Limiting civil rights"],
    answer: "C",
    explanation: "By ensuring fairness and inclusivity, social justice fosters peace, unity, and national development."
  },
  {
    question: "Which institution is responsible for ensuring social justice in Nigeria?",
    options: ["Political parties", "The judiciary", "The press", "Multinational companies"],
    answer: "B",
    explanation: "The judiciary ensures social justice by interpreting laws fairly and protecting citizens’ rights."
  },
  {
    question: "Which of the following is not a principle of social justice?",
    options: ["Equity", "Human rights", "Discrimination", "Participation"],
    answer: "C",
    explanation: "Discrimination goes against the principles of social justice, which promote equity, rights, and fairness."
  },
  {
    question: "A key indicator of national development is:",
    options: ["Increased population", "High illiteracy rate", "Technological advancement", "Political unrest"],
    answer: "C",
    explanation: "Technological advancement signals progress and development in a nation."
  },
  {
    question: "Which sector plays the most critical role in achieving national development?",
    options: ["The entertainment sector", "The informal sector", "The education sector", "The criminal sector"],
    answer: "C",
    explanation: "Education is the foundation for human capital development, which drives national growth."
  },
  {
    question: "Social justice ensures that every individual:",
    options: ["Gets rich", "Is treated fairly regardless of background", "Rules the nation", "Gains immunity from the law"],
    answer: "B",
    explanation: "The principle of social justice guarantees fair treatment for all people regardless of social or economic status."
  },
  {
    question: "Which of these promotes national development through fairness in resource allocation?",
    options: ["Nepotism", "Meritocracy", "Ethnocentrism", "Favoritism"],
    answer: "B",
    explanation: "Meritocracy ensures fair distribution of opportunities and resources based on ability, not bias."
  },
  {
    question: "What is the best definition of law?",
    options: ["Rules made by individuals", "The customs of a community", "A set of rules enforceable by courts", "Religious beliefs of a people"],
    answer: "C",
    explanation: "Law is defined as rules made by legitimate authority and enforceable by courts to regulate behavior."
  },
  {
    question: "Which of the following is a characteristic of law?",
    options: ["Optional compliance", "Arbitrary judgment", "Enforceability", "Religious origin"],
    answer: "C",
    explanation: "The enforceability of law distinguishes it from ordinary rules or customs."
  },
  {
    question: "Public law governs the relationship between:",
    options: ["Private individuals only", "Citizens and their families", "Individuals and the state", "Political parties"],
    answer: "C",
    explanation: "Public law regulates how individuals relate with the state and its institutions."
  },
  {
    question: "An example of criminal law is:",
    options: ["Divorce proceedings", "Will and inheritance", "Theft and assault", "Property dispute"],
    answer: "C",
    explanation: "Theft and assault are crimes punishable under criminal law."
  },
  {
    question: "Civil law deals with:",
    options: ["Military operations", "Crimes and punishments", "Disputes between individuals", "Government elections"],
    answer: "C",
    explanation: "Civil law covers private disputes between individuals such as contracts, family matters, and property issues."
  },
  {
    question: "The law that deals with the organization of government and its functions is:",
    options: ["Customary law", "Constitutional law", "Tort law", "Criminal law"],
    answer: "B",
    explanation: "Constitutional law organizes the structure and operation of government institutions."
  },
  {
    question: "Customary law is derived from:",
    options: ["The constitution", "The president", "Local traditions and customs", "International treaties"],
    answer: "C",
    explanation: "Customary law originates from the traditions and customs of local communities."
  },
  {
    question: "Which of the following is a source of Nigerian law?",
    options: ["The media", "Public opinion", "Judicial precedent", "Religious belief alone"],
    answer: "C",
    explanation: "Judicial precedent, or case law, is a recognized source of Nigerian law."
  },
  {
    question: "Law can be classified into how many broad categories?",
    options: ["One", "Two", "Three", "Five"],
    answer: "B",
    explanation: "Law is broadly classified into two categories: public law and private law."
  },
  {
    question: "The primary aim of law in any society is to:",
    options: ["Promote dictatorship", "Maintain order and justice", "Encourage disobedience", "Empower criminals"],
    answer: "B",
    explanation: "Law maintains peace, order, and justice in society."
  },
  {
    question: "Which arm of government is responsible for interpreting the law?",
    options: ["Executive", "Legislature", "Judiciary", "Police"],
    answer: "C",
    explanation: "The judiciary interprets the law and ensures justice is served."
  },
  {
    question: "The fundamental human rights of citizens are enshrined in the:",
    options: ["Criminal Code", "Constitution", "National Assembly Rules", "Penal Code"],
    answer: "B",
    explanation: "The Nigerian Constitution enshrines and protects fundamental human rights."
  },
  {
    question: "The highest court in Nigeria is the:",
    options: ["Federal High Court", "Court of Appeal", "Supreme Court", "National Industrial Court"],
    answer: "C",
    explanation: "The Supreme Court is the apex court and final authority on legal matters in Nigeria."
  },
  {
    question: "The right to fair hearing is an example of:",
    options: ["Political right", "Economic right", "Civil right", "Social right"],
    answer: "C",
    explanation: "The right to fair hearing falls under civil rights which protect individuals’ freedoms and justice."
  },
  {
    question: "Which of the following rights allows a person to express opinions freely?",
    options: ["Right to life", "Right to fair hearing", "Right to freedom of expression", "Right to property"],
    answer: "C",
    explanation: "The right to freedom of expression allows citizens to speak and share opinions without undue restriction."
  },
  {
    question: "The judiciary acts as a check on the:",
    options: ["Executive and legislature", "Police and civil service", "Local and state governments", "Traditional rulers"],
    answer: "A",
    explanation: "The judiciary ensures that the executive and legislature do not abuse their powers."
  },
  {
    question: "Which court in Nigeria handles disputes relating to the constitution?",
    options: ["Magistrate Court", "Customary Court", "Sharia Court", "Supreme Court"],
    answer: "D",
    explanation: "The Supreme Court has jurisdiction over constitutional disputes in Nigeria."
  },
  {
    question: "Fundamental human rights are enforceable by:",
    options: ["Local government", "Customary law", "Court of law", "Traditional institutions"],
    answer: "C",
    explanation: "Only a court of law can enforce fundamental human rights."
  },
  {
    question: "The right to vote and be voted for is a:",
    options: ["Civil right", "Political right", "Legal right", "Economic right"],
    answer: "B",
    explanation: "The right to vote and be voted for is a political right that enables democratic participation."
  },
  {
    question: "Judicial independence means the judiciary is:",
    options: ["Controlled by the executive", "Influenced by the legislature", "Free from external interference", "Controlled by the police"],
    answer: "C",
    explanation: "Judicial independence ensures impartial decision-making free from other arms of government."
  },
  {
    question: "The principle of rule of law ensures that:",
    options: ["Citizens are above the law", "Leaders cannot be prosecuted", "All citizens are equal before the law", "Only the rich obey the law"],
    answer: "C",
    explanation: "Rule of law means no one is above the law and all citizens are treated equally."
  },
  {
    question: "The fundamental human right to own property is known as:",
    options: ["Economic right", "Social right", "Cultural right", "Religious right"],
    answer: "A",
    explanation: "The right to own property is classified as an economic right."
  },
  {
    question: "The right to practice any religion is called:",
    options: ["Freedom of movement", "Freedom of religion", "Freedom of association", "Freedom of expression"],
    answer: "B",
    explanation: "Freedom of religion guarantees the right to practice any faith or belief system."
  },
  {
    question: "Which of these rights is not a fundamental human right?",
    options: ["Right to education", "Right to vote", "Right to cheat in exams", "Right to life"],
    answer: "C",
    explanation: "Cheating in exams is not a right; it is an offense."
  },
  {
    question: "The doctrine of separation of powers ensures that:",
    options: ["One arm dominates others", "All powers are given to the executive", "Powers are shared among the three arms", "Legislature controls the judiciary"],
    answer: "C",
    explanation: "Separation of powers ensures balance by dividing authority among the executive, legislature, and judiciary."
  },
  {
    question: "The judiciary helps to protect the rights of citizens by:",
    options: ["Making laws", "Judging cases fairly", "Electing leaders", "Conducting elections"],
    answer: "B",
    explanation: "Through fair judgments, the judiciary protects citizens’ rights."
  },
  {
    question: "The power of the judiciary to declare laws unconstitutional is called:",
    options: ["Judicial activism", "Judicial declaration", "Judicial supremacy", "Judicial review"],
    answer: "D",
    explanation: "Judicial review gives courts the power to nullify unconstitutional laws or actions."
  },
  {
    question: "Fundamental human rights can be suspended during:",
    options: ["General elections", "Budget presentation", "State of emergency", "Sports tournaments"],
    answer: "C",
    explanation: "During a state of emergency, certain rights may be temporarily suspended for security and order."
  },
  {
    question: "An independent judiciary promotes:",
    options: ["Dictatorship", "Injustice", "Rule of law", "Nepotism"],
    answer: "C",
    explanation: "Judicial independence strengthens democracy by upholding rule of law and fairness."
  },
  {
    question: "Which of these is a function of the judiciary?",
    options: ["Conducting elections", "Interpreting laws", "Making budgets", "Enforcing traffic rules"],
    answer: "B",
    explanation: "The judiciary’s main role is interpreting and applying laws in legal cases."
  },
  {
    question: "Which of the following is a core Nigerian value?",
    options: ["Selfishness", "Corruption", "Integrity", "Disobedience"],
    answer: "C",
    explanation: "Integrity is one of Nigeria’s core values promoting honesty and accountability."
  },

  {
    question: "Which of the following is a negative value in Nigerian society?",
    options: ["Discipline", "Corruption", "Hard work", "Integrity"],
    answer: "B",
    explanation: "Corruption undermines national development and is considered a negative value."
  },
  {
    question: "The Nigerian National Anthem emphasizes:",
    options: ["Selfishness", "Unity and patriotism", "Corruption", "Disobedience"],
    answer: "B",
    explanation: "The anthem promotes unity, peace, and loyalty to the nation."
  },
  {
    question: "Which of these is an example of a civic responsibility?",
    options: ["Evading tax", "Voting during elections", "Disobeying laws", "Promoting violence"],
    answer: "B",
    explanation: "Voting is a key civic duty of citizens in a democracy."
  },
  {
    question: "The concept of 'rule of law' means:",
    options: ["Only leaders are above the law", "All citizens are subject to the law", "Laws do not apply to the rich", "Judges are immune to the law"],
    answer: "B",
    explanation: "Rule of law ensures that all citizens, regardless of status, are equal before the law."
  },
  {
    question: "Which arm of government makes laws?",
    options: ["Executive", "Judiciary", "Legislature", "Police"],
    answer: "C",
    explanation: "The legislature is responsible for making laws in Nigeria."
  },
  {
    question: "Which of the following is an obligation of a good citizen?",
    options: ["Tax evasion", "Law abiding", "Corruption", "Cheating in exams"],
    answer: "B",
    explanation: "Being law abiding is one of the fundamental duties of a good citizen."
  },
  {
    question: "The national symbol that represents authority and power is:",
    options: ["The Nigerian flag", "The coat of arms", "The national anthem", "The pledge"],
    answer: "B",
    explanation: "The coat of arms symbolizes the authority and sovereignty of Nigeria."
  },
  {
    question: "Which of the following is a national symbol of unity?",
    options: ["Naira", "Coat of arms", "Police", "National anthem"],
    answer: "D",
    explanation: "The national anthem fosters unity and patriotism among Nigerians."
  },
  {
    question: "The green color in the Nigerian flag stands for:",
    options: ["Corruption and greed", "Agriculture and natural wealth", "Unity and peace", "Education and progress"],
    answer: "B",
    explanation: "Green represents Nigeria’s rich agricultural and natural resources."
  },
  {
    question: "The white color in the Nigerian flag symbolizes:",
    options: ["Unity and peace", "Corruption", "Justice", "Strength"],
    answer: "A",
    explanation: "White symbolizes peace and unity in the Nigerian flag."
  },
  {
    question: "The Nigerian coat of arms has two horses which represent:",
    options: ["Strength and dignity", "Peace and love", "Wealth and unity", "Justice and law"],
    answer: "A",
    explanation: "The two horses symbolize strength and dignity."
  },
  {
    question: "Which of these is NOT a national symbol?",
    options: ["Nigerian flag", "National anthem", "Football team", "Coat of arms"],
    answer: "C",
    explanation: "Although loved, the football team is not classified as a national symbol."
  },
  {
    question: "The black shield in the Nigerian coat of arms stands for:",
    options: ["Petroleum resources", "Fertile soil", "Unity", "Education"],
    answer: "B",
    explanation: "The black shield represents Nigeria’s fertile soil."
  },
  {
    question: "The red eagle on the coat of arms represents:",
    options: ["Strength", "Peace", "Dignity", "Freedom"],
    answer: "D",
    explanation: "The red eagle represents Nigeria’s strength and freedom."
  },
  {
    question: "Which of the following is a core Nigerian value?",
    options: ["Integrity", "Corruption", "Tribalism", "Dishonesty"],
    answer: "A",
    explanation: "Integrity, which emphasizes honesty and strong moral principles, is a core national value."
  },
  {
    question: "The Nigerian pledge emphasizes:",
    options: ["Disunity", "Loyalty and service", "Selfishness", "Corruption"],
    answer: "B",
    explanation: "The pledge promotes loyalty, honesty, and service to the nation."
  },
  {
    question: "Who composed the Nigerian National Anthem?",
    options: ["Pa Benedict Odiase", "Wole Soyinka", "Nnamdi Azikiwe", "Herbert Macaulay"],
    answer: "A",
    explanation: "Pa Benedict Odiase composed the Nigerian national anthem."
  },
  {
    question: "Which of the following promotes national unity?",
    options: ["Ethnic loyalty", "Religious tolerance", "Tribalism", "Discrimination"],
    answer: "B",
    explanation: "Religious tolerance helps foster unity and peaceful coexistence."
  },
  {
    question: "The symbol of authority in traditional Nigerian society is the:",
    options: ["Crown", "Drum", "Flag", "Spear"],
    answer: "A",
    explanation: "The crown is a traditional symbol of authority and kingship."
  },
  {
    question: "The currency of Nigeria is:",
    options: ["Dollar", "Naira", "Cedi", "Pound"],
    answer: "B",
    explanation: "Nigeria’s official currency is the Naira (₦)."
  },
  {
    question: "Nigeria became a republic in:",
    options: ["1954", "1960", "1963", "1979"],
    answer: "C",
    explanation: "Nigeria became a republic on October 1, 1963."
  },
  {
    question: "The Federal Capital Territory (FCT) of Nigeria is:",
    options: ["Lagos", "Abuja", "Kaduna", "Calabar"],
    answer: "B",
    explanation: "Abuja is the Federal Capital Territory of Nigeria."
  },
  {
    question: "Which of these is an official language in Nigeria?",
    options: ["French", "Swahili", "English", "Zulu"],
    answer: "C",
    explanation: "English is the official language of Nigeria."
  },
  {
    question: "Which of the following is NOT a Nigerian ethnic group?",
    options: ["Hausa", "Zulu", "Igbo", "Yoruba"],
    answer: "B",
    explanation: "Zulu is an ethnic group from South Africa, not Nigeria."
  },
  {
    question: "Nigeria is located in which part of Africa?",
    options: ["North Africa", "West Africa", "Southern Africa", "East Africa"],
    answer: "B",
    explanation: "Nigeria is in West Africa, bordered by countries like Benin, Niger, Chad, and Cameroon."
  },
  {
    question: "Nigeria’s independence was achieved in the year:",
    options: ["1954", "1960", "1963", "1979"],
    answer: "B",
    explanation: "Nigeria gained independence from Britain on October 1, 1960."
  },
  {
    question: "The largest ethnic groups in Nigeria are:",
    options: ["Yoruba, Hausa, Igbo", "Tiv, Ibibio, Kanuri", "Nupe, Ijaw, Jukun", "Fulani, Efik, Idoma"],
    answer: "A",
    explanation: "The three major ethnic groups in Nigeria are Yoruba, Hausa, and Igbo."
  },
  {
    question: "The major religion practiced in Northern Nigeria is:",
    options: ["Christianity", "Islam", "Traditional religion", "Buddhism"],
    answer: "B",
    explanation: "Islam is the dominant religion in Northern Nigeria."
  },
  {
    question: "The major religion practiced in Southern Nigeria is:",
    options: ["Christianity", "Islam", "Buddhism", "Hinduism"],
    answer: "A",
    explanation: "Christianity is the dominant religion in Southern Nigeria."
  },
  {
    question: "Which Nigerian city is the most populous?",
    options: ["Kano", "Ibadan", "Abuja", "Lagos"],
    answer: "D",
    explanation: "Lagos is Nigeria’s largest city by population and a major economic hub."
  },
  {
    question: "Nigeria operates which system of government?",
    options: ["Parliamentary", "Confederal", "Federal", "Unitary"],
    answer: "C",
    explanation: "Nigeria operates a federal system of government with power shared between central and state governments."
  },
  {
    question: "The symbol of justice in Nigeria is the:",
    options: ["Sword", "Blindfolded woman with a scale", "Flag", "Eagle"],
    answer: "B",
    explanation: "The blindfolded woman with a scale represents fairness and impartiality in justice."
  },
  {
    question: "Which of the following is an example of negative social behavior?",
    options: ["Punctuality", "Cultism", "Patriotism", "Respect"],
    answer: "B",
    explanation: "Cultism is a negative social behavior associated with violence and lawlessness."
  },
  {
    question: "Nigeria’s motto is:",
    options: ["Unity and Strength", "Unity and Faith, Peace and Progress", "Peace and Justice", "One Nigeria"],
    answer: "B",
    explanation: "Nigeria’s official motto is 'Unity and Faith, Peace and Progress'."
  },
  {
    question: "The legislative arm of government in Nigeria is called:",
    options: ["National Assembly", "Senate House", "House of Lords", "Parliament"],
    answer: "A",
    explanation: "The National Assembly consists of the Senate and the House of Representatives."
  },
  {
    question: "The head of the executive arm of government in Nigeria is:",
    options: ["The Chief Judge", "The President", "The Senate President", "The Inspector General of Police"],
    answer: "B",
    explanation: "The President heads the executive arm of government."
  },
  {
    question: "Nigeria practices what type of democracy?",
    options: ["Direct democracy", "Representative democracy", "Military democracy", "Traditional democracy"],
    answer: "B",
    explanation: "Nigeria practices representative democracy where citizens elect leaders to govern on their behalf."
  },
  {
    question: "Which of the following is a duty of citizens?",
    options: ["Corruption", "Respecting the law", "Tax evasion", "Violence"],
    answer: "B",
    explanation: "Respecting the law is a fundamental duty of good citizenship."
  },
  {
    question: "The judiciary in Nigeria is headed by the:",
    options: ["Chief of Army Staff", "Chief Justice of Nigeria", "Senate President", "Speaker of the House"],
    answer: "B",
    explanation: "The Chief Justice of Nigeria (CJN) heads the judiciary."
  },
  {
    question: "Which of these is a negative effect of corruption?",
    options: ["National unity", "Underdevelopment", "Peace", "Patriotism"],
    answer: "B",
    explanation: "Corruption diverts resources, leading to poverty and underdevelopment."
  },
  {
    question: "The Nigerian Police Force is responsible for:",
    options: ["Making laws", "Enforcing laws", "Judging cases", "Conducting elections"],
    answer: "B",
    explanation: "The police enforce laws and maintain order in society."
  },
  {
    question: "The Independent National Electoral Commission (INEC) is responsible for:",
    options: ["Making laws", "Conducting elections", "Policing", "Passing judgments"],
    answer: "B",
    explanation: "INEC conducts and supervises elections in Nigeria."
  },
  {
    question: "The right to life means:",
    options: ["Everyone is free to kill others", "Every citizen has the right to live", "Only leaders have the right to live", "Life is optional"],
    answer: "B",
    explanation: "The right to life guarantees every citizen’s right to live and not be unlawfully deprived of life."
  },
  {
    question: "Which of the following is NOT a function of government?",
    options: ["Provision of security", "Provision of education", "Provision of healthcare", "Promotion of corruption"],
    answer: "D",
    explanation: "Government is expected to serve the people, not promote corruption."
  },
  {
    question: "Which of these is NOT a branch of government?",
    options: ["Executive", "Judiciary", "Legislature", "Civil service"],
    answer: "D",
    explanation: "The three arms of government are the executive, legislature, and judiciary. The civil service is an administrative body."
  },
  {
    question: "Nigeria is divided into how many states?",
    options: ["30", "32", "36", "40"],
    answer: "C",
    explanation: "Nigeria is made up of 36 states and the Federal Capital Territory (Abuja)."
  },
  {
    question: "The major source of Nigeria’s revenue is:",
    options: ["Agriculture", "Oil and gas", "Tourism", "Taxation"],
    answer: "B",
    explanation: "Nigeria’s economy largely depends on crude oil and gas exports."
  },
  {
    question: "Nigeria is a member of which international organization?",
    options: ["NATO", "ECOWAS", "OPEC", "Both B and C"],
    answer: "D",
    explanation: "Nigeria is a member of both ECOWAS and OPEC."
  },
  {
    question: "Which of these is a responsibility of government?",
    options: ["Tax evasion", "Provision of security", "Encouraging corruption", "Violence"],
    answer: "B",
    explanation: "Provision of security is a fundamental role of government to ensure safety of lives and property."
  },

  {
  question: "The promotion of indigenous languages in Nigeria is important because:",
  options: ["It discourages Western culture", "It leads to disunity", "It preserves culture and identity", "It prevents migration"],
  answer: "C",
  explanation: "Promoting indigenous languages helps preserve Nigeria’s culture and identity."
},
{
  question: "Which of these is a major indigenous language in Nigeria?",
  options: ["Swahili", "Zulu", "Yoruba", "Arabic"],
  answer: "C",
  explanation: "Yoruba is one of Nigeria’s three major indigenous languages, alongside Hausa and Igbo."
},
{
  question: "The use of local languages in education encourages:",
  options: ["Corruption", "Cultural erosion", "Better understanding", "Political domination"],
  answer: "C",
  explanation: "Teaching in indigenous languages promotes better comprehension and cultural preservation."
},
{
  question: "Which of these is considered a negative social behavior in Nigeria?",
  options: ["Punctuality", "Cultism", "Patriotism", "Respect"],
  answer: "B",
  explanation: "Cultism is a destructive social vice associated with violence and lawlessness."
},
{
  question: "The act of taking what does not belong to you is:",
  options: ["Honesty", "Corruption", "Forgiveness", "Empathy"],
  answer: "B",
  explanation: "Corruption involves dishonest practices such as stealing and misuse of public resources."
},
{
  question: "Which of the following best defines self-reliance?",
  options: ["Ability to depend on foreign goods", "Ability to live without producing anything", "Ability to meet one's needs through personal effort and local resources", "Dependence on government aid"],
  answer: "C",
  explanation: "Self-reliance emphasizes depending on one’s effort and local resources to meet needs."
},
{
  question: "An example of a self-reliant activity in Nigeria is:",
  options: ["Importing all food items", "Learning tailoring and opening a fashion shop", "Depending on monthly allowance", "Waiting for foreign investors"],
  answer: "B",
  explanation: "Acquiring skills like tailoring and setting up a business promotes self-reliance."
},
{
  question: "Which sector mostly benefits from indigenous skill acquisition programs?",
  options: ["Oil and gas", "Fashion and crafts", "International banking", "Importation services"],
  answer: "B",
  explanation: "Skill acquisition programs largely benefit areas like fashion, crafts, and local industries."
},
{
  question: "The relationship between trade and self-reliance is that trade:",
  options: ["Makes people dependent on others", "Encourages waste", "Provides a platform for people to exchange goods and services for livelihood", "Weakens local production"],
  answer: "C",
  explanation: "Trade allows people to exchange goods and services, fostering livelihood and independence."
},
{
  question: "The use of local materials and human resources for development defines:",
  options: ["Importation", "Indigenous production", "Globalization", "Digital marketing"],
  answer: "B",
  explanation: "Indigenous production focuses on using local resources and labor for development."
},
{
  question: "One way to promote indigenous trade is to:",
  options: ["Rely only on imported goods", "Devalue the local currency", "Support local producers and craftspeople", "Ban local markets"],
  answer: "C",
  explanation: "Supporting local producers strengthens indigenous trade and economic independence."
},
{
  question: "Which of the following discourages self-reliance in a society?",
  options: ["Entrepreneurship education", "High dependence on imported goods", "Vocational training", "Local content development"],
  answer: "B",
  explanation: "Over-reliance on imported goods discourages local productivity and self-reliance."
},
{
  question: "Vocational and technical education promotes self-reliance by:",
  options: ["Making students dependent on others", "Providing practical skills for employment or business", "Focusing only on theory", "Discouraging creativity"],
  answer: "B",
  explanation: "Vocational education equips individuals with practical skills for self-employment and business."
},
{
  question: "Igba Boi also called Imu Ahia is a unique indigenous entrepreneurship model of which tribe in Nigeria?",
  options: ["Igbo", "Abakaliki", "Anambra", "Yoruba"],
  answer: "A",
  explanation: "Igba Boi (Imu Ahia) is an Igbo apprenticeship system where young people are trained in trade and later supported to start their own businesses."
},
{
  question: "What does social justice primarily aim to promote in a society?",
  options: ["Personal wealth", "Equality and fairness", "Political rivalry", "Cultural dominance"],
  answer: "B",
  explanation: "Social justice ensures fairness and equal opportunities for all members of society."
},
{
  question: "Which of the following best describes social justice?",
  options: ["The enforcement of religious law", "Equal distribution of wealth and opportunities", "Political manipulation of resources", "Suppression of minority voices"],
  answer: "B",
  explanation: "Social justice is about equal rights and fair distribution of resources and opportunities."
},
{
  question: "One major objective of national development is:",
  options: ["Economic monopoly", "Social discrimination", "Improved standard of living", "Tribal favoritism"],
  answer: "C",
  explanation: "National development seeks to improve citizens’ quality of life and overall well-being."
},
{
  question: "Social justice contributes to national development by:",
  options: ["Dividing society by class", "Encouraging inequality", "Promoting unity and stability", "Limiting civil rights"],
  answer: "C",
  explanation: "By ensuring fairness, social justice fosters national unity and stability necessary for development."
},
{
  question: "Which institution is responsible for ensuring social justice in Nigeria?",
  options: ["Political parties", "The judiciary", "The press", "Multinational companies"],
  answer: "B",
  explanation: "The judiciary interprets laws and ensures fairness and justice in society."
},
{
  question: "Which of the following is not a principle of social justice?",
  options: ["Equity", "Human rights", "Discrimination", "Participation"],
  answer: "C",
  explanation: "Discrimination contradicts the principles of fairness and equality central to social justice."
},
{
  question: "A key indicator of national development is:",
  options: ["Increased population", "High illiteracy rate", "Technological advancement", "Political unrest"],
  answer: "C",
  explanation: "Technological advancement reflects growth and progress in national development."
},
{
  question: "Which sector plays the most critical role in achieving national development?",
  options: ["The entertainment sector", "The informal sector", "The education sector", "The criminal sector"],
  answer: "C",
  explanation: "Education is key to national development as it equips citizens with knowledge and skills."
},
{
  question: "Social justice ensures that every individual:",
  options: ["Gets rich", "Is treated fairly regardless of background", "Rules the nation", "Gains immunity from the law"],
  answer: "B",
  explanation: "Social justice guarantees fair treatment and equal opportunities for everyone."
},
{
  question: "Which of these promotes national development through fairness in resource allocation?",
  options: ["Nepotism", "Meritocracy", "Ethnocentrism", "Favoritism"],
  answer: "B",
  explanation: "Meritocracy ensures resources and opportunities are allocated based on ability and fairness."
},
{
  question: "What is the best definition of law?",
  options: ["Rules made by individuals", "The customs of a community", "A set of rules enforceable by courts", "Religious beliefs of a people"],
  answer: "C",
  explanation: "Law is a set of enforceable rules that regulate conduct within a society."
},
{
  question: "Which of the following is a characteristic of law?",
  options: ["Optional compliance", "Arbitrary judgment", "Enforceability", "Religious origin"],
  answer: "C",
  explanation: "For a rule to be considered law, it must be enforceable by recognized authority."
},
{
  question: "Public law governs the relationship between:",
  options: ["Private individuals only", "Citizens and their families", "Individuals and the state", "Political parties"],
  answer: "C",
  explanation: "Public law regulates interactions between individuals and the state."
},
{
  question: "An example of criminal law is:",
  options: ["Divorce proceedings", "Will and inheritance", "Theft and assault", "Property dispute"],
  answer: "C",
  explanation: "Criminal law deals with crimes like theft and assault, punishable by the state."
},
{
  question: "Civil law deals with:",
  options: ["Military operations", "Crimes and punishments", "Disputes between individuals", "Government elections"],
  answer: "C",
  explanation: "Civil law focuses on disputes between private individuals or organizations."
},
{
  question: "The law that deals with the organization of government and its functions is:",
  options: ["Customary law", "Constitutional law", "Tort law", "Criminal law"],
  answer: "B",
  explanation: "Constitutional law defines the structure, powers, and functions of government."
},
{
  question: "Customary law is derived from:",
  options: ["The constitution", "The president", "Local traditions and customs", "International treaties"],
  answer: "C",
  explanation: "Customary law is based on the traditions and practices of local communities."
},
{
  question: "Which of the following is a source of Nigerian law?",
  options: ["The media", "Public opinion", "Judicial precedent", "Religious belief alone"],
  answer: "C",
  explanation: "Judicial precedent (case law) is one of the recognized sources of Nigerian law."
},
{
  question: "Law can be classified into how many broad categories?",
  options: ["One", "Two", "Three", "Five"],
  answer: "B",
  explanation: "Law is broadly classified into two categories: public law and private law."
},
{
  question: "The primary aim of law in any society is to:",
  options: ["Promote dictatorship", "Maintain order and justice", "Encourage disobedience", "Empower criminals"],
  answer: "B",
  explanation: "The law’s fundamental role is to maintain order and deliver justice."
},
{
  question: "Which arm of government is responsible for interpreting the law?",
  options: ["Executive", "Legislature", "Judiciary", "Police"],
  answer: "C",
  explanation: "The judiciary interprets laws and ensures they are applied fairly."
},
{
  question: "The fundamental human rights of citizens are enshrined in the:",
  options: ["Criminal Code", "Constitution", "National Assembly Rules", "Penal Code"],
  answer: "B",
  explanation: "The Constitution of Nigeria guarantees citizens’ fundamental human rights."
},

{
  question: "The judiciary ensures fundamental human rights by:",
  options: ["Making laws", "Interpreting and protecting rights in the constitution", "Conducting elections", "Enforcing political campaigns"],
  answer: "B",
  explanation: "The judiciary protects fundamental rights by interpreting the constitution and ensuring they are upheld."
},
{
  question: "Which of the following is NOT a fundamental human right?",
  options: ["Right to life", "Right to property", "Right to oppression", "Right to dignity"],
  answer: "C",
  explanation: "Fundamental rights include life, dignity, property, and liberty—oppression is contrary to rights."
},
{
  question: "The fundamental rights in Nigeria are contained in which chapter of the 1999 Constitution?",
  options: ["Chapter I", "Chapter II", "Chapter IV", "Chapter VI"],
  answer: "C",
  explanation: "Chapter IV of the Nigerian Constitution contains provisions for fundamental human rights."
},
{
  question: "The right to fair hearing guarantees that:",
  options: ["Only the rich are heard", "Everyone accused is entitled to a fair trial", "Judges are not questioned", "Only the government can prosecute"],
  answer: "B",
  explanation: "The right to fair hearing ensures that everyone has equal opportunity to present their case before judgment."
},
{
  question: "The right to freedom of expression includes:",
  options: ["Freedom to spread falsehood", "Right to hold opinions and impart ideas", "Freedom to insult others", "Freedom to ignore the law"],
  answer: "B",
  explanation: "Freedom of expression protects the right to hold opinions and share ideas within legal limits."
},
{
  question: "Which of these rights can be suspended during a state of emergency?",
  options: ["Right to personal liberty", "Right to property", "Right to life", "Right to dignity"],
  answer: "A",
  explanation: "The right to personal liberty can be restricted during emergencies for state security."
},
{
  question: "The organ of government that enforces laws is the:",
  options: ["Executive", "Legislature", "Judiciary", "Civil society"],
  answer: "A",
  explanation: "The executive arm enforces laws made by the legislature."
},
{
  question: "Which arm of government makes laws?",
  options: ["Executive", "Legislature", "Judiciary", "Military"],
  answer: "B",
  explanation: "The legislature is constitutionally empowered to make laws."
},
{
  question: "The principle of separation of powers was propounded by:",
  options: ["Karl Marx", "Montesquieu", "John Locke", "Plato"],
  answer: "B",
  explanation: "Montesquieu propounded separation of powers to prevent abuse of authority."
},
{
  question: "Separation of powers refers to the division of government into:",
  options: ["Two arms", "Three arms", "Four arms", "Five arms"],
  answer: "B",
  explanation: "Government power is divided into three arms—executive, legislature, and judiciary."
},
{
  question: "Checks and balances exist in government to:",
  options: ["Weaken all arms of government", "Prevent abuse of power", "Allow military rule", "Promote dictatorship"],
  answer: "B",
  explanation: "Checks and balances ensure no arm of government becomes too powerful."
},
{
  question: "Which of the following is a civic responsibility of citizens?",
  options: ["Tax evasion", "Obeying the law", "Violence", "Corruption"],
  answer: "B",
  explanation: "Civic responsibility includes law-abiding behavior and contribution to national growth."
},
{
  question: "Franchise in democracy refers to:",
  options: ["The right to vote and be voted for", "The right to education", "Freedom of religion", "Freedom of movement"],
  answer: "A",
  explanation: "Franchise is the democratic right of citizens to vote and contest in elections."
},
{
  question: "Universal adult suffrage means:",
  options: ["Only men can vote", "Only the rich can vote", "All qualified adults have voting rights", "Only elites can vote"],
  answer: "C",
  explanation: "Universal adult suffrage ensures every eligible adult citizen can vote irrespective of class or status."
},
{
  question: "The Independent National Electoral Commission (INEC) is responsible for:",
  options: ["Collecting taxes", "Organizing and conducting elections", "Passing laws", "Judging cases"],
  answer: "B",
  explanation: "INEC organizes elections and ensures free and fair democratic processes in Nigeria."
},
{
  question: "Rule of law means:",
  options: ["Government is above the law", "Law applies equally to everyone", "Only judges obey the law", "Citizens decide laws for themselves"],
  answer: "B",
  explanation: "The rule of law ensures everyone, including leaders, is subject to the law."
},
{
  question: "Who is regarded as the father of the rule of law?",
  options: ["Lord Denning", "A. V. Dicey", "Aristotle", "Plato"],
  answer: "B",
  explanation: "A. V. Dicey popularized the principle of rule of law in constitutional law."
},
{
  question: "A constitution is best defined as:",
  options: ["A set of arbitrary rules", "The fundamental principles governing a country", "A political speech", "An economic policy"],
  answer: "B",
  explanation: "A constitution sets out the basic rules, principles, and structures of government."
},
{
  question: "Nigeria operates which type of constitution?",
  options: ["Rigid", "Flexible", "Unwritten", "Uncodified"],
  answer: "A",
  explanation: "Nigeria operates a rigid constitution because amendments require a complex process."
},
{
  question: "The current constitution in Nigeria was enacted in:",
  options: ["1979", "1989", "1993", "1999"],
  answer: "D",
  explanation: "The 1999 Constitution is Nigeria’s current supreme law."
},
{
  question: "Which constitution introduced the presidential system in Nigeria?",
  options: ["1960 Constitution", "1963 Constitution", "1979 Constitution", "1999 Constitution"],
  answer: "C",
  explanation: "The 1979 Constitution introduced the American-style presidential system."
},
{
  question: "Citizenship can be acquired in Nigeria through:",
  options: ["Arbitration", "Marriage only", "Birth, registration, and naturalization", "Election"],
  answer: "C",
  explanation: "Nigerian citizenship is obtained by birth, registration, or naturalization."
},
{
  question: "Dual citizenship in Nigeria is allowed for:",
  options: ["Citizens by birth", "Citizens by registration only", "Naturalized citizens", "Political office holders"],
  answer: "A",
  explanation: "Only those who are Nigerian citizens by birth may hold dual citizenship."
},
{
  question: "The right to vote is exercised during:",
  options: ["Census", "Election", "Judgment", "Tax collection"],
  answer: "B",
  explanation: "Voting rights are exercised during elections to choose representatives."
},
{
  question: "Which of these is NOT a source of Nigerian law?",
  options: ["Constitution", "Judicial precedent", "Parliamentary legislation", "Rumors"],
  answer: "D",
  explanation: "Rumors are not a valid source of law; Nigerian law comes from constitutions, legislation, customs, and precedent."
},
{
  question: "The body responsible for lawmaking at the federal level is:",
  options: ["National Assembly", "House of Chiefs", "Supreme Court", "Council of State"],
  answer: "A",
  explanation: "The National Assembly (Senate and House of Representatives) makes laws at the federal level."
},
{
  question: "Local government is created to:",
  options: ["Bring governance closer to the people", "Increase taxes only", "Weaken state government", "Promote military rule"],
  answer: "A",
  explanation: "Local government ensures grassroots governance and development."
},
{
  question: "How many local government areas are in Nigeria?",
  options: ["744", "774", "784", "800"],
  answer: "B",
  explanation: "There are 774 recognized local government areas in Nigeria."
},
{
  question: "The state governor is the:",
  options: ["Head of state", "Chief executive of the state", "Head of judiciary", "Senate president"],
  answer: "B",
  explanation: "The governor is the chief executive officer of a state in Nigeria."
},
{
  question: "The Nigerian president is elected for a term of:",
  options: ["3 years", "4 years", "5 years", "6 years"],
  answer: "B",
  explanation: "The president of Nigeria is elected for a renewable 4-year term."
},
{
  question: "The maximum number of terms a Nigerian president can serve is:",
  options: ["One", "Two", "Three", "Unlimited"],
  answer: "B",
  explanation: "The 1999 Constitution limits the president to two terms of 4 years each."
},
{
  question: "The symbol of authority of the legislature is the:",
  options: ["Sword", "Coat of arms", "Mace", "Flag"],
  answer: "C",
  explanation: "The mace represents the authority of the legislature during its proceedings."
},
{
  question: "The judiciary in Nigeria is headed by the:",
  options: ["Chief Judge of Appeal Court", "Attorney-General", "Chief Justice of Nigeria", "President"],
  answer: "C",
  explanation: "The Chief Justice of Nigeria is the head of the judiciary and the Supreme Court."
},
{
  question: "Judicial review means:",
  options: ["Judges make laws", "Courts interpret the constitutionality of laws", "Executives review judgments", "Citizens decide judgments"],
  answer: "B",
  explanation: "Judicial review allows courts to determine whether laws are constitutional."
},
{
  question: "Which court is the highest in Nigeria?",
  options: ["High Court", "Court of Appeal", "Supreme Court", "Customary Court"],
  answer: "C",
  explanation: "The Supreme Court is the apex court in Nigeria’s judiciary."
},
{
  question: "Nigeria is divided into how many geopolitical zones?",
  options: ["4", "5", "6", "7"],
  answer: "C",
  explanation: "Nigeria has six geopolitical zones: North-East, North-West, North-Central, South-East, South-West, and South-South."
},
{
  question: "The national symbol that represents Nigeria’s sovereignty is the:",
  options: ["Flag", "Anthem", "Mace", "Pledge"],
  answer: "A",
  explanation: "The national flag symbolizes Nigeria’s independence and sovereignty."
},
{
  question: "The green color in Nigeria’s flag represents:",
  options: ["Peace", "Wealth", "Agriculture", "Unity"],
  answer: "C",
  explanation: "The green stripes in the flag symbolize agriculture and natural wealth."
},
{
  question: "The white color in Nigeria’s flag stands for:",
  options: ["Peace", "War", "Unity", "Religion"],
  answer: "A",
  explanation: "The white stripe represents peace and unity in Nigeria."
},
{
  question: "The Nigerian coat of arms has how many horses?",
  options: ["1", "2", "3", "4"],
  answer: "B",
  explanation: "The coat of arms features two white horses symbolizing dignity."
},
{
  question: "The eagle on the Nigerian coat of arms stands for:",
  options: ["Strength", "Unity", "Wealth", "Peace"],
  answer: "A",
  explanation: "The eagle symbolizes strength and pride."
},
{
  question: "The black shield on the Nigerian coat of arms represents:",
  options: ["Oil wealth", "Fertile soil", "Power", "Darkness"],
  answer: "B",
  explanation: "The black shield represents Nigeria’s fertile soil."
},
{
  question: "The national pledge is recited:",
  options: ["During elections only", "During national occasions and school assemblies", "By judges only", "By military only"],
  answer: "B",
  explanation: "The national pledge is recited by citizens, especially students, during assemblies and national events."
},
{
  question: "The national anthem is a symbol of:",
  options: ["Political parties", "National unity and identity", "Religion", "Judiciary"],
  answer: "B",
  explanation: "The anthem fosters patriotism, unity, and national identity."
},
{
  question: "Who composed Nigeria’s first national anthem?",
  options: ["Lillian Jean Williams", "Benedict Odiase", "Felix Idigo", "Wole Soyinka"],
  answer: "A",
  explanation: "The first anthem lyrics were written by Lillian Jean Williams, while the music was composed by Frances Benda."
},
{
  question: "The current national anthem 'Arise O Compatriots' was composed by:",
  options: ["Wole Soyinka", "Benedict Odiase", "Chinua Achebe", "Felix Idigo"],
  answer: "B",
  explanation: "Benedict Odiase composed the current anthem 'Arise O Compatriots.'"
},
{
  question: "The official currency of Nigeria is the:",
  options: ["Dollar", "Cedi", "Naira", "Pound"],
  answer: "C",
  explanation: "The Nigerian currency is the Naira (₦)."
},
{
  question: "The Central Bank of Nigeria (CBN) is primarily responsible for:",
  options: ["Making laws", "Issuing currency and regulating monetary policy", "Conducting elections", "Maintaining roads"],
  answer: "B",
  explanation: "The CBN manages currency issuance, monetary policy, and financial stability."
},
{
  question: "Nigeria became a republic in:",
  options: ["1954", "1960", "1963", "1979"],
  answer: "C",
  explanation: "Nigeria gained independence in 1960 and became a republic in 1963."
},
{
  question: "The first executive president of Nigeria was:",
  options: ["Nnamdi Azikiwe", "Olusegun Obasanjo", "Shehu Shagari", "Tafawa Balewa"],
  answer: "C",
  explanation: "Shehu Shagari became Nigeria’s first executive president in 1979."
},

{
  question: "Who won the 2024 Headies Award for Artiste of the Year?",
  options: ["Burna Boy", "Rema", "Asake", "Davido"],
  answer: "C",
  explanation: "Asake won the 2024 Headies Award for Artiste of the Year, reflecting his rapid rise in Afrobeats and strong impact on the Nigerian music scene."
},
{
  question: "Which Nigerian filmmaker's movie was nominated for the 2024 Oscars?",
  options: ["Kunle Afolayan", "Mo Abudu", "Genevieve Nnaji", "Kemi Adetiba"],
  answer: "A",
  explanation: "Kunle Afolayan's work received global recognition and was nominated for the 2024 Oscars, highlighting Nollywood’s growing international relevance."
},
{
  question: "Which Nigerian cultural festival attracts global attention in Osun State?",
  options: ["Argungu Festival", "Eyo Festival", "Osun-Osogbo Festival", "New Yam Festival"],
  answer: "C",
  explanation: "The Osun-Osogbo Festival, held annually in Osun State, is recognized by UNESCO and draws international tourists for its preservation of Yoruba traditions."
},
{
  question: "What is the official language of Nigeria?",
  options: ["Hausa", "Yoruba", "Igbo", "English"],
  answer: "D",
  explanation: "English is the official language of Nigeria, serving as a unifying language for administration, education, and governance among the country's diverse ethnic groups."
},
{
  question: "Which Nigerian fashion event is internationally recognized?",
  options: ["Lagos Fashion Week", "Abuja Couture Show", "Port Harcourt Runway", "Naija Designers Gala"],
  answer: "A",
  explanation: "Lagos Fashion Week has gained global recognition as a major event showcasing African designers and promoting Nigerian fashion internationally."
},
{
  question: "Which Nigerian was appointed Director-General of the World Trade Organization in 2021 and still holds the position?",
  options: ["Dora Akunyili", "Ngozi Okonjo-Iweala", "Obiageli Ezekwesili", "Amina Mohammed"],
  answer: "B",
  explanation: "Ngozi Okonjo-Iweala, a former Nigerian finance minister, became the first African and first woman to lead the World Trade Organization in 2021."
},
{
  question: "The Yoruba traditional worship of 'Sango' represents what?",
  options: ["God of Iron", "God of Water", "God of Thunder", "God of Harvest"],
  answer: "C",
  explanation: "Sango, in Yoruba religion, is the god of thunder and lightning, and is one of the most revered deities in Yoruba traditional worship."
},
{
  question: "Which Nigerian author is known for promoting feminist literature and global advocacy?",
  options: ["Chimamanda Ngozi Adichie", "Wole Soyinka", "Buchi Emecheta", "Helon Habila"],
  answer: "A",
  explanation: "Chimamanda Ngozi Adichie is globally renowned for her feminist works such as 'We Should All Be Feminists' and her novels that explore gender and identity."
},
{
  question: "What is the major impact of Nollywood on Nigerian culture?",
  options: ["Promotes only Western values", "Diminishes traditional beliefs", "Promotes local stories and cultural identity", "Focuses only on politics"],
  answer: "C",
  explanation: "Nollywood has a major impact by telling local stories, preserving cultural identity, and showcasing Nigerian traditions to global audiences."
}

// ... add all your questions here
    ];

    // Initialize variables

// ================== State Variables ==================
let activeQuestions = [];
let chosenCount = 0;
let examMode = false;
let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let isLearningMode = false;
let quizSubmitted = false;
let darkMode = false;
let timerInterval;

// DOM elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionNumbersContainer = document.getElementById("question-numbers");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const currentElement = document.getElementById("current");
const totalElement = document.getElementById("total");
const scoreValue = document.getElementById("score-value");
const maxScore = document.getElementById("max-score");
const resultsContainer = document.getElementById("results-container");
const finalScore = document.getElementById("final-score");
const totalQuestions = document.getElementById("total-questions");
const attempted = document.getElementById("attempted");
const correctCount = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");
const reviewQuestions = document.getElementById("review-questions");
const scoreCircle = document.getElementById("score-circle");
const feedback = document.getElementById("feedback");
const clearBtn = document.getElementById("clear-btn");
const resetBtn = document.getElementById("reset-btn");
const quizModeBtn = document.getElementById("quiz-mode");
const learningModeBtn = document.getElementById("learning-mode");
const themeToggle = document.getElementById("theme-toggle");
const answeredCountEl = document.getElementById("answered-count");
const totalAnsweredEl = document.getElementById("total-answered");
const progressBar = document.getElementById("progress-bar");
const progressPercent = document.getElementById("progress-percent");
const answeredSummary = document.getElementById("answered-summary");
const timerEl = document.getElementById("timer");
const timeLeftEl = document.getElementById("time-left");

// ================== Start Screen ==================
document.getElementById("start-btn").addEventListener("click", () => {
  const count = parseInt(document.getElementById("question-count").value);
  const mode = document.querySelector('input[name="mode"]:checked').value;
  chosenCount = Math.min(count, quizQuestions.length);
  examMode = mode === "exam";

  activeQuestions = [...quizQuestions]
    .sort(() => 0.5 - Math.random())
    .slice(0, chosenCount);
  userAnswers = Array(chosenCount).fill(null);
  score = 0;
  currentQuestion = 0;
  quizSubmitted = false;

  document.getElementById("start-screen").style.display = "none";
  document.querySelector(".quiz-info").style.display = "flex";
  document.querySelector(".main-content").style.display = "flex";
  document.querySelector(".progress-wrap").style.display = "block";
  document.querySelector(".mode-toggle").style.display = examMode ? "none" : "flex";

  totalElement.textContent = chosenCount;
  maxScore.textContent = chosenCount;
  totalQuestions.textContent = chosenCount;
  totalAnsweredEl.textContent = chosenCount;

  generateQuestionNumbers();
  loadQuestion(0);
  updateProgress();

  if (examMode) startExamTimer(30 * 60);
});

// ================== Exam Timer ==================
function startExamTimer(duration) {
  let remaining = duration;
  timerEl.style.display = "block";
  timerInterval = setInterval(() => {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    timeLeftEl.textContent = `${m}:${s.toString().padStart(2, "0")}`;
    remaining--;
    if (remaining < 0) {
      clearInterval(timerInterval);
      alert("⏰ Time’s up! Submitting your quiz.");
      playSound();
      calculateScore();
      showResults();
      quizSubmitted = true;
    }
  }, 1000);
}
function playSound() {
  const audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
  audio.play();
}

// ================== Question Handling ==================
function generateQuestionNumbers() {
  questionNumbersContainer.innerHTML = "";
  activeQuestions.forEach((_, idx) => {
    const el = document.createElement("div");
    el.className = "question-number";
    el.textContent = idx + 1;
    el.addEventListener("click", () => {
      if (!quizSubmitted) {
        currentQuestion = idx;
        loadQuestion(currentQuestion);
      }
    });
    questionNumbersContainer.appendChild(el);
  });
}
function loadQuestion(index) {
  if (index < 0 || index >= activeQuestions.length) return;
  currentQuestion = index;
  currentElement.textContent = index + 1;
  const q = activeQuestions[index];
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";
  q.options.forEach((opt, i) => {
    const optEl = document.createElement("div");
    optEl.className = "option";
    optEl.textContent = `${String.fromCharCode(65 + i)}) ${opt}`;
    optEl.dataset.value = String.fromCharCode(65 + i);
    if (userAnswers[index] === optEl.dataset.value) optEl.classList.add("selected");
    optEl.addEventListener("click", () => {
      if (quizSubmitted) return;
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      optEl.classList.add("selected");
      userAnswers[index] = optEl.dataset.value;
      updateQuestionNumbers();
      updateProgress();
      if (isLearningMode) checkAnswer(index, optEl.dataset.value);
    });
    optionsContainer.appendChild(optEl);
  });
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === activeQuestions.length - 1;
  updateQuestionNumbers();
  feedback.style.display = "none";
}
function updateQuestionNumbers() {
  const qs = document.querySelectorAll(".question-number");
  qs.forEach((el, i) => {
    el.classList.remove("current", "answered");
    if (i === currentQuestion) el.classList.add("current");
    if (userAnswers[i] !== null) el.classList.add("answered");
  });
}
function checkAnswer(i, selected) {
  const q = activeQuestions[i];
  const correct = selected === q.answer;
  feedback.textContent = correct
    ? `Correct! ${q.explanation}`
    : `Incorrect. The correct answer is ${q.answer}) ${q.options[q.answer.charCodeAt(0) - 65]}. ${q.explanation}`;
  feedback.className = correct ? "feedback correct" : "feedback incorrect";
  feedback.style.display = "block";
  document.querySelectorAll(".option").forEach(o => {
    o.classList.remove("correct", "incorrect");
    if (o.dataset.value === q.answer) o.classList.add("correct");
    else if (o.dataset.value === selected && !correct) o.classList.add("incorrect");
  });
  if (correct && userAnswers[i] !== q.answer) {
    score++;
    updateScoreDisplay();
  }
}
function updateScoreDisplay() {
  scoreValue.textContent = score;
}
function updateProgress() {
  const answered = userAnswers.filter(a => a !== null).length;
  answeredCountEl.textContent = answered;
  answeredSummary.textContent = answered;
  const pct = Math.round((answered / activeQuestions.length) * 100);
  progressBar.style.width = pct + "%";
  progressPercent.textContent = pct + "%";
}

// ================== Navigation ==================
nextBtn.addEventListener("click", () => {
  if (currentQuestion < activeQuestions.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  }
});
prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
});
submitBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to submit?")) {
    calculateScore();
    showResults();
    quizSubmitted = true;
  }
});

// ================== Results ==================
function calculateScore() {
  score = 0;
  userAnswers.forEach((a, i) => {
    if (a === activeQuestions[i].answer) score++;
  });
}
function showResults() {
  document.querySelector(".main-content").style.display = "none";
  document.querySelector(".quiz-info").style.display = "none";
  document.querySelector(".mode-toggle").style.display = "none";
  resultsContainer.style.display = "block";
  if (timerInterval) clearInterval(timerInterval);

  const attemptedCount = userAnswers.filter(a => a !== null).length;
  const correct = userAnswers.filter((a, i) => a === activeQuestions[i].answer).length;
  const incorrect = attemptedCount - correct;
  let displayScore = score;
  if (examMode) {
    displayScore = Math.round((score / chosenCount) * 70);
    totalQuestions.textContent = "70";
  } else totalQuestions.textContent = chosenCount;

  finalScore.textContent = displayScore;
  attempted.textContent = attemptedCount;
  correctCount.textContent = correct;
  incorrectCount.textContent = incorrect;

  const pct = (examMode ? displayScore / 70 : score / chosenCount) * 100;
  scoreCircle.className =
    "score-circle " + (pct >= 70 ? "score-high" : pct >= 50 ? "score-medium" : "score-low");

  reviewQuestions.innerHTML = "";
  activeQuestions.forEach((q, i) => {
    const item = document.createElement("div");
    item.className = "review-item";
    const qEl = document.createElement("div");
    qEl.className = "review-question";
    qEl.textContent = `${i + 1}. ${q.question}`;
    item.appendChild(qEl);
    const aEl = document.createElement("div");
    const ua = userAnswers[i];
    const correct = ua === q.answer;
    if (ua !== null) {
      aEl.className = correct ? "review-answer review-correct" : "review-answer review-incorrect";
      aEl.innerHTML = `<strong>Your answer:</strong> ${ua}) ${q.options[ua.charCodeAt(0) - 65]}
        ${!correct ? `<br><strong>Correct answer:</strong> ${q.answer}) ${q.options[q.answer.charCodeAt(0) - 65]}` : ""}
        <br><strong>Explanation:</strong> ${q.explanation}`;
    } else {
      aEl.className = "review-answer";
      aEl.innerHTML = `<strong>Not attempted</strong><br><strong>Correct answer:</strong> ${q.answer}) ${q.options[q.answer.charCodeAt(0) - 65]}
        <br><strong>Explanation:</strong> ${q.explanation}`;
    }
    item.appendChild(aEl);
    reviewQuestions.appendChild(item);
  });
}

// ================== Clear / Reset ==================
clearBtn.addEventListener("click", () => {
  if (confirm("Clear all previous attempts?")) {
    newAttempt();
  }
});
resetBtn.addEventListener("click", () => {
  if (confirm("Start new attempt?")) {
    newAttempt();
  }
});
function newAttempt() {
  localStorage.removeItem("quizState");
  score = 0;
  currentQuestion = 0;
  userAnswers = [];
  activeQuestions = [];
  quizSubmitted = false;
  examMode = false;
  clearInterval(timerInterval);
  document.getElementById("timer").style.display = "none";

  resultsContainer.style.display = "none";
  document.querySelector(".main-content").style.display = "none";
  document.querySelector(".quiz-info").style.display = "none";
  document.querySelector(".mode-toggle").style.display = "none";
  document.querySelector(".progress-wrap").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
}

// ================== Mode Toggle / Theme ==================
quizModeBtn.addEventListener("click", () => {
  if (isLearningMode) {
    isLearningMode = false;
    quizModeBtn.classList.add("active");
    learningModeBtn.classList.remove("active");
  }
});
learningModeBtn.addEventListener("click", () => {
  if (!isLearningMode) {
    isLearningMode = true;
    learningModeBtn.classList.add("active");
    quizModeBtn.classList.remove("active");
    if (userAnswers[currentQuestion] !== null) {
      checkAnswer(currentQuestion, userAnswers[currentQuestion]);
    }
  }
});
themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙";
  }
});

// ================== Collapse Question Numbers ==================
document.getElementById("toggle-questions").addEventListener("click", () => {
  questionNumbersContainer.classList.toggle("collapsed");
  document.getElementById("toggle-questions").textContent =
    questionNumbersContainer.classList.contains("collapsed") ? "Questions ▸" : "Questions ▾";
});

// ================== Save / Load State ==================
function saveState() {
  const state = {
    currentQuestion,
    userAnswers,
    score,
    isLearningMode,
    quizSubmitted,
    darkMode,
    activeQuestions,
    chosenCount,
    examMode,
    timeRemaining: getRemainingTime()
  };
  localStorage.setItem("quizState", JSON.stringify(state));
}
function getRemainingTime() {
  if (!examMode || !timerInterval) return null;
  const [m, s] = timeLeftEl.textContent.split(":").map(Number);
  return m * 60 + s;
}
function loadState() {
  const saved = localStorage.getItem("quizState");
  if (!saved) return false;
  const state = JSON.parse(saved);

  currentQuestion = state.currentQuestion || 0;
  userAnswers = state.userAnswers || [];
  score = state.score || 0;
  isLearningMode = state.isLearningMode || false;
  quizSubmitted = state.quizSubmitted || false;
  darkMode = state.darkMode || false;
  activeQuestions = state.activeQuestions || quizQuestions;
  chosenCount = state.chosenCount || activeQuestions.length;
  examMode = state.examMode || false;

  // Dark mode restore
  if (darkMode) {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙";
  }

  // UI setup
  document.getElementById("start-screen").style.display = "none";
  document.querySelector(".quiz-info").style.display = "flex";
  document.querySelector(".main-content").style.display = "flex";
  document.querySelector(".progress-wrap").style.display = "block";
  document.querySelector(".mode-toggle").style.display = examMode ? "none" : "flex";

  totalElement.textContent = chosenCount;
  maxScore.textContent = chosenCount;
  totalQuestions.textContent = chosenCount;
  totalAnsweredEl.textContent = chosenCount;

  generateQuestionNumbers();
  loadQuestion(currentQuestion);
  updateProgress();
  updateScoreDisplay();

  // Resume exam timer
  if (examMode && !quizSubmitted && state.timeRemaining) {
    document.getElementById("timer").style.display = "block";
    startExamTimer(state.timeRemaining);
  }

  if (quizSubmitted) showResults();

  return true;
}

// Hook into lifecycle
window.addEventListener("beforeunload", saveState);
window.addEventListener("load", () => {
  const saved = localStorage.getItem("quizState");

  if (saved) {
    const state = JSON.parse(saved);

    // Only restore if quiz was started (activeQuestions exist)
    if (state.activeQuestions && state.activeQuestions.length > 0) {
      loadState();
    } else {
      // First visit or no progress → show start screen
      document.getElementById("start-screen").style.display = "block";
      document.querySelector(".quiz-info").style.display = "none";
      document.querySelector(".main-content").style.display = "none";
      document.querySelector(".progress-wrap").style.display = "none";
      document.querySelector(".mode-toggle").style.display = "none";
      resultsContainer.style.display = "none";
    }
  } else {
    // No saved state → show start screen
    document.getElementById("start-screen").style.display = "block";
    document.querySelector(".quiz-info").style.display = "none";
    document.querySelector(".main-content").style.display = "none";
    document.querySelector(".progress-wrap").style.display = "none";
    document.querySelector(".mode-toggle").style.display = "none";
    resultsContainer.style.display = "none";
  }
});


