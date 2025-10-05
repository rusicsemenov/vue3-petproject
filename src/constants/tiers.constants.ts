import type { TBasketType } from '@/types/basket.types.ts';

export const tiersPrice: Record<TBasketType, number> = {
    hobby: 29,
    enterprise: 99,
};

export const tiers = [
    {
        name: 'Hobby',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$29',
        description: "The perfect plan if you're just getting started with our product.",
        features: [
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
        ],
        featured: false,
        type: 'hobby',
        cost: tiersPrice.hobby,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$99',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            'Dedicated support representative',
            'Marketing automations',
            'Custom integrations',
        ],
        featured: true,
        type: 'enterprise',
        cost: tiersPrice.enterprise,
    },
] as const;
