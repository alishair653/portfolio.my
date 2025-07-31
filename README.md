# Alishair - React Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a clean design, smooth animations, dark mode toggle, and contact form integration.

## 🚀 Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Contact Form**: EmailJS integration for sending messages
- **Typing Animation**: Dynamic text animation in the hero section
- **Project Showcase**: Beautiful project cards with images and descriptions
- **Skills Visualization**: Animated progress bars for skill proficiency
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Type Animation** - Typing animation
- **EmailJS** - Contact form integration

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ali-shair-portfolio.git
   cd ali-shair-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### EmailJS Setup (Optional)

To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the Contact component with your credentials:

```javascript
// In src/components/Contact.js
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID', // Replace with your service ID
  'YOUR_TEMPLATE_ID', // Replace with your template ID
  formRef.current,
  'YOUR_PUBLIC_KEY' // Replace with your public key
);
```

### Customization

1. **Personal Information**: Update personal details in the components
2. **Projects**: Modify the projects array in `src/components/Projects.js`
3. **Skills**: Update skills and proficiency levels in `src/components/Skills.js`
4. **Styling**: Customize colors and themes in `tailwind.config.js`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation bar with dark mode toggle
│   ├── Hero.js            # Hero section with typing animation
│   ├── About.js           # About section with bio and resume
│   ├── Projects.js        # Projects showcase
│   ├── Skills.js          # Skills and technologies
│   ├── Contact.js         # Contact form with EmailJS
│   └── Footer.js          # Footer with social links
├── App.js                 # Main app component
├── index.js               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Customization Guide

### Colors and Theme

The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        // ... more color variations
      }
    }
  }
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Add navigation link in `src/components/Navbar.js`

### Modifying Animations

Animations are powered by Framer Motion. You can customize them in each component:

```javascript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🔍 SEO Optimization

The portfolio includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Open Graph tags
- Structured data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: ar925754@gmail.com
- **Phone**: +92 3029316489
- **Location**: Gajjumata, Lahore, Pakistan
- **GitHub**: [github.com/alishair653](https://github.com/alishair653)

---

Made with ❤️ by Ali Shair 