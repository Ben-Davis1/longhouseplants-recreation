const fs = require('fs');
const path = require('path');

// Required exact phrases that must appear in the built site
const REQUIRED_PHRASES = [
  // Home page hero tagline
  "Plants for sun, plants for shade, small plants, tall plants, scented plants, spiky plants, evergreen plants, unusual plants, plants for walls, plants for bogs, plants that sway, pink flowers, green flowers, purple berries, black leaves, yellow stems, all these & more.",
  
  // Closing line on home page
  "I look forward to seeing you!",
  
  // About page opening
  "Long House Plants is a small retail nursery run by Tim Carter. All the plants are grown here and we have a range of interesting and unusual trees, shrubs, perennials, grasses and alpines",
  
  // Important notices - exact phrases
  "Please note that only assistance dogs are welcome in the nursery or garden.",
  "We do not offer a mail order service.",
  
  // ULEZ notice - exact text
  "I have looked at the map and the nursery is not in the expanded ULEZ area that will become effective on 29 August 2023. The nursery is inside the M25 but Chequers Road, Noak Hill Road and Church Road are outside the ULEZ.",
  
  // Catalogue footer
  "Please note all prices displayed are guidelines only. We do not offer a mail order service.",
  
  // Rainfall data
  "Average rainfall 2006-2024 = 719.18 mm / 28.3 in",
  "853.00 mm",
  "33.20 inches", 
  
  // Newsletter content
  "We raised about £7,900 in all",
  "we were able to send £3,600 to the National Garden Scheme",
  "Harold Hill Salvation Army raised over £2,500",
  "we sent £1,800 to Macmillan Cancer Support",
  "33.15 inches in 2023 and 33.2 inches in 2024; average rainfall 28.3 inches",
  
  // Opening hours exact format
  "March–June",
  "July–September", 
  "Fridays & Saturdays 10 am – 5 pm",
  "Sundays 10 am – 4 pm",
  "Bank Holidays 10 am – 5 pm",
  "Saturdays 10 am – 5 pm",
  "or by arrangement; via the website www.longhouseplants.com tim@thelonghouse.net or 01708 371719",
  
  // Contact details
  "Church Road, Noak Hill",
  "Romford RM4 1LD",
  "01708 371719",
  "tim@thelonghouse.net",
  "remain.keys.beard",
  
  // Club page email
  "whittingham.gardenclub@yahoo.co.uk",
  
  // Features
  "Nursery is all on one level",
  "Off road car parking", 
  "Disabled loo",
  "Payment by cash, credit and debit cards",
  
  // Tea & cake
  "Tea & cake"
];

// Sample plant names from the catalogue requirements
const SAMPLE_PLANTS = [
  "Abelia 'Gold Sport'",
  "Abelia 'Hopleys'",
  "£11.00",
  "£11.50",
  "Clay soil",
  "Well drained soil", 
  "Full sun",
  "Perfumed"
];

async function checkBuiltSite() {
  console.log('🔍 Checking built site for required content...\n');
  
  const buildDir = path.join(__dirname, '..', '.next');
  const pagesDir = path.join(__dirname, '..', 'pages');
  
  if (!fs.existsSync(buildDir)) {
    console.log('❌ Build directory not found. Please run "npm run build" first.');
    return false;
  }
  
  // Check source files for required phrases
  let allPhrases = [...REQUIRED_PHRASES, ...SAMPLE_PLANTS];
  let foundPhrases = new Set();
  let missingPhrases = [];
  
  console.log('Checking source files...\n');
  
  // Check all TypeScript/JavaScript files
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        checkDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        for (const phrase of allPhrases) {
          if (content.includes(phrase)) {
            foundPhrases.add(phrase);
          }
        }
      }
    }
  }
  
  // Check pages directory
  checkDirectory(pagesDir);
  
  // Check components directory  
  const componentsDir = path.join(__dirname, '..', 'components');
  if (fs.existsSync(componentsDir)) {
    checkDirectory(componentsDir);
  }
  
  // Check data directory
  const dataDir = path.join(__dirname, '..', 'data');
  if (fs.existsSync(dataDir)) {
    checkDirectory(dataDir);
  }
  
  // Find missing phrases
  for (const phrase of allPhrases) {
    if (!foundPhrases.has(phrase)) {
      missingPhrases.push(phrase);
    }
  }
  
  // Report results
  console.log(`✅ Found ${foundPhrases.size} out of ${allPhrases.length} required phrases\n`);
  
  if (missingPhrases.length > 0) {
    console.log('❌ Missing required phrases:');
    missingPhrases.forEach((phrase, index) => {
      console.log(`   ${index + 1}. "${phrase}"`);
    });
    console.log('');
    return false;
  }
  
  console.log('🎉 All required content phrases found!\n');
  
  // Check specific file requirements
  console.log('Checking specific file requirements...\n');
  
  const checks = [
    {
      file: 'pages/index.tsx',
      description: 'Home page hero tagline',
      required: 'Plants for sun, plants for shade, small plants, tall plants'
    },
    {
      file: 'pages/about.tsx', 
      description: 'About page assistance dogs notice',
      required: 'Please note that only assistance dogs are welcome'
    },
    {
      file: 'pages/ulez.tsx',
      description: 'ULEZ exact notice text', 
      required: 'I have looked at the map and the nursery is not in the expanded ULEZ area'
    },
    {
      file: 'pages/catalogue.tsx',
      description: 'Catalogue footer notice',
      required: 'Please note all prices displayed are guidelines only'
    },
    {
      file: 'pages/rainfall.tsx',
      description: 'Rainfall average caption',
      required: 'Average rainfall 2006-2024 = 719.18 mm / 28.3 in'
    },
    {
      file: 'data/catalogue.json',
      description: 'Sample plant data',
      required: 'Abelia'
    }
  ];
  
  let allChecksPassed = true;
  
  for (const check of checks) {
    const filePath = path.join(__dirname, '..', check.file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes(check.required)) {
        console.log(`✅ ${check.description}`);
      } else {
        console.log(`❌ ${check.description} - missing in ${check.file}`);
        allChecksPassed = false;
      }
    } else {
      console.log(`❌ ${check.description} - file ${check.file} not found`);
      allChecksPassed = false;
    }
  }
  
  console.log('');
  
  if (allChecksPassed) {
    console.log('🎉 All content checks passed!');
    console.log('✅ The site contains all required exact phrases and content.');
    return true;
  } else {
    console.log('❌ Some content checks failed.');
    console.log('Please review the missing content and ensure exact phrases are included.');
    return false;
  }
}

// Run the check
checkBuiltSite().then(success => {
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('Error running content check:', error);
  process.exit(1);
});