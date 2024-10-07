import { z } from 'zod';

const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  password: z.string(),
});

export default UserSchema;
