import bcrypt from 'bcryptjs';

export const hashpassword = async (password) => {//moh
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
}

export const passwordCheck = async (password, hashpassword) => {
  return await bcrypt.compare(password, hashpassword);
}

