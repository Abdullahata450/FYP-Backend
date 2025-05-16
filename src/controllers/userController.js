import User from "../models/user.model.js";
import axios from "axios";
import express, { application } from "express";


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


export const PlaceOrder = async(req, res )=>{
    try{
        const rawBody = req.body.toString('utf8');
        const body = JSON.parse(rawBody);
        //
        const apikey = body.apikey || body.apiKey;
        const secretKey = body.secretKey || body.secretkey;
        const symbol = body.symbol;
        const qty = body.qty;
        const side = body.side;
        const type = body.type;
        const time_in_force = body.time_in_force;
        

        if(!apikey || !secretKey || !symbol || !qty || !side || !type || !time_in_force) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const response = await axios.post(
            'https://paper-api.alpaca.markets/v2/orders',
            {
                    symbol,
                    qty,
                    side,
                    type,
                    time_in_force 
            },
            {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json',
                    'APCA-API-KEY-ID': apikey,
                    'APCA-API-SECRET-KEY': secretKey
                }
            }
        )
        return res.status(200).json({
            status: 'OK',
            order: response.data
        }); 

    }
    catch(error){
        
        console.error("Error placing order:", error.response?.data || error.message);
        return res.status(error.response?.status || 500).json({
            success: false,
            message: error.response?.data?.message || "Failed to place order",
            details: error.response?.data || error.message
        });
    }
}

export const getAllOrders = async (req, res) => {
    try {
        const rawBody = req.body.toString('utf8');
        const body = JSON.parse(rawBody);

        const apikey = body.apikey || body.apiKey;
        const secretKey = body.secretKey || body.secretkey;

        if (!apikey || !secretKey) {
            return res.status(400).json({ error: 'API key and secret key are required' });
        }

        const response = await axios.get("https://paper-api.alpaca.markets/v2/orders?status=all",{
            headers: {
                'accept': 'application/json',
                'APCA-API-KEY-ID': apikey,
                'APCA-API-SECRET-KEY': secretKey
            }
        });

        res.status(200).json({
            status: 'OK',
            orders: response.data
        });
        
    } catch (error) {
        res.status(error.response?.status || 500).json({
            success: false,
            message: error.response?.data?.message || "Failed to fetch orders Data",
            details: error.message
        }); 
    }
}


export const getStockPosition = async (req, res) => {
    try {
        const rawBody = req.body.toString('utf8');
        const body = JSON.parse(rawBody);

        const apikey = body.apikey || body.apiKey;
        const secretKey = body.secretKey || body.secretkey;

        if(!apikey || !secretKey) {
            return res.status(400).json({ error: 'API key and secret key are required' });
        }
        const response = await axios.get('https://paper-api.alpaca.markets/v2/positions',{
            headers:{
                'accept': 'application/json',
                'APCA-API-KEY-ID': apikey,
                'APCA-API-SECRET-KEY': secretKey
            }
        })
       
        res.status(200).json(response.data);

    } catch (error) {
        console.error('Error fetching Alpaca positions:', error.message);
        res.status(500).json({ error: 'Failed to fetch positions' });   
    }
}

import yahooFinance from 'yahoo-finance2';
import dayjs from 'dayjs';

export const getStockData = async (req, res) => {
  try {
    const rawBody = req.body.toString('utf8');
    const body = JSON.parse(rawBody);
    const symbol = body.symbol || body.symbolName; // Use symbolName if provided
    if (!symbol) {
      return res.status(400).json({ error: 'Stock symbol is required.' });
    }

    // Get today's date and yesterday's date
    const today = dayjs().format('YYYY-MM-DD');
    const yesterday = dayjs().subtract(1, 'day').format('YYYY-MM-DD');

    // Get live quote
    const quote = await yahooFinance.quote(symbol); // live data

    // Get historical data for yesterday and today
    const history = await yahooFinance.historical(symbol, {
      period1: yesterday,
      period2: today,
      interval: '1d',
    });

    res.status(200).json({
      symbol,
      live: {
        price: quote.regularMarketPrice,
        open: quote.regularMarketOpen,
        high: quote.regularMarketDayHigh,
        low: quote.regularMarketDayLow,
        volume: quote.regularMarketVolume,
      },
      historical: history,
    });
  } catch (error) {
    console.error('Yahoo Finance fetch failed:', error);
    res.status(500).json({ error: 'Failed to fetch Yahoo Finance data', message: error.message });
  }
};





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