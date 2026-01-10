# Techly - IT Company Website

A modern, fully responsive IT company website built with Next.js, featuring a clean blue and white theme, database integration, and stunning design.

## 🚀 Features

- **Modern Design**: Clean blue and white theme with smooth animations
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Database Integration**: MongoDB integration for contact form submissions
- **Multiple Pages**: Home, Services, About, and Contact pages
- **Contact Form**: Functional contact form with database storage
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Next.js 16 for optimal speed

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- MongoDB installed locally OR MongoDB Atlas account

## 🛠️ Installation

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Set Up Environment Variables**

   Create a `.env.local` file in the root directory with:

   ```
   MONGODB_URI=mongodb://localhost:27017/techly
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

   **For MongoDB Atlas:**

   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/techly
   ```

3. **Start MongoDB** (if using local MongoDB)

   ```bash
   mongod
   ```

4. **Run Development Server**

   ```bash
   npm run dev
   ```

5. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
techly/
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── api/
│   │   │   └── contact/    # Contact API route
│   │   ├── contact/        # Contact page
│   │   ├── services/       # Services page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.js       # Root layout
│   │   └── page.js         # Home page
│   ├── components/
│   │   ├── Footer.js       # Footer component
│   │   └── Navbar.js       # Navigation component
│   ├── lib/
│   │   └── mongodb.js      # Database connection
│   └── models/
│       └── Contact.js      # Contact model
├── public/                 # Static assets
└── package.json
```

## 🎨 Design Features

- **Blue & White Theme**: Professional color scheme
- **Smooth Animations**: Fade-in, slide, and float animations
- **Glass Morphism**: Modern glassmorphism effects
- **Gradient Text**: Eye-catching gradient text effects
- **Hover Effects**: Interactive hover states on all elements
- **Custom Scrollbar**: Styled scrollbar matching the theme

## 📄 Pages

1. **Home** (`/`)

   - Hero section with animated background
   - Services overview
   - Company statistics
   - Call-to-action sections

2. **Services** (`/services`)

   - Detailed service listings
   - Feature breakdowns
   - Process workflow
   - CTA section

3. **About** (`/about`)

   - Company story
   - Core values
   - Timeline/milestones
   - Team members

4. **Contact** (`/contact`)
   - Contact form with database integration
   - Contact information
   - Social media links
   - Map placeholder

## 🗄️ Database

The contact form submissions are stored in MongoDB with the following schema:

```javascript
{
  name: String (required),
  email: String (required),
  phone: String,
  company: String,
  message: String (required),
  createdAt: Date
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

```bash
npm run build
npm start
```

## 🔧 Configuration

### MongoDB Setup

**Option 1: Local MongoDB**

- Install MongoDB Community Edition
- Start MongoDB service
- Use connection string: `mongodb://localhost:27017/techly`

**Option 2: MongoDB Atlas (Cloud)**

1. Create account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a cluster
3. Get connection string
4. Add to `.env.local`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Technologies Used

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Database**: MongoDB with Mongoose
- **Font**: Inter (Google Fonts)
- **Icons**: Emoji & SVG

## 📞 Support

For support, email info@techly.com or visit our contact page.

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ by the Techly Team

---

**Note**: Remember to replace the MongoDB connection string with your actual database credentials before deploying to production!
