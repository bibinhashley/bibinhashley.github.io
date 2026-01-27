import { Share2, Globe, Database, Cpu, Layout, MessageSquare, Terminal, ShoppingBag, Server, Tag, TestTube } from 'lucide-react';

export const projects = [
  {
    id: "hakata-couture",
    title: "Hakata Couture – Custom-Fit E-commerce Platform",
    description: "Case study on building a luxury custom-fit e-commerce platform with personalized measurements, order workflows, and backend-first architecture.",
    seo: {
      title: "Custom-Fit E-commerce Platform | Hakata Couture Case Study",
      description: "Case study on building a luxury custom-fit e-commerce platform with personalized measurements, order workflows, and backend-first architecture.",
      keywords: "backend automation engineer, e-commerce backend architecture, tailored clothing platform, custom fit algorithms, nextjs ecommerce case study, python backend developer kerala"
    },
    tech: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    icon: ShoppingBag,
    fullDescription: `
## Project Overview
Hakata Couture is a luxury e-commerce platform focused on custom-fitted ethnic wear. The system allows customers to submit precise body measurements and place tailored orders through a streamlined workflow.

## The Problem
Traditional e-commerce platforms struggle to handle dynamic sizing, validation of custom measurements, and personalized order flows for tailored clothing.

## The Solution
Designed a backend-first full-stack system that captures, validates, and processes custom measurement data while maintaining consistency between frontend state and backend logic.

### Architecture
- **Next.js frontend** for performance and SEO
- **Backend-driven validation** and order workflows
- **Role-based access** for admin and order management

### Key Challenges
- Handling **variable measurement data**
- Ensuring reliable **order state transitions**
- Keeping **frontend and backend data consistent**

## Outcome
Enabled a scalable and maintainable custom-fit ordering experience suitable for a premium fashion brand.
    `,
    link: "https://www.hakatacouture.com",
    github: "#"
  },
  {
    id: "keyword-enrichment-tool",
    title: "AI Keyword Enrichment System",
    description: "Production-grade AI system for multilingual keyword enrichment using OpenAI APIs with retry handling and token optimization.",
    seo: {
      title: "AI Keyword Enrichment Tool | Python GPT-4 SEO API",
      description: "Build efficient AI applications with Python. This case study details an AI keyword enrichment system using OpenAI, Flask, and Celery for SEO automation.",
      keywords: "AI keyword enrichment API developer, GPT-4 content automation backend, NLP REST API developer Python, SEO content analyzer API with Python, AI website categorization service"
    },
    tech: ["Python", "Flask", "FastAPI", "OpenAI APIs", "NLP"],
    icon: Database,
    fullDescription: `
## Project Overview
An AI-powered system that enriches content with SEO-optimized keywords across multiple languages using OpenAI GPT models.

## The Problem
Manual keyword insertion is time-consuming, inconsistent, and difficult to scale across large volumes of multilingual content.

## The Solution
Built async backend services with OpenAI integration, automated retries, token budget enforcement, and language-aware keyword placement.

### Architecture
- **Async Flask / FastAPI services**
- **Centralized OpenAI API** orchestration
- **Resilient retry** and failure handling

### Key Challenges
- Managing **OpenAI rate limits**
- Maintaining **content readability**
- Scaling across **multiple languages**

## Outcome
Significantly reduced manual SEO effort while enabling large-scale, automated keyword enrichment.
    `,
    link: "#",
    github: "#"
  },
  {
    id: "ai-editor-backend",
    title: "AI Editor Backend",
    description: "Backend system powering an AI content editor with outlining, rewriting, summarization, and personalization features.",
    seo: {
      title: "AI Content Editor Backend | Python AI Developer Portfolio",
      description: "Scalable backend for an AI content editor. Features prompt orchestration, user personalization, and multi-model support using Python and FastAPI.",
      keywords: "python ai developer, openai api backend developer, ai automation developer python, fastapi ai services, content generation api"
    },
    tech: ["Python", "FastAPI", "Flask", "GPT-4"],
    icon: Cpu,
    fullDescription: `
## Project Overview
A modular backend system that powers an AI content editor offering multiple content-generation and transformation features.

## The Problem
Managing multiple AI features in a single system while keeping the backend scalable and maintainable.

## The Solution
Designed a modular Flask and FastAPI backend with separated services and prompt orchestration logic.

### Architecture
- **Service-oriented backend design**
- **Prompt orchestration layer**
- **User-specific personalization** handling

### Key Challenges
- Coordinating **multiple AI pipelines**
- Avoiding **prompt conflicts**
- Maintaining **performance under load**

## Outcome
Delivered a flexible backend capable of powering a full-featured AI content creation platform.
    `,
    link: "#",
    github: "#"
  },
  {
    id: "qa-automation-framework",
    title: "Kotlin QA Automation Framework",
    description: "Case study on building a Kotlin-based QA automation framework for backend services and integrations.",
    seo: {
      title: "Kotlin QA Automation Framework | Backend Testing",
      description: "Robust QA automation framework built with Kotlin. Ensures backend stability through automated regression testing and service mocking.",
      keywords: "kotlin backend developer kerala, qa automation framework, backend testing automation, api testing kotlin, integration testing strategies"
    },
    tech: ["Kotlin", "JUnit", "WireMock", "Zabbix"],
    icon: TestTube,
    fullDescription: `
## Project Overview
A QA automation framework designed to improve reliability and confidence in backend systems and integrations.

## The Problem
Manual testing and unstable test environments slowed development and increased production risks.

## The Solution
Implemented automated regression tests with mocked services and monitoring hooks.

### Architecture
- **Isolated test environments**
- **Mocked external dependencies**
- **Automated regression pipelines**

### Key Challenges
- **Service isolation**
- **Test determinism**
- **Monitoring test failures**

## Outcome
Improved backend stability and reduced regression-related production issues.
    `,
    link: "#",
    github: "#"
  },
  {
    id: "restful-ml-apis",
    title: "Scalable RESTful ML APIs",
    description: "Design and deployment of low-latency machine learning APIs using FastAPI and Docker on GCP.",
    seo: {
      title: "Scalable RESTful ML APIs | FastAPI & Docker | Python Developer",
      description: "High-performance machine learning APIs using FastAPI and Docker. Deployed on Google Cloud Platform for real-time inference.",
      keywords: "machine learning apis developer, python api developer malappuram, fastapi developer kerala, docker gcp backend, ml model deployment"
    },
    tech: ["FastAPI", "Machine Learning", "Docker", "GCP"],
    icon: Server,
    fullDescription: `
## Project Overview
A set of RESTful APIs providing real-time machine learning inference with cloud-native scalability.

## The Problem
Deploying ML models in production while maintaining low latency and scalability.

## The Solution
Built stateless FastAPI services with Dockerized deployments and cloud-native infrastructure.

### Architecture
- **Stateless FastAPI services**
- **Docker-based deployments**
- **GCP infrastructure**

### Key Challenges
- **Inference latency**
- **Scaling under load**
- **Deployment consistency**

## Outcome
Enabled reliable real-time ML inference with predictable performance.
    `,
    link: "#",
    github: "#"
  },
  {
    id: "iab-category-classifier",
    title: "IAB Category Classification System",
    description: "AI-powered website categorization system using IAB taxonomy and fine-tuned language models.",
    seo: {
      title: "IAB Category Classifier | AI Website Categorization",
      description: "AI system for classifying websites into IAB categories using fine-tuned GPT models. Python-based NLP solution for ad-tech.",
      keywords: "sentence similarity api with fastapi, iab category classifier with gpt, python seo optimization tool developer, text classification ai, nlp python developer"
    },
    tech: ["FastAPI", "ChatGPT", "Fine-tuning", "NLP"],
    icon: Tag,
    fullDescription: `
## Project Overview
An AI system that classifies websites into IAB categories for digital marketing and ad-tech use cases.

## The Problem
Accurate content classification at scale is difficult with rule-based systems.

## The Solution
Used fine-tuned language models and prompt optimization to classify content reliably.

### Architecture
- **FastAPI inference service**
- **Prompt-tuned classification logic**
- **Taxonomy-driven output**

### Key Challenges
- **Ambiguous content**
- **Category overlap**
- **Consistency** across domains

## Outcome
Delivered scalable and accurate content classification aligned with IAB standards.
    `,
    link: "#",
    github: "#"
  },
  {
    id: "freshdesk-youtrack-integration",
    title: "Freshdesk–YouTrack Integration",
    description: "Case study on building a bi-directional integration between Freshdesk and YouTrack for workflow synchronization.",
    seo: {
      title: "Freshdesk-YouTrack Integration | SaaS Workflow Automation",
      description: "Seamless synchronization between Freshdesk and YouTrack. Custom integration using Python/TypeScript to automate support and engineering workflows.",
      keywords: "software consultant kochi, backend engineering consultant kerala, saas integration expert, workflow automation python, freshdesk youtrack sync"
    },
    tech: ["TypeScript", "YouTrack Apps", "Freshdesk Apps", "REST APIs", "OAuth"],
    icon: Share2,
    fullDescription: `
## Project Overview
A SaaS integration that synchronizes support tickets and development issues between Freshdesk and YouTrack.

## The Problem
Support and engineering teams lacked visibility and synchronization across tools.

## The Solution
Built event-driven workflows with REST APIs and webhooks to synchronize tickets, comments, and statuses.

### Architecture
- **Event-driven sync logic**
- **Webhook-based updates**
- **Idempotent data handling**

### Key Challenges
- **Authentication** across platforms
- **Avoiding duplicate events**
- **Handling sync latency**

## Outcome
Reduced friction between support and engineering teams while improving cross-platform visibility.
    `,
    link: "#",
    github: "#"
  }
];
