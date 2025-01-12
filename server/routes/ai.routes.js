import express from "express";
import axios from "axios";

const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({ message: "Hello from Stylife" });
})

router.post("/", async (req, res) => {
    const { prompt } = req.body;
    const apiKey = process.env.RAPID_API_KEY;

    const options = {
        method: 'POST',
        url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
            prompt: prompt,
            width: 512,
            height: 512,
            hr_scale: 1
        }
      };
           
      try {
        const response = await axios.request(options);
        const image = response.data;

        res.json({ photo: image });
        console.log(imageUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
});

export default router;