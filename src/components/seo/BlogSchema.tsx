import React from 'react';
import { BlogPost } from '@/data/blog-posts';

export const BlogSchema = ({ post }: { post: BlogPost }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": post.title,
        "description": post.excerpt,
        "image": "https://thebanjioflagos.tech/og-image.png",
        "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://thebanjioflagos.tech",
            "jobTitle": "Cybersecurity Engineer & Fullstack Developer"
        },
        "datePublished": post.date,
        "dateModified": post.updatedAt || post.date,
        "publisher": {
            "@type": "Organization",
            "name": "Olabanji Security Hub",
            "logo": {
                "@type": "ImageObject",
                "url": "https://thebanjioflagos.tech/logo.png"
            }
        },
        "url": `https://thebanjioflagos.tech/blog/${post.slug}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://thebanjioflagos.tech/blog/${post.slug}`
        },
        "keywords": post.tags || [post.category],
        "articleSection": post.category,
        "articleBody": post.excerpt
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
