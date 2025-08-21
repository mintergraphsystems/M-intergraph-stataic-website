

import React from 'react';
import {
    AcademicCapIcon,
    UsersIcon,
    LightBulbIcon,
    ServerStackIcon,
    CheckCircleIcon
} from './IconComponents';

interface ResearchAndAnalyticsPageProps {
    onNavigate: (path: string) => void;
}

const products = {
    researchAnalytics: [
        { name: 'Maple', imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&auto=format&fit=crop', overview: 'A powerful symbolic and numeric computing tool for mathematics, engineering, data analysis, and algorithm development.', useCases: 'Ideal for R&D teams, universities, and engineering firms needing advanced calculus, linear algebra, differential equations, and modeling capabilities.', edge: 'Support includes integration, license management, training, and custom math-driven solutions.' },
        { name: 'MapleSim', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hJRNfightQBYMvEe0LbdSkz6_SrDXCWkZA&s', overview: 'A high-performance modeling and simulation platform built atop Maple, excellent for designing and validating multi-domain engineering systems.', useCases: 'Automotive, aerospace, robotics, and industrial automation sectors needing system-level modeling, real-time simulation, and code generation.', edge: 'Deliver sensor/actuator modeling, simulation workflows, and deployment across target systems.' },
        { name: 'ATLAS.ti', imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=400&auto=format&fit=crop', overview: 'A leading qualitative data analysis (QDA) tool that facilitates coding and interpreting datasets like interviews, video, and documents.', useCases: 'Researchers, social scientists, market analysts, and academic institutions conducting in-depth qualitative research.', edge: 'Licensing, onboarding, methodology support, and consulting to elevate analytical quality.' },
        { name: 'SmartPLS', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop', overview: 'A visual software to perform Structural Equation Modeling (SEM) using Partial Least Squares (PLS) methodology.', useCases: 'Academic researchers, market analysts, and social scientists analyzing complex causal models.', edge: 'Training in PLS-SEM, model validation, output interpretation, and integration with broader business analytics workflows.' },
        { name: 'IBM SPSS', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKA0gZPkm8FqfHsrILh4WvoAN4Q5IT5DebKg&s', overview: 'A premier statistical software suite for data analysis, predictive analytics, and machine learning.', useCases: 'Market research, survey analysis, academic research, consumer insights, and social science studies.', edge: 'Subscription-based delivery, customized deployment, hands-on training, analytics consulting, and workflow integration with Python or R.' },
        { name: 'MAXQDA', imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400&auto=format&fit=crop', overview: 'A versatile QDA tool for both qualitative and mixed-method research with timeline, mapping, and visualization tools.', useCases: 'Academic research, user experience studies, and professional investigations.', edge: 'Implementation support, multidisciplinary training, advanced feature enablement, and tailored advisory services.' },
        { name: 'EPPI-Reviewer', imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=400&auto=format&fit=crop', overview: 'A specialized tool for systematic reviews—managing literature, coding, data extraction, and synthesis.', useCases: 'Healthcare, policy research, literature reviews, and evidence synthesis projects.', edge: 'Subscription licensing, structured onboarding, methodology consulting, and hands-on assistance through review stages.' },
    ],
    enterpriseEcosystems: [
        { name: 'Microsoft Azure, Microsoft 365 & Power BI', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvCXJJ_kCx-XXHYNP_bM3RocmAlIYZ2xxT4Srqmt70GCfdJdh9spafpJnMLqRCRyCpUQ&usqp=CAU', overview: '• Azure: Cloud computing for scalable infrastructure, data storage, and AI services.\n• Microsoft 365: Productivity tools including Word, Excel, Teams, and Outlook.\n• Power BI: Enterprise-grade business intelligence and data visualization platform.', useCases: 'Modernize IT infrastructure, enhance team collaboration, enable data-driven decision-making.', edge: 'End-to-end Azure migration, 365 adoption, BI dashboard development, data integration, governance, and change management consulting.' },
        { name: 'IBM (Complete Suite)', imageUrl: 'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=400&auto=format&fit=crop', overview: 'Broad portfolio including AI, enterprise analytics, hybrid cloud, cybersecurity, and enterprise software.', useCases: 'Transformation initiatives in sectors like finance, healthcare, manufacturing, and logistics.', edge: 'System integration for IBM platforms (e.g., Cloud Pak, Watson, Db2, Maximo), tailored architecture, license management, training, and managed services.' }
    ]
};

type ProductType = (typeof products.researchAnalytics[0] | typeof products.enterpriseEcosystems[0]) & { imageUrl?: string };

const ProductCard: React.FC<{product: ProductType}> = ({ product }) => (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col overflow-hidden">
        {product.imageUrl && (
            <img src={product.imageUrl} alt={`${product.name} visual representation`} className="w-full h-40 object-cover" />
        )}
        <div className={`flex flex-col flex-grow ${product.imageUrl ? 'p-6' : 'p-8'}`}>
            <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
            <div className="mt-4 text-slate-600 text-base leading-relaxed space-y-4 flex-grow">
                <div>
                    <h4 className="font-semibold text-slate-800">Overview:</h4>
                    <p className="whitespace-pre-line">{product.overview}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-800">Use Cases:</h4>
                    <p>{product.useCases}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-auto">
                    <h4 className="font-semibold text-blue-800">Your Edge with M Intergraph:</h4>
                    <p className="text-blue-700">{product.edge}</p>
                </div>
            </div>
        </div>
    </div>
);


const WhyChooseUsItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
     <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-lg text-slate-700">{children}</span>
    </li>
);

export const ResearchAndAnalyticsPage: React.FC<ResearchAndAnalyticsPageProps> = ({ onNavigate }) => {
    
    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };
    
    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Digital Transformation</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           Research, Analytics & Enterprise Tools
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                          Empowering innovation with a curated portfolio of world-class software for research, advanced analytics, and enterprise modernization. We provide seamless integration, support, and strategic consulting to maximize your investment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Research & Analytics Tools Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <AcademicCapIcon className="h-16 w-16 mx-auto mb-6 text-blue-500" />
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Research & Analytics Tools</h2>
                        <p className="mt-6 text-xl text-slate-600">
                           From qualitative data analysis to high-performance computing, we provide the tools that power discovery and insight.
                        </p>
                    </div>
                     <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.researchAnalytics.map((p, i) => (
                            <div key={p.name} className="animate-on-scroll" style={{'--animation-delay': `${(i % 3) * 0.1}s`} as React.CSSProperties}>
                                <ProductCard product={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enterprise Digital Ecosystems Section */}
            <section className="py-20 sm:py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <ServerStackIcon className="h-16 w-16 mx-auto mb-6 text-blue-500" />
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Enterprise Digital Ecosystems</h2>
                        <p className="mt-6 text-xl text-slate-600">
                           Modernize your infrastructure, enhance collaboration, and drive data-driven decisions with industry-leading enterprise platforms.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {products.enterpriseEcosystems.map((p, i) => (
                            <div key={p.name} className="animate-on-scroll" style={{'--animation-delay': `${i * 0.1}s`} as React.CSSProperties}>
                                <ProductCard product={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Why Choose Us Section */}
             <section className="py-20 sm:py-28 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative order-last lg:order-first animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team discussing IT strategy" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover" loading="lazy" decoding="async" />
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <LightBulbIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Why Choose M Intergraph Systems?</h3>
                             <ul className="mt-8 space-y-5">
                                <WhyChooseUsItem><strong>Decades of Trusted Experience:</strong> Since 1990, delivering system integration and managed services across India, MENA, Africa, and Europe.</WhyChooseUsItem>
                                <WhyChooseUsItem><strong>ISO-Certified Quality:</strong> Adherence to ISO 9001, 20000-1, and 27000 standards for quality, IT service management, and information security.</WhyChooseUsItem>
                                <WhyChooseUsItem><strong>Global Outreach with Local Support:</strong> Over 50+ support locations in India and extensive partnerships for field and NOC support.</WhyChooseUsItem>
                                <WhyChooseUsItem><strong>End-to-End Expertise:</strong> From licensing and deployment to training, optimization, and ongoing managed services—we cover the full lifecycle.</WhyChooseUsItem>
                             </ul>
                        </div>
                    </div>
                </div>
            </section>

             {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Accelerate Your Innovation Journey</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       Contact our specialists to discuss licensing, implementation, or strategic consulting for any of our portfolio products.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Talk to an Expert
                    </a>
                </div>
            </section>
        </main>
    );
};
