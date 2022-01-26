export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Set-Cookie", [
    "a_name=LLLLLL; Max_Age=3600; HttpOnly, Secure", 
    "b_name=Hong; Max_Age=3600; HttpOnly, Secure"
  ]);
  res.setHeader(
    'CustomHeader', [
      'name=Gildong',
      'nickName=Good Boy'
    ],
  );
  res.json({ firstName: req.cookies.a_name, lastName: req.cookies.b_name });
};
