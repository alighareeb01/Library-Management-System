import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  let { auth } = req.headers;

  let [beared, token] = auth.split(" ");

  let sig = "";
  switch (beared) {
    case "admin":
      sig = "admin";
      break;
    case "member":
      sig = "memebr";
      break;
    default:
      break;
  }
  let decode = jwt.verify(token, sig);
  req.user = decode;
  next();
};

export const bookAdminApproval = (role) => {
  console.log(req.body.role);
};
export const generateToken = (user) => {
  let sig = "";
  switch (user.role) {
    case "admin":
      sig = "admin";
      break;
    case "member":
      sig = "memebr";
      break;
    default:
      break;
  }
  let token = jwt.sign({ _id: user._id }, sig);
  return { token };
};
