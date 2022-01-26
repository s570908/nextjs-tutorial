export default (req, res) => {
  res.statusCode = 200;
  // res.json({ name: null });
  if (req.method === "POST") {
    res.setHeader("Set-Cookie", [
      "a_name=GilDong; Max_Age=3600; HttpOnly, Secure", 
      "b_name=Hong; Max_Age=3600; HttpOnly, Secure"
    ]);
    res.setHeader(
      'CustomHeader', [
        'name=Gildong',
        'nickName=Good Boy'
      ],
    );
    res.json({ message: "ok" });
  }
};
