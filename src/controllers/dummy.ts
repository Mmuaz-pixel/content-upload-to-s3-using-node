import { Request, RequestHandler, Response } from "express";
import { uploadToS3 } from "../utils/functions";
import config from "../config";

export const UploadPic: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    if (req.files && req.files.pic) {
      const result = await uploadToS3(req.files.pic, config.S3_BUCKET_NAME);

      return res.status(201).json({
        message: "success",
        data: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
