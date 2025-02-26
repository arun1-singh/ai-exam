// api/check-user.js
import { db } from '@/configs/db';
import { USER_TABLE } from '@/configs/schema';
import { eq } from 'drizzle-orm';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;

      // Check if the user exists in the database based on the provided email
      const result = await db.select().from(USER_TABLE)
        .where(eq(USER_TABLE.email, email));

      // If the user exists, respond with isNewUser: false
      if (result.length > 0) {
        return res.status(200).json({ isNewUser: false });
      }

      // If the user does not exist, respond with isNewUser: true
      return res.status(200).json({ isNewUser: true });

    } catch (error) {
      console.error('Error checking user:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // If the request method is not POST, respond with 405 Method Not Allowed
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
