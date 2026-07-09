import multer from "multer";
import path from "path";
import fs from "fs";

const uploadPath = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, uploadPath);
    },

    filename: (_req, file, cb) => {
        const unique = Date.now();

        cb(
            null,
            unique + "-" + file.originalname.replace(/\s+/g, "-")
        );
    },
});

const fileFilter: multer.Options["fileFilter"] = (_req, file, cb) => {

    if (!file.mimetype.startsWith("video/")) {
        cb(new Error("Only video files are allowed."));
        return;
    }

    cb(null, true);
};

export default multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 500,
    },
});
