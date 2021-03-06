const express = require("express")
const router = express.Router()
const biodataController = require("../controller/biodataController")
console.log(`Step 7 biodatarouter.js`);
router.get("/", biodataController.index)
router.get("/create", biodataController.create)
router.post("/", biodataController.store)
router.get("/:id/edit", biodataController.edit)
router.put("/:id", biodataController.update)
router.delete("/:id", biodataController.destroy)
module.exports = router
