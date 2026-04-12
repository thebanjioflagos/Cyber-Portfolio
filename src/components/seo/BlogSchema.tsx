import React from 'react';
import { BlogPost } from '@/data/blog-posts';

export const BlogSchema = ({ post }: { post: BlogPost }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://thebanjioflagos.tech"
        },
        "datePublished": post.date,
        "image": "https://thebanjioflagos.tech/og-image.png",
        "publisher": {
            "@type": "Organization",
            "name": "Olabanji Security Hub",
            "logo": {
                "@type": "ImageObject",
                "url": "https://thebanjioflagos.tech/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://thebanjioflagos.tech/blog/${post.slug}`
        },
        "keywords": post.category,
        "articleBody": "Strategic security intelligence and technical analysis."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
