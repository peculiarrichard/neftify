const prices = [
    {
        id: 1,
        name: 'Free',
        description: 'For those who want to get started and only need basic functionality.',
        monthlyPrice: '0.00',
        yearlyPrice: '0.00',
        button: 'free',
        features: 'Up to 2,000 MAUs. For individual use. Full dashboard and API access',
        popular: false,
        enterprise: false
    },
     {
        id: 2,
        name: 'Starter',
        description: 'For power users looking to build and track multiple projects.',
        monthlyPrice: '19.00',
        yearlyPrice: '199.00',
        button: 'starter',
        features: 'Up to 5,000 MAUs. Up to 1 collaborators. Track up to 3 projects',
        popular: false,
        enterprise: false
    },
     {
        id: 3,
        name: 'Business',
        description: 'Collaborate with your entire team and get access to everything.',
        monthlyPrice: '249.00',
        yearlyPrice: '1,999.00',
        button: 'business',
        features: 'Up to 50,000 MAUs. Up to 5 collaborators. Track up to 20 projects',
        popular: true,
        enterprise: false
    },
     {
        id: 4,
        name: 'Enterprise',
        description: 'Advanced functionality & support for entire organizations.',
        monthlyPrice: '2,499.00',
        yearlyPrice: '29,988.00',
        button: 'enterprise',
        features: 'Advanced security and controls. Custom integrations and dedicated success manager. Tailored metrics tracking',
        popular: false,
        enterprise: true
    }
];

export default prices;