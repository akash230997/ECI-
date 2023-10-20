const quizData = [
  {
    question:
      'Q1 When was the Election Commission of India formally constituted? ',
    a: 'August 15, 1947',
    b: 'January 25, 1950 ',
    c: 'January 26, 1950',
    d: 'August 16, 1947',
    correct: 'b',
  },
  {
    question: 'Q2 Who is the current Chief Election Commissioner of India?',
    a: 'Sunil Arora',
    b: 'Sushil Chandra',
    c: 'Om Prakash Rawat',
    d: 'None of the above',
    correct: 'b',
  },
  {
    question: 'Q3 When was the first Indian General Election held?',
    a: '1947',
    b: '1951-52 ',
    c: '1948-49',
    d: '1961-62',
    correct: 'b',
  },
  {
    question: 'Q4 What is the Voter Helpline Number?',
    a: '1950',
    b: '1098',
    c: '1947',
    d: '1097',
    correct: 'a',
  },
  {
    question: 'Q5 What is the full form of NVSP?',
    a: 'National Volunteers’ Service Panel',
    b: 'National Voters’ Service Portal ',
    c: 'National Voters’ System Platform',
    d: 'National Volunteers’ System Portal',
    correct: 'b',
  },
  {
    question:
      'Q6 Which form do you need to fill to Register as a voter in the Electoral Roll?',
    a: 'Form 18',
    b: 'Form 6 ',
    c: 'Form 8',
    d: 'Form 1',
    correct: 'b',
  },
  {
    question: "Q7 When is National Voters' Day celebrated every year in India?",
    a: '16th August',
    b: '26th January',
    c: '23rd January',
    d: '25th January ',
    correct: 'd',
  },
  {
    question:
      'Q8 How many Lok Sabha General Elections have been held till date?',
    a: '14',
    b: '15',
    c: '16',
    d: '17',
    correct: 'd',
  },
  {
    question:
      'Q9 Can an Indian citizen be enrolled as a voter at more than one place?',
    a: 'Yes',
    b: 'No',
    c: 'Maybe',
    d: 'Only under certain conditions ',
    correct: 'b',
  },
  {
    question: 'Q10 Can a non-citizen of India become a voter?',
    a: 'Yes',
    b: 'No',
    c: 'Maybe',
    d: 'Yes, with special permission',
    correct: 'b',
  },
  {
    question: 'Q11 Which one of the following is mandatory to cast your vote? ',
    a: 'Voter Card',
    b: 'Aadhar Card',
    c: 'Name in the Electoral Roll used for election',
    d: 'Ration Card',
    correct: 'c',
  },
  {
    question:
      'Q12 If anyone is trying to bribe you for your vote, which app will you use to report about it?',
    a: 'Cvigi',
    b: 'Candidate Affidavit Portal',
    c: 'PwD App',
    d: 'Suvidha Portal',
    correct: 'a',
  },
  {
    question: 'Q13 What is the full form of EVM?',
    a: 'Electronic Voting Machine ',
    b: 'Electric Voter Machine',
    c: 'Electoral Voting Mechanism',
    d: 'Electronic Voter Medium ',
    correct: 'a',
  },
  {
    question:
      'Q14 After you vote on the EVM, what is the name of the machine that verifies your vote?',
    a: 'VVPAT',
    b: 'Paper Trail Machine',
    c: 'VVM Machine',
    d: 'Ballot Box',
    correct: 'a',
  },
  {
    question: 'Q15 What is the full form of VVPAT?',
    a: 'Voter Verifiable Paper Audit Trail ',
    b: 'Verifiable Voting Process Audit Trail',
    c: 'Verified Voting Percentage Assessment Trail ',
    d: "Voter's Version Paper Audit Trail",
    correct: 'a',
  },
  {
    question:
      'Q16 The Election Commission is a ………. body. Select the right option?',
    a: 'Statutory Body',
    b: 'Constitutional Body',
    c: 'Elective Body',
    d: ' None of the above',
    correct: 'b',
  },
  {
    question:
      'Q17 What method of voting was used by voters before the introduction of EVMs?',
    a: 'SMS',
    b: 'Ballot Paper',
    c: 'Stones',
    d: 'None of the Above',
    correct: 'b',
  },
  {
    question:
      'Q18 The following pledge is called the _____? We the citizens of India, having abiding faith in democracy, hereby pledge to uphold the democratic traditions of our country and the dignity of free, fair and peaceful elections, and to vote in every election fearlessly and without being influenced by considerations of religion, race, caste, community, language or any inducement.',
    a: 'Voters’ Motto',
    b: 'Electoral Oath',
    c: 'National Voters’ Day Pledge ',
    d: 'Electoral Pledge',
    correct: 'c',
  },
  {
    question:
      'Q19 . I am an elector and a person with a disability and I am not able to come to the polling station. How can I vote? ',
    a: 'Avail free transport facility through PwD App',
    b: 'Apply for a Postal Ballot through form 12D to vote from home',
    c: 'Avail transport facility through SMS',
    d: 'All of the above',
    correct: 'd',
  },
  {
    question:
      'Q20 . When was None of the Above (NOTA) option introduced for voters in India?',
    a: '2004',
    b: '2009',
    c: '2006',
    d: '2014',
    correct: 'b',
  },
];

