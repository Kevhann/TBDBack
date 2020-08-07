/// <reference types="mongoose" />
declare module "utils/config" {
    const PORT: string;
    let MONGODB_URI: string;
    export { MONGODB_URI };
    export { PORT };
}
declare module "models/test" {
    import mongoose from "mongoose";
    export const Test: mongoose.Model<mongoose.Document, {}>;
}
declare module "index" { }
