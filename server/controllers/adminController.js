import jwt from "jsonwebtoken";

const adminLogin = async (req, res) => {
    try {
      const { user, password } = req.body;
      if (
        user === process.env.ADMIN_USER &&
        password === process.env.ADMIN_PASSWORD
      ) {
        const token = jwt.sign(user + password, process.env.JWT_SECRET);
        res.json({ success: true, token });
      } else {
        res.json({ success: false, message: "Invalid Credentials" });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };

  export { adminLogin };