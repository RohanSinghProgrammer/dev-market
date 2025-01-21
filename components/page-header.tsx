import React from 'react'

type Props = {
    title: string
    description: string
}

const PageHeader = ({ title, description }: Props) => (
    <div className="space-y-2 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
        <h1 className="text-3xl font-bold mb-1">{title}</h1>
        <p className="text-muted-foreground max-w-[800px]">{description}</p>
    </div>
);

export default PageHeader