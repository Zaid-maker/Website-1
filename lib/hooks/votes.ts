import PrefontaineClient from "./source";

export default async function applyHook({ user, name, dom }) {

    const Webhook = new PrefontaineClient({
        id: process.env.APPLY_HOOK_ID,
        token: process.env.APPLY_HOOK_KEY
    });

    Webhook.execute({
        username: 'List Submissions',
        avatar_url: 'https://metrobots.xyz/img/logo.webp',
        embeds: [
            {
                title: 'New List Submission',
                description: `${user} has submitted a new Bot List.`,
                thumbnail: { url: 'https://metrobots.xyz/img/logo.webp' },
                color: 311898,
                fields: [
                    {
                        name: 'Bot List Name',
                        value: `${name}`,
                        inline: true
                    },
                    {
                        name: 'Bot List Domain',
                        value: `${dom}`,
                        inline: true
                    }
                ],
                footer: {
                    text: '© 2022 Metro Reviews',
                    icon_url: 'https://metrobots.xyz/img/logo.webp'
                }
            }
        ]
    })
}