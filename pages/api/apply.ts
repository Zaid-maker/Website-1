import applyHook from "@/root/lib/hooks/votes";

export default async function handler(req, res) {
    const { method } = req;

    switch(method) {

        case 'POST':
            try {

                if (!req.body.listName) {
                    return res.send(JSON.stringify({
                        success: false,
                        message: '[FORM_ERR]: List Name is a Required Field!'
                    }));
                }

                else if (!req.body.listDom) {
                    return res.send(JSON.stringify({
                        success: false,
                        message: '[FORM_ERR]: List Domain is a Required Field!'
                    }))
                }

                else if (!req.body.listDom.startsWith('https://')) {
                    return res.send(JSON.stringify({
                        success: false, 
                        message: '[FORM_ERR]: List Domain should start with a valid "HTTPS" Protocol'
                    }))
                }

                else {

                    await res.send(JSON.stringify({
                        success: true,
                        message: 'Successfully submitted your Application!'
                    }))

                    return applyHook({ user: req.body.userID, name: req.body.listName, dom: req.body.listDom})
                }

            } catch (err) {

                return res.send(JSON.stringify({
                    success: false,
                    message: `[ERR]: ${err.message}`
                }))

            }
          default:
            res.send(JSON.stringify({
                success: false,
                message: '[FALLBACK]: Malformed Request'
            }))
        break;
    }
}