const quizData_two = [
  {
    question:
      'Q1You can enrol as a voter if you qualify for which of the following conditions?',
    e: 'Are an Indian citizen',
    f: 'Have attained the age of 18 years on the qualifying date',
    g: 'Are ordinarily resident of the part/polling area of the constituency where you want to be enrolled',
    h: 'All of the above',
    correct: 'h',
  },
  {
    question:
      'Q2 Including the Chief Election Commissioner, how many members does the Election Commission of India comprise of? ',
    e: '5',
    f: '3',
    g: '2',
    h: '4',
    correct: 'f',
  },
  {
    question: 'Q3 Can EVMs be used in an area where there is no electricity?',
    e: 'Yes, they run on a 6-volt alkaline battery',
    f: 'Yes, they run on Ultra battery',
    g: 'No, they depend on electricity',
    h: 'Yes, they run on Daniel cell',
    correct: 'e',
  },
  {
    question:
      'Q4 For how long can the control unit of the Electronic Voting Machines (EVMs) save the result in its memory?',
    e: '10 years and above',
    f: '10 hours',
    g: '5 months',
    h: '10 days',
    correct: 'e',
  },
  {
    question: 'Q5  What is the full form of MCC?',
    e: 'Model Code of Conduct',
    f: 'Mode of Campaign Conduct',
    g: 'Model Conduct of Candidates',
    h: 'None of the Above',
    correct: 'e',
  },
  {
    question: 'Q6 What does ETPBS stand for?',
    e: 'Election Time Postal Box System',
    f: 'Electronically Transmitted Postal Ballot System',
    g: 'Electronic Type Polling Booth Service',
    h: 'Ethernet Transmitted Polling Booth System',
    correct: 'f',
  },
  {
    question: 'Q7 Which app can be used to check Voter Turnout of elections?',
    e: 'ENCORE',
    f: 'Garuda',
    g: 'Voter Helpline App',
    h: 'PwD app',
    correct: 'g',
  },
  {
    question:
      'Q8 Which of the following international organizations is ECI not a founding member of?',
    e: 'Association of Asian Election Authorities',
    f: 'Forum of Election Management Bodies of South Asia',
    g: 'Voter Information, Communication, Education Network',
    h: 'United Nations Development Programme',
    correct: 'h',
  },
  {
    question: 'Q9 Which of the following is NOT a feature of EVMs?',
    e: 'Standalone Machine',
    f: 'Manufactured in Premium PSUs',
    g: 'Can be accessed through Internet',
    h: 'Data is stored internally and not transferable by any device',
    correct: 'g',
  },
  {
    question:
      'Q10 Postal Ballot facility as an option can be availed for casting vote by which category of voters',
    e: 'Senior Citizens above 80 years of age',
    f: 'Persons with Disabilities',
    g: 'COVID-19 positive voters',
    h: 'All of the above',
    correct: 'h',
  },
  {
    question: 'Q11 Identify the form to register as an Overseas or NRI Voter.',
    e: 'Form 6A',
    f: 'Form 7A',
    g: 'Form 2B',
    h: 'Form 8',
    correct: 'e',
  },
  {
    question:
      'Q12 . If I am not registered as a voter in any Constituency, can I contest the election?',
    e: 'Yes',
    f: 'Yes, with special permission',
    g: 'Yes, you can register as a voter after election',
    h: 'No, a contesting candidate must be registered as a voter ',
    correct: 'h',
  },
  {
    question:
      'Q13 What word comes from Italian, meaning a “small ball used in voting”?',
    e: 'Ballot Paper',
    f: 'Ballot ',
    g: 'EVM',
    h: 'None of the above',
    correct: 'f',
  },
  {
    question:
      'Q14 To make corrections in name or other details in the Electoral Roll, which form do you need to fill?',
    e: 'Form 6',
    f: 'Form 7',
    g: 'Form 8',
    h: 'Form 8A',
    correct: 'g',
  },
  {
    question:
      'Q15 Assembly Elections to which of these states have NOT been announced in January 2022?',
    e: 'Manipur',
    f: 'Uttar Pradesh',
    g: 'Goa',
    h: 'Jharkhand',
    correct: 'h',
  },
  {
    question: 'Q16 Which of the following is a Comic Series of ECI',
    e: 'Wah Election Wah',
    f: 'Chalo Karein Matdaan',
    g: 'Chunav Ki Kahaniya',
    h: 'All of the above',
    correct: 'h',
  },
  {
    question:
      'Q17 . What is the deadline for campaigning by candidates before elections?',
    e: '24 hours before the conclusion of poll',
    f: '36 hours before the conclusion of poll',
    g: '48 hours before the conclusion of the poll',
    h: '72 hours before the conclusion of poll',
    correct: 'g',
  },
  {
    question:
      'Q18 How long is the term of the Lok Sabha (Lower House of Indian Parliament)?',
    e: '6 years',
    f: '4 years',
    g: '5 years',
    h: '8 years',
    correct: 'g',
  },
  {
    question:
      'Q19 Which of the following is NOT a flagship intervention of the Election Commission of India?',
    e: 'Electoral Literacy Clubs',
    f: 'Web Radio Hello Voters',
    g: 'SVEEP',
    h: 'Election Trend Monitor',
    correct: 'h',
  },
  {
    question:
      'Q20 Which facility does the Election Commission of India not provide?',
    e: 'Check status of voter registration application',
    f: 'Book a wheelchair for PwDs',
    g: 'Check which party your friend voted for',
    h: 'Check voter turnout',
    correct: 'g',
  },
];

