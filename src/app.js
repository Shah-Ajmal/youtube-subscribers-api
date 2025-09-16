import express from "express";
import Subscriber from "./models/subscribers.js";

const app = express();

/**
 * @swagger
 * /subscribers:
 *   get:
 *     summary: Get all subscribers
 *     responses:
 *       200:
 *         description: List of all subscribers
 */

//Route 1:GET / subscribers- Return all subscribers

app.get("/subscribers", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//Route 2:GET /subscribers/names- Return only name and subscribedChannel fields
/**
 * @swagger
 * /subscribers/names:
 *   get:
 *     summary: Get subscribers' names and subscribed channel
 *     responses:
 *       200:
 *         description: List of subscribers with only name and subscribedChannel
 */

app.get("/subscribers/names", async (req, res) => {
  try {
    const subscribers = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//Route 3: GET /subscribers/:id- Return subscriber by ID

/**
 * @swagger
 * /subscribers/{id}:
 *   get:
 *     summary: Get a subscriber by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subscriber ID
 *     responses:
 *       200:
 *         description: A single subscriber object
 *       400:
 *         description: Invalid ID or subscriber not found
 */

app.get("/subscribers/:id", async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (!subscriber) {
      return res
        .status(400)
        .json({ message: "subscriber not found with the given ID" });
    }
    res.json(subscriber);
  } catch (error) {
    //if the ID format is invalid, MongoDB will throw a castError

    res.status(400).json({ message: error.message });
  }
});

export default app;
