import User from "../models/user.model.js";
import axios from "axios";
import express from "express";


export const homePage = (req, res) => {
    res.send("Hello World! How are you?");
};

export const homePage1 = (req, res) => {
    res.send("Hello World2! How are you?");
};

export const getAllUser = async(req,res)    => {   
    try {
        const user = await User.find({},'clerkUserId firstName lastName email'); // Fetch all users with specific fields
        if (!user) {
            return res.status(404).json({ success: false, message: "No users found" });
        }
        return res.status(200).json({ success: true, data: user }); // Send user data as response
        
    } catch (error) {
        console.error("Error fetching users:", error.message);
        return res.status(500).json({ success: false, message: "Internal server error" });
        
    }
 }

 export const getAlpacaAccount = async (req, res) => {
    try {
        // Parse the Buffer manually if needed
        const rawBody = req.body.toString('utf8');
        const body = JSON.parse(rawBody);
        
        const apikey = body.apikey || body.apiKey;
        const secretKey =body.secretKey || body.secretkey;
        
        if (!apikey || !secretKey) {
            return res.status(400).json({
                success: false,
                message: "Both API key and secret key are required",
                received: body // Now shows parsed JSON
            });
        }

        const response = await axios.get("https://paper-api.alpaca.markets/v2/account", {
            headers: {
                'accept': 'application/json',
                'APCA-API-KEY-ID': apikey.trim(),
                'APCA-API-SECRET-KEY': secretKey.trim()
            }
        });

        res.status(200).json({ 
            status: 'OK',
            alpaca_user: response.data 
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(error.response?.status || 500).json({
            success: false,
            message: error.response?.data?.message || "Authentication failed",
            details: error.message
        });
    }
};


export const getAlpacaStockPrice = async (req,res) => {
      try{

        const rawBody = req.body.toString('utf8');
        const body = JSON.parse(rawBody);

          const apikey = body.apikey || body.apiKey;
          const secretKey = body.secretKey || body.secretkey;
          const symbol = body.symbol || body.symbolName; // Use symbolName if provided

          if(!symbol || !apikey || !secretKey) {
              return res.status(400).json({ error: 'Symbol, API key, and secret key are required' });
          }

          const response = await axios.get(`https://data.alpaca.markets/v2/stocks/${symbol}/trades/latest`, {
            headers: {
              'APCA-API-KEY-ID': apikey,
              'APCA-API-SECRET-KEY': secretKey
            }
          });
            
        //   res.json(response.data);
          const price = response.data.trade.p;
    
            res.json({
            status: 'OK',
            price: price
            });

      }
      catch (error) {
            console.error('Error fetching Alpaca stock price:', error.message);
            res.status(500).json({ error: 'Failed to fetch stock price' });
      }
}

export const getStockNews = async (req, res) => {
    try {
      // Just fetch and return all news without filtering
      const { data } = await axios.get('https://finnhub.io/api/v1/company-news', {
        params: {
          symbol: req.query.symbol || 'AAPL', // Default to Apple
          token: process.env.FINNHUB_API_KEY,
          from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          to: new Date().toISOString().split('T')[0]
        }
      });
      
      res.json(data); // Return everything and let frontend handle it
      
    } catch (error) {
      console.error('News error:', error.message);
      res.status(500).json({ error: 'News fetch failed' });
    }
  };