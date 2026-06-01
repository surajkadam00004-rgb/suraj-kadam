# Suraj Voice - AI Text-to-Speech Generator

A premium AI Text-to-Speech website that converts text into ultra-realistic human-like voices.

## Features

- 🎙️ Ultra-realistic voice synthesis
- 🌍 Hindi & English voice support
- 🎚️ Voice speed & pitch control
- 📥 Voice import & cloning
- 💾 Multiple download formats (MP3, MP4)
- 📊 Voice generation history & dashboard
- 🎨 Premium dark theme with glassmorphism UI
- 📱 Mobile responsive design
- ⚡ Fast loading & smooth animations

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Authentication**: Supabase
- **Voice Synthesis**: Edge TTS API
- **Voice Cloning**: Custom implementation
- **Database**: Supabase PostgreSQL
- **Storage**: Supabase Storage

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout
│   └── (pages)/
│       ├── voice-studio/ # Voice generation page
│       ├── dashboard/    # User dashboard
│       ├── pricing/      # Pricing page
│       ├── about/        # About page
│       ├── contact/      # Contact page
│       ├── privacy/      # Privacy policy
│       └── terms/        # Terms & conditions
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── VoicePlayer.tsx
│   ├── CharacterCounter.tsx
│   └── ...
├── lib/
│   ├── supabase.ts       # Supabase client
│   ├── tts.ts            # TTS API integration
│   └── utils.ts          # Utility functions
└── styles/
    └── globals.css       # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

```bash
# Clone the repository
git clone https://github.com/surajkadam00004-rgb/suraj-kadam.git

# Navigate to project directory
cd suraj-kadam

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Add your environment variables
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
# EDGE_TTS_API_KEY=your_edge_tts_key

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
EDGE_TTS_API_KEY=
NEXT_PUBLIC_APP_URL=
```

## Pages

- **Home**: Hero section with CTA buttons
- **Voice Studio**: Main TTS generation interface
- **Dashboard**: User history, saved files, profiles
- **Pricing**: Free and Premium plans
- **About**: Company information
- **Contact**: Contact form
- **Privacy Policy**: Privacy information
- **Terms & Conditions**: Legal terms

## Features Breakdown

### Text-to-Speech Generation
- Support for up to 10,000 characters
- Real-time character counter
- Multiple voice options (Hindi & English)
- Male and Female voices
- Voice speed control (0.5x - 2.0x)
- Voice pitch control
- Audio preview player

### Voice Cloning
- Upload custom voice samples (MP3, WAV, M4A)
- Clone voices from uploaded samples
- Save custom voice profiles
- Preview cloned voices

### Download Options
- MP3 format
- MP4 with waveform visualization
- High-quality audio export
- One-click download

### Dashboard
- Voice generation history
- Saved audio files
- User profile management
- Download history tracking
- Imported voice profiles

## Voice Options

### Hindi Voices
1. Hindi Male Premium
2. Hindi Female Premium

### English Voices
1. English Male Premium
2. English Female Premium

## Pricing Plans

### Free Plan
- 5 generations per month
- Basic voices
- MP3 download only
- 1000 character limit

### Premium Plan
- Unlimited generations
- All premium voices
- MP3 & MP4 download
- 10,000 character limit
- Voice cloning
- Priority support

## License

MIT License - see LICENSE file for details

## Contact

For support or inquiries, contact: support@surajvoice.com
