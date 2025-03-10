
import axios from "axios";

export const homePage = (req, res) => {
    res.send("Hello World! How are you?");
};

export const homePage1 = (req, res) => {
    res.send("Hello World2! How are you?");
};


export const companyNews = async (req, res) => {
    try {
        const stockName = req.query.stockName; // Get stock name from query params

        if (!stockName) {
            return res.status(400).json({ success: false, message: "Stock name is required" });
        }

        const API_KEY = process.env.FINNHUB_API_KEY || "coctobpr01qknpft9crgcoctobpr01qknpft9cs0"; // Store API key in .env
        const fromDate = "2024-06-01";
        const toDate = "2024-06-23";

        // Make request to Finnhub API
        const response = await axios.get(`https://finnhub.io/api/v1/company-news`, {
            params: {
                symbol: stockName,
                from: fromDate,
                to: toDate,
                token: API_KEY,
            },
        });

        return res.status(200).json(response.data); // Send API response
    } catch (error) {
        console.error("Error fetching company news:", error.message);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

