// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { config } from "@/config";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "GET") {
    res.status(308).send("Permanent Redirect!! Please calling in POST method ");
  } else if (method === "POST") {
    const { city } = req.query;
    if (!city) {
      return res.status(400).send("Value required");
    }

    if (city) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.weatherApikey}`
      );
      const data = await response.json();

      res.status(200).json(data);
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
