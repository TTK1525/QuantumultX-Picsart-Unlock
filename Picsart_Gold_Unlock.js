/*
QuantumultX Script - Unlock Picsart Gold 27.3.1
Tailor riêng cho bạn
*/

let obj = JSON.parse($response.body);

// Unlock Gold Membership
obj.subscription = {
  "valid": true,
  "reason": "active",
  "product": {
    "sku": "gold_yearly",
    "platform": "ios"
  },
  "features": [
    "no_ads",
    "premium_content",
    "gold_tools",
    "gold_templates"
  ],
  "expires_at": "2099-12-31T23:59:59Z"
};

// Optional: Unlock thêm gold user tag nếu có
if (obj.hasOwnProperty('user')) {
  obj.user.is_gold = true;
}

$done({ body: JSON.stringify(obj) });