const quizData_three = [
  {
    question:
      'Q1 Which of the following do not come under the purview of the Election Commission of India?',
    i: 'Lok Sabha & Rajya Sabha Elections',
    j: 'President & Vice-Presidential Elections',
    k: 'Panchayat & Municipal Elections',
    l: 'Union Budget',
    correct: 'k',
  },
  {
    question: 'Q2 When was the voting age reduced from 21 to 18 years?',
    i: '1950',
    j: '1989 ',
    k: '2000',
    l: '1971',
    correct: 'j',
  },
  {
    question: 'Q3 Which of the following is NOT a feature of the PwD app?',
    i: 'Request For New Voter ID Registration',
    j: 'Request For Wheelchair',
    k: 'Request For Wheelchair',
    l: 'Check Voter Turnout of PwD candidates ',
    correct: 'l',
  },
  {
    question:
      'Q4 Which of the following kinds of Polling Stations has ECI NOT established?',
    i: 'All Women Managed Polling Stations ',
    j: 'PwD Managed Polling Stations ',
    k: 'Scouts and Guides Managed Polling Stations',
    l: 'None of the above',
    correct: 'k',
  },
  {
    question:
      'Q5 Can a voter take away the slip generated by VVPAT after casting their vote?',
    i: 'No, the slip is only visible behind a glass screen for 7 seconds',
    j: 'Yes, the voter can take the slip with them after casting vote ',
    correct: 'l',
  },
  {
    question:
      'Q6 What does FLC stand for, with reference to Electronic Voting Machines (EVMs)?',
    i: 'Factual Leads Checking',
    j: 'First Level Coding',
    k: 'First Level Checking ',
    l: 'Final Level Checking',
    correct: 'k',
  },
  {
    question:
      'Q7 Is a candidate free to spend as much as they like on contesting the election?',
    i: 'Yes, they can spend as much as they like',
    j: 'No, the total election expenditure shall not exceed maximum limit prescribed',
    k: 'No, they cannot spend beyond INR 20,000 per election',
    l: 'Yes, with special permission',
    correct: 'j',
  },
  {
    question:
      'Q8 What COVID safety protocols must be followed by the voter at the polling station?',
    i: 'Temperature check at entry',
    j: 'Wearing mask at all times',
    k: 'Hand sanitization',
    l: 'All of the above',
    correct: 'l',
  },
  {
    question: 'Q9 Which of the following is NOT a feature of cVIGIL app?',
    i: 'Shoot audio/video of violation',
    j: 'Complain anonymously',
    k: 'Geotagging',
    l: 'Share complaint to social media',
    correct: 'l',
  },
  {
    question: 'Q10 Can you vote for two candidates on EVM?',
    i: 'No',
    j: 'Yes',
    correct: 'i',
  },
  {
    question:
      'Q11 Is there a penalty sum to be paid for not voting in State Legislative Assembly Elections?',
    i: "Yes, a citizen must pay a penalty if they don't vote.",
    j: 'No, voting is a right and a responsibility. It is not mandatory.',
    correct: 'j',
  },
  {
    question: 'Q12 Is it possible to vote via Voter Helpline App',
    i: 'Yes',
    j: 'No',
    k: 'Yes, with special permission',
    correct: 'j',
  },
  {
    question:
      'Q13 In case of shifting from one place of residence to another within the same constituency, which form do you need to fill?',
    i: 'Form 1',
    j: 'Form 100',
    k: 'Form 22',
    l: 'Form 8A ',
    correct: 'l',
  },
  {
    question:
      'Q14 Which authority is responsible for counting the votes and announcing results? ',
    i: 'Selected Committee of Voters',
    j: 'Political Party Representatives',
    k: 'Returning Officer ',
    l: 'Government in Power',
    correct: 'k',
  },
  {
    question:
      'Q15 Is there any restriction on canvassing by political parties in or near polling stations on poll day?',
    i: 'Yes. Canvassing for votes within a distance of 100 meters of polling station is prohibited on poll day.',
    j: 'No. Political parties are free to do as they please.',
    correct: 'i',
  },
  {
    question:
      'Q16 Which form should you fill for Deletion or Objection of entry in electoral roll ',
    i: 'Form 7',
    j: 'Form 14',
    k: 'Form 3',
    l: 'Form 12',
    correct: 'i',
  },
  {
    question: 'Q17 Can a homeless person register to vote?',
    i: 'No, he must give a proof of residence. ',
    j: 'Yes, the BLO will visit the location to ascertain where the homeless person sleeps as proof of residence. ',
    correct: 'j',
  },
  {
    question:
      'Q18 Mizoram, Nagaland and ______ have the entirety of the state geography constituting only one Lok-Sabha constituency each. Which is this third state?',
    i: 'Sikkim',
    j: 'Tripura',
    k: 'Nagaland',
    l: 'Assam',
    correct: 'i',
  },
  {
    question:
      'Q19 What is the name of the Voter Education and Electoral Participation Programme of ECI?',
    i: 'VVPAT',
    j: 'SVEEP ',
    k: 'ECI-EVM',
    l: 'VOTE NOW',
    correct: 'j',
  },
  {
    question:
      'Q20 What measures does ECI take to ensure free and fair elections?',
    i: 'Marking of index finger to prevent duplicate voting',
    j: 'Ensuring secrecy of vote by placing EVM-VVPAT in enclosed compartment',
    k: 'Special Summary Revision of Electoral Rolls ',
    l: 'All of the above',
    correct: 'l',
  },
  {
    question:
      'Q21 Whether Political Party/Candidate can make arrangements for transporting voter to and from Polling Station?',
    i: 'No, any arrangement, direct or indirect, to carry any voter to or from polling station by any kind of vehicle used for transport is a criminal offence.',
    j: 'Yes',
    correct: 'i',
  },
  {
    question: 'Q22 Which of the following is a Comic Series of ECI',
    i: 'Wah Election Wah',
    j: 'Chacha Chaudhary aur Chunavi Dangal ',
    k: 'My Vote Matters ',
    l: 'All of the above ',
    correct: 'j',
  },
  {
    question:
      'Q23 Which of the following is a regular publication/magazine of ECI?',
    i: 'My Vote Matters ',
    j: 'Matdaata Geet',
    k: 'Voters ki Kahaniya',
    correct: 'i',
  },
  {
    question:
      'Q24 Which of the following is a weekly radio program for voters’ awareness aired on All India Radio?',
    i: 'Matdaata Junction',
    j: 'Election Update',
    k: 'Kahani Matdaan ki',
    correct: 'i',
  },
];
