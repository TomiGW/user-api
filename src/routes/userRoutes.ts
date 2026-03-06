import { Router } from "express";
import { getUserById, createUser, updateUser, deleteUser } from "../queries/userQueries";

const router = Router();

router.get("/users/:id", getUserById);
router.post("/admin/users", createUser);
router.put("/admin/users/:id", updateUser);
router.delete("/admin/users/:id", deleteUser);

export default router;