import { connectToDatabase } from "../../lib/mongodb"

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." })
      return
    }

    const newMessage = {
      email,
      name,
      message,
    }

    try {
      let { db } = await connectToDatabase()
      const result = await db.collection("messages").insertOne(newMessage)
      newMessage._id = result.insertedId
    } catch (error) {
      res.status(500).json({ message: "Storing message failed!" })
      return
    }

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage })
  }
}

export default handler
