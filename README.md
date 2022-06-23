<h1>Hash-Identifier</h1>

**How to use the module :**

```js
const hash=require("./index.js");
console.log(hash.identifier("0x49a57f66bd3d5ba6abda5579c264a0e4"))
//output: ["md5($username.md5($pass).$salt)"]
```