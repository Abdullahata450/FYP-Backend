import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import { Webhook } from "svix";
import bodyParser from "body-parser";
import User from "./models/user.model.js";
import cors from "cors";


import { router as userRoutes } from "./routes/user.route.js";

dotenv.config({ path: "./env" });

const app = express();
app.use(cors({
    origin: 'http://localhost:5173' // Your frontend URL
}));
const port = process.env.PORT || 7000;

app.use(bodyParser.raw({ type: "application/json" })); // Use bodyParser only once
// here i am using bodyParser to parse the raw body of the request
// so that i can use it in the webhook verification process
// In controller api code first convert req.body to string due ti is in raw format where i need data in json() key value pair format

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json())
app.use("/api", userRoutes); 

connectDB();




// Webhook route
app.post("/api/webhooks", async (req, res) => {
    console.log("Received request at /api/webhooks");

    const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET_KEY;
    if (!SIGNING_SECRET) {
        console.error("Error: Please add SIGNING_SECRET from Clerk Dashboard to .env");
        return res.status(500).json({ success: false, message: "Internal server error" });
    }

    const wh = new Webhook(SIGNING_SECRET);
    const headers = req.headers;
    const payload = req.body;

    const svix_id = headers["svix-id"];
    const svix_timestamp = headers["svix-timestamp"];
    const svix_signature = headers["svix-signature"];

    if (!svix_id || !svix_timestamp || !svix_signature) {
        console.error("Error: Missing svix headers");
        return res.status(400).json({ success: false, message: "Missing svix headers" });
    }

    let evt;
    try {
        evt = wh.verify(payload.toString(), {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        });
    } catch (err) {
        console.error("Error: Could not verify webhook:", err.message);
        return res.status(400).json({ success: false, message: err.message });
    }

    const { id, email_addresses, first_name, last_name } = evt.data;
    const eventType = evt.type;

    const email = email_addresses?.[0]?.email_address || null; // Get first email if available

    try {
        if (eventType === "user.created" || eventType === "user.updated") {
            let user = await User.findOne({ clerkUserId: id });

            if (user) {
                // If user exists, update info
                user.firstName = first_name || user.firstName;
                user.lastName = last_name || user.lastName;
                user.email = email || user.email;
                await user.save();
                console.log("User updated:", user);
            } else {
                // If user doesn't exist, create a new one
                user = new User({
                    clerkUserId: id,
                    firstName: first_name,
                    lastName: last_name,
                    email: email,
                });
                await user.save();
                console.log("New user created:", user);
            }
        }

        return res.status(200).json({ success: true, message: "Webhook received" });
    } catch (error) {
        console.error("Error saving user:", error);
        return res.status(500).json({ success: false, message: "Database error" });
    }
});

// app.use("/", homeroute);
