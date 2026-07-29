const fs = require('fs');
let content = fs.readFileSync('src/data/services.ts', 'utf8');
content = content.replace(/id:\s*'([^']+)',([\s\S]*?)link:\s*'[^\']+'/g, 'id: \'$1\',$2link: \'/services/$1\'');
fs.writeFileSync('src/data/services.ts', content);
