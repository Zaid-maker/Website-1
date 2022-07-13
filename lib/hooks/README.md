# Prefontaine
This is our custom plugin for handling Discord Webhooks in a ServerLess Application.

---

## Usage
```ts
export default async function metricsLogger({ id, name, label, value }) {

    const Webhooks = new PrefontaineClient({ 
        id: config.webhookID, 
        token: config.webhookToken 
    });

    Webhooks.execute({
        embeds: [
            {
                title: 'Performance Monitor',
                description: `Results for ${name}`,
                fields: [
                    {
                        name: 'ID',
                        value: `${id}`
                    },
                    {
                        name: 'Label',
                        value: `${label}`
                    },
                    {
                        name: 'Value',
                        value: `${value}ms`
                    }
                ],
                footer: {
                    text: '© 2022 ',
                    icon_url: ''
                }
            }
        ]
    }).then((response) => {
        console.log('[SYSTEM] Metrics Logger has been Updated!')
    })
}
```