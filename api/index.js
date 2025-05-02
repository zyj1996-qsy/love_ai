const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const ACCESS_TOKEN = "24.7d9e24409c63404d606f23e3657f6e1e.2592000.1748789590.282335-118734949";

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  try {
    const result = await fetch("https://aip.baidubce.com/rpc/2.0/ai_custom/v1/chat/completions?access_token=" + ACCESS_TOKEN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const data = await result.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "代理请求失败", details: err.message });
  }
};
