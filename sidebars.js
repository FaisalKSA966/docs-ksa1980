module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['introduction', 'quick-start', 'installation'],
    },
    {
      type: 'category',
      label: 'Discord Bot',
      items: [
        'bot/overview',
        'bot/commands',
        'bot/interactions',
        'bot/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Web Dashboard',
      items: [
        'dashboard/overview',
        'dashboard/authentication',
        'dashboard/features',
        'dashboard/settings',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: ['api/overview', 'api/tickets', 'api/statistics', 'api/sync'],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/for-users',
        'guides/for-moderators',
        'guides/for-administrators',
        'guides/for-developers',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/database-schema',
        'advanced/deployment',
        'advanced/troubleshooting',
        'advanced/security',
      ],
    },
  ],
};
