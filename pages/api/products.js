export default async function handler(req, res) {
    try {
        const response = await fetch('${process.env.NEXT_PUBLIC_API_URL}/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}'
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: response.statusText });
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}