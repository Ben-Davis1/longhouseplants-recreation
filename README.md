# Long House Plants - Website Recreation

A professional recreation of longhouseplants.com built with Next.js 14, TypeScript, and Tailwind CSS. This project replicates the original nursery website with exact content, modern responsive design, and accessibility features.

## 🌱 About

This is a faithful recreation of the Long House Plants nursery website, featuring:

- **Complete content match**: All text, prices, opening hours, and notices exactly as specified
- **Modern tech stack**: Next.js 14, TypeScript, Tailwind CSS, and Recharts
- **Responsive design**: Mobile-first approach with desktop optimization  
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Performance optimized**: Static generation, image optimization, and code splitting

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd longhouseplants-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production version |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code linting |
| `npm run type-check` | Run TypeScript type checking |
| `npm run check-content` | Verify exact content phrases |

## 🏗️ Project Structure

```
longhouseplants-landing-page/
├── components/           # Reusable React components
│   ├── Navbar.tsx       # Main navigation
│   ├── Footer.tsx       # Site footer with contact info
│   ├── PlantCard.tsx    # Individual plant display
│   ├── RainfallChart.tsx # Interactive rainfall chart
│   ├── EventList.tsx    # Open garden events
│   ├── AccessibilityBanner.tsx # Assistance dogs notice
│   └── UlezNotice.tsx   # ULEZ information component
├── pages/               # Next.js pages (file-based routing)
│   ├── _app.tsx        # App wrapper with layout
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About Us page
│   ├── catalogue.tsx   # Plant catalogue with pagination
│   ├── rainfall.tsx    # Rainfall data and charts
│   ├── events.tsx      # Open Gardens / Events
│   ├── ulez.tsx        # ULEZ information
│   ├── newsletter.tsx  # Newsletter 2025
│   ├── club.tsx        # Club page
│   ├── publicity.tsx   # Media coverage
│   └── contact.tsx     # Contact form and details
├── data/               # JSON data files
│   ├── catalogue.json  # 30 sample plants with exact pricing
│   ├── rainfall.json   # Annual rainfall 2006-2024
│   └── events.json     # 2025 open garden events
├── styles/             # Global CSS and Tailwind
│   └── globals.css     # Base styles and components
├── scripts/            # Utility scripts
│   └── check-content.js # Content verification script
└── public/             # Static assets
```

## 📋 Content Verification

The project includes a content linting script that verifies all exact phrases are present:

```bash
npm run check-content
```

This script checks for:
- ✅ Hero tagline: "Plants for sun, plants for shade..." 
- ✅ Exact notices: "We do not offer a mail order service"
- ✅ ULEZ text: Complete exact wording
- ✅ Rainfall data: "719.18 mm / 28.3 in" precision
- ✅ Contact details: Phone, email, What3words
- ✅ Opening hours: Exact format and times
- ✅ Sample plants: Abelia prices and descriptions

## 🎨 Design Features

### Components
- **Responsive Navigation**: Mobile hamburger menu, desktop horizontal nav
- **PlantCard**: Displays genus, species, cultivar, price, tags, and descriptions
- **RainfallChart**: Interactive chart using Recharts with 19-year average line
- **EventList**: 2025 calendar with charity information
- **AccessibilityBanner**: Prominent assistance dogs notice

### Styling
- **Tailwind CSS**: Utility-first styling with custom design system
- **Color Palette**: Green primary, earth tones, accessibility-compliant contrast
- **Typography**: System fonts with semantic heading hierarchy
- **Cards**: Consistent card design with shadows and borders

### Accessibility
- **Semantic HTML**: Proper heading structure, landmarks, lists
- **ARIA Labels**: Screen reader support for interactive elements  
- **Focus Management**: Visible focus indicators and keyboard navigation
- **Color Contrast**: WCAG AA compliant color combinations
- **Alt Text**: Descriptive text for images and icons

## 📊 Data Management

### Catalogue Data (`data/catalogue.json`)
Schema for 1,270+ plants (30 sample records included):
```json
{
  "id": "string",
  "genus": "string", 
  "species": "string",
  "cultivar": "string?",
  "category": "shrub|perennial|tree|bulb|climber",
  "price": "number",
  "difficultSpots": ["string[]"],
  "description": "string", 
  "tags": ["string[]"]
}
```

### Rainfall Data (`data/rainfall.json`)
Annual records 2006-2024 with mm and inches:
```json
{
  "year": "number",
  "rainfall_mm": "number", 
  "rainfall_inches": "number"
}
```

### Events Data (`data/events.json`)
2025 open garden calendar:
```json
{
  "id": "string",
  "date": "string",
  "title": "string", 
  "time": "string",
  "description": "string",
  "charity": "string?",
  "pricing": { "adult": "number", "child": "number" }
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Configure build settings** (auto-detected):
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Netlify
1. **Build settings**:
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`

2. **Add to `next.config.js`**:
   ```javascript
   output: 'export',
   trailingSlash: true,
   images: { unoptimized: true }
   ```

### Self-hosted
```bash
# Build production
npm run build

# Start production server
npm run start

# Or serve statically
npm run build
npm run export
# Serve the `out` directory
```

## 🛠️ Customization

### Adding New Plants
1. **Edit `data/catalogue.json`**:
   ```json
   {
     "id": "31",
     "genus": "Planticus",
     "species": "newicus", 
     "cultivar": "Amazing",
     "category": "perennial",
     "price": 12.50,
     "difficultSpots": ["Full sun", "Well drained soil"],
     "description": "A remarkable new plant...",
     "tags": ["Hardy", "Long flowering"]
   }
   ```

2. **Pagination automatically adjusts** (12 plants per page)

### Updating Content
1. **Modify page files** in `pages/` directory
2. **Run content check**: `npm run check-content`
3. **Update required phrases** in `scripts/check-content.js` if needed

### Styling Changes
1. **Edit `tailwind.config.js`** for design tokens
2. **Modify `styles/globals.css`** for component styles
3. **Use Tailwind classes** in components for layout

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|--------|-------|
| `sm` | 640px+ | Mobile landscape |
| `md` | 768px+ | Tablet portrait |
| `lg` | 1024px+ | Tablet landscape |
| `xl` | 1280px+ | Desktop |
| `2xl` | 1536px+ | Large desktop |

## 🔧 Development Notes

### Key Requirements Implemented
- ✅ **Exact content**: All text matches source verbatim
- ✅ **30 sample plants**: Including Abelia varieties with correct pricing  
- ✅ **Rainfall chart**: 2006-2024 data with average reference line
- ✅ **2025 events**: Complete calendar with charity attribution
- ✅ **Accessibility**: WCAG compliance and semantic HTML
- ✅ **Content linting**: Automated verification of exact phrases

### Performance Optimizations  
- **Static Generation**: Pages pre-built at compile time
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component (when images added)
- **Bundle Analysis**: Separate vendor and chart bundles

### SEO Features
- **Meta Tags**: Title, description, and viewport for all pages
- **Semantic HTML**: Proper heading hierarchy and landmarks  
- **Structured Data**: Ready for schema markup addition
- **Clean URLs**: Next.js file-based routing with readable paths

## 📞 Support

For questions about the original Long House Plants nursery:
- **Phone**: 01708 371719
- **Email**: tim@thelonghouse.net  
- **Address**: Church Road, Noak Hill, Romford RM4 1LD
- **What3words**: remain.keys.beard

For technical questions about this recreation:
- Review the code comments and component documentation
- Check the content verification script output
- Ensure all dependencies are correctly installed

## 📄 License

This is a recreation for educational purposes. The original content belongs to Long House Plants nursery.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**