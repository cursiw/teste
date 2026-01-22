// backend/routes/payment.js
const axios = require('axios');

router.post('/pay-entry', async (req, res) => {
    const { email, amount, tournamentId, userId } = req.body;

    try {
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email: email,
            amount: amount * 100, // Paystack compte en centimes
            metadata: {
                tournamentId: tournamentId,
                userId: userId
            },
            callback_url: "https://ton-site.com/payment-success"
        }, {
            headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` }
        });

        // On envoie le lien de paiement au joueur
        res.json({ checkout_url: response.data.data.authorization_url });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'initialisation du paiement" });
    }
});
