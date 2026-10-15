---
name: "Vipin Saini"
title: "Senior Software Engineer"
company: "Shiprocket"
location: "Gurugram, India"
avatar: "images/1526207208128.png"
resume: "Vipin-Saini-CV.pdf"
contact:
  email: "vipinsaini1989@gmail.com"
links:
  - label: "LinkedIn"
    url: "https://www.linkedin.com/in/vipin-saini-76a76765"
  - label: "GitHub"
    url: "https://github.com/vipinsaini1989"
skills:
  - category: "Languages"
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "Go"]
  - category: "Frontend"
    items: ["React.js", "Next.js", "Angular (v9-v19)", "HTML5", "CSS3/SCSS", "Tailwind CSS", "Material UI", "GraphQL"]
  - category: "State Management"
    items: ["Redux", "NgRx", "Zustand", "Context API"]
  - category: "Architecture"
    items: ["Module Federation (micro-frontends)", "Web Components", "Standalone Components"]
  - category: "Backend"
    items: ["Node.js", "REST APIs", "Frappe (Python)", "Vue.js", "Kafka", "MongoDB", "MySQL"]
  - category: "Mobile & Testing"
    items: ["Ionic", "Jasmine", "Karma"]
  - category: "Build/CI"
    items: ["Vite", "esbuild", "Webpack", "Jenkins", "Docker"]
  - category: "Agentic AI"
    items: ["Claude CLI", "Copilot CLI", "Agent-based workflows", "Tool & skill integrations", "Multi-step orchestration"]
experience:
  - role: "Senior Software Engineer"
    company: "Shiprocket"
    companyUrl: "https://www.shiprocket.in/"
    period: "03/2021 - Present"
    location: "Gurugram"
    description: "ZOP | D2C Ecommerce Platform | 150K+ orders/month | 200+ brands"
    highlights:
      - heading: "Micro-frontend platform"
        description: "Architected the Module Federation micro-frontend platform - designed the React shell app, defined host/remote module contracts and shared-dependency strategy, authored org-wide conventions for module-exposure and versioning, and guided adoption across engineering teams."
      - heading: "Per-brand storefronts (*.afora.in)"
        description: "Leading the build of a per-brand subdomain storefront (Next.js + Redux Toolkit, GraphQL, Shopify as commerce backend) delivering quick-commerce-as-a-service with 2 hr/4 hr hyperlocal delivery; live for fitfeast.afora.in (300 orders in first month) and peesafe.afora.in, with more brands lined up. Key challenge: multi-tenant data isolation across brand subdomains while reusing the existing ZOP backend."
        link: "https://fitfeast.afora.in/"
      - heading: "afora.in"
        description: "Shipped the flagship multi-brand storefront, live for a GPay campaign - ~55K page views in 30 days."
        link: "https://afora.in/"
      - heading: "RocketLinks"
        description: "Built all three frontends for a mobile-first seller-onboarding platform - React.js seller app and Next.js buyer + marketing apps (see Projects)."
        link: "https://rocketlinks.in/"
      - heading: "ZOP Next.js migration"
        description: "Leading the ZOP migration from Shopify Liquid to Next.js + GraphQL + Zustand, enabling server-side rendering for improved SEO and performance at scale."
        link: "https://www.zop.in/"
      - heading: "Shared web component"
        description: "Built an Angular web component (shared header/sidebar) adopted by 6 of 10 Shiprocket webapps, eliminating duplicate development effort and cross-team code-sync overhead."
      - heading: "Code review & deployments"
        description: "Serve as L1 code reviewer and deployment lead on weekly rotation - overseeing code review through production deployment across 5 repos, 8 teams, and 13+ engineers."
      - heading: "Angular 14 → 19 migration"
        description: "Resolved standalone-component breaking changes and replaced Webpack with Vite + esbuild - cutting build time from 3-4 minutes to 20-30 seconds (8-10x faster)."
      - heading: "Performance"
        description: "Boosted Lighthouse performance score by 25% via lazy image loading, LCP prefetching, defer/async scripts, and shimmer-based CLS reduction - directly improving customer retention during Google/Facebook ad campaigns."
      - heading: "State architecture"
        description: "Managed Redux and NgRx state architecture across multiple product surfaces."
      - heading: "Mentoring & CI/CD"
        description: "Mentored 3 engineers, conducted code reviews, championed development best practices, and maintained Jenkins CI/CD pipelines for automated build and deployment."

  - role: "Full Stack Developer"
    company: "IoTReady"
    companyUrl: "https://iotready.co/"
    period: "02/2018 - 02/2021"
    location: "Bengaluru"
    highlights:
      - heading: "Social Alpha (Tata Trusts)"
        description: "Built a React web application for the Social Alpha incubator - a community platform for posting, solving, and expert-validating real-world problems."
      - heading: "Social Alpha backend"
        description: "Developed the backend using the Frappe framework (Python + Vue.js) for scalable content delivery and content management."
      - heading: "Mobile apps"
        description: "Built Ionic mobile apps for Meghshala NGO (rural teacher-education platform) and Joovv (light-therapy control app)."

projects:
  - name: "RocketLinks"
    url: "https://rocketlinks.in/"
    context: "Shiprocket"
    period: "Sep 2026 - Oct 2026"
    description: "Mobile-first platform that lets small sellers list products by uploading a photo or pasting an Amazon product URL. Built all three frontends: a React.js seller app (product + order management), a Next.js buyer storefront, and a Next.js marketing site, using Zustand for state management on top of a Golang backend. Built with spec-driven development, with Claude Code generating a large share of the implementation."
    tech: ["React.js", "Next.js", "Zustand", "Golang", "Claude Code"]
  - name: "Shopify Data Export/Import App"
    description: "React app (MongoDB backend) for exporting/importing store data sheets on Shopify. Started as a weekend MVP using Claude Code AI agents and replaced a $200/month third-party tool for ZOP - now scaling from an internal tool toward a sellable product (in testing)."
    tech: ["React", "MongoDB", "Claude Code"]

education:
  - degree: "M.Tech"
    school: "Hindustan University"
    period: "2011 - 2013"
    location: "Chennai"
  - degree: "B.Tech"
    school: "MDU, Rohtak"
    period: "2007 - 2011"
    location: "Haryana"
---

Senior Frontend Engineer with 7+ years of experience building scalable, high-quality web applications using React and TypeScript. Specialized in micro-frontend architecture (Module Federation), state management (Redux, NgRx, Zustand), performance optimization, and build tooling modernization. Led cross-functional engineering teams - overseeing code review to production deployment across 5 repos, 8 teams, and 13+ engineers. Currently driving major platform migrations and per-brand storefront products at a 150K+ orders/month D2C ecommerce platform.
